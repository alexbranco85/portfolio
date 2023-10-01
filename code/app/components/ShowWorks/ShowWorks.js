"use client"

import { useEffect, useState } from "react";
import backendApi from "../../api/api";
import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const ShowWorks = () => {

  const [works, setWorks] = useState();

  const router = useRouter();

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
      <Grid container sx={{ cursor: 'pointer', pl: '20px', '& .categorias': { display: 'none' }, '& :hover .categorias': { display: 'flex' },'& :hover .workImg': {opacity: 0.1}}}>
        {works?.length > 0 && works.map(item =>
          <Grid item sm={3} onClick={() => router.replace(`/jobs/${item.id_work}`)} sx={{ position: 'relative' }}>
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
                  {item.work_has_category.map(item => (
                    <Typography sx={{ backgroundColor: '#F55307', p: 0.5, fontSize: '15px', marginBottom: 0}}>{item.category.name}</Typography>
                  ))}
                </Box>
                <img className={'workImg'} src={handleFeaturedImage(item)} width={'100%'} />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item sm={12} sx={{
                backgroundColor: '#000',
                padding: '20px',
                mt: '-5px'
              }}>
                <Typography sx={{ mb: 0 }}>{item.work_title}</Typography>
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