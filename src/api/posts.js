import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getPosts = async () => {
  const postsList = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach(doc => {
    postsList.push({ ...doc.data(), id: doc.id });
  });
  return postsList;
};
