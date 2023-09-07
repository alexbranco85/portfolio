import { InputText } from "@/components/Fields/InputText";
import { SelectField } from "@/components/Fields/SelectField";
import api from "@/services/api";
import { Image } from "@mui/icons-material";
import { Box, Button, Container, Grid, Input, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";

const Login = () => {

  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [dataImages, setDataImages] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "work_title": "",
      "work_description": "",
      "category": []
    }
  });

  const getWork = async () => {
    await fetch(`${api}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)
      })
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
    await fetch(`${api}allcategories`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCategories(data.data)
      })
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

    formData.append('id_work', id)

    const response = await fetch(`${api}uploadimages`, {
      method: 'POST',
      body: formData,
      'Content-Type': 'multipart/form-data'
    })
    .then(res => console.log('RES', res))
  }

  const handleSubmitForm = async (e) => {
    const formData = new FormData();
    const textData = getValues();

    for (const key in textData) {
      formData.append(key, textData[key]);
    }

    const response = await fetch(`${api}savework`, {
      method: 'POST',
      body: JSON.stringify(textData), // Envie os dados como JSON
      headers: {
        'Content-Type': 'application/json', // Defina o tipo de conteúdo como JSON
      },
    })
      .then(response => response.json())
      .then(data => {
        if(data && images.length > 0){
          handleUploadImages(data.id_work);
        }
      })
  }

  useEffect(() => {
    getWork();
    getCategories();
  }, [])

  return (
    <form id="form-work" onSubmit={handleSubmit((e) => handleSubmitForm(e))}>
      <Grid container spacing={2} sx={{ p: 15 }}>
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
        <Grid item sm={12}>
          <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <Box sx={{ border: '1px solid #ffffff40', borderRadius: 1, pt: 3, pb: 1, textAlign: 'center' }}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Image />
                  <Typography>Arraste ou clique para selecionar as Imagens que deseja enviar</Typography>
                </div>
              </Box>
            )}
          </Dropzone>
        </Grid>
        <Grid item sm={12}>
          <Grid container>
            {dataImages.length > 0 ? dataImages.map((item, index) => (
              <Grid item sm={2}>
                <img src={item.tempURL} width={'100%'} onClick={() => removeImg(item, index)} />
              </Grid>
            )) : ''}
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth type="submit">Enviar</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Login;