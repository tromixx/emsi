import { Line } from 'react-chartjs-2'
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'


function LineChart()
{

    const [chartData, setChartData] = useState({});
    var firstyear = 20;
    var lastyear = 20;
    var regional0 = 0;
    var regional1 = 0;
    var regional2 = 0;
    var regional3 = 0;
    var regional4 = 0;
    var regional5 = 0;
    var state0 = 0;
    var state1 = 0;
    var state2 = 0;
    var state3 = 0;
    var state4 = 0;
    var state5 = 0;
    var nation0 = 0;
    var nation1 = 0;
    var nation2 = 0;
    var nation3 = 0;
    var nation4 = 0;
    var nation5 = 321500;


    

const chartone = () => {
    setChartData(
    {
        labels: 
        [
          firstyear,
          2014
          ,2015
          ,2016
          ,2017
          ,lastyear
        ],
        datasets: [
          {
            label: 'Regional',
            data: [regional0-regional0, (regional1-regional0)/regional0*100, (regional2-regional0)/regional0*100, (regional3-regional0)/regional0*100, (regional4-regional0)/regional0*100, (regional5-regional0)/regional0*100],
            borderColor: ['rgba(224, 102, 57, 0.2)'],
            backgroundColor: ['rgba(224, 102, 57, 0.2)'],
            pointBackgroundColor: 'rgba(224, 102, 57, 0.2)',
            pointBorderColor: 'rgba(224, 102, 57, 0.2)'
          },
          {
            label: 'State',
            data: [(state0-state0), (state1-state0)/state0*100, (state2-state0)/state0*100, (state3-state0)/state0*100, (state4-state0)/state0*100, (state5-state0)/state0*100],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointBorderColor: 'rgba(54, 162, 235, 0.2)'
          },
          {
            label: 'Nation/20',
            data: [(nation0-nation0), (nation1-nation0)/nation0*100, (nation2-nation0)/nation0*100, (nation3-nation0)/nation0*100, (nation5-nation0)/nation0*100, (nation4-nation0)/nation0*100],
            borderColor: ['rgba(99, 107, 255, 0.2)'],
            backgroundColor: ['rgba(99, 107, 255, 0.1)'],
            pointBackgroundColor: 'rgba(99, 107, 255, 0.1)',
            pointBorderColor: 'rgba(99, 107, 255, 0.2)'
          }
        ]
    })
    
}


  useEffect (()=>
  {

      async function fetchData()
      {
          const request = await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
          lastyear = await request.data.trend_comparison.end_year;
          firstyear = await request.data.trend_comparison.start_year;
          regional0 = await request.data.trend_comparison.regional[0];
          regional1 = await request.data.trend_comparison.regional[1];
          regional2 = await request.data.trend_comparison.regional[2];
          regional3 = await request.data.trend_comparison.regional[3];
          regional4 = await request.data.trend_comparison.regional[4];
          regional5 = await request.data.trend_comparison.regional[5];
          state0 = await request.data.trend_comparison.state[0];
          state1 = await request.data.trend_comparison.state[1];
          state2 = await request.data.trend_comparison.state[2];
          state3 = await request.data.trend_comparison.state[3];
          state4 = await request.data.trend_comparison.state[4];
          state5 = await request.data.trend_comparison.state[5];
          nation0 = await request.data.trend_comparison.nation[0];
          nation1 = await request.data.trend_comparison.nation[1];
          nation2 = await request.data.trend_comparison.nation[2];
          nation3 = await request.data.trend_comparison.nation[3];
          nation4 = await request.data.trend_comparison.nation[4];
          

          console.log(lastyear);
          chartone();
          return request.data;

      }
      fetchData();

  }, []);

  const options = 
  {
    title: {
      display: true,
      text: 'Regional Trends'
    },
    scales: 
    {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 20,
            stepSize: 2
          }
        }
      ]
    }
  }

  return <Line data={chartData} />
  
}

export default LineChart