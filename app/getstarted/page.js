import { useState } from "react";

export default function GetStarted() {
  const [age, setAge] = useState();

  return (
    <main>
      <form>
        <label>
          Age:{" "}
          <input type="text" value={age} onChange={(e) => e.target.value} />
        </label>
      </form>
    </main>
  );
}
