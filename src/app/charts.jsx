import styles from './page.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Bar, Line, Scatter, Bubble } from 'react-chartjs-2';

import { Chart } from "./pages/chart";

// const data = {
//   labels:["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6]
//     },
//   ],
// }

// const options = {
//   plugins: {
//     legend: {
//       display: false
//     }
//   },
//   elements: {
//     line: {
//       tension: 0,
//       borderWidth: 2,
//       borderColor: "rgba(47,97,68,1)",
//       fill: "start",
//       backgroundColor: "(47, 97, 68, .3)"
//     },
//     point: {
//       radius: 0,
//       hitRadius: 0
//     }
//   },
//   scales: {
//     xAxis: {
//       display: false
//     },
//     yAxis: {
//       display: false
//     }
//   }
// };

const Charts = () => {
  return (
    <div>
      <h1 className={inter.className}>This is the Charts Page</h1>
      {/* <Line data={data} width={100} height={40} options={options}> </Line> */}
      <div className={styles.chartContainer}>
        <Chart />
      </div>
    </div>
  )
}
export default Charts;