const { LinearProgress, Grid } = require("@mui/material")

const DefaultLoading = (props) => {

  const {
    children,
    isLoading
  } = props;

  return (
    <>
      {isLoading ? (
        <Grid container spacing={4} sx={{ px: 20, py: 5 }}>
          <Grid item sm={12}>
            <LinearProgress />
          </Grid>
        </Grid>) : children}
    </>
  )
}

export default DefaultLoading;