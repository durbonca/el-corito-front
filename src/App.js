import { NavBar, Hero, ArchivesPosts } from "./components";

/* import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore"; */

function App() {
  /* const tryData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(doc => {
      console.log(doc.id, " => ", doc.data());
    });
  }; */

  return (
    <>
      <NavBar />
      <Hero />
      <ArchivesPosts />
    </>
  );
}

export default App;
