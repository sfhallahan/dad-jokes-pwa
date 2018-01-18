import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import AutorenewIcon from 'material-ui-icons/Autorenew'
import { Card } from 'components'
import { gridContainer, siteTitle, standardText } from 'styles/sharedStyles.css'
import { centeredCard, buttonContainer } from './styles.css'


export default function Home(props) {
  return (
    <div className={gridContainer}>
      <h1 className={siteTitle}>DadJokes</h1>
      <div className={centeredCard}>
        <Card />
      </div>
      <div className={buttonContainer}>
        <p className={standardText}>{'LOL, Another!'}</p>
        <Button fab color="primary" aria-label="refresh">
          <AutorenewIcon />
        </Button>
      </div>
    </div>
  )
}
