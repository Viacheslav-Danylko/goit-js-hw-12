import axios from 'axios';
export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46290699-f987c2a4595ee60b837e9e9f4';

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        page: page,
        per_page: 15,
        orientation: 'horizontal',
        safesearch: 'true'
      }
    });

    return response.data;
  } catch (error) {
      console.log(error);
      throw error;
    }
}