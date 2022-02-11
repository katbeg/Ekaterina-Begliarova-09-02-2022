import React, {useState, useEffect} from "react";
import CityCard from "../CityCard/CityCard";

export default function Favorites(){
    const [favorites, setFavorites] = useState();

    useEffect(() => {
    }, [])

    return(
        <div>
            <CityCard></CityCard>
        </div>
    )
}