
import React from 'react'
import Navbar from '../Components/Navbar';

const SIngleRecord = () => {
  const userDatas = JSON.parse(localStorage.getItem("prevReportDatas"))
  console.log(userDatas);
  return (
    <>
      <Navbar />
      <div className="report-container">
        <h3> General records</h3>
        <table className="home-table">
          <thead>
            <th>Icyiciro</th>
            <th>Abaje</th>
            <th>Abasuye</th>
            <th>Abasuwe</th>
            <th>Abarwayi</th>
            <th>Abafite Impamvu</th>
            <th>Abafashije</th>
            <th>Abafashijwe</th>
            <th>Abatangiye isabato</th>
            <th>Abize 7</th>
          </thead>
          <tbody>
            <tr>
              <td>Total values</td>
              <td>{userDatas.yajeCount}</td>
              <td>{userDatas.yarasuyeCount}</td>
              <td>{userDatas.yarasuweCount}</td>
              <td>{userDatas.ararwayeCount}</td>
              <td>{userDatas.afiteIndiMpamvuCount}</td>
              <td>{userDatas.yarafashijeCount}</td>
              <td>{userDatas.yarafashijweCount}</td>
              <td>{userDatas.yatangiyeIsabatoCount}</td>
              <td>{userDatas.yize7Count}</td>
            </tr>
          </tbody>
        </table>


        <div className="abashyitsi-report-div">
          <label htmlFor="abashyitsi" className="abashyitsi">
            Abashyitsi:
          </label>
          <button>{userDatas.abashyitsi}</button>
        </div>
      </div>
    </>
  );
    
}

  

  export default SIngleRecord



  
          