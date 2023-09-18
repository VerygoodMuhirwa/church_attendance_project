import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading , setIsLoading]  = useState(false)
    const navigate= useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = {
            email,
            password
        }
        setIsLoading(true)
        const res = await axios.post("https://church-attendance.onrender.com/api/v1/admin/registerAdmin", formData)
        if (res.data) {
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
                setEmail("")
                setPassword("")
                setError("")
                navigate("/")
            }
        }
    }
  return (
      <div className='form-container'>
          <form>
              <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter the email' />
              <input type="password" name='password' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the password' />
             
              <LoadingButton
                  className='mui-button'
                  color="secondary"
                  onClick={handleSubmit}
                  loading={isLoading}
                  loadingPosition="start"
                  // startIcon={<SendIcon />}
                  variant="contained"
              >
                  <span>Register </span>
              </LoadingButton>
              <a href="/" style={{ textDecoration: "none", paddingTop: "1em" }}>Already have an account? Login</a>

          </form>
          <ToastContainer/>
    </div>
  )
}

export default SignUp