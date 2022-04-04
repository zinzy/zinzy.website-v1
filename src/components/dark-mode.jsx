import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// :TODO: If there are two instances of the DarkMode in a page(as the case in header.jsx), one instance will not work properly - first click will work, then it wont work.

class DarkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-switcher">
            <input
              type="checkbox"
              onChange={e => {
                toggleTheme(e.target.checked ? 'dark' : 'light')
              }}
              checked={theme === 'dark'}
              hidden
            />
            {theme === 'dark' ? (
              <div>
              Light
              </div>
            ) : (
              <div>
              Dark
              </div>
            )}
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
