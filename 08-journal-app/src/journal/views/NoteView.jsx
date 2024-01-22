import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>28 de Aug, 2024</Typography>
            </Grid>
            <Grid item>
                <Button sx={{}}>
                    <SaveOutlined sx={{mr: 1}}/>
                    <Typography sx={{ ml: 1 }}>Save</Typography>
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder="Ingrese un título"
                    sx={{ mb: 1, border: 'none' }}
                />
                <TextField
                    type='text'
                    variant='filled'
                    multiline
                    fullWidth
                    placeholder="Ingrese un título"
                    minRows={5}
                />

                {/* Image Galery */}
                <ImageGalery />
            </Grid>
        </Grid>
    )
}
