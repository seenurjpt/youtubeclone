import {Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

const ChannelCard = ({channelDetail, marginTop}) => (
    <Box
         sx={{
                boxShadow:'none', 
                borderRadius:'20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:{xs:'356px', md:'315px'},
                height:'300px',
                margin:'auto',
                marginTop:marginTop,
              }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} >
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}} >
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3'}}
            />
            <Typography variant="h6" >
            {channelDetail?.snippet?.title} 
            <CheckCircleSharpIcon sx={{ fontSize:15, color: 'gray', ml:'5px', mt:'5px'}}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                  { parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() } Subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )


export default ChannelCard
