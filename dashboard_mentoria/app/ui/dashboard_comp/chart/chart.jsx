"use client"

import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data =  [
  {
    name: "Dom.",
    visit: 5000,
    click: 3400,
  },
  {
    name: "Seg.",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Ter.",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Qua.",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Qui.",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Sex.",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sáb.",
    visit: 3490,
    click: 4300,
  },
]

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revisão da Semana</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#1e1f26", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8d8d8d" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#8d8d8d" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;