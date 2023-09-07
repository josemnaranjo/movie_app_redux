const MovieCard = ({ data }) => {
  return (
    <div className="bg-slate-700 cursor-pointer rounded">
      <div className="">
        <div className="h-[450px]">
          <img src={data.Poster} alt={data.Title} className="w-full h-full rounded" />
        </div>
      </div>
      <div>
        <div className="p-5">
          <h4 className="font-xl font-normal mb-2.5">{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
