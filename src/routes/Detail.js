import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? <h1>loading...</h1> : <img src={movie.medium_cover_image} />}
    </div>
  );
}

export default Detail;
