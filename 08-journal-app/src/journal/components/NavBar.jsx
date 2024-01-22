import { LogoutOutlined } from "@mui/icons-material"
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                display: 'flex', 
                paddingY: {sm: 1.5},
                flexDirection: 'row',
            }}
        >
            <Toolbar sx={{  display: { md: 'none' } }} style={{ width: 'fit-content' }} edge='start' >
                <IconButton color='inherit'>
                    <MenuOutlined />
                </IconButton>
            </Toolbar>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6'  color='inherit' sx={{ml:{sm: 3}}}>
                    Journal
                </Typography>
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </AppBar>

    )
}
