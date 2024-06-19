'use client';

import { BarChart as TremorBarChart, ValueFormatter } from '@tremor/react';

const chartdata = [
  {
    name: 'May 31',
    'Average Order value': 2488,
    Max: 3000,
  },
  {
    name: 'Jun 1',
    'Average Order value': 1445,
    Max: 3000,
  },
  {
    name: 'Jun 2',
    'Average Order value': 1200,
    Max: 3000,
  },
  {
    name: 'Jun 3',
    'Average Order value': 2500,
    Max: 3000,
  },
  {
    name: 'Jun 4',
    'Average Order value': 2800,
    Max: 3000,
  },
  {
    name: 'Jun 5',
    'Average Order value': 1800,
    Max: 3000,
  },
  {
    name: 'Jun 6',
    'Average Order value': 2200,
    Max: 3000,
  },
];

const dataFormatter: ValueFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

export const BarChart = ({ color = 'blue' }: { color?: string }) => (
  <TremorBarChart
    data={chartdata}
    index="name"
    className="h-full"
    categories={['Average Order value', 'Max']}
    stack
    showLegend={false}
    colors={[color, 'gray']}
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    showYAxis={false}
    showGridLines={false}
    barCategoryGap={20}
    onValueChange={(v) => console.log(v)}
  />
);
