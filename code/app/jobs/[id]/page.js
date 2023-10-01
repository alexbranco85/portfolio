"use client"
import { useRouter } from "next/navigation"
import backendApi from "../../api/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DefaultLoading from "../../components/Loading";

const { Typography, Grid, Divider } = require("@mui/material")

const JobSingle = () => {

  const [work, setWork] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const pathname = usePathname();

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
        console.log('arrImages', arrImages)
        setImages(arrImages);
      }).finally(() => setLoading(false))
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <DefaultLoading isLoading={loading}>
      <Grid container spacing={4} sx={{ px: 20, py: 5 }}>
        <Grid item sm={12}>
          <Typography variant="subtitle1">{work?.work_title}</Typography>
          <Divider />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Typography sx={{'& p': {marginBottom: 0, marginTop: 1}}} dangerouslySetInnerHTML={{__html: work?.work_description}} />
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Grid container spacing={0}>
            {images.map(item => (
              <Grid sm={3} xs={12}>
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