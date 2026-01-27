import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import ImgNotAvailable from "../ImgNotAvailable.jpg";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const API_KEY = process.env.REACT_APP_NEWZ_API_KEY;
const API_URL = process.env.REACT_APP_NEWZ_API_URL;

export function Newz(props) {
 
  const [article,setArticle] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  //const [totalArticles,setTotalArticles] = useState(0);
  const [hasMore,setHasMore] = useState(true);



  const capitalizefirstalpha = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /*constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      hasMore: true,
    };
    document.title = `${this.capitalizefirstalpha(props.category)} - Newzzz`;
  }*/

  
  /*async componentDidMount() {
    this.fetchNews(1);
  }*/

  const fetchNews = async (pageNumber) => {
    const url = `${API_URL}?country=${props.country}&category=${props.category}&apiKey=${API_KEY}&page=${pageNumber}&pageSize=${props.pageSize}`;
    //this.setState({ loading: true });
    setLoading(true);
    try {
      const data = await fetch(url);
      const parseData = await data.json();
      setArticle(parseData.articles);
      //setTotalArticles(parseData.totalResults);
      setLoading(false);
      setPage(pageNumber);
      /*this.setState({
        article: parseData.articles,
        totalArticles: parseData.totalResults,
        loading: false,
        page: pageNumber,
      });*/
    } catch (error) {
      console.error("Error fetching news:", error);
      //this.setState({ loading: false });
      setLoading(false);

    }
  };

  const fetchMoreNews = async () => {
    const nextPage = page + 1;

    const url = `${API_URL}?country=${props.country}&category=${props.category}&apiKey=${API_KEY}&page=${nextPage}&pageSize=${props.pageSize}`;

    try {
      const data = await fetch(url);
      const parseData = await data.json();

      if (parseData.articles.length === 0) {
        setHasMore(false);
        return;
      }

      setArticle(article.concat(parseData.articles));
      //setTotalArticles(parseData.totalResults);
      setPage(nextPage);

      /*this.setState({
        article: this.state.article.concat(parseData.articles),
        totalArticles: parseData.totalResults,
        page: nextPage,
      });*/
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  useEffect(()=>{
    document.title = `${capitalizefirstalpha(props.category)} - Newzzz`;
    fetchNews(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  /*const handleNextClick = () => {
    this.fetchNews(this.state.page + 1);
  };*/

  /*const handlePrevClick = () => {
    this.fetchNews(this.state.page - 1);
  };*/

  
    //const { article, loading } = this.state;
    //const { pageSize } = props;
    //const isLastPage = page + 1 > Math.ceil(totalArticles / pageSize) || loading;

    return (
      <>
        <div className="container">
          <h1 style={{ margin: "20px 0px", marginTop: '70px'}}>
            Top Headlines - {capitalizefirstalpha(props.category)}
          </h1>
        </div>
        <hr></hr>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreNews}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <div className="container my-5">
            <div
              className="row"
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              {
                /*!loading &&*/
                article.map((element) => (
                  <div
                    className="col-md-3"
                    key={element.url}
                    style={{ display: "flex" }}
                  >
                    <NewsItem
                      title={element.title || ""}
                      description={element.description || ""}
                      imgUrl={element.urlToImage || ImgNotAvailable}
                      newsUrl={element.url || ""}
                      auth={element.author || "Unknown"}
                      pubDate={element.publishedAt || ""}
                      source={element.source.name || ""}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </InfiniteScroll>
        <hr/>
        {/*<div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-outline-dark my-3"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={isLastPage}
            type="button"
            className="btn btn-outline-dark my-3"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>*/}
      </>
    );
  
}

Newz.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
};
Newz.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Newz;
