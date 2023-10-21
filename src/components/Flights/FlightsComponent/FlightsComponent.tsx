import {useEffect, useState} from "react";

import {IFlight} from "../../../interfaces";
import {flightsService} from "../../../services";
import {FlightCard} from "../FlightCard";
import styles from '../../../styles/Component.module.css'

export const FlightsComponent = () => {
    const [flights, setFlights] = useState<IFlight[]>([])

    useEffect(() => {
        flightsService.getAllFlights().then(({data}) =>
            setFlights(data.filter(item => item.launch_year !== '2020')))
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                flights.map(flight => <FlightCard flight={flight} key={flight.flight_number}/>)
            }
        </div>
    );
};