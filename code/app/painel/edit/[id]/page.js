"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Image } from "@mui/icons-material";
import { Grid, Box, Button, Typography, Divider } from "@mui/material"
import { PanelMenu } from "../../../components/painel/panelMenu";
import Dropzone from "react-dropzone";
import backendApi from "../../../api/api";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

const { InputText } = require("../../../components/Fields/InputText")
const { SelectField } = require("../../../components/Fields/SelectField")

const InsertWork = () => {

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [featuredImage, setFeaturedImage] = useState([]);
  const [workEdit, setWorkEdit] = useState();
  const [showImages, setShowImages] = useState([]);

  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "work_title": "",
      "work_description": "",
      "category": []
    }
  });

  const getWork = async () => {
    const configPath = pathname.split("/");
    const id_work = configPath[configPath.indexOf("edit") + 1];

    await fetch(`${backendApi}work/${id_work}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('data', data)
        setWorkEdit(data.data);
        setShowImages(data.data.image);
      })
  }

  const onDropFeatured = (file) => {
    setFeaturedImage(file);
    const temporaryURL = file.map(item => (
      {
        ...item,
        tempURL: URL.createObjectURL(item),
        featured: 1
      }
    ))
    setDataImages((state) => [...state, ...temporaryURL]);
  }

  const onDrop = (files) => {
    setImages((state) => [...state, ...files]);
    const temporaryURL = files.map(item => (
      {
        ...item,
        tempURL: URL.createObjectURL(item)
      }
    ))
    setDataImages((state) => [...state, ...temporaryURL]);
  }

  const getCategories = async () => {
    await fetch(`${backendApi}allcategories`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCategories(data.data)
      })
  }

  const handleSetFieldsValues = () => {
    const categories = workEdit.work_has_category.map(item => item.id_category_fk);
    setValue('work_title', workEdit.work_title);
    setValue('category', categories);
    setValue('work_description', workEdit.work_description)
  }

  const removeImg = (item, index) => {
    setImages(state => state.filter((item, i) => i != index));
    setDataImages(state => state.filter((item, i) => i != index));
    URL.revokeObjectURL(item.tempURL);
  }

  const handleUploadImages = async (id) => {
    const formData = new FormData();

    for (let index = 0; index < images.length; index++) {
      formData.append('image' + index, images[index]);
    }
    if (featuredImage) {
      formData.append('featuredImage', featuredImage[0]);
    }
    formData.append('id_work', id)

    await fetch(`${backendApi}uploadimages`, {
      method: 'POST',
      body: formData,
      'Content-Type': 'multipart/form-data'
    }).then(async res => {
      console.log('res', res)
      let resJson = await res.json();
      if (resJson.success) {
        setImages([]);
        setFeaturedImage([]);
        setDataImages([]);
        reset();
        toast.success('Work saved!', {
          theme: 'dark',
          position: "top-center",
        })
      } else {
        toast.error('Error. Work not save!', {
          theme: 'dark',
          position: "top-center",
        })
      }
    }
    )
  }

  const handleSubmitForm = async (e) => {
    const formData = new FormData();
    const textData = getValues();

    for (const key in textData) {
      formData.append(key, textData[key]);
    }

    const response = await fetch(`${backendApi}savework`, {
      method: 'POST',
      body: JSON.stringify(textData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data && (images.length > 0 || featuredImage.length > 0)) {
          handleUploadImages(data.id_work);
        }
      })
  }

  useEffect(() => {
    getCategories();
    getWork();
  }, [])

  useEffect(() => {
    if (workEdit) {
      handleSetFieldsValues()
    }
  }, [workEdit])

  return (
    <form id="form-work" onSubmit={handleSubmit((e) => handleSubmitForm(e))}>
      <Grid container spacing={2} sx={{ px: 20, py: 5 }}>
        <Grid item sm={12} sx={{ pb: 5 }}>
          <PanelMenu />
        </Grid>
        <Grid item sm={12}>
          <InputText
            name="work_title"
            label="Title"
            variant="outlined"
            control={control}
            fullWidth />
        </Grid>
        <Grid item sm={12}>
          <InputText
            name="work_description"
            label="Description"
            multiline
            rows={5}
            variant="outlined"
            control={control}
            fullWidth />
        </Grid>
        <Grid item sm={12}>
          <SelectField
            name="category"
            label="Category"
            options={categories}
            optionContent="name"
            optionValue="id_category"
            variant="outlined"
            multiple
            control={control}
            fullWidth />
        </Grid>
        <Grid item sm={6}>
          <Dropzone onDrop={acceptedFiles => onDropFeatured(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <Box sx={{ border: '1px solid #ffffff40', borderRadius: 1, pt: 3, pb: 1, textAlign: 'center' }}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Typography><strong>Featured Image</strong></Typography>
                  <Image />
                  <Typography>Drop files to send</Typography>
                </div>
              </Box>
            )}
          </Dropzone>
        </Grid>
        <Grid item sm={6}>
          <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <Box sx={{ border: '1px solid #ffffff40', borderRadius: 1, pt: 3, pb: 1, textAlign: 'center' }}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Typography><strong>Other Images</strong></Typography>
                  <Image />
                  <Typography>Drop files to send</Typography>
                </div>
              </Box>
            )}
          </Dropzone>
        </Grid>
        {images.length > 0 && (
          <Grid item sm={12}>
            <Typography variant="h3">New Images</Typography>
            <Divider />
          </Grid>
        )}
        <Grid item sm={12}>
          <Grid container>
            {dataImages.length > 0 ? dataImages.map((item, index) => (
              <Grid item sm={2} key={index}>
                <img src={item.tempURL} width={'100%'} onClick={() => removeImg(item, index)} />
              </Grid>
            )) : ''}
          </Grid>
        </Grid>
        {showImages.length > 0 && (
          <Grid item sm={12}>
            <Typography variant="h3">Old Images</Typography>
            <Divider />
          </Grid>
        )}
        <Grid item sm={12}>
          {showImages.length > 0 && showImages.map((image, index) => (
            <Grid item sm={2} key={index}>
              <img src={`${backendApi}images/${image.name}`} width={'100%'} onClick={() => removeImg(item, index)} />
              <Button variant="outlined" fullWidth size="small">Remove</Button>
            </Grid>
          ))}
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth type="submit">Salvar</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default InsertWork;