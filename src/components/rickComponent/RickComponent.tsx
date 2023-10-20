import {useEffect, useState} from "react";
import {RickCard} from "../rickCard";
import {IRick} from "../../interfaces";

import styles from '../../styles/Component.module.css'

export const RickComponent = () => {
    const [characters, setCharacter] = useState<IRick[]>([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
            .then(data => setCharacter(data.results.slice(0, 6)))
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                characters.map(character => <RickCard character={character} key={character.id}/>)
            }
        </div>
    );
};