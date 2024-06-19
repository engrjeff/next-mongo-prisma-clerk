'use client';

/* eslint-disable no-shadow */
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;

const data = [
  { name: 'A', value: 80, color: '#ef4444' },
  { name: 'B', value: 45, color: '#f97316' },
  { name: 'C', value: 25, color: '#10b981' },
];

const cx = 160;
const cy = 100;
const iR = 70;
const oR = 100;
const value = 50;

export function PieChartWithNeedle() {
  const needle = (
    value: number,
    data: any[],
    cx: number,
    cy: number,
    iR: number,
    oR: number
  ) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
      <>
        <circle
          cx={x0}
          cy={y0}
          r={r}
          className="fill:black dark:fill-white"
          stroke="none"
        />
        ,
        <path
          d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
          stroke="#none"
          className="fill:black dark:fill-white"
        />
      </>
    );
  };

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR)}
      </PieChart>
    </ResponsiveContainer>
  );
}
