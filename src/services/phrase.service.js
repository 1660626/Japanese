import axios from "axios";
import Serivces from "./index.js";

export default function PhraseService() {

  const API_URL = `${Serivces().API_SERVERPORT}/api/phrase`;

  const getAllPhrase = () => {
    return axios.get(`${API_URL}/`);
  };

  const getVoiceByPhrase = (_id) => {
    return axios.get(`${API_URL}/voice/${_id}`);
  };
  return {
    getAllPhrase,
    getVoiceByPhrase,
    API_URL
  };
}