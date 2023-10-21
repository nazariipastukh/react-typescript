import {FC} from "react";

import {IPost} from "../../interfaces";
import styles from '../../styles/Card.module.css'

interface IProps {
    selectedPost: IPost,
    handleDetails: (id: number) => Promise<void>
}

export const SelectedPost: FC<IProps> = ({selectedPost, handleDetails}) => {
    const {id, title, body} = selectedPost

    return (
        <div className={styles.card}>
            <h3>PostId: {id}</h3>
            <p>{title}</p>
            <h4>{body}</h4>

            <button onClick={() => handleDetails(null)}>Hide</button>
        </div>
    );
};