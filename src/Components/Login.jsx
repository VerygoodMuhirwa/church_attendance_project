import React, { useState } from 'react'
import axios from "axios"
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [error,setError ]  = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [isLoading,setIsLoading]  = useState(false)
const [showPassword,setShowPassword]  = useState(false)
    const handleSubmit = async (e) => {

        e.preventDefault()
                const formData = {
            email,
            password
        }

        try {
          setIsLoading(true)
          const res = await axios.post("https://attendance-cpsk.onrender.com/api/v1/admin/loginAdmin", formData)
        
            if (res.data) {
              if (res.data.error) {
                  setError(res.data.error)
                  toast.error(res.data.error)
                  setIsLoading(false)
              } else {
                  localStorage.setItem("token", JSON.stringify(res.data.token))
                  setEmail("")
                  setPassword("")
                  setError("")
                  

                  
                  setIsLoading(false)
                  toast.success("Logged in successfully")
                  setTimeout(() => {
                    navigate("/users")
                   }, 2000);
                }
            }
                
                 
         


        
      } catch (error) {
          console.log(error);
      }
    }
    
    return (
        <div className='form-container'>
            <form>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the email' />
                <div className='input-class' style={{ display: 'flex', alignItems: 'center', height: "60px",  borderRadius:"10px" ,paddingTop: "none", marginTop: "1em", background:"rgb(245, 241, 241)"}}>
                    <input
                        type={showPassword? "text":"password"}
                        name="password"
            
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter the password"
                        style={{ flex: 1, marginRight: '8px'  }} 
                    />
                    {showPassword ? <AiFillEyeInvisible onClick={() => setShowPassword(false)} style={{ marginRight: "1em" }} /> : <AiFillEye style={{ marginRight: "1em" }} onClick={() => setShowPassword(true)} />
 }
                </div>

                <LoadingButton  
                    className='mui-button'
                    color="secondary"
                    onClick={handleSubmit}
                    loading={isLoading}
                    loadingPosition="start"
                    variant="contained"
                >
                    <span>Login </span>
                </LoadingButton>
            
                <a href="/register" style={{textDecoration:"none", paddingTop:"1em"}}>Don't have an account? Please sign up</a>

            </form>
            <Toaster />
                
        </div>
    )
}

export default Login