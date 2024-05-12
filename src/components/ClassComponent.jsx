import React from 'react';
import Field from './Field';

class FirstClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
          <input type='text' />
          <button>Submits {this.state.count}</button>
        </form>
        <Field text='Классовый компонент' />
      </>
    );
  }
}
export default FirstClass;
