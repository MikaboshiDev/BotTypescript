const Api_Url = 'https://discord.com/api/v10';
import get from 'superagent';
import axios from 'axios';
import { logWithLabel } from '../../utils/console';

async function requestHandler(url: string, method: string, data: any) {
  const response = await axios({
    method: method,
    url: `${Api_Url}${url}`,
    headers: {
      Authorization: `Bot ${process.env.token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  });

  return response.data;
}

async function animeApi(action: any) {
  try {
    const { body } = await get(`https://api.waifu.pics/sfw/${action}`);
    return body.url;
  } catch (err) {
    logWithLabel("error", `Error in animeApi: ${err}`)
  }
}

export { requestHandler, animeApi }