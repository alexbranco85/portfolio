"use client"

import { useEffect, useState } from "react";
import backendApi from "../../api/api";
import { Box, Grid, Typography } from "@mui/material";

const ShowWorks = () => {

  const [works, setWorks] = useState();

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
    <Grid container sx={{ pl: '20px' }}>
      {works?.length > 0 && works.map(item =>
        <Grid item sm={4} sx={{ position: 'relative' }}>
          <img src={handleFeaturedImage(item)} width={'100%'} />
          <Box sx={{
            bottom: 0,
            position: 'absolute',
            backgroundColor: '#000',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{ mb: 0 }}>{item.work_title}</Typography>
          </Box>
        </Grid>
      )
      }
    </Grid >
  )
}

export default ShowWorks;