import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [error,setError ]  = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [isLoading,setIsLoading]  = useState(false)
    const handleSubmit = async (e) => {

        e.preventDefault()
                const formData = {
            email,
            password
        }

        try {
          setIsLoading(true)
          const res = await axios.post("https://church-attendance.onrender.com/api/v1/admin/loginAdmin", formData)
        
            if (res.data) {
            //   setIsLoading(false)
              if (res.data.error) {
                  setError(res.data.error)
                  toast.error(res.data.error, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                  })
                  setIsLoading(false)
              } else {
                  localStorage.setItem("token", JSON.stringify(res.data.token))
                  setEmail("")
                  setPassword("")
                  setError("")
                  toast.success("Logged in successfully", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                  })

                  setIsLoading(false)
                
                  navigate("/users")
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
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter the password' />
                {/* <Button loading={isLoading} variant='contained' onClick={handleSubmit}>Login</Button> */}
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
            <ToastContainer />
                
        </div>
    )
}

export default Login