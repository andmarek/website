"use client";

import Link from "next/link";
import useSWR from "swr";
import { ThreeDots } from "react-loader-spinner";

type ExternalUrls = {
  spotify: string;
};

type Track = {
  id: string;
  name: string;
  external_urls: ExternalUrls;
  artists: [
    {
      name: string;
      external_urls: ExternalUrls;
    }
  ];
  album: {
    images: [
      {
        url: string;
        height: number;
        width: number;
      }
    ];
  };
};

type Playlist = {
  items: {
    track: Track;
  }[];
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function useSpotifyPlaylists() {
  const { data, error } = useSWR<Playlist>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });
  return {
    playlists: data,
    isLoading: !error && !data,
    isError: error,
  };
}
function SpotifyPlaylists() {
  const { playlists, isLoading, isError } = useSpotifyPlaylists();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex place-content-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#756D94"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  // Optionally, handle error state
  if (isError) {
    return <div>Error loading playlists.</div>;
  }

  // Render playlists if not loading and no error
  return (
    <section className="p-4">
      <div className="grid grid-cols-5 gap-4">
        {playlists?.items?.map((item, index) => (
          <Link
            href={item.track.external_urls.spotify}
            key={item.track.id}
            className="group relative aspect-square overflow-hidden rounded-lg bg-licoric hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.track.album.images[0]?.url}
              alt={`${item.track.name} album cover`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-center p-2">
                <h3 className="text-papaya-whip font-semibold text-sm mb-1 line-clamp-2">
                  {item.track.name}
                </h3>
                <p className="text-chinese-violet text-xs line-clamp-1">
                  {item.track.artists[0].name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-raisin-black text-cinereous min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div id="intro" className="mb-12">
          <h1 className="text-4xl text-papaya-whip mb-4 tracking-tighter leading-tight font-sans">
            about
          </h1>
          <div className="flex-col space-y-4">
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              I&apos;m a software engineer living in Seattle.
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
            I work at Optum, where I create analytics tools for healthcare support engineers.
              {" "}
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              I&apos;m from Chicago, but lived in Iowa for a few years while I got my BS in Software Engineering from Iowa State University.
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              I&apos;m an avid competitive long distance runner and fan! Feel free to follow me on <Link href="https://www.strava.com/athletes/16371872" className="text-burnt-orange hover:text-plum transition-all">Strava</Link>.
            </p>
          </div>
        </div>

        <h1 className="text-4xl  text-papaya-whip mb-4 tracking-tighter leading-tight font-sans">
          current 10
        </h1>
        <div className="bg-licoric rounded-lg">
          <p className="text-lg leading-relaxed mb-4 font-light tracking-wide font-sans">
            I listen to a lot of music, and I maintain a playlist of the current 10 songs I have in rotation. Below is what&apos;s
            currently on the list (powered by Spotify).
          </p>
          <SpotifyPlaylists />
        </div>
      </div>
    </div>
  );
}
