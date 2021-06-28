import React from 'react';
import ILink from 'typescript-types/ILink';
import Show from './Show/Show';

import './ShowsListLink.scss';

const ShowsListLink: React.FunctionComponent<{ link: ILink }> = props => {
    var showsList = props.link.ShowsList?.Events.map(show => {
        return <Show show={show} key={show.id}></Show>
    });

	return (
	<div className="shows-list-link">
        <div className="shows-list-header">{props.link.ShowsList?.Title}</div>
        <div className="link-body">
            {showsList}
            <div className="songkick-logo">
                <img src="/linktree-assets/icons/by-songkick-wordmark.svg" alt="SongKick Logo"/>
            </div>
        </div>
	</div>
	);
}

export default ShowsListLink;
