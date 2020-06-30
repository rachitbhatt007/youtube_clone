import React from 'react';
import VideoItem from './VideoItem'

//videos is props.videos
const VideoList = ({videos})=>{
const renderedList=videos.map((video)=>{
    return <VideoItem/>
})
return <div>{renderedList}</div>
}


export default VideoList 