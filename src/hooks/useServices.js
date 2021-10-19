import { useEffect, useState } from "react";

export const useServices = () => {
    const [services, setServices] = useState([]);

    const url = process.env.PUBLIC_URL + "/services.json";
    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => setServices(data))
    }, [url]);

    return [services, setServices];

}