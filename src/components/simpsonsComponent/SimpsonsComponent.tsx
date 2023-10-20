import {simpsons} from "../../assets";
import {SimpsonCard} from "../simpsonCard";

import styles from '../../styles/Component.module.css'

export const SimpsonsComponent = () => {
    return (
        <div className={styles.wrapper}>
            {
                simpsons.map(character =>
                    <SimpsonCard character={character} key={character.name}/>
                )
            }
        </div>
    );
};