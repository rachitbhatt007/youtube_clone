import React from 'react'


const VideoDetail =({video})=>{
    if(!video){
        return<div className="container">Loading.. </div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return <div className="container">
        <div className="embed-responsive embed-responsive-16by9 mt-3">
        <iframe className="embed-responsive-item" src={videoSrc} allowfullscreen></iframe>
        </div>
        <div className="border my-3 p-4">
            <h6>{video.snippet.title}</h6>
            <p>{video.snippet.description}</p>
            </div>
    </div>
}


export default VideoDetail;