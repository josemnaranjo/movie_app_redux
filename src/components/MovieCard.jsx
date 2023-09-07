import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <Link to={`/detail/${data.imdbID}`}>
      <div className="bg-slate-700 cursor-pointer rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <div>
          <div className="h-[450px]">
            <img
              src={data.Poster}
              alt={data.Title}
              className="w-full h-full rounded"
            />
          </div>
        </div>
        <div>
          <div className="p-5">
            <h4 className="font-xl font-normal mb-2.5">{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
