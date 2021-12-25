import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShareIcon from "@material-ui/icons/Share"

function VideoSidebar({likes,messages,share}) {
    const [liked, setLiked] = useState(false)
    return (
        <div className='video_sidebar'>
            <div className="videoSidebar_button">
                {liked ? (
                    <FavoriteIcon fontSize='large' onClick={()=> setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize='large' onClick={()=> setLiked(true)}  />    
                )}
                
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize='large' />
                <p>{share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
