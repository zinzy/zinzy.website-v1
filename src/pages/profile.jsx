import * as React from "react" 
import Layout from "../components/layout"
  

// markup
const ProfilePage = () => {
  return (
    <Layout>
      <title>About Zinzy Nev Geene</title>

        <div className="row">
          <div className="col-lg-8 offset-lg-4">
            <h2>Zinzy Nev Geene is a design manager, linguist, and queer facilitator in Amsterdam.</h2>
            <p>Heya pal, welcome to my little island on the Internet. I'm the design and product manager of <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>, a Dutch startup in education technology.</p>
          </div>
        </div>  
     
      <section className="my-5 py-5">  

        <div className="bg-primary p-4 p-lg-5">
        <div className="row"> 
          <div className="col-4"><img src="../zinzy-2.jpg" alt="" className="img-fluid mt-5 p-lg-1 pt-lg-5" /></div>
          <div className="col-4"><img src="../zinzy-3.jpg" alt="" className="img-fluid p-lg-3" /></div>
          <div className="col-4"><img src="../zinzy-4.jpg" alt="" className="img-fluid mt-4 p-lg-2 pt-lg-5" /></div>
        </div>
        </div>

        <p>I like to answer questions and question answers. I currently practice this as design and product manager at <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>, a startup in education technology.</p>

        <p>Outside of office hours, I work as a queer facilitator, building resonant spaces for the LGBTQIA+ community. I currently serve as leader at <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an online community for queer Catholics. I'm also the founder and host of  <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam.</p>

        <p>I grew up in the <a href="https://en.wikipedia.org/wiki/Burgundian_Netherlands#%22Burgundian_character%22" target="_blank" rel="noopener noreferrer">Burgundian South</a> where I learned to play every instrument in the marching band. After high school I studied, linguistics, literature, and theology, graduating from Utrecht University in the class of 2014. My academic background keeps me infinitely fascinated by the stories we tell and what they mean to us.</p>

        <p>Together with my favorite person on the planet, <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>, I live in the Amsterdam East Side. I enjoy gardening, writing, and learning the love language of cooking.</p>

        <p>Life is pretty sweet.</p>
      </section>
     
    </Layout>
  )
}
 
export default ProfilePage
