import NewsItem from "./NewsItem";

const NewsList = ({ articles }) => {
   return (
      <div className="d-flex flex-wrap justify-content-center">
         {articles.map((item, index) => (
            <NewsItem
               key={index}
               title={item.title}
               url={item.url}
               urlToImage={item.urlToImage}
               description={item.description}
            />
         ))}
      </div>
   );
}

export default NewsList;