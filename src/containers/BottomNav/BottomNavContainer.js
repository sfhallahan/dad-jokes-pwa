import React from 'react'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import * as styles from './styles.css'


export default class BottomNavContainer extends React.Component {
  render() {
    return (
      <div className={styles.bottomNavContainer}>
        <BottomNavigation value='home'>
          <BottomNavigationAction value="home" icon={<HomeIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}
