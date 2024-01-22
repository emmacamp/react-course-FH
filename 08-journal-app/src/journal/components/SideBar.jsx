import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material";


export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box sx={{ width: drawerWidth, flexShrink: 0 }}>
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'none', md: 'block' },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap color='inherit'>
                        Emmanuel Popa
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['January', 'February', 'March', 'April'].map((text) => (
                            <ListItem button key={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container direction='column'>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Nihil culpa quidem minus.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
