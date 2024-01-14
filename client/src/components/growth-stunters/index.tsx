import React, { useState, useEffect } from "react";

const GrowthStunters: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [url, setUrl ] = useState('');

  useEffect(() => {
    console.log('update');
    localStorage.setItem('urls', JSON.stringify(urls));
  }, [urls]);

  const submit = async () => {
    setUrls([...urls, url]);
    console.log("urls", urls);
    setUrl('');
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
