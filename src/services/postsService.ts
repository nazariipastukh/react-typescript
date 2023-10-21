import {apiService} from "./apiService";
import {urls} from "../constants";
import {IPost} from "../interfaces";
import {IRes} from "../types/axiosType";

const postsService = {
    getPosts: (): IRes<IPost[]> => apiService.get(urls.base),
    getPostById: (id: number): IRes<IPost> => apiService.get(urls.byId(id))
}

export {
    postsService
}