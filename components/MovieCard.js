import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={movie.poster}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
