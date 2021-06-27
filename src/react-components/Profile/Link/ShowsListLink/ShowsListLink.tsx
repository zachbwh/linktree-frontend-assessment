import React from 'react';
import ILink from 'typescript-types/ILink';
import Show from './Show/Show';

import './ShowsListLink.scss';

const ShowsListLink: React.FunctionComponent<{ link: ILink }> = props => {
    var showsList = props.link.ShowsList?.Events.map(show => {
        return <Show show={show}></Show>
    });

	return (
	<div className="shows-list-link">
        {showsList}
	</div>
	);
}

export default ShowsListLink;
