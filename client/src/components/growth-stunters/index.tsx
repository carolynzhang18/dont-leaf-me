import React, { useState, useEffect } from "react";

const GrowthStunters: React.FC = () => {
  const [called, setCalled] = useState(0);
  const [url, setUrl ] = useState('');

  useEffect(() => {
    console.log('update');
    if (url != "") {
      localStorage.setItem(JSON.stringify(url), JSON.stringify(url));
    }
    setUrl('');
  }, [called]);

  const submit = async () => {
    setCalled(called + 1);
  }

  return (
    <>
      <form>
        <label>
          Add new URL :
          <input type="text" name="name" onChange={async (e) => await setUrl(e.target.value)} value={url} />
        </label>
      </form>
      <button type="submit" onClick={submit}>Submit</button>
    </>
  );
};

export default GrowthStunters;
