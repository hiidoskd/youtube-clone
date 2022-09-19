import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'

const Navbar = () => (
  <Stack 
    direction='row' 
    align-items='center' 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between', alignItems: 'center'}}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='logo' height={45}/>
    </Link>
    <Searchbar />
  </Stack>
)

export default Navbar