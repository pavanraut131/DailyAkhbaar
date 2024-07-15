import React from "react";
import { useState, useEffect } from "react";
import  axios from "axios"

const useCustomHook = (category)=>{
    const [news, setNews] = useState([])
    const fetchData = async (category) => {
        try {
          const res = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`);
          setNews(res.data.data);
          console.log('Response data:', res.data);
        } catch (error) {
          console.error('Error fetching data:', error); 
        }
      };

      useEffect(() => {
        fetchData(category);
      }, []);

      return {news}

}

export default useCustomHook;