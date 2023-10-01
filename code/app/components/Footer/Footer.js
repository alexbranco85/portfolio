"use client"
import { Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { useTranslation } from "react-i18next"

const Footer = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('i18', i18n)
  }, [i18n])

  return (
    <Grid container sx={{ backgroundColor: '#000', position: 'absolute', bottom: 0, zIndex: 0, px: 5, pt: 1 }}>
      <Grid item sm={6}>
        <Typography sx={{fontSize: '13px', color: '#858585'}}><span onClick={() => i18n.changeLanguage('en')}>ENGLISH</span> | <span onClick={() => i18n.changeLanguage('ptBR')}>PORTUGUÊS</span></Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography sx={{fontSize: '13px', color: '#858585'}} textAlign='right'>&copy; 2023 Alex Branco</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer