import React, { useContext, useEffect, useState } from 'react'
import Mycard from './Mycard.js'
import './Imagecarousel.css'
import NewContext from '../../context/NewContext.js';
import ProductApi from '../../services/ProductApi.js';


const Imagecarousel = (id) => {


    // const data = useContext(NewContext)
    console.log("imgID",id);
    
    const [data,setData] = useState([])
    const [page,setPage] = useState(id.value)
   

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
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width;
        console.log(id.value)
    }

    const btnpressnext = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
        setPage((prev)=> prev + 1)
    }

    
    const handelInfiniteScroll = async () => {

        try {
          if (
            box.clientWidth + box.scrollLeft + 1 >=
            box.scrollWidth
          ) {
            setPage((prev)=> prev + 1)
          }
        } catch (error) {
          console.log(error);
        }
      };
    
  useEffect(() => {
    if(box){
        box.addEventListener("scroll", handelInfiniteScroll);
        return () => box.removeEventListener("scroll", handelInfiniteScroll);
    }
  }, []);
    
    return (
        <>
        <div className="product-carousel" key={id}>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className={`product-container`} id={`product-container${id.value}`} key={id.value}>

                {data.map((d, id) => {
                  return <Mycard key={id} data={d} cardno={id}  />;
                })}

            </div>
        </div>
    </>
    )
}

export default Imagecarousel