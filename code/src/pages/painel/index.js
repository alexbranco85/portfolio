import { PanelMenu } from "@/components/painel/panelMenu";
import api from "@/services/api";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const Login = () => {

  const [works, setWorks] = useState([]);

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
    getWork()
  }, [])

  useEffect(() => {
    console.log('works', works)
  }, [works])

  return (
    <Grid container sm={12} sx={{ backgroundImage: 'url("bg-home.png")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', paddingLeft: 20, alignItems: 'center' }}>
      <PanelMenu />

      <Grid item sm={12}>
        {works.length > 0 && (
          works.map((item) => (
            <Typography>{item.work_title}</Typography>
          )
          ))}
      </Grid>

      <Grid item sm={12}>
        <Typography>Bem-vindo!</Typography>
      </Grid>
    </Grid>
  )
}

export default Login;