import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "10f7440c142bce4bef96358ae207b70d",
        language: "ko-KR",
    },
});

export default instance;