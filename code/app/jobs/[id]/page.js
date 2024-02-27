"use client"
import { useRouter } from "next/navigation"
import backendApi from "../../api/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DefaultLoading from "../../components/Loading";
import { Router } from "next/router";
import { useTranslation } from "react-i18next";
import Carousel from "react-material-ui-carousel";

const { Typography, Grid, Divider, Button, Paper, Box } = require("@mui/material")

const JobSingle = () => {

  const [work, setWork] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [featuredImage, setFeatured] = useState([]);

  const router = useRouter();

  const pathname = usePathname();

  const { t } = useTranslation();

  const getWork = async () => {
    setLoading(true);
    const configPath = pathname.split("/");
    const id_work = configPath[configPath.indexOf("jobs") + 1];

    await fetch(`${backendApi}work/${id_work}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWork(data.data);
        const arrImages = data.data.image.filter(item => item.featured != 1);
        const arrFeatured = data.data.image.filter(item => item.featured == 1);
        const mapImages = arrImages.map(item => {
          return {
            ...item,
            url: `<img src="${item.name}" />`
          }
        })
        setFeatured(arrFeatured);
        setImages(mapImages);

      }).finally(() => setLoading(false))
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <DefaultLoading isLoading={loading}>
      <Grid container spacing={2} sx={{
        mt: 0,
        height: 'calc(100vh - 37.5px)',
        maxWidth: '1600px',
        mx: 'auto',
        pl: { xs: 6, sm: 10, md: 20, lg: 20 },
        pr: { xs: 6, sm: 10, md: 20, lg: 20 },
        py: 5,
        backgroundColor: '#1a1a1a',
        display: 'flex',
        alignContent: 'flex-start',
      }}>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2, pb: '20px' }}>

          <Grid item sm={12}>
            <Typography variant="h1" className="custom-subtitle" align="center">{t(work?.work_title)}</Typography>
          </Grid>

          <Grid container spacing={2}>

            <Grid item xs={12} sm={12} sx={{ display: 'flex', gap: '5px', justifyContent: 'center', mt: 2 }}>
              {work?.work_has_category.map((item, index) => (
                <Typography key={index} sx={{ border: '1px solid #F55307', color: '#F55307', p: 0.5, fontSize: '12px', marginBottom: 0 }}>{item.category.name}</Typography>
              ))}
            </Grid>

          </Grid>

          <Grid item xs={12} sm={12} sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', mt: 2 }}>
            <Typography variant="h2" className="custom-subtitle">{t("YEAR")}</Typography>
            <Typography variant="h2" className="custom-subtitle" sx={{ color: '#fff' }}>{work?.work_year}</Typography>
          </Grid>

          <Grid item sm={12} xs={12} sx={{ mt: 2 }}>
            <img src={`${backendApi}images/${images[0]?.name}`} style={{ width: '100%' }} />
          </Grid>

          <Grid item xs={12} sm={12} sx={{ mt: 4 }}>
            <Button onClick={() => router.replace('/jobs')} variant="outlined">{t('Back')}</Button>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ mt: 4 }}>
            <Typography variant="h2" className="custom-subtitle">{t("DESCRIPTION")}</Typography>
            <Typography sx={{ '& p': { marginBottom: 0, marginTop: 1 } }} dangerouslySetInnerHTML={{ __html: t(work?.work_description) }} />
          </Grid>

          <Grid item sm={12} xs={12} sx={{ mt: 2 }}>
            <img src={`${backendApi}images/${images[1]?.name}`} style={{ width: '100%' }} />
          </Grid>

          {work?.work_objective && (
            <>
              <Grid item xs={12} sm={12} sx={{ mt: 4 }}>
                <Typography variant="h2" className="custom-subtitle">{t("OBJECTIVES")}</Typography>
                <Typography sx={{ '& p': { marginBottom: 0, marginTop: 1 } }} dangerouslySetInnerHTML={{ __html: t(work?.work_objective) }} />
              </Grid>
            </>
          )}

            {images.map((img, index) => {
              if (index != 0 && index != 1) {
                return <Grid key={index} item sm={12} xs={12} sx={{ mt: 2 }}><img src={`${backendApi}images/${images[index]?.name}`} style={{ width: '100%' }} /></Grid>
              }
            })}
          

          <Grid item xs={12} sm={12} sx={{ mt: 4 }}>
            <Button onClick={() => router.replace('/jobs')} variant="outlined">{t('Back')}</Button>
          </Grid>
        </Grid>



        {/* {images?.length > 1 && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Carousel>
              {images.map((item, i) => (
                <img key={i} src={`${backendApi}images/${item.name}`} style={{ width: '100%' }} />
              ))}
            </Carousel>
          </Grid>
        )} */}

        {/* {images?.length == 1 && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={`${backendApi}images/${images[0]?.name}`} width={'100%'} />
          </Grid>
        )}

        {!images?.length && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={`${backendApi}images/${featuredImage[0]?.name}`} width={'100%'} />
          </Grid>
        )} */}

      </Grid>
    </DefaultLoading >
  )
}

export default JobSingle;