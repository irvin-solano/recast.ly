import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
    this.handleClick = this.handleClick.bind(this);


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
            <div><h5><em>search</em> view goes right right here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// ReactDOM.render(<App/>, document.getElementById('app'));

