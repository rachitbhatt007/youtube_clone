import React from 'react'


const VideoItem = ({video,onVideoSelect})=>{
return(
<div className="container my-3">
    <div className="row" onClick={()=>onVideoSelect(video)}>
    <div className="col-sm-12 col-md m-auto">
    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.channelTitle}/>
    </div>
    <div className="col-sm-12 col-md-8 mt-2 mr-1">
    <h6 >{video.snippet.title}</h6>
    </div>
    </div>
    <hr/>
    </div>
   )
}

export default VideoItem;