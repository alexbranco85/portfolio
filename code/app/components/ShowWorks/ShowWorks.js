"use client"

import { useEffect, useState } from "react";
import backendApi from "../../api/api";
import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
        minHeight: '100%',
        backgroundColor: '#1a1a1a'
      }}>
        {/* <Grid container spacing={0}> */}
        {/* <Grid container sx={{ cursor: 'pointer', pl: '20px', }}> */}
        {works?.length > 0 && works.map((item, index) =>
          <Grid item lg={3} md={6} sm={6} xs={12} key={index} onClick={() => router.replace(`/jobs/${item.id_work}`)} sx={{ cursor: 'pointer', backgroundColor: '#000' }}>
            <Grid container spacing={0}>
              <Grid item sm={12}>
                <img className={'workImg'} src={handleFeaturedImage(item)} width={'100%'} />
                <Box sx={{ display: 'flex', gap: 1, position: 'absolute', px: '20px', mt: '-35px' }}>
                  {item.work_has_category.map((item, index) => (
                    <Typography key={index} sx={{ backgroundColor: '#F55307', p: 0.5, fontSize: '11px', marginBottom: 0 }}>{item.category.name}</Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item sm={12} xs={12} sx={{ py: '10px', px: '20px' }}>
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