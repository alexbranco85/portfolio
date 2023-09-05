import { Grid, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: '#000', position: 'absolute', bottom: 0, zIndex: 0, px: 5, pt: 1 }}>
      <Grid item sm={6}>
        <Typography sx={{fontSize: '13px', color: '#858585'}}>ENGLISH | PORTUGUÊS</Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography sx={{fontSize: '13px', color: '#858585'}} textAlign='right'>&copy; 2023 Alex Branco</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer