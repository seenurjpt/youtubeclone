import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
import Navbar from './Navbar';


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] =useState(null)
  const [videos, setVideos] =useState([])

  const {id} = useParams();
  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI (`channels?part=snippet&id=${id}`) .then((data) => setChannelDetail(data?.items[0]) );
    fetchFromAPI (`search?channelId=${id}&part=snippet&order=date`) .then((data) => setVideos(data?.items) );
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Navbar/>
        <Box>
            <div
              style={{
                background: 'linear-gradient(to right, #e52d27, #b31217)',
                zIndex:10,
                height:'300px'
              }}
            />
            <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>
            </Box>
            <Box display='flex' p='2' >
                <Box sx={{mr : {sm:'100px'}}} />
                    <Videos videos={videos} />
            </Box>
    </Box>
  )
}

export default ChannelDetail
