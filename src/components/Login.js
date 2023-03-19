// import React, { useState } from 'react';

// function Login() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log(`Logging in with username: ${username} and password: ${password}`);
//     // TODO: Implement login logic
//   };

//   const handleGetStarted = () => {
//     setShowLogin(true);
//   };

//   return (
//     <div>
//       {!showLogin && (
//         <button onClick={handleGetStarted}>Get Started</button>
//       )}
//       {showLogin && (
//         <form onSubmit={handleLogin}>
//           <label>
//             Username:
//             <input type="text" value={username} onChange={handleUsernameChange} />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input type="password" value={password} onChange={handlePasswordChange} />
//           </label>
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Login;
