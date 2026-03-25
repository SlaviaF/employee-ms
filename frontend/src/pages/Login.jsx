import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("")
        }
        catch (e) {
            console.log(e);
        }

    }

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-br from-slate-900 to-indigo-900 space-y-6">
        <h2 className="text-white text-3xl font-bold tracking-wide">
          PeopleIT
        </h2>
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-80 space-y-4">
            <div className="flex flex-col space-y-1">
                <label className="text-slate-300 text-sm" htmlFor="email">Email</label>
                <input className="p-2 rounded-sm bg-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400" type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-slate-300 text-sm" htmlFor="password">Password</label>
                <input className="p-2 rounded-sm bg-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400" type="password" placeholder='*******' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-2 rounded-sm font-semibold transition-colors">
              Login
            </button>
        </form>
    </div>
  )
}

export default Login