import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface Data {
  url: string;
  name: string;
}
function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<Data | null>(null)

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    // document.cookie = "token=;";
    navigate("/");
  };

  const fetchImage = async () => {
    console.log('fetch Image called')
    const response = await axios.get('http://localhost:3000/getData', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    console.log('Data-------->', response)
    setData(response.data)
  }

  useEffect(() => {
    fetchImage()
  }, [])


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Dashboard </h2>
      <img src={data?.url} alt="profile" />
      <br />
      < button onClick={handleLogout} > Logout </button>
    </div>
  );
}

export default Dashboard;
