import image from "../assets/news.jpg"

const NewsItem = ({ title, url, urlToImage, description }) => {
   return (
      <div className="card my-2 mx-1 p-2 bg-black bg-dark text-light" style={{ width: "18rem" }}>
         <img src={urlToImage?urlToImage:image} className="card-img-top" alt="..." style={{ width: "16rem" }} />
         <div className="card-body d-flex flex-column justify-content-between">
            <div>
               <h5 className="card-title">{title}</h5>
               <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {description}
               </p>
            </div>
            <a href={url} className="btn btn-primary mt-auto">Read More</a>
         </div>
      </div>
   )
}

export default NewsItem;
