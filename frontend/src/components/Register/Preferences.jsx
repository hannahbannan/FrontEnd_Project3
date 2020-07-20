import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";

const Preferences = () => {
  const [ageRange, setAgeRange] = useState(null);
  const [preferencesData, setPreferencesData] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [genderPreference, setGenderPreference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/users`);
        setPreferencesData(res.data.users)
        
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);
  const handleChange = (e) => {
    setGenderPreference(e.target.value);
    console.log(e.target.value);
  };

  const filtered = preferencesData.filter((item) => {
    return (genderPreference === 'women' && item.gender === 'Female') || (genderPreference === 'men' && item.gender === 'Male')
  });
  console.log(preferencesData)
  console.log(filtered)

  return (
    <>
      <h1>Your Dating Preferences</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Looking For</label>
        <input
          type="radio"
          id="women"
          name="drone"
          value="women"
          onChange={handleChange}
        />
        <label for="women">Women</label>

        <input
          type="radio"
          id="men"
          name="drone"
          value="men"
          onChange={handleChange}
        />
        <label for="men">Men</label>

        <input
          type="radio"
          id="both"
          name="drone"
          value="both"
          onChange={handleChange}
        />
        <label for="both">Both</label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Preferences;
