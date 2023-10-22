"use client"
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as MaterialIcon from "@mui/icons-material";

const Home = () => {

  const { t } = useTranslation();

  return (
    <Grid container sx={{
      backgroundImage: 'url("bg-home.png")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 'calc(100vh - 37.5px)',
      pl: { xs: 6, sm: 10, md: 20, lg: 20 },
      pr: { xs: 6, sm: 10, md: 20, lg: 20 },
      py: 5,
      alignItems: 'center'
    }}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography sx={{ mb: 4 }} variant="subtitle1">{t("Contact me!")}</Typography>
        <Typography variant="h2" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}><MaterialIcon.WhatsApp /><a className="links" href="https://wa.me/5519996963414" target="_blank"> +55 (19) 99696.3414</a></Typography>
        <Typography variant="h2" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}><MaterialIcon.GitHub /><a className="links" href="https://github.com/alexbranco85" target="_blank"> /alexbranco85</a></Typography>
        <Typography variant="h2" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}><MaterialIcon.LinkedIn /><a className="links" href="https://www.linkedin.com/in/alex-branco-08449b1b7/" target="_blank"> /alex-branco-08449b1b7</a></Typography>
      </Grid>
    </Grid>
  )
}

export default Home