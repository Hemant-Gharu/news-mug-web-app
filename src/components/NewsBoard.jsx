import { useEffect } from "react";
import { useState } from "react"
import NewsList from "./NewsLIst";

const NewsBoard = ({ category }) => {
   const [articles, setArticles] = useState([]);
   console.log("()=>", articles);

   useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=979c7bcaccc847fc82b52340a67c0faf`;
      fetch(url).then((response) => response.json()).then((data) => setArticles(data.articles));
   }, [category]);

   return (
      <>
         <h2 className="text-center flex">Latest <span className="badge bg-danger">News</span></h2>
         <NewsList articles={articles} />
      </>
   )
}

export default NewsBoard