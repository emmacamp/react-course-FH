import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
   <AuthLayout title='Login'>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoFocus
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
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>Login</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              <GoogleIcon />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} to='/auth/register' sx={{ mt: 1 }}>Crear una cuenta</Link>
          </Grid>

        </Grid>
      </form>
   </AuthLayout>
  )
}
