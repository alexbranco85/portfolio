"use client"
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import backendApi from "./api/api";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

  useEffect(() => {
    console.log('t', t)

  }, [])

  return (
    <Grid container sx={{ backgroundImage: 'url("bg-home.png")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', paddingLeft: 20, alignItems: 'center' }}>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <Typography variant="subtitle1">{t('Hello,')}</Typography>
        <Typography variant="body1">Thank you for visiting my portfolio website. I am passionate about design and coding, and I'm excited to showcase my work and skills to you.</Typography>
        <Typography>I am a versatile professional with a strong background in both design and programming. My journey began with a love for creating visually appealing designs, and over the years, I've honed my coding skills to bring those designs to life. My mission is to create meaningful and innovative digital experiences that leave a lasting impression.</Typography>
      </Grid>

    </Grid>
  )
}

export default Home