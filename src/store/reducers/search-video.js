const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: null,
};

const searchVideo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@SEARCH_VIDEO_INIT":
      return {
        videos: [],
        loading: true,
        error: null,
      };
    case "@SEARCH_VIDEO_SUCCESS":
      return {
        videos: action.videos,
        loading: false,
        error: null,
      };
    case "@SEARCH_VIDEO_ERROR":
      return {
        videos: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default searchVideo;
