import React, { Component } from "react";
import NewsItem from "./NewsItem";
import ImgNotAvailable from "../ImgNotAvailable.jpg";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class Newz extends Component {
  static defaultProps = {
    country: "us",
    pagesize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      article: parseData.articles,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parseData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 style={{ margin: "30px 0px" }}>Top Headlines</h1>
          <hr></hr>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : ImgNotAvailable
                      }
                      newsUrl={element.url ? element.url : ""}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-dark my-3"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize) ||
              this.state.loading
            }
            type="button"
            className="btn btn-outline-dark my-3"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default Newz;
