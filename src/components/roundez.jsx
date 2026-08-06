function Roundez(){
    return(
        <>
        
        <section className="block4 "id="rendez" >
       <div className="fil">
           <h3>Prenez rendez-vous</h3>
           <label htmlFor="">Nom</label>
           <input type="text" />
           <label htmlFor="">Prenom</label>
           <input type="text" />
           <label htmlFor="">Tel</label>
           <input type="tel" />
           <label htmlFor="">Service souhaité</label>
           <select name="services" id="services"><option value="">Diagnostic</option><option value="1">Vidange</option> 
           <option value="2">Freinage</option>
           <option value="3">Climatisation</option>
           <option value="4">Pneus</option>
           <option value="5">Batterie</option>
           
           
           </select>
           <label htmlFor="">Date</label>
           <input type="date" />
           <label htmlFor="">Heure</label>
           <input type="time" />
           <button>prise un rendez-vous</button>
           





       </div>








       </section>
        
        
        </>
    )
}
export default Roundez