import { NavBar, Hero } from "./components";
import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const tryData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  tryData();

  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
