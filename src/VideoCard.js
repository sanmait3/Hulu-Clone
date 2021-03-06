import React,  { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    // adding  Forwardref
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path} `} 
            alt="Movie poster"/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                // for read on functionality - textTruncateChild={<a href="#">Read On</a>}
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard__stats'>
                {movie.media_type && `${movie.media_type}` } &#8226; {" "}
                {movie.release_date || movie.first_air_date } &#8226; {" "}
                <ThumbUpSharpIcon /> {" "} 
                {movie.vote_count}</p>
        </div>
    )
});

export default VideoCard;
