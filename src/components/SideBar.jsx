import { Stack } from '@mui/system'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DataObjectIcon from '@mui/icons-material/DataObject';
{/* <button className='category-btn' style={{background: 'Home' === selectedCategory && '#FC1503', color: 'white'}} key={'Home'}> */}
// const selectedCategory = 'Home' ;

const SideBar = ( {selectedCategory,setSelectedCategory} ) => (
    
    <Stack direction="row" sx={{overflowY:'auto', height:{sx:'auto', md:'95%'}, flexDirection:{md:'column'} }}>
            
            <button className='category-btn' onClick={() => setSelectedCategory('Home')} style={{background: 'Home' === selectedCategory && '#FC1503', color: 'white'}} key={'Home'}>
                <span style={{color: 'Home' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><HomeIcon/></span>
                <span style={{opacity:  'Home' === selectedCategory ? '1' : '0.8'}}>Home</span>
            </button>

            {/* <button className='category-btn'  onClick={() => setSelectedCategory('PJ Explained')} style={{background: 'PJ Explained' === selectedCategory && '#FC1503', color: 'white'}} key={'PJ Explained'}>
                <span  style={{color: 'PJ Explained' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><BlurOnIcon /></span>
                <span style={{opacity:  'PJ Explained' === selectedCategory ? '1' : '0.8'}}>PJ Explained</span>
            </button> 

            <button className='category-btn'  onClick={() => setSelectedCategory('Coding')} style={{background: 'Coding' === selectedCategory && '#FC1503', color: 'white'}} key={'Coding'}>
                <span  style={{color: 'Coding' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><CodeIcon /></span>
                <span style={{opacity:  'Coding' === selectedCategory ? '1' : '0.8'}}>Coding</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('React JS')} style={{background: 'React JS' === selectedCategory && '#FC1503', color: 'white'}} key={'React JS'}>
                <span  style={{color: 'React JS' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><JavascriptIcon /></span>
                <span style={{opacity:  'React JS' === selectedCategory ? '1' : '0.8'}}>React JS</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Next JS')} style={{background: 'Next JS' === selectedCategory && '#FC1503', color: 'white'}} key={'Next JS'}>
                <span  style={{color: 'Next JS' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><DataObjectIcon /></span>
                <span style={{opacity:  'Next JS' === selectedCategory ? '1' : '0.8'}}>Next JS</span> */}
            {/* </button> */}

            <button className='category-btn' onClick={() => setSelectedCategory('Music')} style={{background: 'Music' === selectedCategory && '#FC1503', color: 'white'}} key={'Music'}>
                <span  style={{color: 'Music' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><MusicNoteIcon /></span>
                <span style={{opacity:  'Music' === selectedCategory ? '1' : '0.8'}}>Music</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Education')} style={{background: 'Education' === selectedCategory && '#FC1503', color: 'white'}} key={'Education'}>
                <span  style={{color: 'Education' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><SchoolIcon /></span>
                <span style={{opacity:  'Education' === selectedCategory ? '1' : '0.8'}}>Education</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Podcast')} style={{background: 'Podcast' === selectedCategory && '#FC1503', color: 'white'}} key={'Podcast'}>
                <span  style={{color: 'Podcast' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><GraphicEqIcon /></span>
                <span style={{opacity:  'Podcast' === selectedCategory ? '1' : '0.8'}}>Podcast</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Movie')} style={{background: 'Movie' === selectedCategory && '#FC1503', color: 'white'}} key={'Movie'}>
                <span  style={{color: 'Movie' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><OndemandVideoIcon /></span>
                <span style={{opacity:  'Movie' === selectedCategory ? '1' : '0.8'}}>Movie</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Gaming')} style={{background: 'Gaming' === selectedCategory && '#FC1503', color: 'white'}} key={'Gaming'}>
                <span  style={{color: 'Gaming' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><SportsEsportsIcon /></span>
                <span style={{opacity:  'Gaming' === selectedCategory ? '1' : '0.8'}}>Gaming</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Live')} style={{background: 'Live' === selectedCategory && '#FC1503', color: 'white'}} key={'Live'}>
                <span  style={{color: 'Live' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><LiveTvIcon /></span>
                <span style={{opacity:  'Live' === selectedCategory ? '1' : '0.8'}}>Live</span>

            </button><button className='category-btn' onClick={() => setSelectedCategory('Sport')} style={{background: 'Sport' === selectedCategory && '#FC1503', color: 'white'}} key={'Sport'}>
                <span  style={{color: 'Sport' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}> <SportsBaseballIcon /></span>
                <span style={{opacity:  'Sport' === selectedCategory ? '1' : '0.8'}}>Sport</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Fashion')} style={{background: 'Fashion' === selectedCategory && '#FC1503', color: 'white'}} key={'Fashion'}>
                <span  style={{color: 'Fashion' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><CheckroomIcon /></span>
                <span style={{opacity:  'Fashion' === selectedCategory ? '1' : '0.8'}}>Fashion</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Beauty')} style={{background: 'Beauty' === selectedCategory && '#FC1503', color: 'white'}} key={'Beauty'}>
                <span  style={{color: 'Beauty' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><FaceRetouchingNaturalIcon /></span>
                <span style={{opacity:  'Beauty' === selectedCategory ? '1' : '0.8'}}>Beauty</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Comedy')} style={{background: 'Comedy' === selectedCategory && '#FC1503', color: 'white'}} key={'Comedy'}>
                <span  style={{color: 'Comedy' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><TheaterComedyIcon /></span>
                <span style={{opacity:  'Comedy' === selectedCategory ? '1' : '0.8'}}>Comedy</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Gym')} style={{background: 'Gym' === selectedCategory && '#FC1503', color: 'white'}} key={'Gym'}>
                <span  style={{color: 'Gym' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><FitnessCenterIcon /></span>
                <span style={{opacity:  'Gym' === selectedCategory ? '1' : '0.8'}}>Gym</span>
            </button>

            <button className='category-btn' onClick={() => setSelectedCategory('Crypto')} style={{background: 'Crypto' === selectedCategory && '#FC1503', color: 'white'}} key={'Crypto'}>
                <span  style={{color: 'Crypto' === selectedCategory ? 'white' : 'red', marginRight: '15px'}}><DeveloperModeIcon /></span>
                <span style={{opacity:  'Crypto' === selectedCategory ? '1' : '0.8'}}>Crypto</span>
            </button>
        
    </Stack>
  )

export default SideBar
