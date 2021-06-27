import ILink from './ILink';

interface IProfile {
	Username: string,
	ProfileImageUrl: string,
	ProfileImageAltText: string,
    Links: ILink
}

export default IProfile