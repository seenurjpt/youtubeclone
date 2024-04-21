import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setIsLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items), setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  return (
    <React.Fragment>
      <Navbar/>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results For :
          <span style={{ color: "#FC1503" }}> {searchTerm}</span> Videos
        </Typography>
        {!isLoading ? (
          <Videos videos={videos} />
        ) : (
          <div
            style={{
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#FC1503" }} />
          </div>
        )}
      </Box>
    </React.Fragment>
  );
};

export default SearchFeed;
