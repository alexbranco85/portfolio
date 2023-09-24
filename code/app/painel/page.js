"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Divider, Grid, Typography } from "@mui/material";
import backendApi from "../api/api";
import { PanelMenu } from "../components/painel/panelMenu";
import { AddCircleOutline, Check, Delete, Edit } from "@mui/icons-material";

const PanelHome = () => {

  const [works, setWorks] = useState([]);
  const router = useRouter();

  const getWork = async () => {
    await fetch(`${backendApi}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)
      })
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <>
      <Grid container spacing={4} sx={{ px: 20, py: 5 }}>
        <Grid item sm={12}>
          <PanelMenu />
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h2">Olá! Seja bem vindo ao painel de controle.</Typography>
        </Grid>
        <Grid item sm={2}>
          <Button
            startIcon={<AddCircleOutline />}
            variant="outlined"
            fullWidth>
            Adicionar Novo
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h3">Lista de trabalhos cadastrados</Typography>
        </Grid>
        <Grid item sm={12}>
          <Divider />
        </Grid>
        <Grid item sm={12}>
          {works.length > 0 && (
            works.map((item) => (
              <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                <Grid item sm={8}>
                  <Typography variant="body2" sx={{ mt: 0 }}>{item.work_title}</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Button
                    startIcon={<Delete />}
                    variant="outlined"
                    size="small"
                    fullWidth>
                    Deletar
                  </Button>
                </Grid>
                <Grid item sm={2}>
                  <Button
                    startIcon={<Edit />}
                    variant="outlined"
                    size="small"
                    fullWidth>
                    Editar
                  </Button>
                </Grid>
                <Grid item sm={12}>
                  <Divider />
                </Grid>
              </Grid>
            )
            ))}
        </Grid>
      </Grid>
    </>
  )
}

export default PanelHome;