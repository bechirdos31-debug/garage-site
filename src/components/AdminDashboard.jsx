import { useState, useEffect } from "react";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  const API_URL =
    "https://garage-site-6.onrender.com/api/roundez";

  const fetchAppointments = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await response.json();

      setAppointments(data);
    } catch (error) {
      console.error(
        "Erreur de chargement:",
        error
      );
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer ce rendez-vous ?"
    );

    if (!confirmation) {
      return;
    }

    try {
      const response = await fetch(
        API_URL + "/" + id,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Erreur de suppression"
        );
      }

      setAppointments((prev) =>
        prev.filter(
          (item) => item._id !== id
        )
      );

    } catch (error) {
      console.error(
        "Erreur de suppression:",
        error
      );

      alert(
        "Erreur : " + error.message
      );
    }
  };

  return (
    <div className="admin-page">

      <h1>
        Admin Dashboard
      </h1>

      <button
        onClick={fetchAppointments}
      >
        Rafraîchir
      </button>

      <div className="table-responsive">

        <table>

          <thead>

            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Téléphone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {appointments.length > 0 ? (

              appointments.map((item) => (

                <tr key={item._id}>

                  <td>
                    {item.nom || "-"}
                  </td>

                  <td>
                    {item.pre ||
                      item.prenom ||
                      "-"}
                  </td>

                  <td>
                    {item.telephone || "-"}
                  </td>

                  <td>
                    {item.services || "-"}
                  </td>

                  <td>
                    {item.date || "-"}
                  </td>

                  <td>
                    {item.heure || "-"}
                  </td>

                  <td>

                    <button
                      className="btn-delete"
                      onClick={() =>
                        handleDelete(
                          item._id
                        )
                      }
                    >
                      Supprimer
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="7">
                  Aucun rendez-vous trouvé
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;