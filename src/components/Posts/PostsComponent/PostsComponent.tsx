import {useEffect, useState} from "react";
import {IPost} from "../../../interfaces";
import {postsService} from "../../../services";
import {PostCard} from "../PostCard";
import {SelectedPost} from "../SelectedPost";
import styles from '../../../styles/Component.module.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [selectedPost, setSelectedPost] = useState<IPost>(null)

    useEffect(() => {
        postsService.getPosts().then(({data}) => setPosts(data))
    }, [])

    const handleDetails = async (id: number): Promise<void> => {
        id ? await postsService.getPostById(id).then(({data}) =>
            setSelectedPost(data)) : setSelectedPost(null)
    }

    return (
        <div>
            {
                selectedPost && <SelectedPost selectedPost={selectedPost} handleDetails={handleDetails}/>
            }
            <div className={styles.wrapper}>
                {
                    posts.map(post => <PostCard post={post} key={post.id} handleDetails={handleDetails}/>)
                }
            </div>
        </div>
    );
};