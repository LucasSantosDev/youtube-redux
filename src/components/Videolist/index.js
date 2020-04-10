import React, { Component } from "react";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { playVideo } from "../../store/actions/play-video";

import { dot3 } from "../../helpers/utils";

import "./styles.css";

class Videlist extends Component {
  render() {
    const { videos, loading, error, playVideo } = this.props;

    return (
      <div className="video-list">
        {loading && (
          <Dimmer active inverted>
            <Loader size="medium">Carregando...</Loader>
          </Dimmer>
        )}

        {!loading &&
          videos &&
          videos.map((video) => (
            <List
              key={`${video.id.videoId}`}
              className="item-list"
              verticalAlign="middle"
            >
              <List.Item onClick={() => playVideo(video)}>
                <Image src={video.snippet.thumbnails.default.url} />
                <List.Content>
                  <List.Header title={video.snippet.title}>
                    <span className="title-video">
                      {dot3(video.snippet.title, 25)}
                    </span>
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playVideo: (video) => dispatch(playVideo(video)),
  };
};

const mapStateToProps = (state) => ({
  videos: state.searchVideo.videos,
  loading: state.searchVideo.loading,
  error: state.searchVideo.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Videlist);
