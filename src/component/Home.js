import React, { useRef } from "react";

const Home = (props) => {
  let popref = useRef(null);
  let timeref = useRef(null);
  let caseref = useRef(null);
  let bedref = useRef(null);
  let periodref = useRef(null);
  const submit = (evt) => {
    evt.preventDefault();
    const data = {
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 4,
        avgDailyIncomePopulation: 0.73,
      },
      periodType: periodref.current.value,
      timeToElapse: timeref.current.value,
      reportedCases: caseref.current.value,
      population: popref.current.value,
      totalHospitalBeds: bedref.current.value,
    };
    props.covid19ImpactEstimator(data);
    props.history.push("/result");
  };
  return (
    <div>
      <main>
        <section className="formblock">
          <form onSubmit={submit}>
            <div className="formbox">
              <label htmlFor="population">Population</label>
              <input
                ref={popref}
                type="number"
                id="population"
                placeholder="Enter Population"
                data-population=""
              />
            </div>

            <div className="formbox">
              <label htmlFor="time">Time to Elapse</label>
              <input
                ref={timeref}
                type="text"
                id="time"
                placeholder="Enter Time to Elapse"
                data-time-to-elapse=""
              />
            </div>

            <div className="formbox">
              <label htmlFor="cases">Reported Cases</label>
              <input
                ref={caseref}
                type="text"
                id="cases"
                placeholder="Enter Reported Cases"
                data-reported-cases=""
              />
            </div>

            <div className="formbox">
              <label htmlFor="beds">Total Hospital Beds</label>
              <input
                ref={bedref}
                type="text"
                id="beds"
                placeholder="Enter Total Hospital Beds"
                data-total-hospital-beds=""
              />
            </div>

            <div className="formbox">
              <label htmlFor="period">Period Type</label>
              <select ref={periodref} name="" data-period-type="" id="period">
                <option value="">Select One</option>
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
                <option value="Months">Months</option>
              </select>
            </div>

            <input
              type="submit"
              id="submit"
              value="Submit"
              data-go-estimate=""
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
