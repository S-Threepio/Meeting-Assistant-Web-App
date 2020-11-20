import React, { useEffect, useState } from 'react'
import CanvasJSReact from '../canvas/canvasjs.react'
import '../happinessIndex/HappinessIndex.css'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export function HappinessIndex(props) {
    const [options, setOptions] = useState();
    

    useEffect(() => {
       
        console.log(props)
        setOptions({
            animationEnabled: true,
            title: {
                text: "Happiness Index"
            },
            axisY: {
                title: "Happiness index"
            },
            axisX: {
                title: "Time of Recording"
            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "spline",
                    name: "Happiness Index",
                    showInLegend: false,
                    dataPoints: props.dataPoints
                }]
        })
    }, [])

    return (
        <div className="HappinessIndex">
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}
export default HappinessIndex
