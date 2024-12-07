import { Lottie } from 'lottie-react';
import animationData from './path-to-animation.json'; // Path to your Lottie JSON file

const TypeWriter = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default TypeWriter;