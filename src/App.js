import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import _ from 'lodash';

import YTSearch from 'youtube-api-search';
import './style.css';
const API_KEY = 'AIzaSyBl2rSvucQOwo9sgmvzzugCGQkYu_ioRNw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('dc');
  }
  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div class="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <div class="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo =>
              this.setState({ selectedVideo: selectedVideo })
            }
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
