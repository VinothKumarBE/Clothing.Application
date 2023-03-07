import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;



export async function  getCloths(){
    try{
        console.log("Calling backend!")
      const data =   await  axios.get('/api/products/clothes');
      console.log(data);
      return(data);
    }catch(err){
        return {error: "No clothes"}

    }
}

export async function getcloth(){

    try{
        const {data} = await axios.get('/api/products/clothes:id')
       return data;
    }catch(err){
        return {error: "no cloth"}
    }
}