import axios from "axios";

import {spacexBaseURL} from "../../constants";

const spacexApiService = axios.create({baseURL: spacexBaseURL})

export {
    spacexApiService
}