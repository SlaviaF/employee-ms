import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); 
    const { login } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {email, password});
            if(response.data.success) {
              login(response.data.user)
              localStorage.setItem("token", response.data.token)
              if (response.data.user.role === "admin") {
                navigate('/admin-dashboard')
              } else {
                navigate('/employee-dashboard')
              }
            }
        }
         
        catch (e) {
          
            if(e.response && !e.response.data.success) {
                setError(e.response.data.error)
            }else {
              setError("Server Error");
            }
        }

    }

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-br from-slate-900 to-indigo-900 space-y-6">
        <h2 className="text-white text-3xl font-bold tracking-wide">
          PeopleIT
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-80 space-y-4">
            <div className="flex flex-col space-y-1">
                <label className="text-slate-300 text-sm" htmlFor="email">Email</label>
                <input className="p-2 rounded-sm bg-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400" type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-slate-300 text-sm" htmlFor="password">Password</label>
                <input className="p-2 rounded-sm bg-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400" type="password" placeholder='*******' onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-2 rounded-sm font-semibold transition-colors">
              Login
            </button>
        </form>
    </div>
  )
}

export default Login