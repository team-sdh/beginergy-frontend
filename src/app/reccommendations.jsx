import styles from './page.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Reccommendations = () => {
  return (
    <h1 className={inter.className}>This is the Reccommendations Page</h1>
  )
}
export default Reccommendations;