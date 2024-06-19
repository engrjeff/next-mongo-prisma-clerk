'use client';

import { AreaChart as TremorAreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'May 32',
    visit: 167,
  },
  {
    date: 'Jun 1',
    visit: 125,
  },
  {
    date: 'Jun 2',
    visit: 156,
  },
  {
    date: 'June 3',
    visit: 165,
  },
  {
    date: 'Jun 4',
    visit: 153,
  },
  {
    date: 'Jun 5',
    visit: 124,
  },
];

export function AreaChart() {
  return (
    <TremorAreaChart
      data={chartdata}
      index="date"
      categories={['visit']}
      colors={['blue']}
      className="h-full"
      yAxisWidth={30}
      showGridLines={false}
      showYAxis={false}
      showXAxis={false}
      showLegend={false}
    />
  );
}
