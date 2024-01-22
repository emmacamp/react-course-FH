import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
// import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'>JournalPage</Typography>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ipsam sapiente eum laborum fugiat nam cupiditate ullam repellendus alias dignissimos doloremque itaque deleniti dolores dolor minus beatae ipsa, veritatis id?</p> */}
      {/* <NoteView /> */}
      <NothingSelectedView />

      <IconButton
        size='large'
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50,
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main', opacity: '0.9',
          },
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}
