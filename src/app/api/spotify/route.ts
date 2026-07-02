import axios from "axios";

const PLAYLIST_CACHE_TTL_MS = 10 * 60 * 1000;
const TOKEN_EXPIRY_BUFFER_MS = 60 * 1000;

let cachedAccessToken: { token: string; expiresAt: number } | null = null;
let cachedPlaylist: { data: unknown; expiresAt: number } | null = null;

const getAccessToken = async () => {
  const now = Date.now();

  if (cachedAccessToken && cachedAccessToken.expiresAt > now) {
    return cachedAccessToken.token;
  }

  const tokenResponse = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  cachedAccessToken = {
    token: tokenResponse.data.access_token,
    expiresAt: now + tokenResponse.data.expires_in * 1000 - TOKEN_EXPIRY_BUFFER_MS,
  };

  return cachedAccessToken.token;
};

const fetchPlaylist = async () => {
  const now = Date.now();

  if (cachedPlaylist && cachedPlaylist.expiresAt > now) {
    return cachedPlaylist.data;
  }

  const accessToken = await getAccessToken();
  const playlistResponse = await axios.get(
    "https://api.spotify.com/v1/playlists/15HVxOaAQS1RquOtu0Ije2/tracks?fields=items(track(id,name,external_urls,artists(name,external_urls),album(images)))",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  cachedPlaylist = {
    data: playlistResponse.data,
    expiresAt: now + PLAYLIST_CACHE_TTL_MS,
  };

  return cachedPlaylist.data;
};

export async function GET() {
  try {
    const data = await fetchPlaylist();
    return Response.json(data)
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
    return Response.json({ error: 'Failed to fetch Spotify playlist.' }, { status: 502 });
  }
}
