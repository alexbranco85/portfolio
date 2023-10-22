"use client"

import { useEffect, useState } from "react";
import backendApi from "../../api/api";
import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const ShowWorks = () => {

  const [works, setWorks] = useState();

  const router = useRouter();

  const { t } = useTranslation();

  const getWork = async () => {
    await fetch(`${backendApi}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)
      })
  }

  const handleFeaturedImage = (item) => {
    let imageName = item.image.find(image => image.featured == 1);
    let route = `${backendApi}images/${imageName.name}`;
    return route;
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <>
      <Grid container sx={{
        backgroundColor: 'rgb(20, 20, 20)',
        height: '100%',
        maxHeight: 'calc(100vh - 37.5px)',
        position: 'fixed',
        overflowX: 'auto'
      }}>
        {/* <Grid container sx={{ cursor: 'pointer', pl: '20px', }}> */}
        {works?.length > 0 && works.map((item, index) =>
          <Grid item lg={3} md={6} sm={6} xs={12} key={index} onClick={() => router.replace(`/jobs/${item.id_work}`)} sx={{ position: 'relative', cursor: 'pointer' }}>
            <Grid container spacing={0}>
              <Grid item sm={12} alignItems={'center'} alignContent={'center'} justifyContent={'center'} display={'flex'}>
                <Box className='categorias' sx={{
                  position: 'absolute',
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 1,
                  zIndex: 1
                }}>
                  {item.work_has_category.map((item, index) => (
                    <Typography key={index} sx={{ backgroundColor: '#F55307', p: 0.5, fontSize: '15px', marginBottom: 0 }}>{item.category.name}</Typography>
                  ))}
                </Box>
                <img className={'workImg'} src={handleFeaturedImage(item)} width={'100%'} />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item sm={12} xs={12} sx={{
                backgroundColor: '#000',
                padding: '20px',
                mt: '-5px'
              }}>
                <Typography sx={{ mb: 0 }}>{t(item.work_title)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )
        }
      </Grid >
    </>
  )
}

export default ShowWorks;