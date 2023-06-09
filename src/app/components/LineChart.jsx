import { ResponsiveLine } from "@nivo/line";

const url = "http://localhost:8080/predict/";
const krakenAPI =
    "https://kraken-japan-hackathon-api.onrender.com/products/AGILE-23-06-01/product_rates/consumption_charges";
const usageData = [{ id: "Usage", color: "hsl(344, 70%, 50%)", data: [] }];
const costData = [
    {
        id: "Cost",
        color: "hsl(250, 70%, 50%)",
        data: []
    }
];

fetch(url + "4")
    .then(response => response.json())
    // 4. Setting *dogImage* to the image url that we received from the response above
    .then(parsed => {
        parsed.forEach(
            el =>
                (el.x =
                    el.x % 1 === 0.5
                        ? `${Math.round(el.x - 1)}:30`
                        : String(el.x))
        );
        usageData[0].data = parsed;
    });

fetch(krakenAPI)
    .then(response => response.json())
    // 4. Setting *dogImage* to the image url that we received from the response above
    .then(parsed => {
        const filtered = parsed.filter(
            el => new Date(Date.parse(el["valid_from"])).getDay() === 4
        );
        const mapped = filtered.map(el => {
            return {
                y: el.amount,
                x: `${new Date(Date.parse(el["valid_from"])).getHours()}${
                    new Date(Date.parse(el["valid_from"])).getMinutes() === 30
                        ? ":30"
                        : ""
                }`
            };
        });
        costData[0].data = mapped.slice(0, 48);
    });

console.log(usageData);
console.log(costData);

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = () => {
    return (
        <>
            <ResponsiveLine
                data={usageData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: false,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: -20,
                    // legend: 'Derp',
                    legend: usageData[0].id,
                    legendPosition: "middle",
                    format: () => " "
                }}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Every Half Hour",
                    legendOffset: 36,
                    legendPosition: "middle",
                    format: () => " "
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Energy Usage",
                    legendOffset: -40,
                    legendPosition: "middle"
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                // gridYValues={[150, 250, 350]}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            <ResponsiveLine
                data={costData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: false,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: -20,
                    // legend: 'Derp',
                    legend: costData[0].id,
                    legendPosition: "middle",
                    format: () => " "
                }}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Every Half Hour",
                    legendOffset: 36,
                    legendPosition: "middle",
                    format: () => " "
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cost",
                    legendOffset: -40,
                    legendPosition: "middle"
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                // gridYValues={[150, 250, 350]}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </>
    );
};

export default MyResponsiveLine;
