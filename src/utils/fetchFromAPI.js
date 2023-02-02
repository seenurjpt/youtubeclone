import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {maxResults: '50'},
    headers: {

      //API 1

      // 'X-RapidAPI-Key': '5b47bd3071msh7ef68f51c5fe68cp16f84cjsnd1074066a279',
      // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'

      // API 2

      'X-RapidAPI-Key': 'b58f5791admshdd20f1176ae6c54p10ef6bjsnf41d5a0933e2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
} 


