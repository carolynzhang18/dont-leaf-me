import React, { useState } from "react";

const GrowthStunters: React.FC = () => {
  let urls = ["https://www.youtube.com/"];
  const [url, setUrl ] = useState('');

  const submit = () => {
    urls.push(url);
    console.log("urls", urls);
  }

  return (
    <>
      <form>
        <label>
          Add new URL :
          <input type="text" name="name" onChange={(e) => setUrl(e.target.value)} />
        </label>
      </form>
      <button type="submit" onClick={submit}>Submit</button>
    </>
  );
};

export default GrowthStunters;
