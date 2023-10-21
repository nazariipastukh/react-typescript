import {jsonApiService} from "./jsonApiService";
import {postsUrls} from "../../constants";
import {IPost} from "../../interfaces";
import {IRes} from "../../types/axiosType";

const postsService = {
    getPosts: (): IRes<IPost[]> => jsonApiService.get(postsUrls.base),
    getPostById: (id: number): IRes<IPost> => jsonApiService.get(postsUrls.byId(id))
}

export {
    postsService
}