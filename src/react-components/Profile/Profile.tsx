import React from 'react';
import IProfile from 'typescript-types/IProfile';
import Link from './Link/Link';

import './Profile.scss';

const Profile: React.FunctionComponent<{ profile?: IProfile }> = props => {

	const profile = props.profile,
		profileLinks = profile?.Links.map(link => {
			return <Link link={link} key={link.LinkId}></Link>
		});

	return (
	<div className="profile">
		<div className="profile-header">
			<img src={props.profile?.ProfileImageUrl} alt={props.profile?.ProfileImageAltText} className="profile-picture" />
			<div className="profile-username">@{props.profile?.Username}</div>
		</div>
		<div className="profile-links">{profileLinks}</div>
	</div>
	);
}

export default Profile;
