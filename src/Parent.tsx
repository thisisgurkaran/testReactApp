import React, { useState, useMemo } from "react";

// Factorial calculation function
const calculateFactorial = (n: number): number => {
  console.log("Calculating factorial of", n);
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

const FactorialCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(1);

  // Memoize the factorial calculation
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
      />
      <p>
        Factorial of {number}: {factorial}
      </p>
    </div>
  );
};

export default FactorialCalculator;
