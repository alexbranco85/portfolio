import backendApi from "@/app/api/api";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {

  const [work, setWork] = useState();

  const getWork = async () => {
    const res = await fetch(`${backendApi}work/1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <Grid container sx={{ backgroundImage: 'url("bg-home.png")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', paddingLeft: 20, alignItems: 'center' }}>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <Typography variant="subtitle1">Hello,</Typography>
        <Typography variant="body1">Thank you for visiting my portfolio website. I am passionate about design and coding, and I'm excited to showcase my work and skills to you.</Typography>
        <Typography>I am a versatile professional with a strong background in both design and programming. My journey began with a love for creating visually appealing designs, and over the years, I've honed my coding skills to bring those designs to life. My mission is to create meaningful and innovative digital experiences that leave a lasting impression.</Typography>
      </Grid>

    </Grid>
  )
}

export default Home