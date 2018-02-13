import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress';
import AutorenewIcon from 'material-ui-icons/Autorenew'
import { Card } from 'components'
import { gridContainer, siteTitle, standardText } from 'styles/sharedStyles.css'
import { centeredCard, buttonContainer } from './styles.css'

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  joke: PropTypes.object.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

export default function Home(props) {
  return (
    <div className={gridContainer}>
      <h1 className={siteTitle}>DadJokes</h1>
      <div className={centeredCard}>
      {props.isFetching
        ? <CircularProgress color="accent" size={50} />
        : <Card
            error={props.error}
            jokeText={props.joke.jokeText}
            favorited={props.joke.favorited}
            dateReceived={props.joke.dateReceived}/>
      }
      </div>
      <div className={buttonContainer}>
        <p className={standardText}>{'LOL, Another!'}</p>
        <Button fab color="primary" aria-label="refresh" onClick={props.handleRefresh}>
          <AutorenewIcon />
        </Button>
      </div>
    </div>
  )
}
