import {spacexApiService} from "./spacexApiService";
import {flightsUrls} from "../../constants";
import {IRes} from "../../types/axiosType";
import {IFlight} from "../../interfaces";

const flightsService = {
    getAllFlights: (): IRes<IFlight[]> => spacexApiService.get(flightsUrls.base)
}

export {
    flightsService
}

