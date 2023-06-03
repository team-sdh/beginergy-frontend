import styles from './page.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Insights= () => {
  return (
    <h1 className={inter.className}>This is the Insights Page</h1>
  )
}
export default Insights;