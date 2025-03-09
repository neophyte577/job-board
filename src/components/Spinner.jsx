import React from 'react';
import { 
  ClipLoader, 
  BounceLoader, 
  ClimbingBoxLoader, 
  HashLoader, 
  PacmanLoader, 
  RingLoader 
} from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

// Create an array of loader components for easy randomization
const loaders = [
  BounceLoader,
  ClimbingBoxLoader,
  HashLoader,
  PacmanLoader,
  RingLoader,
];

const Spinner = ({ loading }) => {
  // Default to ClipLoader
  const RandomLoader = loading ? loaders[Math.floor(Math.random() * loaders.length)] : ClipLoader;

  return (
    <RandomLoader 
      color='unionRed'
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};

export default Spinner;
