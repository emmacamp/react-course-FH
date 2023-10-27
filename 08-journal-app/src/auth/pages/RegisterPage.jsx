import { Link as RouterLink } from 'react-router-dom'
import { Grid, TextField, Button, Link, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              fullWidth
              id='fullname'
              label='Nombre completo'
              name='fullname'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              id='email'
              label='Email'
              name='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='password'
              label='Password'
              name='password'
              type='password'
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 0 }}>
          <Grid item xs={12} >
            <Button variant='contained' fullWidth>Registrarse</Button>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mt: 1, mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to='/auth/login' sx={{ mt: 1 }}>Ingresar</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
