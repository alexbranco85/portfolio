"use client"
import { useRouter } from "next/navigation"
import backendApi from "../../api/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DefaultLoading from "../../components/Loading";
import { Router } from "next/router";
import { useTranslation } from "react-i18next";

const { Typography, Grid, Divider, Button } = require("@mui/material")

const JobSingle = () => {

  const [work, setWork] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

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
        setImages(arrImages);
      }).finally(() => setLoading(false))
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <DefaultLoading isLoading={loading}>
      <Grid container spacing={4} sx={{ px: { xs: 10, sm: 10, md: 20, lg: 20 }, position: 'fixed',
    overflowX: 'auto', py: 5, cursor: 'pointer', backgroundColor: 'rgb(20, 20, 20)', height: 'calc(100vh - 37.5px)', mt: 0 }}>
        <Grid item sm={12}>
          <Typography variant="subtitle1">{t(work?.work_title)}</Typography>
          <Divider />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Button onClick={() => router.replace('/jobs')} variant="outlined">{t('Back')}</Button>
          <Typography sx={{ '& p': { marginBottom: 0, marginTop: 1 } }} dangerouslySetInnerHTML={{ __html: t(work?.work_description) }} />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <Grid container spacing={0}>
            {images.map((item, index) => (
              <Grid key={index} lg={3} md={4} sm={6} xs={12}>
                <img src={`${backendApi}images/${item.name}`} width={'100%'} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </DefaultLoading>
  )
}

export default JobSingle;