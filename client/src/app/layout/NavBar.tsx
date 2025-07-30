import Group from '@mui/icons-material/Group'
import { Box, AppBar, Toolbar, Container, MenuItem, Typography, Button } from '@mui/material'

export default function NavBar() {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #20a7ac 89%)'

      }}>
        <Container maxWidth='xl'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <MenuItem sx={{display: 'flex', gap: 2}}>
                        <Group fontSize="large" />
                        <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <MenuItem sx={{
                        fontSize: '1.2rem', textTransform: 'uppercase', fontWeihgt: 'bold'
                    }}>
                        Activities
                    </MenuItem>
                   <MenuItem sx={{
                        fontSize: '1.2rem', textTransform: 'uppercase', fontWeihgt: 'bold'
                    }}>
                        About
                    </MenuItem>
                   <MenuItem sx={{
                        fontSize: '1.2rem', textTransform: 'uppercase', fontWeihgt: 'bold'
                    }}>
                        Contact
                    </MenuItem>
                </Box>
                <Button size="large" variant="contained" color="warning">Create Activity</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
