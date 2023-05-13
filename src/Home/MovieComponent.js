import React, { useContext } from "react";
import Imagecarousel from "./Trending-trailers/Imagecarousel";
import NewContext from "../context/NewContext";

const MovieComponent = () => {
  const data = useContext(NewContext)

  return (
    <div className="wrapper">
      <div className="container">
        <div className="grid grid-three-column">
        {data.value1.slice(0,data.value3).map((curVal, id) => {
            return <Imagecarousel key={id + 1} value={id + 5} />;
          })}
         <h3 style={{color:"white",paddingLeft:"50px"}}>Trending Trailers {"(New 3) ->"}</h3>

        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
