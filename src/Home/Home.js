import React, { useState, useEffect, lazy, Suspense } from "react";
import NewContext from '../context/NewContext'
import ProductApi from "../services/ProductApi";

const CombinePage = lazy(()=> import("./CombinePage"))
const Loading = lazy(()=> import("./Loading"))
const MovieComponent = lazy(()=> import("./MovieComponent"))

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    ProductApi.fetchProduct(page).then((res)=>{
      console.log("res : ",res);
      setCard((prev)=>[...prev, ...res])
      setLoading(false);
  }).catch((err)=>{
      console.log("err",err);
  })
    // getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setMore((prev) => prev + 3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  console.log("more : ",more);

  return (
    <>
    <Suspense fallback={<p>...Loading</p>}>
        <CombinePage />
      <NewContext.Provider value={{value1:card, value2:setPage, value3:more}}>
        <h3 style={{color:"white",textAlign:"center"}}>Infinite scrolling starts here</h3>
        <MovieComponent  />
        {loading && <Loading />}
      </NewContext.Provider>
    </Suspense>
    </>
  );
};

export default Home;
