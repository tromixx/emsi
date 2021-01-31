import { Line } from 'react-chartjs-2'
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'


function LineChart()
{

    var year = 2222;

    //const [query,setQuery] = useState('');

    useEffect (async()=>
    {
        async function fetchData()
        {
            const request = await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
            year = await request.data.trend_comparison.end_year;
            console.log(year);
            //console.log(request.data);
        }
        fetchData();
        return year;
        //return request.data;
    }, []);
        
    // axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
    // .then(res=>{
    //     setCoins(res.data);
    //     //console.log(res.data);
    //     year = res.data.trend_comparison.end_year;
    //     console.log(year);
    //     _callback();
    //     return year; 
    // }).catch(error=> console.log(error))

    
    console.log('After callback ',year);


  const data = 
  {
    labels: [
      2013,//value[start_year: 2013, end_year: 2018]
      2014
      ,2015
      ,2016
      ,2017
      ,year
    ],
    datasets: [
      {
        label: 'Regional',
        data: [11000-11000, (12384-11000)/11000*100, (12352-11000)/11000*100, (12680-11000)/11000*100, (12920-11000)/11000*100, (13114-11000)/11000*100],
        borderColor: ['rgba(224, 102, 57, 0.2)'],
        backgroundColor: ['rgba(224, 102, 57, 0.2)'],
        pointBackgroundColor: 'rgba(224, 102, 57, 0.2)',
        pointBorderColor: 'rgba(224, 102, 57, 0.2)'
      },
      {
        label: 'State',
        data: [(13103-13103), (13598-13103)/13103*100, (13599-13103)/13103*100, (13968-13103)/13103*100, (14244-13103)/13103*100, (14469-13103)/13103*100],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      },
      {
        label: 'Nation/20',
        data: [(300651-300651), (307021-300651)/300651*100, (314151-300651)/300651*100, (318991-300651)/300651*100, (326201-300651)/300651*100, (331201-300651)/300651*100],
        borderColor: ['rgba(99, 107, 255, 0.2)'],
        backgroundColor: ['rgba(99, 107, 255, 0.1)'],
        pointBackgroundColor: 'rgba(99, 107, 255, 0.1)',
        pointBorderColor: 'rgba(99, 107, 255, 0.2)'
      }
    ]
  }

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

  return <Line data={data} options={options} />
  
}

export default LineChart