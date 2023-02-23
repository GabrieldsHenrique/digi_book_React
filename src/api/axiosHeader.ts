import axios from "axios";

export default axios.create(
    {baseURL: 'https://digimon-api.vercel.app/api/digimon/'
}
);
