import React, { Component } from "react";
import NewsItem from "./NewsItem";
import ImgNotAvailable from "../ImgNotAvailable.jpg";

export class Newz extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading : false,
      page : 1,
      pageSize : 20,
      totalArticles : 0
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalArticles : parseData.totalResults
    });
  }

  

  handleNextClick= async ()=>{
      let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState(
        {
          page : this.state.page+1,
          article: parseData.articles
        }
      );
  }

  handlePrevClick = async ()=>{
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=20d868404aa54bbaa2fc6c2d045d9650&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState(
      {
        page : this.state.page-1,
        article: parseData.articles
      }
    );
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={
                      element.urlToImage ? element.urlToImage : ImgNotAvailable
                    }
                    newsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark my-3" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/20)} type="button" className="btn btn-outline-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    );
  }
}

export default Newz;
