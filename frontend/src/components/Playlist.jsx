import icarusBk from "../assets/icarus-bk.jpeg";
import hearth from "../assets/hearth-liked.svg";

const musics = [
  {
    image: icarusBk,
    title: "Música de amor nunca mais",
    artists: "BK, Luccas Carlos, Nansy Silvvz, Gigantes",
    liked: true
  },
  {
    image: icarusBk,
    title: "Outra Música",
    artists: "Artista 1, Artista 2",
    liked: true
  }
];

export default function Playlist({ showPlaylist }) {
  if (!showPlaylist) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {musics.map((music, index) => (
        <div key={index} className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-2">
            <img
              className="rounded-2xl h-20"
              src={music.image}
              alt={`${music.title} icon`}
            />
            <div>
              <h4 className="text-xl font-semibold truncate max-w-60">
                {music.title}
              </h4>
              <h3 className="text-sm text-gray-300 truncate max-w-60">
                {music.artists}
              </h3>
            </div>
          </div>
          <img className="h-5 mt-1" src={hearth} alt="Like icon" />
        </div>
      ))}
    </div>
  );
}
