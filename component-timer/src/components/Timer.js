import React, { useState, useEffect } from 'react';
function Timer() {

    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 0) {
                    clearInterval(interval);
                    alert("Time's up");
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Bộ đếm ngược: {timer}</h1>
        </div>
    );
}

export default Timer;