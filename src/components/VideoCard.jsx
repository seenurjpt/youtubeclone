// import {demoThumbnailUrl} from '../utils/constants'
export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const VideoCard =  ( { video : {id : {videoId}, snippet } } ) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{width :{ xs:'100%', sm:'358px', md:'314px'}, boxShadow:'none', borderRadius:3}} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <CardMedia image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{width:{ xs:'100%', sm:'358px', md:'314px'}, height:180}}
          />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'85px'}}>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
      </Link>

      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize:12, color: 'gray', ml:'5px', mt:'5px'}} />
          </Typography>
      </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard
