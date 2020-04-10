import youtubeSearch from "youtube-api-v3-search";
import YTApi from "../../config/apiKey";

const API_KEY = YTApi;

export const searchVideoInit = () => {
  return {
    type: "@SEARCH_VIDEO_INIT",
    loading: true,
    error: null,
  };
};

export const searchVideoSucess = (videos) => {
  return {
    type: "@SEARCH_VIDEO_SUCCESS",
    videos: videos,
    loading: false,
    error: null,
  };
};

export const searchVideoError = (error) => {
  return {
    type: "@SEARCH_VIDEO_ERROR",
    loading: false,
    error: error,
  };
};

export const searchVideo = (termo) => {
  return (dispatch) => {
    dispatch(searchVideoInit());
    youtubeSearch(API_KEY, { q: termo })
      .then((data) => dispatch(searchVideoSucess(data.items)))
      .catch((error) => dispatch(searchVideoError(error)));
  };
};
