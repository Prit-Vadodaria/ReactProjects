import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newz extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            <div className="col-md-3">
              <NewsItem title="mytitle" description="myDesc"/>
            </div>
            <div className="col-md-3">
              <NewsItem title="mytitle" description="myDesc"/>
            </div>
            <div className="col-md-3">
              <NewsItem title="mytitle" description="myDesc"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Newz
