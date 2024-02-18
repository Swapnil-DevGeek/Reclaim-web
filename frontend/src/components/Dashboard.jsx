import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Number Of Orders',
    },
  ],
  width: 800,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

const dataset = [
  {
    Biryani: 59,
    Pastry: 57,
    Pizza: 86,
    Burger: 21,
    day: 'Mon',
  },
  {
    Biryani: 50,
    Pastry: 52,
    Pizza: 78,
    Burger: 28,
    day: 'Tue',
  },
  {
    Biryani: 47,
    Pastry: 53,
    Pizza: 106,
    Burger: 41,
    day: 'Wed',
  },
  {
    Biryani: 54,
    Pastry: 56,
    Pizza: 92,
    Burger: 73,
    day: 'Thu',
  },
  {
    Biryani: 57,
    Pastry: 69,
    Pizza: 92,
    Burger: 99,
    day: 'Fri',
  },
  {
    Biryani: 60,
    Pastry: 63,
    Pizza: 103,
    Burger: 144,
    day: 'Sat',
  },
  {
    Biryani: 59,
    Pastry: 60,
    Pizza: 105,
    Burger: 319,
    day: 'Sun',
  }
];


function Dashboard() {

  return (
    <>
      <div >
      <h1 className='text-center text-2xl mb-3 text-black font-semibold underline'>
        Order Category vs Sales in week
      </h1>
      <BarChart 
      textColor = "#fff"
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={[
        { dataKey: 'Biryani', label: 'Biryani'},
        { dataKey: 'Pastry', label: 'Pastry' },
        { dataKey: 'Pizza', label: 'Pizza'},
        { dataKey: 'Burger', label: 'Burger'},
      ]}
      {...chartSetting}
    />
    </div>
    <div>
    <h1 className='text-center text-2xl mb-3 text-black font-semibold underline'>
        Orders vs City 
    </h1>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 80, label: 'Mumbai' },
            { id: 1, value: 50, label: 'Pune' },
            { id: 2, value: 30, label: 'Lucknow' },
            { id: 3, value: 5, label: 'Gangtok' },
            { id: 4, value: 15, label: 'Jammu' },
            { id: 5, value: 70, label: 'Bengaluru' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
    </>
  ) 
}

export default Dashboard
