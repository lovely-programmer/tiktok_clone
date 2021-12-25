import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

function VideoFooter({channel, description, song}) {
    return (
        <div className='videoFooter'>
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
            </div>
            <div className="videoFooter_ticker">
                <MusicNoteIcon className='videoFooter_icon' />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
            <img className='videofooter_record' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdisk&psig=AOvVaw1PQMQejwMRxQTZmo5pIejv&ust=1624236501973000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPCihv7-pPECFQAAAAAdAAAAABAD" alt="" />
        </div>
    )
}

export default VideoFooter
