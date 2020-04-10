import React, { Component } from "react";
import { connect } from "react-redux";
import { Advertisement, Embed } from "semantic-ui-react";

import "./styles.css";

class Videoplayer extends Component {
  render() {
    const { video } = this.props;

    return (
      <div className="video-player">
        {!video || !video.id ? (
          <Advertisement
            className="advertisement"
            unit="top banner"
            test="Escolha um video para reproduzir"
          />
        ) : (
          <div>
            <Embed
              className="embed-video"
              id={video.id.videoId}
              source="youtube"
              placeholder=""
            />
            <div className="description">
              <p>{video.snippet.title}</p>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.playVideo.video,
});

export default connect(mapStateToProps, null)(Videoplayer);
