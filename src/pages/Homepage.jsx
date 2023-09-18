import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const [userDatas, setUserData] = useState()
  const [errorMessage,setErrorMessage] = useState("")
  const token = JSON.parse(localStorage.getItem("token"))
  const fetchData = async () => {
    const res = await axios.get("https://church-attendance.onrender.com/api/v1/members/getMembers",
      {
      headers: {
        authorization:`Bearer ${token}`
      }
      }
    
    )
    if (res.data) {
      if (res.data.message) {
        setErrorMessage(res.data.message)
      } else {
        setUserData(res.data)
       
      } 
    } 

      
    
  }
  useEffect(() => {
   fetchData()
  }, [])
  const navigate= useNavigate()
  const handleClick = () => {
  navigate("/formData")
  }


  const handleDelete = async(id) => {
    const res = await axios.delete("https://church-attendance.onrender.com/api/v1/members/deleteMember/" + id, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if (res.data) {
window.location.reload()
    }
  }


  const handleUpdate = async (data) => {
    localStorage.setItem("userToUpdate", JSON.stringify(data))
    navigate("/update")
  }
  return (

  <>
      {userDatas && <div>
        <Navbar />
        <div className="home-container">
          <table className='home-table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Class</th>
                <th>Family</th>
                <th style={{textAlign:"center"}}>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {userDatas.modifiedUserDocument.members.slice().sort((a, b) => a.username.localeCompare(b.username)).map((data, index) => {
                const id = index + 1
                return (
                  <tr key={data._id}>
                    <td>{id}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      {data.Class}

                    </td>
                    <td>{data.family}</td>
                    <td>
                      <button style={{ textAlign: "center" }} className='value' onClick={() => handleDelete(data._id)}>Delete</button>
                    </td>
                    <td>
                      <button className='value' onClick={() => { handleUpdate(data) }}>Update</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <button className='value-1' onClick={handleClick}>Add New User</button>
        </div>
      </div>}
  </>
    
  )
}

export default Homepage