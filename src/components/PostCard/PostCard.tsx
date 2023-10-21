import {FC} from "react";

import {IPost} from "../../interfaces";
import styles from '../../styles/Card.module.css'

export interface IProps {
    post: IPost,
    handleDetails: (id: number) => Promise<void>
}

export const PostCard: FC<IProps> = ({post, handleDetails}) => {
    const {id, title} = post

    return (
        <div className={styles.card}>
            <h3>PostId: {id}</h3>
            <p>{title}</p>

            <button onClick={() => handleDetails(id)}>Details</button>
        </div>
    );
};