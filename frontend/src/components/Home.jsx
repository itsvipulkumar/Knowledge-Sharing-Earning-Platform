import react from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Index from './StackOverflow/Index';
import Welcome from './Welcome';
import Footer from './Footer';
import EastIcon from '@mui/icons-material/East';
const Home = () => {
    return (
        <>
            <div className="home_section">
                <div className="home_first">
                    <div className="ask_box">
                        <SearchIcon className='s_icon' />
                        <TextField className='input' inputProps={{ style: { fontSize: 16 } }} InputLabelProps={{ style: { fontSize: 14 } }} id="outlined-basic" label="Search or Patse the Problem" variant="outlined" />
                    </div>
                    <div className='web_tag'>
                        <a href='#getStarted' ><button className='explore_btn' variant="contained">Get Started <i class="fas fa-long-arrow-alt-right"></i></button></a>
                    </div>
                    {/* <div className="getstarted">
                    <a href="#getStarted"><button className='getBtn'>Get Started! <EastIcon/></button> </a>
                </div> */}
                </div>

                <div id='getStarted' className="index">
                    <Index />
                </div>
            </div>
            <Footer />

        </>
    )
}
export default Home;