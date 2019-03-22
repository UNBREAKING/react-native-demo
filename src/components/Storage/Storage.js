import React, { Component } from 'react';

class Storage extends Component {

  componentDidMount() {
    const { getWeghtsFromStorage } = this.props

    getWeghtsFromStorage()
  }

  render = () => null
}

export default Storage