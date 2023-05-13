import React, { Component } from 'react';

class ProductApi extends Component{

 static async fetchProduct(page){
          console.log("pageApi : ",page);
            const res = await fetch(
              `https://api.themoviedb.org/3/trending/all/day?api_key=0868fd4fcbf0055cb274ac0f033edc7a&page=${page}`
            );
            const responce = await res.json();
            const data = responce?.results
            return data
        

        }
    }
  export default ProductApi;