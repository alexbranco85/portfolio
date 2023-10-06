"use client"
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as MaterialIcon from "@mui/icons-material";

const About = () => {

  const { t } = useTranslation();

  const boxStyle = { borderRadius: 50, backgroundColor: '#ffffff80', border: '2px solid #ffffff30', p: 0, pl: 0, transition: 'transform .2s', '&:hover': { transform: 'scale(1.2)', backgroundColor: '#ffffffcc', borderColor: '#F55307' } };

  return (
    <Grid container sx={{ alignContent: 'flex-start', height: 'calc(100vh - 50px)', px: { xs: 10, sm: 20 }, py: 10, alignItems: 'center' }}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography variant="body1">{t('I have a solid background in Advertising and Marketing, which provides me with a unique perspective when it comes to creating engaging and effective digital experiences.')}</Typography>
        <Typography variant="body1">{t('My skill set includes expertise in various areas, such as:')}</Typography>
      </Grid>
      <Grid container sx={{ pt: 4 }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h3">{t('Development')}:</Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/01.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/02.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/03.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/04.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/05.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/06.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/07.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/08.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/09.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/10.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/11.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h3" sx={{ mt: 4 }}>{t('Design & Prototype:')}</Typography>
          <Divider />
          <Grid container spacing={2} sx={{ pt: 2 }}>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/12.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/13.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/14.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/15.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <Box sx={{ ...boxStyle }}>
                <img src="images/16.png" style={{ width: '100%' }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} sx={{ pt: 4 }}>
        <Typography>{t("I am committed to delivering innovative and functional solutions that meet my clients needs and provide memorable experiences for users. If you are looking for a versatile and passionate professional, I am available to collaborate on challenging and inspiring projects. Let's create something amazing together!")}</Typography>
      </Grid>
    </Grid>
  )
}

export default About