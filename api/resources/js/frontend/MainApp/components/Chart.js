import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend, Tooltip
} from 'recharts';


const COLORS = ['#f28e1c', '#ffe80f', 'fec63d'];

export default class Example extends PureComponent {
    render() {
        const { aleVolume, lagerVolume, totalVolume } = this.props;
        const data = [
            { name: 'Ale', value: aleVolume },
            { name: 'Lager', value: lagerVolume },
            { name: 'Total', value: totalVolume },
        ]

    return (
      <PieChart width={220} height={250} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={90}
          cy={100}
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
            </Pie>
            <Legend />
            <Tooltip/>
      </PieChart>
    );
  }
}
