import axios from "axios";

const AXInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

export default AXInstance;