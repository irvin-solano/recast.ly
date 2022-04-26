class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.userInput);
  }
  handleInputChange(event) {
    //console.log(event.target.value);
    this.setState({ userInput: event.target.value });
    this.props.submitHandler(this.state.userInput);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.handleInputChange} onSubmit={this.handleSubmit} className="form-control" type="text" />
        <button onClick={this.handleSubmit} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
