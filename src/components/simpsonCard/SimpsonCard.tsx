import styles from '../../styles/Card.module.css'
import {ICharacter} from "../../interfaces";
import {FC} from "react";

interface IProps {
    character: ICharacter
}

export const SimpsonCard: FC<IProps> = ({character}) => {
    const {name, surname, age, info, photo} = character

    return (
        <div className={styles.card}>
            <img src={photo} alt={name}/>
            <h3>{name} {surname}</h3>
            <h4>Age: {age}</h4>
            <p>{info}</p>
        </div>
    );
};