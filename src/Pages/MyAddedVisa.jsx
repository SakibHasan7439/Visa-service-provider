import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyVisaCard from "../Components/MyVisaCard";

const MyAddedVisa = () => {
    const { user } = useContext(AuthContext);
    const [myVisas, setMyVisas] = useState([]);

    useEffect(()=>{
        fetch(`https://visa-processing-server-pearl.vercel.app/myVisas?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyVisas(data);
        })
    }, []);
    return (
        <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-center text-2xl md:text-4xl font-playfair my-8">My visas</h2>
            <div className="grid grid-cols-12 gap-4">
                {
                    myVisas.map((myVisa)=> <MyVisaCard 
                        key={myVisa._id}
                        myVisa={myVisa}
                        myVisas={myVisas}
                        setMyVisas={setMyVisas}>
                    </MyVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedVisa;