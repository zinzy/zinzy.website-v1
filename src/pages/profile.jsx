import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
  

// markup
const ProfilePage = ({data}) => {

  const listeningHistory = data.allLastfmPlayback.nodes; 
  console.log(listeningHistory) 

  return (
    <Layout>
      <title>About Zinzy Nev Geene</title>

        <section className="">
          <div className="row"> 
            <div className="col-lg-8 offset-lg-4">
              <h2 className="h1">Zinzy Nev Geene is a designer, linguist, and queer facilitator in Amsterdam.</h2>
              <p>Heya pal, welcome to my little island on the Internet. I've been maintaining this space, in a variety of forms and across a variety of domains, since around 2003. Currently you'll find that it contains mostly soft stances, lived experiences, and critical notes on the things I hold dear.</p>
            </div>
          </div>   
        </section>

        <div className="breakout my-5">
          <div className="bg-primary py-5">
            <div className="container my-5">
              <div className="row"> 
                <div className="col-4">
                  <div className="bg-primary filtered"><img src="../zinzy-2.jpg" alt="" className="img-fluid mt-5 rounded" /></div>
                </div>
                <div className="col-4">
                  <div className="bg-primary filtered"><img src="../zinzy-3.jpg" alt="" className="img-fluid rounded" /></div></div>
                <div className="col-4">
                  <div className="bg-primary filtered">
                  <img src="../zinzy-4.jpg" alt="" className="img-fluid mt-5 rounded" /></div></div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-5">
          <div className="row">
            <div className="col-lg-3 d-flex align-items-center">
              <h3 className="h5">
              I like to make tools that people use to solve problems at work
              </h3>
            </div>
            <div className="col-lg-8 offset-lg-1 d-flex align-items-center">
                  <div>
                    <p><span className="p-title text-muted">Work tools</span>I'm a designer with thirteen years of skin in the game and experience leading design and branding projects in travel, health care, academia, and journalism. I'm specialized in making digital enterprise products, tools that people use at work.</p>
                    <p><span className="p-title text-muted">Edtech</span>I currently practice this at <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>, a Dutch startup in education technology, where I serve as <mark>design and product manager</mark>. It's a great honor to be part of improving the quality, equality, and productivity of Dutch primary education.</p>
                    <p className="m-0"><span className="p-title text-muted">Experience</span>Before I joined Leeruniek, I led design for five years in travel technology at Airtrade. In 2015, I closed Studio Zinzy, a design and branding boutique I had run for eight years.</p>
                  </div>
            </div>
          </div>
        </section>
 
        <div className="breakout my-5 text-center">
            <div className="bg-light py-5">
              <div className="container my-5">
              <div className="row">
                  <div className="col-12">
                    <h3 className="m-0 p-0">The hats I wear at work</h3>
                  </div>
                  <div className="col-lg-12">
                    
                      <div className="row mt-4 pt-4">
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                          <div className="card border-0 p-3 border-rounded shadow-lg">
                            <span className="h2" role="img" aria-label="Raising Hands">🙌</span>
                            <h4 className="h5">Evangelist</h4>
                            <p className="m-0 text-muted">I'm a catalyst in businesses on a journey towards better design thinking</p>
                          </div> 
                        </div> 
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                          <div className="card border-0 p-3 border-rounded shadow-lg">
                            <span className="h2" role="img" aria-label="Ping pong">🏓</span>
                            <h4 className="h5">Mentor</h4> 
                            <p className="m-0 text-muted">I encourage teams to improve user work lives as they navigate politics and strategy</p>
                          </div> 
                        </div> 
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                          <div className="card border-0 p-3 border-rounded shadow-lg">
                          <span className="h2" role="img" aria-label="Flag in Hole">⛳</span>
                            <h4 className="h5">Evangelist</h4>
                            <p className="m-0 text-muted">I turn big beasts into snackable chunks so that designers and developers can get creative</p>
                          </div> 
                        </div> 
                        <div className="col-md-6 col-lg-3">
                          <div className="card border-0 p-3 border-rounded shadow-lg">
                            <span className="h2" role="img" aria-label="Roller Skate">🛼</span>
                            <h4 className="h5">DesignOps</h4>
                            <p className="m-0 text-muted">I amplify the value of design by putting the right people, workflows, and outputs in place</p>
                          </div> 
                        </div>  
                      </div> 
                  </div> 
                </div>
              </div>
            </div>
        </div>

        <section className="py-5">
          <div className="row">
            <div className="col-lg-3 d-flex align-items-center">
              <h3 className="h5">
              I build resonant spaces for LGBTQIA+ communities
              </h3>
            </div>
            <div className="col-lg-8 offset-lg-1 d-flex align-items-center">
              <div>
                <p><span className="p-title text-muted">Online</span>Since 2020 I've been on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international community for LGBTQIA+ Catholics. I appreciate that it gives me the opportunity to cultivate an atmosphere of acceptance and curiosity in a community that so often is burdened by rejection and shame.</p>
                <p className="m-0"><span className="p-title text-muted">Live gatherings</span>Every last Sunday of the month since the Spring of 2018 I have been hosting <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a>, an intimate gathering for LGBTQIA+ individuals in Amsterdam. My aim is for it to be a space where <a href="/Quiet-queer-spaces/">quiet queer people</a> come to connect and be themselves.</p>
              </div>
            </div>
          </div>
        </section>
      
        <div className="breakout my-5">
          <div className="bg-dark pt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-3">
                  <h3 className="text-white">
                    What I'm vibing to today
                  </h3>
                  <p className="text-muted">Follow me on <a href="https://open.spotify.com/user/zinzy_" target="_blank" rel="noopener noreferrer">Spotify</a></p>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0"> 
                <div class="fade-box text-white">
                  <ul class="list-unstyled">
                    {
                      listeningHistory.map(node => (
                        <li key={node.id}>   
                          <a href="{node.track.url}" target="_blank" rel="noopener noreferrer">
                            <div className="row mb-4">
                              <div className="col-2">
                                <img src={node.track.image[2].text} className="img-fluid rounded" alt="{node.track.name}" />
                              </div>
                              <div className="col-10">
                              <div className="text-white">{node.track.name}</div> 
                              <div className="text-muted">{node.track.artist.name}</div> 
                              </div>
                            </div>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                  <p class="fade-box-overlay"></p>
                </div>
 
                </div>
              </div>
            </div>
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
      }
    }
  }
} 
`

export default ProfilePage
