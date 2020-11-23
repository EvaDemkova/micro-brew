import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend, Tooltip, LabelList
} from 'recharts';


const COLORS = ['#f28e1c', '#fec63d', '#8B4513'];

export default class Example extends PureComponent {
    render() {
        const { aleVolume, lagerVolume, totalVolume, cy, cx, innerRadius, outerRadius, width, height, layout} = this.props;
        const data = [
            { name: 'Ale', value: aleVolume },
            { name: 'Lager', value: lagerVolume },
            { name: 'Total', value: totalVolume },
        ]

    return (
      <PieChart width={width} height={height} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
          
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
            </Pie>
        <Legend layout={layout} />
          <Tooltip/>
      </PieChart>
    );
  }
}
