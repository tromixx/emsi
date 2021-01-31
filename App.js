import React, {useState, useEffect, useCallback} from 'react'
import './App.css'
import axios from 'axios'
import LineChart from './comp/LineChart'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Card} from "react-bootstrap";

import { FaBeer, FaGithub, FaEnvelope , FaUserAlt, FaUserFriends, FaUsers} from 'react-icons/fa';
import { IconName } from "react-icons/bs";

import ReactDOM from 'react-dom';



function App () {

  /* Dynamic Table
  const emsii= [{region: "Region",fyear: "2013 Jobs", lyear: "2018_Jobs",change:"Change", pchange: "%Change"}]
  const infoRmation = (emsi, index) =>{
    return(
      <tr key={index}>
        <td>{emsi.region}</td>
      </tr>
    )
  }
*/

  //const[coins, setCoins] = useState([]);
  //const[search, setSearch] = useState('');
  

  /*
import { Observable } from 'rxjs'
const observable$ = new Observable(function subscribe(subscriber) {

  
});
observable$.subscribe(
  value => console.log(`Value is ${value}`),
  err => console.log(err)
)

var year = 2020;
  useEffect ((_callback)=>{
    axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
    .then(res=>{
      setCoins(res.data);
      //console.log(res.data);
      year = res.data.trend_comparison.end_year;
      console.log(year);
      _callback();
      return year; 
    }).catch(error=> console.log(error))
  }, []);

 console.log(year);

  */



//how to stop your programm until function is completed
  //setTimeout(() => {  console.log("Stuff!"); }, 2000);

  /* Maybe:
  //handlechange
  const handleChange = e => {
    setSearch(e.target.value)
  }

  //<LineChart year={year}/>
  {(coin => {
    return(
      <LineChart key={coin.onet} year={coin.year}/>
    )
    
  })}
  //const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
*/

  return (
    
    <div className='App'>
      <div className='chart'>
        <thbody>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title><center><h4>12,352</h4></center></Card.Title>
          <Card.Text><center><b>Hi</b></center></Card.Text>
          <Card.Text>
            <center>190% above National average</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
        <Card.Title><center><h4>12,352</h4></center></Card.Title>
          <Card.Text><center><b>Hi</b></center></Card.Text>
          <Card.Text>
            <center>190% above National average</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
        <Card.Title><center><h4>12,352</h4></center></Card.Title>
          <Card.Text><center><b>Hi</b></center></Card.Text>
          <Card.Text>
            <center>190% above National average</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>


        </thbody>
      
      <LineChart/>
      

<ReactBootStrap.Table responsive>
<thead>
    <tr>
      <th colspan="2">Region</th>
      <th>2013 Jobs</th>
      <th>2018 Jobs</th>
      <th>Change</th>
      <th>%Change</th>
    </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2"><FaUserAlt></FaUserAlt> Region</td>
    <td>11,904</td>
    <td>13,000</td>
    <td>1,210</td>
    <td>10,2%</td>
  </tr>
  <tr>
    <td colspan="2"><FaUserFriends></FaUserFriends> State</td>
    <td>11,904</td>
    <td>13,000</td>
    <td>1,210</td>
    <td>10,2%</td>
  </tr>
  <tr>
    <td colspan="2"><FaUsers></FaUsers> Nation</td>
    <td>300,904</td>
    <td>325,000</td>
    <td>25,210</td>
    <td>8,2%</td>
  </tr>
</tbody>
</ReactBootStrap.Table>

  <h4>Industry Employing Computer Programmers</h4>
  <ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
      <tr class="bg-info">
        <th>Industry</th>
        <th>Occupation Jobs (2015)</th>
        <th>% of Occupation Jobs (2015)</th>
        <th>% of Total Jobs (2015)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Software Publishers</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>Computer System Design Services</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>Custom Computer Programming Services</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>Aircraft Manufacturing</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <td>Other Computer Related Services</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
    </tbody>
  </ReactBootStrap.Table>

      </div>
    </div>
  )
}

export default App