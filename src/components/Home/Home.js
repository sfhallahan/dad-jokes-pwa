import React from 'react'
import PropTypes from 'prop-types'
import { gridContainer, siteTitle } from 'styles/sharedStyles.css'

export default function Home(props) {
  return (
    <div className={gridContainer}>
      <h1 className={siteTitle}>DadJokes</h1>
    </div>
  )
}
