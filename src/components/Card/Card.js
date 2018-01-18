import React from 'react'

import {cardContainer, jokeText} from './styles.css'

export default function Card(props) {
  return (
    <div className={cardContainer}>
      <p className={jokeText}>
          {`"Why is the ocean always blue? Because the shore never waves back."`}
      </p>
    </div>
  )
}
