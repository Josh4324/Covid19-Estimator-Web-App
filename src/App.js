import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Result from "./component/Result";

function App() {
  let [result, setResult] = useState({});
  const covid19ImpactEstimator = (data) => {
    let factor;
    let days;
    const impactCurrentlyinfected = data.reportedCases * 10;
    const severeImpactCurrentlyinfected = data.reportedCases * 50;

    if (data.periodType.toLowerCase() === "days") {
      days = data.timeToElapse;
      factor = 2 ** Math.trunc(data.timeToElapse / 3);
    } else if (data.periodType.toLowerCase() === "weeks") {
      days = data.timeToElapse * 7;
      factor = 2 ** Math.trunc(days / 3);
    } else {
      days = data.timeToElapse * 30;
      factor = 2 ** Math.trunc(days / 3);
    }
    const impactInfestionsByRequestTime = impactCurrentlyinfected * factor;
    const severeImpactInfestionsByRequestTime =
      severeImpactCurrentlyinfected * factor;

    const impactSevereCasesByRequestedTime = Math.trunc(
      (15 / 100) * impactInfestionsByRequestTime
    );
    // eslint-disable-next-line max-len
    const severeImpactSevereCasesByRequestedTime = Math.trunc(
      (15 / 100) * severeImpactInfestionsByRequestTime
    );

    const availableBed = data.totalHospitalBeds * (35 / 100);
    // eslint-disable-next-line max-len
    const impactHospitalBedsByRequestedTime = Math.trunc(
      availableBed - impactSevereCasesByRequestedTime
    );
    // eslint-disable-next-line max-len
    const severeImpactHospitalBedsByRequestedTime = Math.trunc(
      availableBed - severeImpactSevereCasesByRequestedTime
    );

    const impactCasesForICUByRequestedTime = Math.floor(
      (5 / 100) * impactInfestionsByRequestTime
    );
    // eslint-disable-next-line max-len
    const severeImpactCasesForICUByRequestedTime = Math.floor(
      (5 / 100) * severeImpactInfestionsByRequestTime
    );
    // eslint-disable-next-line max-len
    const impactCasesForVentilatorsByRequestedTime = Math.floor(
      (2 / 100) * impactInfestionsByRequestTime
    );
    // eslint-disable-next-line max-len
    const severeImpactCasesForVentilatorsByRequestedTime = Math.floor(
      (2 / 100) * severeImpactInfestionsByRequestTime
    );

    const { avgDailyIncomeInUSD } = data.region;
    const { avgDailyIncomePopulation } = data.region;

    // eslint-disable-next-line max-len
    const impactDollarsInFlight = Math.trunc(
      (impactInfestionsByRequestTime *
        avgDailyIncomeInUSD *
        avgDailyIncomePopulation) /
        days
    );
    // eslint-disable-next-line max-len
    const severeImpactDollarsInFlight = Math.trunc(
      (severeImpactInfestionsByRequestTime *
        avgDailyIncomeInUSD *
        avgDailyIncomePopulation) /
        days
    );

    const result = {
      data,
      impact: {
        currentlyInfected: impactCurrentlyinfected,
        infectionsByRequestedTime: impactInfestionsByRequestTime,
        severeCasesByRequestedTime: impactSevereCasesByRequestedTime,
        hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
        casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
        dollarsInFlight: impactDollarsInFlight,
      },
      severeImpact: {
        currentlyInfected: severeImpactCurrentlyinfected,
        infectionsByRequestedTime: severeImpactInfestionsByRequestTime,
        severeCasesByRequestedTime: severeImpactSevereCasesByRequestedTime,
        hospitalBedsByRequestedTime: severeImpactHospitalBedsByRequestedTime,
        casesForICUByRequestedTime: severeImpactCasesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime: severeImpactCasesForVentilatorsByRequestedTime,
        dollarsInFlight: severeImpactDollarsInFlight,
      },
    };
    setResult(result);
    console.log(result);
  };
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} covid19ImpactEstimator={covid19ImpactEstimator} />
          )}
        />
        <Route
          exact
          path="/result"
          render={(props) => <Result {...props} result={result} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
