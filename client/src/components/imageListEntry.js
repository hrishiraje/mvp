// var React = require('react');
import React from 'react';

class ImageListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views:0
    }
  }

  // clickHandler(image){
  //   this.setState({
  //     views: this.state.views++
  //   });
  //   this.props.clickHandler(image);
  // }

  render(){

    var clickHandler = function(image) {
    this.setState({
      views: this.state.views+1
    });
    this.props.clickHandler(image,this.state.views);
   };

    return(
      <div>
      <td class="imageListEntry" onClick={clickHandler.bind(this, this.props.image)}>
        {this.props.image.title}
        </td>
        <td class="views" align="right">
          {this.state.views}
          </td>
          </div>
    );
  }

};

export default ImageListEntry;