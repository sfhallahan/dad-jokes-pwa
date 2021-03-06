import React from 'react'
import { connect } from 'react-redux'
import { Home } from 'components'
import { fetchNewJoke } from 'redux/modules/activeJoke'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNewJoke())
  }

  render() {
    return (
      <Home
        isFetching={this.props.isFetching}
        joke={this.props.joke}
        error={this.props.error}
        handleRefresh={() => this.props.dispatch(fetchNewJoke())} />
    )
  }
}

function mapStateToProps({ activeJoke }) {
  return {
    isFetching: activeJoke.isFetching,
    joke: activeJoke.joke,
    error: activeJoke.error,
  }
}

export default connect(mapStateToProps)(HomeContainer)
