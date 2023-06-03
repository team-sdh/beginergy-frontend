import styles from './page.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Charts = () => {
  return (
    <div>
      <h1 className={inter.className}>This is the Charts Page</h1>
      <MyResponsiveAreaBump />
    </div>
  )
}
export default Charts;