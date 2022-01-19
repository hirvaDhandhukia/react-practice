import React, {useState, useEffect} from 'react'

function Clock() {
    const [date, setDate] = useState(new Date());

    function reloadDate() {
        setDate(new Date());
    }

    useEffect(() => {
        const timer = setInterval(reloadDate, 1000);
    }, [])

    return (
        <div className='main'>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock
