import { Component } from 'react';
import GiphyList from './components/GiphyList.jsx'
class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
      searchUrl: "", 
          giphy: [],
   
  }
}
handleChange = (event)=> {
  this.setState({ [event.target.id] : event.target.value })
}
handleSubmit = (event)=>{
  event.preventDefault()
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${event.target.giphySearch.value}`
  
  fetch(url)
    .then(response=> response.json())
    .then(data=> {
      console.log(data.data)
      this.setState({
        giphy: data.data
      })
    })
    
  this.setState({
    searchURL: url
  })
}
  render () {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='giphySearch'>Title</label>
            <input
              id='giphySearch'
              type='text'
            />
            <button
              type='submit'>Search</button>
            
          </form>
          {(this.state.searchURL)
            ? <GiphyList giphys={this.state.giphy} />
            : ''
          }
        </>
      )
    }
}
export default App;