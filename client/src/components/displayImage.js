import React from 'react';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div>
      <img class="image" src={this.props.displayImage}/>
      </div>
    );
  }
};

export default DisplayImage;