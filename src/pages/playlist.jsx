import * as React from "react"   
 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Clock from "../components/icons/Clock"
import { BsArrowLeft } from "react-icons/bs";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx" 
  

// markup
const PlaylistPage = ({data}) => {

  const listeningHistory = data.allLastfmPlayback.nodes; 
  console.log(listeningHistory) 

  return (
    <Layout>


    <div className="row">
        <div className="col-md-2 mb-5">
          <Link to="/"><BsArrowLeft/></Link>
        </div>
    <div className="col-md-9 offset-md-1">
          <h2>Playlist</h2> 
          <p>I enjoy archiving the new tracks I find, the ones I listen to most, as well as the phases that exist in my listening history. Since 2017, I create a new discovery playlist for each month, and next to Spotify's annual <em>Your Top Songs</em> playlists I create my own for the calendar year. Eventually, I chronicle my years into playlists that denote a particular season of my life.</p>
          <a href="https://open.spotify.com/user/zinzy_/playlists" target="_blank" rel="noopener noreferrer" className="btn">My Seasons of Life playlists</a>

          <div className="mt-5">
          <h3>Recent tracks</h3>
        </div>


        <ul class="playlist list-unstyled mt-10">
          {
            listeningHistory.map(node => (
              <li key={node.id}>   
                <a href="{node.track.url}" target="_blank" rel="noopener noreferrer">
                  <div className="row">
                    <div className="col-2 col-md-1 d-flex align-items-center">
                      <img src={node.track.image[2].text} className="img-fluid rounded" alt="{node.track.name}" />
                    </div>
                    <div className="col-10 col-md-11 d-md-flex">
                        <div className="flex-md-grow-1">{node.track.name}</div> 
                        <div className="text-muted text-md-end">{node.track.artist.name}</div> 
                    </div>
                  </div>
                </a>
              </li>
            ))
          }
          </ul>
    </div>
  </div>
 
    </Layout>
  )
}
 
export const query = graphql`
query lastfmQuery {
  allLastfmPlayback {
    nodes {
      track {
        name
        artist {
          name
        }
        id
        album {
          name
        }
        url
        image {
          text
          size
        }
        playbacks {
          date
        }
      }
    }
  }
} 
`

export default PlaylistPage
