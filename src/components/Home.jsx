import React, { useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  console.log("val", val);

  return (
    <>
      <div>
        <h3>Vite</h3>
        <label>Name :</label>
        <input
          placeholder="Type..."
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </>
  );
}
