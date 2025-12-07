import React, { useContext, useState } from "react"; 
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setuser } = useContext(UserContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br>
      </br>
      <input
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
