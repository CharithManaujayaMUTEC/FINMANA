import React from 'react';
import Chart from 'react-google-charts';
import './Chart.css';

function Charttwo () {


  return (
    <div className="chart-container2">
      <Chart
        chartType="PieChart"
        width="900px"
        height="500px"
        data={[
          ['Task', 'Hours per Day'],
          ['Food', 45],
          ['Transport', 20],
          ['Health', 15],
          ['Education', 10],
          ['Other', 10],
        ]}
        options={{
          title: 'Expenses For this Month',
          pieHole: 0.4,
        }}
      />
    </div>
  );
}

export default Charttwo;