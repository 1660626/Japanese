import axios from "axios";
import Services from "./index.js";

export default function GrammarService() {

  const API_URL = `${Services().API_SERVERPORT}/api/grammar`;

  const getAllGrammar = () => {
    return axios.get(`${API_URL}/`);
  };

  return {
    getAllGrammar
  };
}