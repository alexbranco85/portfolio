"use client"
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as MaterialIcon from "@mui/icons-material";
import Head from "next/head";

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Alex Branco | Porfólio</title>
        <meta name='description' content='Portfólio do desenvolvedor e designer Alex Branco.' />
      </Head>
      <Grid container sx={{ height: '100vh', px: { xs: 10, sm: 20 }, alignItems: 'center' }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="subtitle1">{t("Hello,")}</Typography>
          <Typography variant="body1">{t("Thank you for visiting my portfolio website. I am passionate about design and coding, and I'm excited to showcase my work and skills to you.")}</Typography>
          <Typography>{t("I am a versatile professional with a strong background in both design and programming. My journey began with a love for creating visually appealing designs, and over the years, I've honed my coding skills to bring those designs to life. My mission is to create meaningful and innovative digital experiences that leave a lasting impression.")}</Typography>
          <Typography sx={{ display: 'flex', gap: 2, fontSize: 50 }}>
            <a className="links" href="https://wa.me/5519996963414" target="_blank"><MaterialIcon.WhatsApp sx={{ fontSize: 40 }} /></a>
            <a className="links" href="https://github.com/alexbranco85" target="_blank"><MaterialIcon.GitHub sx={{ fontSize: 40 }} /></a>
            <a className="links" href="https://www.linkedin.com/in/alex-branco-08449b1b7/" target="_blank"><MaterialIcon.LinkedIn sx={{ fontSize: 40 }} /></a></Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Home