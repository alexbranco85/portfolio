'use client'
import { InputText } from "../components/Fields/InputText";
import { Alert, Button, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {

  const [loginErrors, setLoginErrors] = useState(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "login": "",
      "password": "",
    }
  });

  const handleSubmitForm = async (e) => {
    const result = await signIn('credentials', {
      login: getValues('login'),
      password: getValues('password'),
      redirect: false,
    })

    if (result?.error) {
      console.error(result);
      return
    }

    router.replace('/painel');
  }

  return (
    <form id="form-work" onSubmit={handleSubmit((e) => handleSubmitForm(e))}>
      <Grid container spacing={2} sx={{ px: 20, py: 5 }}>
        <Grid item sm={12}>
          {loginErrors && (<Alert severity='error'>{loginErrors}</Alert>)}
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h2">Faça seu Login</Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h3">Digite seu usuário e senha</Typography>
        </Grid>
        <Grid item sm={12}>
          <Divider />
        </Grid>
        <Grid item sm={12}>
          <InputText
            name="login"
            label="Login"
            variant="outlined"
            control={control}
            fullWidth />
        </Grid>
        <Grid item sm={12}>
          <InputText
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            control={control}
            fullWidth />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth type="submit">Login</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;