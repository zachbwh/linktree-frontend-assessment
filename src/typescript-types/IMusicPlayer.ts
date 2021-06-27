interface IMusicPlayer {
	Title: string
	StreamingPlatforms: IStreamingPlatformSongPlayer[]
}

interface IStreamingPlatformSongPlayer {
	PlatformName: "spotify" | "apple-music" | "soundcloud" | "youtube-music" | "deezer" | "tidal" | "bandcamp",
	LogoUrl: string,
	AudioPlayerSongLink: string,
	StreamingPlatformSongLink: string
}

export default IMusicPlayer