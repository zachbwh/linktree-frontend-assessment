import React from 'react';
import ILink from 'typescript-types/ILink';

import './ClassicLink.scss';

const ClassicLink: React.FunctionComponent<{ link: ILink }> = props => {
	return (
	<a className="classic-link" href={props.link.ClassicLink?.Url} target="_blank" rel="noreferrer">{props.link.ClassicLink?.Title}</a>
	);
}

export default ClassicLink;
