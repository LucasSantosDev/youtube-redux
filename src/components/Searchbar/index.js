import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchVideo } from "../../store/actions/search-video";

import "./styles.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { searchVideo } = this.props;

    searchVideo("subway surfers");
  }

  pesquisaTermo = (e) => {
    if (e.keyCode === 13) {
      const termo = e.target.value;

      this.props.searchVideo(termo);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Input
          onKeyDown={(e) => this.pesquisaTermo(e)}
          icon="search"
          size="large"
          placeholder="Search..."
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideo: (termo) => dispatch(searchVideo(termo)),
  };
};

export default connect(null, mapDispatchToProps)(Searchbar);
