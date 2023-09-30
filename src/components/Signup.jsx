// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { UserAuth } from '../Context/AuthContext';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const {createUser} = UserAuth()
  
//   const handleSignUp = async () => {
//   e.preventDefault()
//   setError('')
//   try{
//       await createUser(email, password)
//   } catch (e) {
//     setError(e.message)
//     console.log(e.message)
//   }
//   }

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </label>
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
