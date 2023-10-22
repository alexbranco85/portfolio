"use client"
import { Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

const Footer = () => {

  const { t, i18n } = useTranslation();

  return (
    <Grid container sx={{ backgroundColor: '#000', position: 'fixed', bottom: 0, zIndex: 0, px: 5, pt: 1 }}>
      <Grid item sm={6} xs={6}>
        <Typography sx={{fontSize: '13px' }}><span className="linksRodape" onClick={() => i18n.changeLanguage('en')}>ENGLISH</span> | <span className="linksRodape" onClick={() => i18n.changeLanguage('ptBR')}>PORTUGUÊS</span></Typography>
      </Grid>
      <Grid item sm={6} xs={6}>
        <Typography sx={{fontSize: '13px', color: '#858585', textAlign:'right'}} textAlign='right'>&copy; 2023 Alex Branco</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer