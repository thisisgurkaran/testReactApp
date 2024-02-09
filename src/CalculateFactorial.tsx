import { ChangeEvent, useCallback, useMemo, useState } from "react";

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState<number>(0);

  const factorialOf = useCallback((n: number): number => {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }, []);
  const factorial = useMemo(() => factorialOf(number), [number, factorialOf]);
  console.log("render the component");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
