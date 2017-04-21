var React = require('react');
var SearchBox = require('./searchBox').SearchBox;
var ImageList = require('./imageList').ImageList;
var DisplayImage = require('./displayImage').DisplayImage;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: this.props.imageList,
      displayImage: null
    }
  } // end of constructor function 

  render() {

    var imageClicked = function(image) {
      var me = this;
      console.log('query parameter from client is ',image.title);
      $.get('/api/image?title=' + image.title, function(data){
          var JSONdata = JSON.parse(data);
          me.setState({
            displayImage:JSONdata[0].url
          });
        

      });
    } //end of imageClicked function within the render method

    var searchSubmitted = function(searchTerm) {
      var me = this;
      console.log('search term submitted is ',searchTerm);
      $.get('/api/category?category=' + searchTerm, function(data){
        var JSONdata = JSON.parse(data);
        me.setState({
          imageList: JSONdata,
          displayImage: null
        });
      });
    }

    return(<div>
      <SearchBox submitHandler={searchSubmitted.bind(this)} />
      <ImageList imageList={this.state.imageList} clickHandler={imageClicked.bind(this)} />
      <DisplayImage displayImage={this.state.displayImage}/>
    </div>);

  } //end of render method

};

module.exports.App = App;