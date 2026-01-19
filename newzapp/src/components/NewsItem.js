import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, auth, pubDate, source } =
      this.props;
    return (
      <>
        <div
          className="card mx-1 my-1"
          style={{ height: "100%", minHeight: "500px" }}
        >
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 45 ? `${title.slice(0, 44)}...` : title}
            </h5>
            <span className="badge text-bg-secondary my-1">{source}</span>
            <p className="card-text">
              {description.length > 45
                ? `${description.slice(0, 44)}...`
                : description}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {auth} on {new Date(pubDate).toGMTString()}.
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
