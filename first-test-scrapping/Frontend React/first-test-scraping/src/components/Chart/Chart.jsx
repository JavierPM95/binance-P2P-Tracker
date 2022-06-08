import React from 'react'

// ApexChart
import ApexCharts from 'react-apexcharts';

// Material UI
// import Typography from '@material-ui/core/Typography'



const Chartx = ({ chartData }) => {

    console.log(chartData);

    let preciosPromedios = []

    chartData.forEach((precioPromedio) => {
        let resumenPrecioPromedio = precioPromedio.precioCompra + precioPromedio.precioVenta / 2;
        // console.log(resumenPrecioPromedio);
        preciosPromedios = [...preciosPromedios, resumenPrecioPromedio] 
        return false
    })

    // Chart options
    let chartConfig = {
        options: {
            chart: {
                id: 'apexChartId'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            }
        },
        series: [{
            name: 'series-1',
            data: preciosPromedios
        }]
    }

    // let apexChart = new ApexCharts(document.querySelector("#apex-chart"), chartConfig.options);
    // apexChart.render();
return (
    <>
        <div className='chartContainer'>
            <ApexCharts options={chartConfig.options} series={chartConfig.series} type="line" width={500} height={320} />
        </div>
    </>
)
}

export default Chartx
