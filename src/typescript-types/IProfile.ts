import ILink from './ILink';
import IProfileTheme from './IProfileTheme';

interface IProfile {
	Username: string,
	ProfileImageUrl: string,
	ProfileImageAltText: string,
    Links: ILink[],
    Theme?: IProfileTheme
}

export default IProfile