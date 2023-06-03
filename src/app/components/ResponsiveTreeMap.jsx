import { ResponsiveTreeMapHtml } from '@nivo/treemap';
import data1 from './componentData/data1';
import { colors } from '@nivo/colors';




const MyResponsiveTreeMapHtml = ({ data1 }) => (
  <ResponsiveTreeMapHtml
      data={data1}
      identity="name"
      value="loc"
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  2
              ]
          ]
      }}
      parentLabelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  3
              ]
          ]
      }}
      colors={{ scheme: 'yellow_orange_red' }}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.1
              ]
          ]
      }}
  />
)
export default MyResponsiveTreeMapHtml;
