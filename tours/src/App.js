import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removetour = (id) => {
    const newtour = tours.filter((tour) => tour.id !== id);
    setTours(newtour);
  };
  const fetchtours = async () => {
    setLoading(true);
    try {
      const respose = await fetch(url);
      const tours = await respose.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2> no tours Left</h2>
          <button className='btn' onClick={() => fetchtours()}>
            Refresh Tours
          </button>
        </div>
        ;
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removetour={removetour} />
    </main>
  );
}

export default App;
