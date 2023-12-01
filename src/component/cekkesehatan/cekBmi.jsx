import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [measure, setMeasure] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (
      isNaN(weightValue) ||
      isNaN(heightValue) ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      setError("Please enter valid values for weight and height.");
      return;
    }

    const heightInMeters = heightValue / 100;
    const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(1);

    if (bmi <= 18.5) {
      setMeasure(`Your BMI is ${bmi}, which means you are underweight.`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMeasure(`Your BMI is ${bmi}, which means you have a normal weight.`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMeasure(`Your BMI is ${bmi}, which means you are overweight.`);
    } else if (bmi >= 30) {
      setMeasure(`Your BMI is ${bmi}, which means you are obese.`);
    }

    setError("");
  };

  return (
    <div className="container">
      <div className="panel">
        <h1 className="text-center">Check your BMI</h1>
        <p id="introText" className="text-center">
          Enter your weight and height below to check your BMI results
        </p>
        <form>
          <div className="text-center col-12" id="weightInput">
            <p>Put your weight in here (KG)</p>
            <input
              id="weight"
              type="number"
              pattern="[0-9]*"
              name="a"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="text-center col-12 p-5" id="heightInput">
            <p>And your height in here (CM)</p>
            <input
              id="height"
              type="number"
              pattern="[0-9]*"
              name="b"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className=" text-center">
            <button
              type="button"
              className="btn btn-primary text-center"
              onClick={calculate}
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <div id="results" className="text-center">
          {error ? error : measure}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
