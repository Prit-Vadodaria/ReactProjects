import React, { Component } from "react";
import NewsItem from "./NewsItem";
import ImgNotAvailable from "../ImgNotAvailable.jpg";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const API_KEY = process.env.REACT_APP_NEWZ_API_KEY;
const API_URL = process.env.REACT_APP_NEWZ_API_URL;

export class Newz extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizefirstalpha = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      hasMore: true,
    };
    document.title = `${this.capitalizefirstalpha(this.props.category)} - Newzzz`;
  }

  async componentDidMount() {
    this.fetchNews(1);
  }

  fetchNews = async (pageNumber) => {
    const url = `${API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${pageNumber}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    try {
      const data = await fetch(url);
      const parseData = await data.json();
      this.setState({
        article: parseData.articles,
        totalArticles: parseData.totalResults,
        loading: false,
        page: pageNumber,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  fetchMoreNews = async () => {
    const nextPage = this.state.page + 1;

    const url = `${API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${nextPage}&pageSize=${this.props.pageSize}`;

    try {
      const data = await fetch(url);
      const parseData = await data.json();

      if (parseData.articles.length === 0) {
        this.setState({ hasMore: false });
        return;
      }

      this.setState({
        article: this.state.article.concat(parseData.articles),
        totalArticles: parseData.totalResults,
        page: nextPage,
      });
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  handleNextClick = () => {
    this.fetchNews(this.state.page + 1);
  };

  handlePrevClick = () => {
    this.fetchNews(this.state.page - 1);
  };

  render() {
    const { article, loading } = this.state;
    //const { pageSize } = this.props;
    //const isLastPage = page + 1 > Math.ceil(totalArticles / pageSize) || loading;

    return (
      <>
        <div className="container">
          <h1 style={{ margin: "20px 0px" }}>
            Top Headlines - {this.capitalizefirstalpha(this.props.category)}
          </h1>
        </div>
        <hr></hr>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreNews}
          hasMore={this.state.hasMore}
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
}

export default Newz;
