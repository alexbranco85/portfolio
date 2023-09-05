import api from "@/services/api";
import { Container, Grid, Input, TextField, Typography } from "@mui/material";
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
    <>
      <Grid container spacing={2} sx={{ p: 15 }}>
        <Grid item sm={12}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth />
        </Grid>
        <Grid item sm={12}>
          <TextField
            name="title"
            label="Description"
            multiline
            rows={5}
            variant="outlined"
            fullWidth />
        </Grid>

        <Grid item sm={12}>
          <Typography>Bem-vindo!</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Login;