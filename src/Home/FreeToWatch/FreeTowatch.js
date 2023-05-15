import React, { useContext, useEffect, useState } from 'react'
import FreeCard from './FreeCard.js'
import './FreeCard.css'
import NewContext from '../../context/NewContext.js';
import ProductApi from '../../services/ProductApi.js';
import Loading from '../Loading.js';


const HeartWarming = (id) => {

    // const data = useContext(NewContext)

    
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        ProductApi.fetchProduct(page).then((res)=>{
            console.log("res : ",res);
            setData((prev)=>[...prev, ...res])
        }).catch((err)=>{
            console.log("err",err);
        })
    },[page])


    let box = document.getElementById(`product-container${id.value}`);
        
    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
        setPage((prev)=> prev + 1)

    }

    const horizontalScroll = async () => {

        try {
          if (
            box.clientWidth + box.scrollLeft >=
            box.scrollWidth
          ) {
            setLoading(true);
            setPage((prev)=> prev + 1)
          }
        } catch (error) {
          console.log(error);
        }
      };
    
  useEffect(() => {
    if(box){
        box.addEventListener("scroll",()=> horizontalScroll());
        return () => box.removeEventListener("scroll", horizontalScroll);
    }
  });
    
    return (
        <div className="product-carousel" key={id}>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className={`product-container`} id={`product-container${id.value}`} key={id.value}>

                {data.map((d, id) => {
                  return <FreeCard key={id} data={d} cardno={id}  />;
                })}
                {loading && <Loading />}
            </div>
        </div>
    )
}

export default HeartWarming