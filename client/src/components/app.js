// var React = require('react');
// var SearchBox = require('./searchBox').SearchBox;
// var ImageList = require('./imageList').ImageList;
// var DisplayImage = require('./displayImage').DisplayImage;

import React from 'react';
import ImageList from './imageList.js';
import SearchBox from './searchBox.js';
import DisplayImage from './displayImage.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listTitle: 'Category: Dog',
      imageList: this.props.imageList,
      displayImage: null
    }
  } // end of constructor function 

  render() {
    console.log("THIS PROPS", this.props);
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
          listTitle: 'Category: ' + searchTerm,
          imageList: JSONdata,
          displayImage: null
        });
      });
    }

    return(<div>
      <SearchBox submitHandler={searchSubmitted.bind(this)} />
      <ImageList imageList={this.state.imageList} clickHandler={imageClicked.bind(this)} listTitle={this.state.listTitle} />
      <DisplayImage displayImage={this.state.displayImage}/>
    </div>);

  } //end of render method

};

export default App;