import React from 'react'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import { connect } from 'react-redux'
import HomeIcon from 'material-ui-icons/Home'
import SearchIcon from 'material-ui-icons/Search'
import { push } from 'react-router-redux'
import * as styles from './styles.css'


class BottomNavContainer extends React.Component {

  handleRouteChange = (route) => {
    this.props.dispatch(push(route))
  }

  render() {
    return (
      <div className={styles.bottomNavContainer}>
        <BottomNavigation value={this.props.activeRoute}>
          <BottomNavigationAction
              value="search"
              icon={<SearchIcon />}
              onClick={() => this.handleRouteChange('/search')}/>
          <BottomNavigationAction
            value="home"
            icon={<HomeIcon />}
            onClick={() => this.handleRouteChange('/')} />
        </BottomNavigation>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    activeRoute: state.routing.location.pathname === "/" ? 'home' : 'search'
  }
}

export default connect(mapStateToProps)(BottomNavContainer)
