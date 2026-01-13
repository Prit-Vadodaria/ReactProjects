import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newz extends Component {
  render() {
    return (
      <>
        <h1>this is the news componet which will hold news item</h1>
        <NewsItem/>
        <NewsItem/>
      </>
    )
  }
}

export default Newz
