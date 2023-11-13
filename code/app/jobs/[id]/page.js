"use client"
import { useRouter } from "next/navigation"
import backendApi from "../../api/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DefaultLoading from "../../components/Loading";
import { Router } from "next/router";
import { useTranslation } from "react-i18next";
import Carousel from "react-material-ui-carousel";

const { Typography, Grid, Divider, Button, Paper } = require("@mui/material")

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

  useEffect(() => {
    console.log('images', images)
  }, [images])

  return (
    <DefaultLoading isLoading={loading}>
      <Grid container spacing={2} sx={{
        minHeight: '100%',
        pl: { xs: 6, sm: 10, md: 20, lg: 20 },
        pr: { xs: 6, sm: 10, md: 20, lg: 20 },
        py: 5,
        backgroundColor: '#1a1a1a'
      }}>
        <Grid item sm={12}>
          <Typography variant="subtitle1" sx={{ fontSize: '36px' }}>{t(work?.work_title)}</Typography>
          <Divider />
        </Grid>


        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <Button onClick={() => router.replace('/jobs')} variant="outlined">{t('Back')}</Button>
          <Typography sx={{ '& p': { marginBottom: 0, marginTop: 1 } }} dangerouslySetInnerHTML={{ __html: t(work?.work_description) }} />
        </Grid>


        {images?.length > 1 && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Carousel>
              {images.map((item, i) => (
                <img key={i} src={`${backendApi}images/${item.name}`} style={{ width: '100%' }} />
              ))}
            </Carousel>
          </Grid>
        )}

        {/* {images?.length > 1 && (
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Grid container spacing={0}>
              {images.map((item, index) => (
                <Grid key={index} lg={3} md={4} sm={6} xs={12}>
                  <img src={`${backendApi}images/${item.name}`} width={'100%'} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )} */}

        {images?.length == 1 && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={`${backendApi}images/${images[0]?.name}`} width={'100%'} />
          </Grid>
        )}

        {!images?.length && (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={`${backendApi}images/${featuredImage[0]?.name}`} width={'100%'} />
          </Grid>
        )}

      </Grid>
    </DefaultLoading >
  )
}

export default JobSingle;