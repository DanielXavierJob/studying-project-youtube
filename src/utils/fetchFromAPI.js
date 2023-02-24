import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': "",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url, api_key = process.env.REACT_APP_RAPID_API_KEY ?? "f4bc9bc615mshe24da225abab950p119332jsn611d6cb7cacc") => {
  options.headers['X-RapidAPI-Key'] = api_key
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
