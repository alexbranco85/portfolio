import { InputText } from "@/components/Fields/InputText";
import api from "@/services/api";
import { Alert, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginVerify } from "@/utils/functions";

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
    const textData = getValues();
    const response = await fetch(`${api}login`, {
      method: 'POST',
      body: JSON.stringify(textData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.auth) {
          setLoginErrors(null);
          document.cookie = `auth=${data.token}; expires=${new Date(2100, 0, 1)}`

          alert('Login realizado!')
          router.push('/painel')
        } else {
          setLoginErrors('Login e/ou senha Inválidos');
        }
      })
  }

  const checkToken = async () => {
    let check = await LoginVerify();
    if(check){
      router.push('/painel');
    }
  }

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <form id="form-work" onSubmit={handleSubmit((e) => handleSubmitForm(e))}>
      <Grid container spacing={2} sx={{ p: 15 }}>
        <Grid item sm={12}>
          {loginErrors && (<Alert severity='error'>{loginErrors}</Alert>)}
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