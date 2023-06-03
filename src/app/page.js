'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image'
import Charts from './charts.jsx'
import Insights from './insights.jsx'
import Reccommendations from './reccommendations.jsx'

import { Inter } from 'next/font/google'
import styles from './page.module.css'

import { MyResponsiveLine } from '../components/LineChart'
import { Chart } from "../pages/chart"

import React, { useState, useEffect } from "react";
// import { test } from "../data/energyData";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [showCharts, setShowCharts] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showReccommendations, setShowReccommendations] = useState(false);

  const theseStyles = {
    fontFamily: 'Gotham, Helvetica, sans-serif',
    boxSizing: 'border-box',
    fontSize: '80px' // Adjust the font size as desired
  };

  const handleChartClick = () => {
    setShowCharts(true);
    setShowInsights(false);
    setShowReccommendations(false);
  };
  const handleInsightsClick = () => {
    setShowCharts(false);
    setShowInsights(true);
    setShowReccommendations(false);
  };
  const handleReccommendationsClick = () =>{
    setShowCharts(false);
    setShowInsights(false);
    setShowReccommendations(true);
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <div className={styles.logoContainer}>
            <a href="https://octopus.energy/" target="_blank" rel="noopener noreferrer">
              Powered By{' '}
              <Image
                src="/octopus.png"
                alt="Octopus Logo"
                className={styles.vercelLogo}
                style={{ borderRadius: '40px' }}
                width={100}
                height={100}
                priority
              />
            </a>
            <span className={styles.logoSeparator}>and</span>
            <a href="https://www.xpress.ai/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/XpressAi.png"
                alt="Express Ai Logo"
                className={styles.vercelLogo}
                style={{ borderRadius: '40px' }}
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>
  </div>

      <div className={styles.center}>
        <h1
        style={theseStyles}>Beginergy v.P-5</h1>
      </div>

      <div className={styles.grid}>
        <a
          onClick={handleChartClick}
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
          onClick={handleInsightsClick}
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
          onClick={handleReccommendationsClick}
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
        <div>
          <Chart />
        </div>
      </div>
      <div className={styles.main}>
        {showCharts &&
        <Charts />
        }
        {showInsights &&
        <Insights />
        }
        {showReccommendations &&
        <Reccommendations />
        }
      </div>
    </main>
  )
}
