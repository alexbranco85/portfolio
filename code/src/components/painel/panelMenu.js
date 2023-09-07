import { Button, Grid } from "@mui/material"
import Link from "next/link"

export const PanelMenu = () => {
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
    </Grid>
  )
}