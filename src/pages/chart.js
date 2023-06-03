// import  { mockLineData as data } from "../data/mockLineData";
// import { mockDataSingular as data2 } from "../data/mockLineData";

import dynamic from "next/dynamic";

// import homeStyles from "../styles/Home.module.css";
import styles from "../app/page.module.css"

const MyResponsiveLine = dynamic(()=> import ('../components/LineChart'), {ssr:false})

const Chart = () => {
  return (
    <div className={styles.test}>
      <MyResponsiveLine />
    </div>
  );
};
export { Chart };