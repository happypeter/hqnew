import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    news: []
  }


  componentWillMount() {
    axios.get(`http://localhost:3010/news`).then(
      res => {
        this.setState({
          news: res.data.news
        })
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let title = this.newInput.value
    let data = { title }
    axios.post(`http://localhost:3010/new`, data).then(
      res => {
        console.log(res.data)
      }
    )
  }

  render() {

    let newsList = this.state.news.map((item, i) => {
      let { link, title, date } = item
      return (
        <li key={i}>
          <div className="link">
            {link}
          </div>
          <div className="title">
            {title}
          </div>
          <div className="data">
            {date}
          </div>
        </li>
      )
    })
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <input type="text" ref={value => this.newInput = value}/>
          <button type="submit">提交</button>
        </form>
        {newsList}
      </div>
    );
  }
}

export default App;
