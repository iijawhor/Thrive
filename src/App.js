import { getDatabase, set, ref } from "firebase/database";
import { firebaseApp } from "./firebaseConfig/firebase";
import "./App.css";
const db = getDatabase(firebaseApp);
function App() {
  const addData = () => {
    set(ref(db, "users/jawhor"), {
      id: 1,
      name: "Sanjida",
      email: "sajijawhor@gmail.com"
    });
  };
  return (
    <div className="App">
      <h1>Thrive</h1>
      <button onClick={addData}>Add Data To Database</button>
    </div>
  );
}

export default App;
