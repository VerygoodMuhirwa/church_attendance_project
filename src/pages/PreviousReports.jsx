import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import SIngleRecord from './SIngleRecord'
const PreviousReports = () => {
    const [userDatas, setUserData] = useState()
    const token= JSON.parse(localStorage.getItem("token"))
    const navigate= useNavigate()
    const fetchData = async () => {
        const res = await axios.get("https://church-attendance.onrender.com/api/v1/reports/getPreviousReports",{
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        if (res.data) {
            console.log(res.data);
    setUserData(res.data)
}
    }
    useEffect(() => {
        fetchData()
    }, [])

  
  return (
      <>
          <Navbar />
          <div className='date-container'>
              {userDatas ? userDatas.map(data => {
                  return (
                      <div className='prev-dates-container'>
                          <span className='prev-dates' onClick={async () => {
                              const formData = {
                                  date: data.date,
                                  month: data.month
                              }

                              const res = await axios.get("https://church-attendance.onrender.com/api/v1/reports/getSingleReport/"+ data.id,  {
                                  headers: {
                                      authorization: `Bearer ${token}`
                                  }
                              })

                              if (res.data) {
                                  localStorage.setItem("prevReportDatas", JSON.stringify(res.data))
                                  navigate("/singleRecord")
                              }
                          }}> Kuwa {data.date}/{data.month}/2023</span>

</div>                  )
              }):(<></>)}
          </div>
      </>
  )
}

export default PreviousReports