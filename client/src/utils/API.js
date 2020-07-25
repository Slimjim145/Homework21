import axios from "axios";

export default{
    getSearchedBook:(search)=> {
        return axios.get("/api/search/" + search);

    }
}