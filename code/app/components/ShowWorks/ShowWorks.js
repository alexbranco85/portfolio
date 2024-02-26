"use client"

import { useEffect, useState } from "react";
import backendApi from "../../api/api";
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Close } from "@mui/icons-material";
import DefaultLoading from "../Loading";


const ShowWorks = () => {

  const [loading, setLoading] = useState(false);
  const [works, setWorks] = useState();
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);

  const router = useRouter();

  const { t } = useTranslation();

  const getWork = async () => {
    
    setLoading(true);

    await fetch(`${backendApi}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {

        setWorks(data.data)

        setTimeout(() => {
          setLoading(false);
        }, 1500);

      })
  }

  const getWorkFilter = async () => {

    setLoading(true);

    await fetch(`${backendApi}allwork`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filter: filter
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
  }

  const getCategories = async () => {
    await fetch(`${backendApi}allcategories`)
      .then(response => {
        return response.json();
      })
      .then(data => {

        const arr = data.data.map(item => ({
          ...item,
          filter: 0
        }))
        setCategories(arr);

      })
  }

  const handleClickFilter = async (idCategory) => {

    const arr = [...filter];

    const index = arr.indexOf(idCategory);
    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(idCategory);
    }

    setFilter(arr);

  }

  const handleFeaturedImage = (item) => {
    let imageName = item.image.find(image => image.featured == 1);
    let route = `${backendApi}images/${imageName?.name}`;
    return route;
  }

  useEffect(() => {
    getCategories();
    getWork();
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      getWorkFilter();
    } else {
      getWork();
    }
  }, [filter])

  return (
    
    <Grid container spacing={2} sx={{
      mt: 0,
      height: 'calc(100vh - 37.5px)',
      pl: { xs: 6, sm: 10, md: 20, lg: 20 },
      pr: { xs: 6, sm: 10, md: 20, lg: 20 },
      py: 5,
      display: 'flex',
      alignContent: 'flex-start'
    }}>

      <Grid item sm={12} xs={12} sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
        <Typography fontSize={'small'} sx={{ mb: 0 }}>{t("Filter by:")}</Typography>
        {categories?.length > 0 && categories.map((item, index) =>
          <Box
            sx={{
              border: filter.some(filter => filter == item.id_category) ? '1px solid #eeee00' : '1px solid #eee',
              p: 1,
              cursor: 'pointer',

            }}
            onClick={() => handleClickFilter(item.id_category)}
          >
            <Typography sx={{ m: 0, p: 0, display: 'flex', gap: 0.5, textWrap: 'nowrap', color: filter.some(filter => filter == item.id_category) ? '#eeee00' : '' }} fontSize={'small'}>
              {item.name}
              {filter.some(filter => filter == item.id_category) && (
                <Close fontSize="small" />
              )}
            </Typography>
          </Box>
        )}
      </Grid>

      <DefaultLoading isLoading={loading}>
        {works?.length > 0 && works.map((item, index) =>
          <Grid item lg={4} md={6} sm={6} xs={12} key={index} onClick={() => router.replace(`/jobs/${item.id_work}`)} sx={{ cursor: 'pointer' }}>
            <Grid container spacing={0}>
              <Grid item sm={12}>
                <img className={'workImg'} src={handleFeaturedImage(item)} width={'100%'} />
              </Grid>
              <Grid item sm={12} xs={12} sx={{ py: '10px' }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  {item.work_has_category.map((item, index) => (
                    <Typography key={index} className="custom-subtitle" sx={{ border: '1px solid #F55307', color: '#F55307', p: 0.5, fontSize: '12px', marginBottom: 0 }}>{item.category.name}</Typography>
                  ))}
                </Box>
                <Typography className="custom-subtitle" sx={{ mb: 0, fontSize: '18px' }}>{t(item.work_title)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </DefaultLoading>

    </Grid>
  )

  // return (
  //   <>
  //     <Grid container sx={{ minHeight: '100%', backgroundColor: '#1a1a1a', alignContent: 'flex-start', pb: { xs: 3, sm: 0, lg: 0, md: 0 }, pl:'20px' }}>
  //       {works?.length > 0 && works.map((item, index) =>
  //         <Grid item lg={3} md={6} sm={6} xs={12} key={index} onClick={() => router.replace(`/jobs/${item.id_work}`)} sx={{ cursor: 'pointer', backgroundColor: '#000' }}>
  //           <Grid container spacing={0}>
  //             <Grid item sm={12}>
  //               <img className={'workImg'} src={handleFeaturedImage(item)} width={'100%'} />
  //             </Grid>
  //             <Grid item sm={12} xs={12} sx={{ py: '10px', px: '20px' }}>
  //               <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
  //                 {item.work_has_category.map((item, index) => (
  //                   <Typography key={index} sx={{ backgroundColor: '#F55307', p: 0.5, fontSize: '11px', marginBottom: 0 }}>{item.category.name}</Typography>
  //                 ))}
  //               </Box>
  //               <Typography sx={{ mb: 0 }}>{t(item.work_title)}</Typography>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       )
  //       }
  //       <Grid item sm={12} xs={12} sx={{ display: { lg: 'none', md: 'none' }, my: 3, px: 2 }}>
  //         <Button variant="outlined" fullWidth href={"/contact/"}>Entre em contato!</Button>
  //       </Grid>
  //     </Grid >
  //   </>
  // )
}

export default ShowWorks;