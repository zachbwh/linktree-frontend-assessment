import moment from 'moment';
import React from 'react';
import { ISongKickEvent } from 'typescript-types/IShowsList';

import './Show.scss';

const Show: React.FunctionComponent<{ show: ISongKickEvent }> = props => {
    const eventDate = new Date(props.show.start),
        formattedDate = moment(eventDate).format("MMM D YYYY");

    var rightSideLabel = (<div>

    </div>);

    if (props.show.status === "sold-out") {
        rightSideLabel = (<div>Sold Out</div>);
    }

	return (
	<div className="show">
        <div className="event-info">
            <div className="event-date">{formattedDate}</div>
            <div className="event-venue">{props.show.venue.displayName}, {props.show.venue.city.displayName}</div>
        </div>
        {rightSideLabel}
	</div>
	);
}

export default Show;
