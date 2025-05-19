"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
const chartData = [
  { date: "2024-04-01", done: 222, progress: 150 },
  { date: "2024-04-02", done: 97, progress: 180 },
  { date: "2024-04-03", done: 167, progress: 120 },
  { date: "2024-04-04", done: 242, progress: 260 },
  { date: "2024-04-05", done: 373, progress: 290 },
  { date: "2024-04-06", done: 301, progress: 340 },
  { date: "2024-04-07", done: 245, progress: 180 },
  { date: "2024-04-08", done: 409, progress: 320 },
  { date: "2024-04-09", done: 59, progress: 110 },
  { date: "2024-04-10", done: 261, progress: 190 },
  { date: "2024-04-11", done: 327, progress: 350 },
  { date: "2024-04-12", done: 292, progress: 210 },
  { date: "2024-04-13", done: 342, progress: 380 },
  { date: "2024-04-14", done: 137, progress: 220 },
  { date: "2024-04-15", done: 120, progress: 170 },
  { date: "2024-04-16", done: 138, progress: 190 },
  { date: "2024-04-17", done: 446, progress: 360 },
  { date: "2024-04-18", done: 364, progress: 410 },
  { date: "2024-04-19", done: 243, progress: 180 },
  { date: "2024-04-20", done: 89, progress: 150 },
  { date: "2024-04-21", done: 137, progress: 200 },
  { date: "2024-04-22", done: 224, progress: 170 },
  { date: "2024-04-23", done: 138, progress: 230 },
  { date: "2024-04-24", done: 387, progress: 290 },
  { date: "2024-04-25", done: 215, progress: 250 },
  { date: "2024-04-26", done: 75, progress: 130 },
  { date: "2024-04-27", done: 383, progress: 420 },
  { date: "2024-04-28", done: 122, progress: 180 },
  { date: "2024-04-29", done: 315, progress: 240 },
  { date: "2024-04-30", done: 454, progress: 380 },
  { date: "2024-05-01", done: 165, progress: 220 },
  { date: "2024-05-02", done: 293, progress: 310 },
  { date: "2024-05-03", done: 247, progress: 190 },
  { date: "2024-05-04", done: 385, progress: 420 },
  { date: "2024-05-05", done: 481, progress: 390 },
  { date: "2024-05-06", done: 498, progress: 520 },
  { date: "2024-05-07", done: 388, progress: 300 },
  { date: "2024-05-08", done: 149, progress: 210 },
  { date: "2024-05-09", done: 227, progress: 180 },
  { date: "2024-05-10", done: 293, progress: 330 },
  { date: "2024-05-11", done: 335, progress: 270 },
  { date: "2024-05-12", done: 197, progress: 240 },
  { date: "2024-05-13", done: 197, progress: 160 },
  { date: "2024-05-14", done: 448, progress: 490 },
  { date: "2024-05-15", done: 473, progress: 380 },
  { date: "2024-05-16", done: 338, progress: 400 },
  { date: "2024-05-17", done: 499, progress: 420 },
  { date: "2024-05-18", done: 315, progress: 350 },
  { date: "2024-05-19", done: 235, progress: 180 },
  { date: "2024-05-20", done: 177, progress: 230 },
  { date: "2024-05-21", done: 82, progress: 140 },
  { date: "2024-05-22", done: 81, progress: 120 },
  { date: "2024-05-23", done: 252, progress: 290 },
  { date: "2024-05-24", done: 294, progress: 220 },
  { date: "2024-05-25", done: 201, progress: 250 },
  { date: "2024-05-26", done: 213, progress: 170 },
  { date: "2024-05-27", done: 420, progress: 460 },
  { date: "2024-05-28", done: 233, progress: 190 },
  { date: "2024-05-29", done: 78, progress: 130 },
  { date: "2024-05-30", done: 340, progress: 280 },
  { date: "2024-05-31", done: 178, progress: 230 },
  { date: "2024-06-01", done: 178, progress: 200 },
  { date: "2024-06-02", done: 470, progress: 410 },
  { date: "2024-06-03", done: 103, progress: 160 },
  { date: "2024-06-04", done: 439, progress: 380 },
  { date: "2024-06-05", done: 88, progress: 140 },
  { date: "2024-06-06", done: 294, progress: 250 },
  { date: "2024-06-07", done: 323, progress: 370 },
  { date: "2024-06-08", done: 385, progress: 320 },
  { date: "2024-06-09", done: 438, progress: 480 },
  { date: "2024-06-10", done: 155, progress: 200 },
  { date: "2024-06-11", done: 92, progress: 150 },
  { date: "2024-06-12", done: 492, progress: 420 },
  { date: "2024-06-13", done: 81, progress: 130 },
  { date: "2024-06-14", done: 426, progress: 380 },
  { date: "2024-06-15", done: 307, progress: 350 },
  { date: "2024-06-16", done: 371, progress: 310 },
  { date: "2024-06-17", done: 475, progress: 520 },
  { date: "2024-06-18", done: 107, progress: 170 },
  { date: "2024-06-19", done: 341, progress: 290 },
  { date: "2024-06-20", done: 408, progress: 450 },
  { date: "2024-06-21", done: 169, progress: 210 },
  { date: "2024-06-22", done: 317, progress: 270 },
  { date: "2024-06-23", done: 480, progress: 530 },
  { date: "2024-06-24", done: 132, progress: 180 },
  { date: "2024-06-25", done: 141, progress: 190 },
  { date: "2024-06-26", done: 434, progress: 380 },
  { date: "2024-06-27", done: 448, progress: 490 },
  { date: "2024-06-28", done: 149, progress: 200 },
  { date: "2024-06-29", done: 103, progress: 160 },
  { date: "2024-06-30", done: 446, progress: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  done: {
    label: "done",
    theme: {
        light: "#16a34a",
        dark: "rgb(109, 236, 24)",
      },
  },
  progress: {
    label: "progress",
    theme: {
        light: "#4f46e5",
        dark: "rgb(16, 122, 221)",
      },
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("30d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full "
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="filldone" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-done)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-done)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-progress)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-progress)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="progress"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-progress)"
              stackId="a"
            />
            <Area
              dataKey="done"
              type="natural"
              fill="url(#filldone)"
              stroke="var(--color-done)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
