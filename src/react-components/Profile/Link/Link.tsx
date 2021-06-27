import React from 'react';
import ILink from 'typescript-types/ILink';
import ClassicLink from './ClassicLink/ClassicLink';

import './Link.scss';
import MusicPlayerLink from './MusicPlayerLink/MusicPlayerLink';
import ShowsListLink from './ShowsListLink/ShowsListLink';

const Link: React.FunctionComponent<{ link: ILink }> = props => {
    var linkBody;

    switch(props.link.LinkType) {
        case "classic":
            linkBody = <ClassicLink link={props.link}></ClassicLink>;
        break;
        case "music-player":
            linkBody = <MusicPlayerLink link={props.link}></MusicPlayerLink>
        break;
        case "shows-list":
            linkBody = <ShowsListLink link={props.link}></ShowsListLink>
    }

	return (
	<div className="link">
        {linkBody}
	</div>
	);
}

export default Link;
