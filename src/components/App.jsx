import exampleVideoData from "../data/exampleVideoData.js";
import searchYoutube from "../lib/searchYoutube.js";
import fakeVideoData from "../../../spec/data/fakeVideoData.js";

import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      videos: [],
      currentVideo: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.submitHandler = this.submitHandler.bind(this);


  }

  submitHandler(textInput) {
    searchYoutube(textInput, (videos) => {

      this.setState({
        videos: videos
      });
    });
  }

  handleClick(event) {
    var index = event.target.attributes.value.value;
    event.preventDefault();

    this.setState({
      currentVideo: this.state.videos[index]
    });
  }


  render() {
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search submitHandler={this.submitHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {Object.keys(this.state.currentVideo).length ? <VideoPlayer video={this.state.currentVideo}/> : <div> mainvideo </div>}

          </div>
          <div className="col-md-5">
            {this.state.videos.length ? <VideoList videos={this.state.videos} handleClick={this.handleClick}/> : <div> List here </div>}

          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    searchYoutube('', (videos) => {
      console.log('initializing recastly');
      this.setState({
        videos: videos,
        currentVideo: videos[0],
      });
    });
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// ReactDOM.render(<App/>, document.getElementById('app'));

