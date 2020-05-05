import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";
import "./App.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.handleSubmit("java Script");
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  handleSubmit = async (searchTerm) => {
    const resposne = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDVbd67fO0onrMBvPktM0aY_BQkF4P_4MU",
        q: searchTerm,
      },
    });
    // console.log("vedioe start", resposne.data.items);
    this.setState({
      videos: resposne.data.items,
      selectedVideo: resposne.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onformSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
