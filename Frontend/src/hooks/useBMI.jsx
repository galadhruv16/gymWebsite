import { useState, useEffect } from 'react';

const useBMI = (age, height, weight) => {
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    if (height && weight) {
      const calculateBMI = (height, weight) => {
        const heightInMeters = height / 100; // Convert height to meters
        return (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI and round to 2 decimal places
      };

      const bmiValue = calculateBMI(height, weight);
      setBmi(bmiValue);
    }
  }, [height, weight]);

  return bmi;
};

export default useBMI;
