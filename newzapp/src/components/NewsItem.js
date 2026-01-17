import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description , imgUrl , newsUrl} = this.props;
    return (
      <>
        <div className="card mx-3 my-3" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.length > 45 ? `${title.slice(0, 44)}...` : title}</h5>
            <p className="card-text">{description.length > 45 ? `${description.slice(0, 44)}...` : description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
