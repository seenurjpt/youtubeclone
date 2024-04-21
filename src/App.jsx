import { Box } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from "./components";
import E404 from "./components/404";

const App = () => {
  return (
    <Router>
      <Box>
        <Routes path="/">
          <Route path="" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
