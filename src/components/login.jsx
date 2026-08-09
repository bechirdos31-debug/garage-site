import { useState } from "react";
import AdminDashboard from "./AdminDashboard";

function Login() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // كلمة السر البسيطة لمولى الڨاراج (تنجم تبدلها)
  const ADMIN_PASSWORD = "admin123garage";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("كلمة السر خاطئة!");
    }
  };

  // إذا دخل كلمة السر صحيحة، تحلّو صفحة المواعيد مباشرة
  if (isLoggedIn) {
    return <AdminDashboard />;
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Espace Admin - Garage</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;