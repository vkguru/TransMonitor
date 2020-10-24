import React, { Component } from 'react';
import Chart from "react-apexcharts";

class TopGraph extends Component {
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          enabled: false
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      dataLabels: {
        enabled: false
      }
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
              height="120"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopGraph;
