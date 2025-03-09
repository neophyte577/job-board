import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import HashLoader from 'react-spinners/HashLoader';
import PacmanLoader from 'react-spinners/PacmanLoader';
import RingLoader from 'react-spinners/RingLoader';
import ClipLoader from 'react-spinners/ClipLoader';

const TestLoaders = () => {
    return (
        <div>
            <h2>Test Loaders</h2>
            <ClipLoader loading={true} color='red' size={150} />
            <BounceLoader loading={true} color='red' size={150} />
            <ClimbingBoxLoader loading={true} color='red' size={150} />
            <HashLoader loading={true} color='red' size={150} />
            <PacmanLoader loading={true} color='red' size={150} />
            <RingLoader loading={true} color='red' size={150} />
        </div>
    );
};

export default TestLoaders;