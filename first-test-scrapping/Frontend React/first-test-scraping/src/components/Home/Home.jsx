import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
} from 'react'

// Material UI
import Typography from '@material-ui/core/Typography'

// Utils
import httpClient from '../../utils/axios/axios'

// Components
const Loading = lazy(() => import('../Loading/Loading'))
const Chart = lazy(() => import('../Chart/Chart'))



const Home = () => {

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        console.log('URL_API: ', process.env.URL_API);
        httpClient.apiGet('binance').then( (res) => setChartData(res.data.binanceHistory) )
    }, [])

    return (
        <Suspense fallback={ <Loading/> }>
            <Typography variant="h3" color="primary">
                Esta es la pagina Home <span aria-label="home">🏡</span> 
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia porro doloribus commodi saepe, amet obcaecati, aperiam eligendi ullam, deleniti at mollitia quis atque aspernatur explicabo quaerat sint. Soluta, eveniet.
            </Typography>
            {
            chartData === {} ? <Loading/> : <Chart chartData={chartData} />
            }
        </Suspense>
    )
}

export default Home
