import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyVisaCard from "../Components/MyVisaCard";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [myVisas, setMyVisas] = useState([]);

  useEffect(() => {
    fetch(
      `https://visa-processing-server-pearl.vercel.app/myVisas?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyVisas(data);
      });
  }, []);
  return (
    <div className="max-w-7xl w-full mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-playfair my-8">
        My visas
      </h2>
      <div className="w-full mb-7">       
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {myVisas.map((myVisa) => (
                <MyVisaCard
                  key={myVisa._id}
                  myVisa={myVisa}
                  myVisas={myVisas}
                  setMyVisas={setMyVisas}
                ></MyVisaCard>))}
              </tbody>
            </table>
          </div>
        
      </div>
    </div>
  );
};

export default MyAddedVisa;
