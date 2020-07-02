import React from 'react';
import Searchbar from './SearchBar.js'
import VideoList from './VideoList.js'
import youtube from '../Apis/youtube'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state={videos:[],selectedVideo:null}


    componentDidMount(){
        this.onInputSubmit('Dogs')
    }

    onInputSubmit=async (term)=>{
        const response= await youtube.get('/search',{
        params:{
            q:term, 
        }
    })
    this.setState({videos:response.data.items,
        selectedVideo:response.data.items[0]})
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(<div>
            
            <Searchbar onFormSubmit={this.onInputSubmit}/>
            <div className="row">
            <div className="col-sm-12 col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="col-sm-12 col-md">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            </div>
        </div>) 
    }
}

export default App; 