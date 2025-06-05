import "./App.css";
import Booking from "./booking";
import Contact from "./contact";
import { useState } from "react";

interface data {
  Name: string;
  Date: string;
  Time: string;
}
function App() {
  const [formValue, setformValue] = useState<data>({
    Name: "",
    Date: "",
    Time: "",
  });

  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="container">
      {!isBooked && (
        <Booking onSubmit={setformValue} isBooked={() => setIsBooked(true)} />
      )}
      {isBooked && <Contact entry={formValue} />}
    </div>
  );
}

export default App;
