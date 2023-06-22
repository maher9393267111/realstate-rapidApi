import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':"df3eb5f65fmsh2c8f1f7e1080305p17af92jsn2bec47768907",
    },
  });
    
  return data;
}