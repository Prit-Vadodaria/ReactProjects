import React, { Component } from "react";
import NewsItem from "./NewsItem";
import ImgNotAvailable from "../ImgNotAvailable.jpg"

export class Newz extends Component {
  
  constructor() {
    super();
    this.state = {
      article: [],
    };
  }

  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=20d868404aa54bbaa2fc6c2d045d9650";
    let data= await fetch(url);
    let parseData=await data.json();
    this.setState({
      article: parseData.articles
    })
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
                    title={element.title?element.title:""}
                    description={element.description?element.description:""}
                    imgUrl={element.urlToImage?element.urlToImage:ImgNotAvailable}
                    newsUrl={element.url?element.url:""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Newz;
