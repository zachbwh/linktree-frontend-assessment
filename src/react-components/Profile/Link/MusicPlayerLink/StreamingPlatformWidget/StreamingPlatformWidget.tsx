import React from 'react';
import { IStreamingPlatformSong } from 'typescript-types/IMusicPlayer';

import './StreamingPlatformWidget.scss';

const StreamingPlatformWidget: React.FunctionComponent<{ streamingPlatformSong: IStreamingPlatformSong }> = props => {
    var streamingPlatformWidget;

    switch(props.streamingPlatformSong.Platform) {
        case "spotify":
            streamingPlatformWidget = <iframe title="Spotify Player" src={props.streamingPlatformSong.AudioPlayerSongLink} loading="lazy" width="100%" height="80" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>;
        break;
        case "apple-music":
            streamingPlatformWidget = <iframe title="Apple Music Player" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" width="100%" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={props.streamingPlatformSong.AudioPlayerSongLink} loading="lazy"></iframe>
        break;
        // @todo add more rendering templates for other music streaming services embed codes
    }

	return (
	<div className="streaming-platform-widget">
        <div className="streaming-platform-header">
            <div className="platform-icon">
                <img src={props.streamingPlatformSong.LogoUrl} alt={props.streamingPlatformSong.PlatformDisplayName}></img>
            </div>
            <div className="platform-display-name">{props.streamingPlatformSong.PlatformDisplayName}</div>
            <img className="arrow-icon" src="/linktree-assets/icons/arrow.svg" alt="arrow"/>
        </div>
        <div className="iframe-parent">
            {streamingPlatformWidget}
        </div>
	</div>
	);
}

export default StreamingPlatformWidget;
