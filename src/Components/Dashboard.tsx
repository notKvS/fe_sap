import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style= {{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Dashboard </h2>
      < button onClick = { handleLogout } > Logout </button>
    </div>
  );
}

export default Dashboard;
