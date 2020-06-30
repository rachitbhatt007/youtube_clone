import React from 'react';
import Searchbar from './SearchBar.js'
import VideoList from './VideoList.js'
import youtube from '../Apis/youtube'

class App extends React.Component{
    state={videos:[]}

    onInputSubmit=async (term)=>{
        const response= await youtube.get('/search',{
        params:{
            part:'snippet',
            type:'video',
            maxResults: 10,
            q:term,
            key:'AIzaSyAq_e3i-ILGtGyFuF8tEgbiRizB2NCfH94'
        }
    })
    this.setState({videos:response.data.items})
    }



    render(){
        return(<div>
            <Searchbar onFormSubmit={this.onInputSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>)
    }
}

export default App; 