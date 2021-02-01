import React, { useEffect} from 'react'
import './App.css'
import axios from 'axios'
import LineChart from './comp/LineChart'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Card} from "react-bootstrap";

import { FaUserAlt, FaUserFriends, FaUsers} from 'react-icons/fa';



function App () {

  var regional0 = 0;

  const graphone = () => {
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
</div>
  }



    useEffect (()=>
    {

        async function fetchData()
        {
            const request = await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
            regional0 = await request.data.trend_comparison.regional[0];
            console.log(regional0);
            graphone();

        }
        fetchData();

    }, []);



  return (
    <div className='App'>
      <div className='chart'>
        <thbody>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title><center><h4>12,352</h4></center></Card.Title>
          <Card.Text><center><b>Jobs(2015)</b></center></Card.Text>
          <Card.Text>
            <center>190% above Nat Average</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
        <Card.Title><center><h4>+10.16%</h4></center></Card.Title>
          <Card.Text><center><b>%Change(2013-2018)</b></center></Card.Text>
          <Card.Text>
            <center>Nation: +10.76%</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>
          <td>
          <Card style={{ width: '15rem' }}>
        <Card.Body>
        <Card.Title><center><h4>$57.24/hr</h4></center></Card.Title>
          <Card.Text><center><b>Median Hourly Earnings</b></center></Card.Text>
          <Card.Text>
            <center>Nation: $38.20/hr</center>
          </Card.Text>
        </Card.Body>
      </Card>
          </td>


    </thbody>
      <br></br>
      <br></br>
      <br></br>
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
    <td>13,114</td>
    <td>1,210</td>
    <td>10,2%</td>
  </tr>
  <tr>
    <td colspan="2"><FaUserFriends></FaUserFriends> State</td>
    <td>13,103</td>
    <td>14,469</td>
    <td>1,366</td>
    <td>10,4%</td>
  </tr>
  <tr>
    <td colspan="2"><FaUsers></FaUsers> Nation</td>
    <td>300,651</td>
    <td>326,205</td>
    <td>25,554</td>
    <td>8,5%</td>
  </tr>
</tbody>
</ReactBootStrap.Table>
<br></br>

  <h4>Industry Employing Computer Programmers</h4>
  <ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
      <tr class="bg-info">
        <th>Industry</th>
        <th>Occupation Jobs in Industry (2015)</th>
        <th>% of Occupation in Industry (2015)</th>
        <th>% of Total Jobs in Industry (2015)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Software Publishers</td>
        <td><center>4,654</center></td>
        <td><center>37.7%</center></td>
        <td><center>8.8%</center></td>
      </tr>
      <tr>
        <td>Computer System Design Services</td>
        <td><center>1,873</center></td>
        <td><center>15.2%</center></td>
        <td><center>9.1%</center></td>
      </tr>
      <tr>
        <td>Custom Computer Programming Services</td>
        <td><center>1,388</center></td>
        <td><center>11.2%</center></td>
        <td><center>9.1%</center></td>
      </tr>
      <tr>
        <td>Aircraft Manufacturing</td>
        <td><center>444</center></td>
        <td><center>3.6%</center></td>
        <td><center>0.6%</center></td>
      </tr>
      <tr>
        <td>Other Computer Related Services</td>
        <td><center>296</center></td>
        <td><center>2.4%</center></td>
        <td><center>9.1%</center></td>
      </tr>
    </tbody>
  </ReactBootStrap.Table>

      </div>
    </div>
  )
}

export default App