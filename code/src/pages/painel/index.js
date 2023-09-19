import { PanelMenu } from "@/components/painel/panelMenu";
import backendApi from "@/app/api/api";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { checkAuth } from "@/utils/functions";
import { useRouter } from "next/router";

const Login = () => {

  const [works, setWorks] = useState([]);
  const router = useRouter();

  const getWork = async () => {
    await fetch(`${api}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)
      })
  }

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <Grid container sx={{ backgroundImage: 'url("bg-home.png")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', paddingLeft: 20, alignItems: 'center' }}>
      <PanelMenu />

      <Grid item sm={12}>
        {works.length > 0 && (
          works.map((item) => (
            <Typography>{item.work_title}</Typography>
          )
          ))}
      </Grid>
    </Grid>
  )
}

export default Login;