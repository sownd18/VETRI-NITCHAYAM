import React, { useEffect, useState } from "react";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random/10");
      setQuotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  console.log(quotes);
  return (
    <div> 
      {quotes.map((line, i) => {
        return (
          <div className="d-flex justify-content-between bg-success-subtle px-5 flex-coumn">
            <h5 className="p-1" >{line.quote}</h5>
            <p className="align-self-end">-{line.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Quotes;
