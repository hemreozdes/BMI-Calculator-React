import {useState} from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight.");  
      return;
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    if (bmi < 18.5) { category = "Underweight";}
    else if (bmi >= 18.5 && bmi < 24.9) { category = "Normal weight";}
    else if (bmi >= 25 && bmi < 29.9) { category = "Overweight";}
    else { category = "Obesity";}
    setResult(`Your BMI is ${bmi} : and you are ${category}`);
  }

  return (
    <div className="container">
      {/* Heading */}
      <h1>BMI Calculator</h1>
      {/* Height */}
      <label htmlFor="height">Height (cm):</label>
      <input type="number" id="height" placeholder="e.g. 170" value={height} onChange={(e)=>setHeight(e.target.value)}/>
      {/* Weight */}
      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" placeholder="e.g. 65" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      {/* Btn */}
      <button onClick={calculateBMI}>Calculate</button>
      {/* Result */}
      <div className="result">{result}</div>
    </div>
  );
}
export default App;