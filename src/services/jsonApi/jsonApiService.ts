import axios from "axios";

import {jsonBaseURL} from "../../constants";

const jsonApiService = axios.create({baseURL: jsonBaseURL})

export {
    jsonApiService
}