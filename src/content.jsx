import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{ this.props.content }</h1>
      </div>
    );
  }
}
