import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import { useHistory } from "react-router-dom";
import './Preferences.css'
const Preferences = (props) => {
  const history = useHistory()
  const [ageRange, setAgeRange] = useState({ inputMin: "", inputMax: "" });
  const [preferencesData, setPreferencesData] = useState([]);
  const [genderPreference, setGenderPreference] = useState("");
  const [hasAntibody, setHasAntibody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/dashboard')
  };
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/users`);
        setPreferencesData(res.data.users);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);
  const handleGenderChange = (e) => {
    setGenderPreference(e.target.value);
  };
  const handleAntibodyChange = (e) => {
    setHasAntibody(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAgeRange({
      ...ageRange,
      [e.target.name]: e.target.value,
    });
  };
  const filterByGender = preferencesData.filter((item) => {
    let show = false;
    if (genderPreference === "women" && (item.gender === "Female" || item.gender === 'female')) {
      show = true;
    }
    if (genderPreference === "men" && (item.gender === "Male" || item.gender === 'male')) {
      show = true;
    }
    if (genderPreference === "both" && item.gender) {
      show = true;
    }
    return show;
  });
  const filterByAntibody = filterByGender.filter((item) => {
    let show = false;
    if (hasAntibody === "yesAnti" && item.antibodies === true) {
      show = true;
    }
    if (hasAntibody === "noAnti" && item.antibodies === false) {
      show = true;
    }
    if (hasAntibody === "either" && (item.antibodies || !item.antibodies)) {
      show = true;
    }
    return show;
  });
  const filterByAge = filterByAntibody.filter((item) => {
    return item.age < ageRange.inputMax && item.age > ageRange.inputMin;
  });

  if(filterByAge.length !== 0){
     props.finalData.push(filterByAge)
  }
  return (
    <>
      <h1 className="page-title">Your Dating Preferences</h1>
      <form onSubmit={handleSubmit} className="preferences-form">
        <br />
        <label>Looking For</label>
        <input
          type="radio"
          id="women"
          name="gen"
          value="women"
          onChange={handleGenderChange}
        />
        <label htmlFor="women">Women</label>

        <input
          type="radio"
          id="men"
          name="gen"
          value="men"
          onChange={handleGenderChange}
        />
        <label htmlFor="men">Men</label>

        <input
          type="radio"
          id="both"
          name="gen"
          value="both"
          onChange={handleGenderChange}
        />
        <label htmlFor="both">Both</label>
        <br />
        <label>Got Antibodies?</label>
        <input
          type="radio"
          id="yesAnti"
          name="anti"
          value="yesAnti"
          onChange={handleAntibodyChange}
        />
        <label htmlFor="yesAnti">Yes</label>

        <input
          type="radio"
          id="noAnti"
          name="anti"
          value="noAnti"
          onChange={handleAntibodyChange}
        />
        <label htmlFor="noAnti">No</label>

        <input
          type="radio"
          id="either"
          name="anti"
          value="either"
          onChange={handleAntibodyChange}
        />
        <label htmlFor="either">Doesn't Matter</label>
        <br />
        <label>Set Age Range</label>
        <br />
        <label htmlFor="inputMin">Minimum Age</label>
        <input
          type="number"
          min="18"
          max="120"
          id="inputMin"
          value={ageRange.inputMin}
          onChange={handleAgeChange}
          name="inputMin"
        />
        <label htmlFor="inputMax">Maximum Age</label>
        <input
          type="number"
          min="18"
          max="120"
          id="inputMax"
          value={ageRange.inputMax}
          onChange={handleAgeChange}
          name="inputMax"
        />
        <button className="preferences-btn">Submit</button>
      </form>
    </>
  );
};
export default Preferences;
