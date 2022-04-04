import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
// import '../styles/search.css'
const moment = require('moment')

export default function Search({ showExcerpt, size }) {
  // Needed for search functionality
  const searchStore = useStaticQuery(graphql`
    {
      localSearchNotesIndex {
        index
        store
      }
    }
  `)

  const index = searchStore.localSearchNotesIndex.index
  const store = searchStore.localSearchNotesIndex.store

  const [query, setQuery] = React.useState('')
  const results = useFlexSearch(query, index, store)

  let inputClassName = 'form-control'
  if (size === 'medium') {
    inputClassName = 'input is-medium'
  }

  return (
    <form className="search-form" action="/">
      <span>{searchStore.localSearchNotesIndex.publicStoreURL}</span>
      <input
        className={inputClassName}
        type="text"
        placeholder="Search"
        aria-label="Search..."
        name="filter"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {results.length ? (
        <div className="search-result">
          <ul>
            {results.map(result => (
              <li key={result.slug}> 

                <div className="d-flex">
                  <div className="note-title flex-grow-1">
                    <Link to={result.slug}>
                    {result.title}
                    </Link>
                  </div> 

                  <div className="text-muted">
                    {/* {moment(new Date(result.node.fields.date)).fromNow()} */}
                  </div>
                </div>


              </li>
            ))}
          </ul>
          <button
            className="close-search button-link"
            onClick={() => setQuery('')}
          >
            Close
          </button>
        </div>
      ) : null}
    </form>
  )
}
