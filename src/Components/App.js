import React from 'react';
import Searchbar from './SearchBar.js'
import Videodetail from './VideoDetail.js'
class App extends React.Component{
    render(){
        return(<div>
            <Searchbar/>
            <Videodetail/>
        </div>)
    }
}

export default App; 