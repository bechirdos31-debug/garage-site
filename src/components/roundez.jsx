
import {useState} from "react";
function Roundez(){
    const[nom,setNom]=useState("");
    const[pre,setPre]=useState("");
    const[date,setDate]=useState("");
    const[heure,setHeure]=useState("");
    const[services,setServices]=useState("");

    const[telephone,setTelephone]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("button cliked")
        try{
            const reponse = await fetch("http://localhost:5000/api/roundez",{method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nom,pre,telephone,services,date,heure,
        }),
    
    
    
    
    });
    const data = await reponse.json();
    alert(data.message);
    setNom("");
    setPre("");
    setTelephone("");
    setServices("");
    setDate("");
    setHeure("");

        }catch( error){ console.log(error);
           
    
    }
    };
    return(
        <>
        
        <section className="block4 "id="rendez" >
       <div className="fil">
           <form onSubmit={handleSubmit} >
           <h3>Prenez rendez-vous</h3>
           <label htmlFor="">Nom</label>
           <input type="text"value={nom} onChange={(e)=> setNom(e.target.value)} />
           <label htmlFor="">Prenom</label>
           <input type="text"value={pre} onChange={(e)=> setPre(e.target.value)}  />
           <label htmlFor="">Tel</label>
           <input type="tel" value={telephone} onChange={(e)=> setTelephone(e.target.value)}  />
           <label htmlFor="">Service souhaité</label>
           <select name="services" id="services" value={services} onChange={(e)=> setServices(e.target.value)} ><option value="0">Diagnostic</option><option value="1">Vidange</option> 
           <option value="2">Freinage</option>
           <option value="3">Climatisation</option>
           <option value="4">Pneus</option>
           <option value="5">Batterie</option>
           
           
           </select>
           <label htmlFor="">Date</label>
           <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
           <label htmlFor="">Heure</label>
           <input type="time"value={heure} onChange={(e)=> setHeure(e.target.value)}  />
           <button type="submit">prise un rendez-vous</button></form>
           





       </div>








       </section>
        
        
        </>
    )
}
export default Roundez