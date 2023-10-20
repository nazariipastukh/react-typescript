import {IRick} from "../../interfaces";
import {FC} from "react";

import styles from '../../styles/Card.module.css'

interface IProps {
    character: IRick
}

export const RickCard: FC<IProps> = ({character}) => {
    const {name, status, species, gender, image} = character

    return (
        <div className={styles.card}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h3>{gender}</h3>
            <h4>{status}</h4>
            <p>{species}</p>
        </div>
    );
};