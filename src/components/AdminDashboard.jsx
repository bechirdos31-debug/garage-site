import { useState, useEffect } from "react";

function AdminDashboard() {
  const [listeRendezVous, setListeRendezVous] = useState([]);
  const [loading, setLoading] = useState(true);

  // دالة جلب المواعيد من الـ Backend
  const fetchRendezVous = async () => {
    try {
      const response = await fetch("http://localhost:5174/api/roundez");
      const data = await response.json();
      setListeRendezVous(data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRendezVous();
  }, []);

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#333", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>
        Espace Admin - Liste des Rendez-vous
      </h2>

      <button 
        onClick={fetchRendezVous} 
        style={{ 
          padding: "10px 18px", 
          marginBottom: "20px", 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: "pointer" 
        }}
      >
        Rafraîchir (تحديث القائمة)
      </button>

      {loading ? (
        <p>Chargement des données...</p>
      ) : listeRendezVous.length === 0 ? (
        <p>Aucun rendez-vous trouvé.</p>
      ) : (
        <table border="1" cellPadding="12" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Téléphone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Heure</th>
            </tr>
          </thead>
          <tbody>
            {listeRendezVous.map((rv) => (
              <tr key={rv._id}>
                <td>{rv.nom}</td>
                <td>{rv.pre}</td>
                <td>{rv.telephone}</td>
                <td>{rv.services}</td>
                <td>{rv.date}</td>
                <td>{rv.heure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;