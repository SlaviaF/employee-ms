import React, { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext()
const authContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    //Though it is get, the data like token can be send in the headers something like this
                    // GET /api/auth/verify HTTP/1.1
                    // Host: localhost:3000
                    // Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
                    const response = await axios.get('http://localhost:3000/api/auth/verify', {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    if (response.data.success) {
                        setUser(response.data.user)
                    }

                } else {
                    setUser(null)

                }

            } catch (e) {
                if (e.response && !e.response.data.success) {
                    setUser(null)
                }
            }
            finally {
                setLoading(false)
            }
        }
        verifyUser();
    }, [])
    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
    return (
        <userContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </userContext.Provider>
    )
}

export const useAuth = () => useContext(userContext);
export default authContext