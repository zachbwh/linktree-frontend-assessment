import IClassicLink from './IClassicLink';
import IMusicPlayer from './IMusicPlayer';
import IShowsList from './IShowsList';

interface ILink {
	LinkId: string,
	LinkType: "classic" | "music-player" | "shows-list",
	ClassicLink?: IClassicLink,
	MusicPlayer?: IMusicPlayer,
	ShowsList?: IShowsList
};

export default ILink