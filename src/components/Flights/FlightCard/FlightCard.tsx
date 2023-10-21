import {FC} from "react";

import {IFlight} from "../../../interfaces";
import styles from '../../../styles/Card.module.css'

interface IProps {
    flight: IFlight
}

export const FlightCard: FC<IProps> = ({flight}) => {
    const {mission_name, launch_year, links} = flight

    return (
        <div className={styles.card}>
            <img src={links.mission_patch_small} alt={mission_name}/>
            {launch_year} - {mission_name}
        </div>
    );
};