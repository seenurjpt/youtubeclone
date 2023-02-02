import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () =>(
    <Stack
    direction='row' 
    alignItems='center' 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top:0, justifyContent: 'space-between'}}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{marginTop:'-7px'}}  src="https://i.postimg.cc/CLnq5Q6V/icons8-youtube-64.png" alt="Logo" height={45} />
        {/* <Typography variant='h5' fontWeight='bold' ml={3}  sx={{color:'white'}}>
            YouTube Clone
        </Typography> */}
        </Link>
        <SearchBar  />
    </Stack>
  )

export default Navbar

