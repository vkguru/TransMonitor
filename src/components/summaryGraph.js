import React, { Component } from 'react';
import Chart from "react-apexcharts";

class SummaryGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
          labels: {
            show: false
          },
          enabled: false
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60],
          stroke: {
            curve: 'straight'
          },
          style: {
            fontSize: '0px'
          }
        }
      ]
      
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height="240"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryGraph;
