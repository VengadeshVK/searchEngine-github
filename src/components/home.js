import React from 'react'
import axios from 'axios'
import SearchInput from './SearchInput';
import Imagelist from './Imagelist';

class Home extends React.Component{

    constructor(props){
      super(props);
      this.state = {images:[]}
      this.onSearchSubmit = this.onSearchSubmit.bind(this) //To link the one component with another component
  
    }
  
    async onSearchSubmit(entry){
    //   entry.preventDefault();
     
      const response = await axios.get(`https://pixabay.com/api/?key=31923128-1aa962e83c20cd56c9a481154&q=${entry}&image_type=photo&pretty=true`)
    //   console.log(response.data.hits);
      this.setState({images:response.data.hits})
    }
  
    render(){
      return (
        <div>
        <SearchInput onSearchSubmit={this.onSearchSubmit} /> <br/>
        {/* Total search : {this.state.images.length} */}
        <Imagelist images = {this.state.images} />
        </div>
      )
    }
  }
  
  export default Home;