"use client";

import { useState } from "react";
export default function FormGetStarted() {
  const [age, setAge] = useState();
  return (
    <form>
      <label>
        Age: <input type="text" value={age} onChange={(e) => e.target.value} />
      </label>
    </form>
  );
}
