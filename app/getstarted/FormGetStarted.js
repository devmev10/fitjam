"use client";

import { useState } from "react";
export default function FormGetStarted() {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  return (
    <form>
      <label>
        Age:{" "}
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Gender:{" "}
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label>
        Height: <input type="" />
      </label>
    </form>
  );
}
