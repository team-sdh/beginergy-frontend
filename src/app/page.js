import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const theseStyles = {
    fontFamily: 'Gotham, Helvetica, sans-serif',
    boxSizing: 'border-box',
    fontSize: '80px' // Adjust the font size as desired
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://octopusenergy.co.jp/?utm_source=Google&utm_medium=search-brand&utm_campaign=brand+search&utm_content=%E3%82%AA%E3%82%AF%E3%83%88%E3%83%91%E3%82%B9%E3%82%A8%E3%83%8A%E3%82%B8%E3%83%BC&gclid=CjwKCAjwpuajBhBpEiwA_ZtfhRuJfyiAgJvBacFAd2FkrplMCHoLaIJsoK3lf9GnV753I69Fb0Hx3xoCfnkQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By{' '}
            <Image
              src="/octopus.png"
              alt="Octopus Logo"
              className={styles.vercelLogo}
              styles = {{ borderRadius: '40px' }}
              width={100}
              height={100}
              priority
            />
            and 
            <Image
              src="/XpressAi.png"
              alt="Express Ai Logo"
              className={styles.vercelLogo}
              styles = {{ borderRadius: '40px' }}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1
        style={theseStyles}>Beginergy v.P-5</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Charts <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See the charts of your daily and weekly electricity usage
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Insights<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get insights into your daily and weekly electricity usage
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Recommendations <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get personal recommendations powered by express.ai</p>
        </a>
      </div>
    </main>
  )
}
