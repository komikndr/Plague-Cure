import { useState, useEffect } from "react";
import Country from "./game";

function PopulationDisplay() {
  const country = new Country("indonesia", 700000)
  const [updated, setUpdated] = useState(0)
  
  useEffect(()=>{
    country.startUpdate(setUpdated)

    return ()=>{
      country.stopUpdate()
    }
  }, [country.death_num])

  return (
    <div>
      <h1>Update Profile {updated}</h1>
    </div>
    );
}

export default PopulationDisplay;