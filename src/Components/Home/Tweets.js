import React from 'react'
import { Timeline } from 'react-twitter-widgets'

function Tweets() {
    return (
        <div style={{ width: '100%' }}>
            {/* // Timeline (with options) */}
            <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'addusamahan'
            }}
            options={{
                height: '46vh',
                width: "100vh",
                // theme: "dark",
            }}
            />
        </div>
    )
}

export default Tweets
