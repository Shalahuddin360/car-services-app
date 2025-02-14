import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [asc,setAsc] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [asc])
//    console.log(asc)
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

                {/* <button onClick={()=>setAsc(!asc)} className="btn btn-primary">Sort</button> */}

                <button onClick={()=>setAsc(!asc)} className="btn btn-primary">{asc ? "Ascending To Descending" : "Descending To Ascending" }</button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;