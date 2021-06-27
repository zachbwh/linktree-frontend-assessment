interface IMusicPlayer {
	Title: string
	StreamingPlatformSongs: IStreamingPlatformSong[]
}

interface IStreamingPlatformSong {
	Platform: "spotify" | "apple-music" | "soundcloud" | "youtube-music" | "deezer" | "tidal" | "bandcamp",
	LogoUrl: string,
	AudioPlayerSongLink: string,
	StreamingPlatformSongLink: string
}

export default IMusicPlayer
export type {IStreamingPlatformSong};