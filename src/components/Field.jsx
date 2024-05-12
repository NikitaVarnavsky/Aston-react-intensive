import React from 'react';

class Field extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = props.text;
  }

  render() {
    return <h1>{this.state}</h1>;
  }
}

export default Field;
