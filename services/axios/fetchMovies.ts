import axios from "axios";

export const fetchMovies=async(genre:string|null)=>{
    try{
        
        const options = {
            method: 'GET',
            url: 'https://movies-and-serials-torrent.p.rapidapi.com/movies/latest',
            headers: {
              'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com',
              'X-RapidAPI-Key': '81036bf205msh6d724b7bdaa8bc8p109afcjsn7a14a8e848ee'
            }
          };
        
        const res=await axios.request(options);
        const data=await res.data;
        return data;
    }
    catch(err)
    {
        throw new Error("something went wrong");
    }
}

export const getGenre=async()=>{
    
const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/getParams',
    params: {param: 'genre'},
    headers: {
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
      'X-RapidAPI-Key': '81036bf205msh6d724b7bdaa8bc8p109afcjsn7a14a8e848ee'
    }
  };
  
  try{
      const res=axios.request(options);
      const data=(await res).data
      return data
  }
  catch(err)
  {
      console.log("error");
      throw new Error("something went wrong")
  }
}

export const fetchDetailMovie=async (id:any)=>{
  try{
    const options = {
      method: 'GET',
      url:  `https://movies-and-serials-torrent.p.rapidapi.com/movies/detail/${id}`,
      headers: {
        'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com',
        'X-RapidAPI-Key': '81036bf205msh6d724b7bdaa8bc8p109afcjsn7a14a8e848ee'
      }
    };
    
    const res=await axios.request(options);
    const data=await res.data
    return data
  }catch(err)
  {
    
    throw new Error("something went wrong")
}
}