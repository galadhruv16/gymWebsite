import { useState, useEffect } from 'react';

const useBMI = (age, height, weight) => {
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2)); // Round to 2 decimal places
    } else {
      setBmi(null);
    }
  }, [age, height, weight]);

  return bmi;
};

export default useBMI;