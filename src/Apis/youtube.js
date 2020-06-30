import axios from 'axios'

const KEY ='AIzaSyAq_e3i-ILGtGyFuF8tEgbiRizB2NCfH94';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 10,
        key:KEY
    }
});