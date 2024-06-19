import { AreaChart } from '@/components/blocks/AreaChart';
import { BarAreaChart } from '@/components/blocks/BarAreaChart';
import { BarChart } from '@/components/blocks/BarChart';
import { PieChartWithNeedle } from '@/components/blocks/PieChartWithNeedle';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RiArrowUpLine, RiLayoutGridLine } from '@remixicon/react';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 min-h-screen flex flex-col">
      <div className="flex items-center justify-between">
        <Tabs defaultValue="12months">
          <TabsList className="">
            <TabsTrigger value="12months">12 months</TabsTrigger>
            <TabsTrigger value="30days">30 days</TabsTrigger>
            <TabsTrigger value="7days">7 days</TabsTrigger>
            <TabsTrigger value="24hours">24 hours</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button size="sm">
          <RiLayoutGridLine className="size-4 mr-2" />
          Customize
        </Button>
      </div>

      <div className="grid grid-cols-3 grid-rows-[auto_300px_300px] gap-4 flex-1">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Pulse Score</CardTitle>
            <CardDescription>
              The Pulse Score is determined by computing the website&apos;s
              traffic and other components.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 px-0 max-h-72 relative">
            <PieChartWithNeedle />
            <div className="absolute top-32 flex items-center justify-between w-full px-10">
              <div>
                <p className="font-bold">80</p>
                <p className="text-xs text-muted-foreground">Pulse Score</p>
              </div>
              <div>
                <span className="text-green-500 text-sm flex items-center">
                  10% <RiArrowUpLine className="size-4" />
                </span>
                <p className="text-xs text-muted-foreground text-left">
                  from 65 last week
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              To learn how it was calculated,{' '}
              <a className="text-blue-500 hover:underline font-medium">
                Click here.
              </a>
            </p>
          </CardFooter>
        </Card>
        <Card className="col-span-2 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>$4,523</CardTitle>
              <CardDescription>Total sales this week</CardDescription>
            </div>
            <div>
              <span className="text-green-500 text-sm flex items-center">
                10% <RiArrowUpLine className="size-4" />
              </span>
              <CardDescription>From 3,200 last week</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex-1 px-0 pt-0">
            <BarAreaChart />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-3">
              $1120.50{' '}
              <span className="text-green-500 text-sm flex items-center">
                10% <RiArrowUpLine className="size-4" />
              </span>
            </CardTitle>
            <CardDescription>Average Order Value</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 px-0">
            <BarChart />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-3">
              19.5%{' '}
              <span className="text-green-500 text-sm flex items-center">
                10% <RiArrowUpLine className="size-4" />
              </span>
            </CardTitle>
            <CardDescription>Conversion rate</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 px-0">
            <BarChart color="orange" />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex flex-row items-center justify-between">
              350
              <span className="text-green-500 text-sm flex items-center">
                10% <RiArrowUpLine className="size-4" />
              </span>
            </CardTitle>
            <CardDescription>Site visits this week</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 px-0">
            <AreaChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
