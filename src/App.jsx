import { Box } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed} from './components';


const App = () => (
      <Router>
            <Box sx={{backgroundColor : '#000' }}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element = {<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />}  />
                    <Route path="/channel/:id" element={<ChannelDetail />}  />
                    <Route path="/search/:searchTerm" element={<SearchFeed />}  />
                </Routes>
            </Box>
      </Router>
    )

  export default App
