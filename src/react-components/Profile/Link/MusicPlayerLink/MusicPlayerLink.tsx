import React from 'react';
import ILink from 'typescript-types/ILink';

import './MusicPlayerLink.scss';
import StreamingPlatformWidget from './StreamingPlatformWidget/StreamingPlatformWidget';

const MusicPlayerLink: React.FunctionComponent<{ link: ILink }> = props => {
    var streamingPlatforms = props.link.MusicPlayer?.StreamingPlatformSongs.map(streamingPlatformSong => {
        return <StreamingPlatformWidget streamingPlatformSong={streamingPlatformSong}></StreamingPlatformWidget>
    });

	return (
	<div className="music-player-link">
        <div className="music-player-header">{props.link.MusicPlayer?.Title}</div>
        <div className="link-body">
            {streamingPlatforms}
        </div>
	</div>
	);
}

export default MusicPlayerLink;
