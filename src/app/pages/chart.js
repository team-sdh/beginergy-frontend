// import  { mockLineData as data } from "../data/mockLineData";
// import { mockDataSingular as data2 } from "../data/mockLineData";

// import { test } from "../data/energyData"

// import { data } from "../data/energyData"

import dynamic from "next/dynamic";

// import homeStyles from "../styles/Home.module.css";
// import styles from "../app/page.module.css"
import styles from "../page.module.css";

const MyResponsiveLine = dynamic(()=> import ('../components/LineChart'), {ssr:false})

const Chart = () => {
  return (
    <div className={styles.test}>
      <MyResponsiveLine />
      {/* {console.log("test data api thingy: ", test)} */}
    </div>
  );
};
export { Chart };