import React from 'react';
import ILink from 'typescript-types/ILink';

import './ClassicLink.scss';

const ClassicLink: React.FunctionComponent<{ link: ILink }> = props => {
	return (
	<div className="classic-link">
        <a href={props.link.ClassicLink?.Url}>{props.link.ClassicLink?.Title}</a>
	</div>
	);
}

export default ClassicLink;
