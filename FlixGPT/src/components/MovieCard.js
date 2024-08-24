import { POSTER_URL } from '../utils/constrants';
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
    if (!movie) return;
    const { original_title, poster_path, id } = movie;
    return (
        <div className='w-48 h-72'>
            <Link to={"/movie/"+id}>
                <img className='object-cover w-full h-full pb-2 pl-2 hover:scale-110 hover:delay-100 hover:transition-all' src={POSTER_URL + poster_path} alt={original_title}/>
            </Link>
        </div>
    )
}

export default MovieCard;