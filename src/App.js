import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
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
    const [viewportValues, setViewportValues] = React.useState({
        home: false,
        cluster: false,
        schedule: false,
        tv: false,
        twg: false
    });

    const tabValue = React.useMemo(() => {
        if (viewportValues.twg) {
            return 4;
        } else if (viewportValues.tv) {
            return 3;
        } else if (viewportValues.schedule) {
            return 2;
        } else if (viewportValues.clusters) {
            return 1;
        } else {
            return 0;
        }
    }, [viewportValues]);

    const onEnter = (section) => {
        setViewportValues(prev => ({ ...prev, [`${section}`]: true }));
    }

    const onLeave = (section) => {
        setViewportValues(prev => ({ ...prev, [`${section}`]: false }));
    }

    return (
        <div className="App">
            <main id='home' style={{ paddingTop: 100 }}>
                <Navbar tabValue={tabValue} />
                <section className='home'>
                    <Home onEnterViewport={() => onEnter('home')} onLeaveViewport={() => onLeave('home')} />
                </section>
                <section className='clusters' id='clusters'>
                    <Suspense fallback={<Loading />}>
                        <Clusters onEnterViewport={() => onEnter('clusters')} onLeaveViewport={() => onLeave('clusters')} />
                    </Suspense>
                </section>
                <section className='schedule' id='schedule'>
                    {/* <h1>Schedule</h1> */}
                    <Suspense fallback={<Loading />}>
                        <Schedule onEnterViewport={() => onEnter('schedule')} onLeaveViewport={() => onLeave('schedule')} />
                    </Suspense>
                </section>
                <section className='samahanTv' id='samahanTv'>
                    {/* <h1>SAMAHAN TV</h1> */}
                    <Suspense fallback={<Loading />}>
                        <Tv onEnterViewport={() => onEnter('tv')} onLeaveViewport={() => onLeave('tv')} />
                    </Suspense>
                </section>
                <section className='fiestaTWG' id='fiestaTWG'>
                    {/* <h1>Fiesta TWG</h1> */}
                    <Suspense fallback={<Loading />}>
                        <TWG onEnterViewport={() => onEnter('twg')} onLeaveViewport={() => onLeave('twg')} />
                    </Suspense>
                </section>
                <section className='rest'></section>
                <Footer />
            </main>
        </div>
    );
}

export default App;
