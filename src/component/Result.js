import React from "react";

const Result = (props) => {
  let result = props.result;

  return (
    <div>
      <div>
        {Object.keys(result).length > 0 ? (
          <section className="result">
            <div className="data-input">
              <h3>Input Data</h3>
              <div className="datablock">
                <span className="block label">Population</span>
                <span className="block res" id="input-population">
                  {result.data.population}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">Time to Elapse</span>
                <span className="block res" id="input-time">
                  {result.data.timeToElapse}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">Reported Cases</span>
                <span className="block res" id="input-cases">
                  {result.data.reportedCases}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">Total Hospital beds</span>
                <span className="block res" id="input-beds">
                  {result.data.totalHospitalBeds}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">Period Type</span>
                <span className="block res" id="input-period">
                  {result.data.periodType}
                </span>
              </div>
            </div>
            <div className="data-output-impact">
              <h3>Best Case Estimation</h3>
              <div className="datablock">
                <span className="block label">Currently Infected</span>
                <span className="block res" id="impact-currentlyInfected">
                  {result.impact.currentlyInfected}
                </span>
              </div>

              <div className="datablock">
                <span className="block label">
                  Infections by Requested Time
                </span>
                <span
                  className="block res"
                  id="impact-infectionsByRequestedTime"
                >
                  {result.impact.infectionsByRequestedTime}
                </span>
              </div>

              <div className="datablock">
                <span className="block label">
                  Severe Cases by Requested Time
                </span>
                <span
                  className="block res"
                  id="impact-severeCasesByRequestedTime"
                >
                  {result.impact.severeCasesByRequestedTime}
                </span>
              </div>

              <div className="datablock">
                <span className="block label">
                  Hospital Beds by Requested Time
                </span>
                <span
                  className="block res"
                  id="impact-hospitalBedsByRequestedTime"
                >
                  {result.impact.hospitalBedsByRequestedTime}
                </span>
              </div>

              <div className="datablock">
                <span className="block label">
                  Cases for ICU by Requested Time
                </span>
                <span
                  className="block res"
                  id="impact-casesForICUByRequestedTime"
                >
                  {result.impact.casesForICUByRequestedTime}
                </span>
              </div>

              <div className="datablock">
                <span className="block label">
                  Cases for Ventilators by Requested Time
                </span>
                <span
                  className="block res"
                  id="impact-casesForVentilatorsByRequestedTime"
                >
                  {result.impact.casesForVentilatorsByRequestedTime}
                </span>
              </div>
              <div className="datablock">
                {" "}
                <span className="block label">Dollars in Flight</span>
                <span className="block res" id="impact-dollarsInFlight">
                  {result.impact.dollarsInFlight}
                </span>
              </div>
            </div>
            <div className="data-output-severe">
              <h3>Severe Case Estimation</h3>

              <div className="datablock">
                {" "}
                <span className="block label">Currently Infected</span>
                <span className="block res" id="severe-currentlyInfected">
                  {result.severeImpact.currentlyInfected}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">
                  Infections by Requested Time
                </span>
                <span
                  className="block res"
                  id="severe-infectionsByRequestedTime"
                >
                  {result.severeImpact.infectionsByRequestedTime}
                </span>
              </div>
              <div className="datablock">
                {" "}
                <span className="block label">
                  Severe Cases by Requested Time
                </span>
                <span
                  className="block res"
                  id="severe-severeCasesByRequestedTime"
                >
                  {result.severeImpact.severeCasesByRequestedTime}
                </span>
              </div>

              <div className="datablock">
                {" "}
                <span className="block label">
                  Hospital Beds by Requested Time
                </span>
                <span
                  className="block res"
                  id="severe-hospitalBedsByRequestedTime"
                >
                  {result.severeImpact.hospitalBedsByRequestedTime}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">
                  Cases for ICU by Requested Time
                </span>
                <span
                  className="block res"
                  id="severe-casesForICUByRequestedTime"
                >
                  {result.severeImpact.casesForICUByRequestedTime}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">
                  Cases for Ventilators by Requested Time
                </span>
                <span
                  className="block res"
                  id="severe-casesForVentilatorsByRequestedTime"
                >
                  {result.severeImpact.casesForVentilatorsByRequestedTime}
                </span>
              </div>
              <div className="datablock">
                <span className="block label">Dollars in Flight</span>
                <span className="block res" id="severe-dollarsInFlight">
                  {result.severeImpact.dollarsInFlight}
                </span>
              </div>
            </div>
          </section>
        ) : (
          props.history.push("/")
        )}
      </div>
    </div>
  );
};

export default Result;
