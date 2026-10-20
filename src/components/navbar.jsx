import {Link} from'react-router-dom'
import { useState, useEffect } from "react";

function Navbar(){
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  
 
  
    return(
      
      
        <> <header className="block1">
          <div className="scroll"></div>
          <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          
          <div className="logo">
            <img src="LOGO.png" alt="" width="200px" />
          </div>
          
          <a href="#acceuil">ACCUEIL</a>
          
  
          <a href="#poropos">A PROPOS</a>
          <a href="#services">SERVICES</a>
          <a href="#rendez">PRISE DE RENDEZ-VOUS</a>
          <a href="#contact">CONTACT</a>
        </nav>
  
      
      
        
        <div >
  <img src="garage.jpg" alt="" id='bg' />
</div>
          <div className='c'>
            <div className='p'>
              <h1>GARAGE EXPRESS</h1>
              <p>Entretien, réparation et diagnostic de tous types de véhicules <br /> Qualité,rapidité et fiabilité</p>
            </div>
            

<Link to="/roundez" ><button>
  Prendre un rendez-vous</button>
</Link>
            
            
          </div>
        
      </header>
      
        
        
        
        </>
             )
}
export default Navbar