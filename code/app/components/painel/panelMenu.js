import { Button, Grid } from "@mui/material"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export const PanelMenu = () => {

  const router = useRouter();

  const exitPanel = async () => {
    await signOut({
      redirect: false
    })
    router.replace('/')
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
        <Link href="/painel/">
          <Button variant="contained" fullWidth>Works</Button>
        </Link>
      </Grid>
      <Grid item sm={2}>
        <Button variant="contained" fullWidth onClick={() => exitPanel()}>Sair</Button>
      </Grid>
    </Grid>
  )
}