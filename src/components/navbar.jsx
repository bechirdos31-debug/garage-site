function Navbar(){
    return(
        <> <header class="block1">
          <div className="scroll"></div>
        <nav class="nav">
          
          <div class="logo">
            <img src="LOGO.png" alt="" width="200px" />
          </div>
          
          <a href="#acceuil">ACCUEIL</a>
          
  
          <a href="#poropos">A PROPOS</a>
          <a href="#services">SERVICES</a>
          <a href="#rendez">PRISE DE RENDEZ-VOUS</a>
          <a href="#contact">CONTACT</a>
        </nav>
  
      
      
        
        <div >
  <video autoPlay loop muted playsInline  id="bg-video">
    <source src="/garage.mp4" type="video/mp4" />
  </video>
</div>
          <div class="c">
            <div class="p">
              <h1>GARAGE EXPRESS</h1>
              <p>Entretien, réparation et diagnostic de tous types de véhicules <br /> Qualité,rapidité et fiabilité</p>
            </div>
            
            <button >Prise de rendez-vous</button>
          </div>
      </header>
        
        
        
        </>
    )
}
export default Navbar