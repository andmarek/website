"use client";

import Link from "next/link";
import useSWR from "swr";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect } from "react";

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
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  // Close active overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-track-tile]')) {
        setActiveTrack(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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

  const handleTrackClick = (e: React.MouseEvent, trackId: string, spotifyUrl: string) => {
    // On mobile/touch devices, first tap shows info, second tap navigates
    if (activeTrack === trackId) {
      // Second tap - navigate to Spotify
      window.open(spotifyUrl, '_blank');
    } else {
      // First tap - show track info
      e.preventDefault();
      setActiveTrack(trackId);
    }
  };

  // Render playlists if not loading and no error
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {playlists?.items?.map((item, index) => {
          const isActive = activeTrack === item.track.id;
          return (
            <div
              key={item.track.id}
              data-track-tile
              className="relative aspect-square overflow-hidden rounded-lg bg-licoric transition-all duration-300 cursor-pointer group hover:scale-105"
              onClick={(e) => handleTrackClick(e, item.track.id, item.track.external_urls.spotify)}
            >
              <img
                src={item.track.album.images[0]?.url}
                alt={`${item.track.name} album cover`}
                className="w-full h-full object-cover z-0"
              />
              
              {/* Desktop hover overlay - black background, themed text */}
              <div className="hidden sm:flex absolute inset-0 z-10 bg-[#000000cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none">
                <div className="text-center p-2">
                  <h3 className="text-papaya-whip font-semibold text-sm mb-1 line-clamp-2">
                    {item.track.name}
                  </h3>
                  <p className="text-cinereous text-xs line-clamp-1">
                    {item.track.artists[0].name}
                  </p>
                </div>
              </div>

              {/* Mobile tap overlay */}
              <div className={`sm:hidden absolute inset-0 z-10 bg-[#000000f2] transition-opacity duration-300 flex items-center justify-center ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center p-3 pointer-events-none">
                  <h3 className="text-papaya-whip font-semibold text-sm mb-2 line-clamp-2">
                    {item.track.name}
                  </h3>
                  <p className="text-cinereous text-xs mb-2 line-clamp-1">
                    {item.track.artists[0].name}
                  </p>
                  <p className="text-chinese-violet text-xs">
                    Tap again to open in Spotify
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-raisin-black text-cinereous min-h-screen px-6 py-16">
      <div className="max-w-prose mx-auto">
        <section className="mb-20">
          <h1 className="text-3xl font-medium text-papaya-whip mb-8 tracking-tighter">
            about
          </h1>
          <div className="space-y-5 text-base">
            <p>
              I&apos;m a software engineer living in Seattle.
            </p>
            <p>
              I work at Optum, where I create analytics tools for healthcare support engineers.
            </p>
            <p>
              I&apos;m from Chicago, but lived in Iowa for a few years while I got my BS in Software Engineering from <span className="font-mono text-sm">Iowa State University</span>.
            </p>
            <p>
              I&apos;m an avid competitive long distance runner and fan! Feel free to follow me on{" "}
              <Link 
                href="https://www.strava.com/athletes/16371872" 
                className="text-papaya-whip hover:text-champagne-pink transition-colors underline underline-offset-4 decoration-wenge/50 hover:decoration-champagne-pink"
              >
                Strava
              </Link>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-papaya-whip mb-6 tracking-tighter">
            current 10
          </h2>
          <p className="text-base mb-8">
            I listen to a lot of music, and I maintain a playlist of the current 10 songs I have in rotation. Below is what&apos;s currently on the list{" "}
            <span className="font-mono text-sm text-chinese-violet">(powered by Spotify)</span>.
          </p>
          <SpotifyPlaylists />
        </section>
      </div>
    </div>
  );
}
