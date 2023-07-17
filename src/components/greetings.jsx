import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingsReducer";

const Greetings = () => {
  const { loading, error, greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div>
      <div>
        <h1>Greeting:</h1>
        <h3>{greeting}</h3>
        {loading && <h4>Loading - {loading.toString()}</h4>}
        {error && <h4>Error - {error.toString()}</h4>}
        {!loading && !error && (
          <button type="button" onClick={handleGreeting}>
            Click the button to fetch a greeting
          </button>
        )}
      </div>
    </div>
  );
};

export default Greetings;
