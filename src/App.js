import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './Pages/Home';
const Clusters = React.lazy(() => import('./Pages/Clusters'));
const TWG = React.lazy(() => import('./Pages/TWG'));
const Schedule = React.lazy(() => import('./Pages/Schedule'));
const Tv = React.lazy(() => import('./Pages/Tv'));

const Loading = () => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <CircularProgress color="primary" />
            </Grid>
        </Grid>
    )
}

function App() {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <div className="App">
            <main id='home'>
                <Navbar tabValue={tabValue} setTabValue={setTabValue} />
                <section className='home'>
                    <Home onEnterViewport={() => setTabValue(0)} />
                </section>
                <section className='clusters' id='clusters'>
                    <Suspense fallback={<Loading />}>
                        <Clusters onEnterViewport={() => setTabValue(1)} />
                    </Suspense>
                </section>
                <section className='schedule' id='schedule'>
                    {/* <h1>Schedule</h1> */}
                    <Suspense fallback={<Loading />}>
                        <Schedule onEnterViewport={() => setTabValue(2)} />
                    </Suspense>
                </section>
                <section className='samahanTv' id='samahanTv'>
                    {/* <h1>SAMAHAN TV</h1> */}
                    <Suspense fallback={<Loading />}>
                        <Tv onEnterViewport={() => setTabValue(3)} />
                    </Suspense>
                </section>
                <section className='fiestaTWG' id='fiestaTWG'>
                    {/* <h1>Fiesta TWG</h1> */}
                    <Suspense fallback={<Loading />}>
                        <TWG onEnterViewport={() => setTabValue(4)} />
                    </Suspense>
                </section>
                <section className='rest'></section>
            </main>
        </div>
    );
}

export default App;
