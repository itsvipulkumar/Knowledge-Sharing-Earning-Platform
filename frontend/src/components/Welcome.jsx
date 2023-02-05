import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Question from './AddQuestion/Question';
import ContactsIcon from '@mui/icons-material/Contacts';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
const Welcome = () => {

  const handleClick = () => {
    window.open("/question");

  };
  return (
    <>
      <div className="lowerHeader">
        <Box sx={{ width: 500 }}>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels >
              <div className="bottom_links">
                <Link className='bottom_link_text' exact to="/" style={{ textDecoration: 'none' }} > <BottomNavigationAction icon={<HomeIcon sx={{ fontSize: 26, color:orange[500] }} />} /> <p>Home</p></Link>
                
              </div>
              <div className="bottom_links">
                <Link className='bottom_link_text' exact to="/question" style={{ textDecoration: 'none' }} > <BottomNavigationAction icon={<AddIcon sx={{ fontSize: 26,color:orange[500] }}  />} />  <p>Ask</p> </Link>
               
              </div>
              <div className="bottom_links">
                <Link className='bottom_link_text' exact to="/aboutus" style={{ textDecoration: 'none' }} > <BottomNavigationAction icon={<InfoIcon sx={{ fontSize: 26,color:orange[500] }} />} /><p>More</p></Link>
                
              </div>
              <div className="bottom_links">
                <Link className='bottom_link_text' exact to="/contactus" style={{ textDecoration: 'none' }} > <BottomNavigationAction icon={<ContactsIcon sx={{ fontSize: 26 ,color:orange[500]}} />} /><p>Contact</p></Link>
                
              </div>
             
            
            </BottomNavigation>
          </Paper>
        </Box>
      </div>
    </>

  );
}


export default Welcome