import React, {useState, useEffect} from 'react'

function Clock() {
    // const date = new Date();
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    //  By sending an empty array as the second argument 
    // to useEffect we can start the timer only once not 
    // at every rerender.
    useEffect(()=> {
        const timerId = setInterval(refreshClock, 1000);
        // return function cleanup() {
        //     clearInterval(timerId);
        // }
    }, []);

    return (
        <div>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock
