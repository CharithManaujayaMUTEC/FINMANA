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
          ['Salary', 65],
          ['Tution', 10],
          ['Shop', 15],
          ['Pickme', 5],
          ['Other', 5],
        ]}
        options={{
          title: 'Income For this Month',
          pieHole: 0.4,
        }}
      />
    </div>
  );
}

export default Charttwo;