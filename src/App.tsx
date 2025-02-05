import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true)
    console.log('Handle login')
    // const data = await axios.get('http://localhost:3000')
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password
      })
      console.log('data', response)
      if (response.status === 200) {
        sessionStorage.setItem("token", response?.data?.token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log('Invalid credentials', err)
      sessionStorage.removeItem("token");
      alert('Wrong credential')
    }
    setLoading(false)
  }

  const handleRegister = async () => {
    setLoading(true)
    console.log('Handle register')
    try {
      const data = await axios.post('http://localhost:3000/register', {
        username,
        password
      })
      console.log('data', data)
      sessionStorage.setItem("token", data?.data?.token);
    } catch (err) {
      console.log('Errror', err)
    }
    setLoading(false)
  };

  return (
    loading ? <h1>Loading...</h1> :
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login/Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
  );
}

export default App
