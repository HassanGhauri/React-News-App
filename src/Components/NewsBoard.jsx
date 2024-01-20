import {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
    const url = `https://newsapi.org/v2/top-headlines?country=sa&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const fetchArticles = (async ()=>{
        const data = await axios.get(url)
        const article = data.data.articles
        setArticles(article)
        

    })

    useEffect(()=>{
        fetchArticles();
    },[category])

  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        <div>
            {articles && articles.map((news,index)=>{
                return <NewsItem key={index} 
                title={news.title} 
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                />
            })}
        </div>

    </div>
  )
}

export default NewsBoard