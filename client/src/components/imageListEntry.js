var React = require('react');

class ImageListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(image){
    this.props.clickHandler(image);
  }

  render(){
    return(
      <td onClick={this.clickHandler.bind(this, this.props.image)}>
        {this.props.image.title}
        </td>
    );
  }

};

module.exports.ImageListEntry = ImageListEntry;