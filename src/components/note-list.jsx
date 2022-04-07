import React from 'react'
import { Link, navigate } from 'gatsby'
// import '../styles/note.css'
const moment = require('moment')

export default function NoteList({ notes }) {
  return (
    <div className="block note-cards note-list">
      {notes.map((data, index) => (
        <div className="">
          <div
          className="note-list-item d-flex"
          key={index}
          role="button"
          tabIndex={index}
          onClick={() => {
            navigate(data.node.fields.slug)
          }}
          onKeyDown={event => {
            if (event.keycode === 13) navigate(data.node.fields.slug)
          }}
        >
 

          <div className="note-title flex-grow-1">
            <Link to={`${data.node.fields.slug}`}>
              {data.node.fields.title}
            </Link>
          </div> 

          <div className="text-muted d-none d-md-block">
            {moment(new Date(data.node.fields.date)).fromNow()}
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}
