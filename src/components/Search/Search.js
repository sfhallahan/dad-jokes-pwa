import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress';
import SearchIcon from 'material-ui-icons/Search'
import { Card } from 'components'
import { gridContainer, siteTitle } from 'styles/sharedStyles.css'
import { searchBar, searchInput, resultsContainer, errorText } from './styles.css'

Search.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchInputText: PropTypes.string.isRequired,
  jokes: PropTypes.array.isRequired
}

export default function Search(props) {
  return (
    <div className={gridContainer}>
      <h1 className={siteTitle}>DadJokes</h1>
      <form className={searchBar}
          onSubmit={(e) => props.onSearch(e)}
          onClick={() => document.getElementById("searchInput").focus()}>
        <input
          id="searchInput"
          className={searchInput}
          type='text'
          value={props.searchInputText}
          onChange={(e) => props.onChange(e)} />
        <SearchIcon />

      </form>
      <div className={resultsContainer}>
        {props.jokes.length === 0 && props.isFetching === false
          ? <p className={errorText}>{'No results to display'}</p>
          : props.jokes.map((joke) => <Card key={joke.id} jokeText={joke.joke} />)
        }
        {props.isFetching === true ? <CircularProgress className={errorText} color="accent" size={50} />: null}

      </div>
    </div>
  )
}
