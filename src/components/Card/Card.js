import React from 'react'
import PropTypes from 'prop-types'

import {cardContainer, jokeText} from './styles.css'

Card.propTypes = {
  jokeText: PropTypes.string.isRequired,
  favorited: PropTypes.bool,
  dateReceived: PropTypes.number,
}

export default function Card(props) {
  return (
    <div className={cardContainer}>
      <p className={jokeText}>
          {`"${props.jokeText}"`}
      </p>
    </div>
  )
}
