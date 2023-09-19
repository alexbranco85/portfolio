import { Button, Grid } from "@mui/material"
import Link from "next/link"
import { exitPanel } from "@/utils/functions"
import Cookies from "js-cookie"

export const PanelMenu = () => {

  const exitPanel = () => {
    Cookies.remove('auth', { path: '/painel' });
    console.log('cookie', Cookies.get('auth'))
    location.reload();
  }

  return (
    <Grid container spacing={4}>
      <Grid item sm={2}>
        <Button
          variant="contained"
          src=""
          fullWidth>
          Categories
        </Button>
      </Grid>
      <Grid item sm={2}>
        <Link href="./painel/insert">
          <Button variant="contained" fullWidth>Works</Button>
        </Link>
      </Grid>
      <Grid item sm={2}>
        <Button variant="contained" fullWidth onClick={() => exitPanel()}>Sair</Button>
      </Grid>
    </Grid>
  )
}