"use client"
import { useEffect, useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import backendApi from "../api/api";
import { PanelMenu } from "../components/painel/panelMenu";
import { AddCircleOutline, Check, Delete, Edit } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import DefaultLoading from "../components/Loading";

const PanelHome = () => {

  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);


  const router = useRouter();

  const getWork = async () => {
    await fetch(`${backendApi}allwork`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setWorks(data.data)
        setLoading(false);
      })
  }

  useEffect(() => {
    getWork();
  }, [])

  return (
    <DefaultLoading loading={loading}>
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
            onClick={() => router.replace('/painel/insert')}
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
          {works?.length > 0 && (
            works.map((item, index) => (
              <Grid container key={index} spacing={1} sx={{ alignItems: 'center', pt: 1 }}>
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
                    onClick={() => router.replace(`/painel/edit/${item.id_work}`)}
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
    </DefaultLoading>
  )
}

export default PanelHome;