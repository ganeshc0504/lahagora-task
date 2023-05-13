import React, { Suspense, lazy } from 'react'
const FreeToWatch = lazy(()=> import('./FreeToWatch/FreeTowatch'))
const HeartWarming = lazy(()=> import('./Heart-warming-originals/HeartWarming'))
const Popular = lazy(()=> import('./Popular/Popular'))
const Latest = lazy(()=> import('./Latest/Latest'))

const CombinePage = () => {
  return (
    <div>
      <Suspense fallback={<p>...Loading</p>}>
        <h4 style={{color:"white",paddingLeft:"50px"}}>Free To Watch {"->"} </h4>
        <FreeToWatch value={1} />
        <h4 style={{color:"white",paddingLeft:"50px"}}>Heart Warming Movies {"->"} </h4>
        <HeartWarming  value={2}/>
        <h4 style={{color:"white",paddingLeft:"50px"}}>Popular movies {"->"} </h4>
        <Popular  value={3}/>
        <h4 style={{color:"white",paddingLeft:"50px"}}>Latest movies {"->"} </h4>
        <Latest  value={4}/>
      </Suspense>
    </div>
  )
}

export default CombinePage