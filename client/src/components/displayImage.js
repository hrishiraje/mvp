var React = require('react');

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div>
      <img src={this.props.displayImage}/>
      </div>
    );
  }
};

module.exports.DisplayImage = DisplayImage;