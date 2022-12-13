import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  /* where, */
  orderBy,
  startAfter
} from "firebase/firestore";

export const getCategories = async () => {
  const categoriesList = [];
  const querySnapshot = await getDocs(collection(db, "categories"));
  querySnapshot.forEach(doc => {
    categoriesList.push({ ...doc.data(), id: doc.id });
  });
  return categoriesList;
};

export const getLastPosts = async () => {
  const q = query(
    collection(db, "posts"),
    limit(1),
    orderBy("date_creation", "desc")
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs[0].data();
  return data;
};

export const getPosts = async () => {
  const start = 1;
  const postsList = [];
  const categories = await getCategories();

  const q = query(
    collection(db, "posts"),
    orderBy("date_creation", "desc"),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[start - 1];

  const next = query(
    collection(db, "posts"),
    orderBy("date_creation", "desc"),
    startAfter(lastVisible),
    limit(10)
  );

  const nextQuerySnapshot = await getDocs(next);

  nextQuerySnapshot.forEach(doc => {
    const data = doc.data();
    const category = categories.find(
      category => category.id === data.categories
    );
    data.category = category;
    postsList.push({ ...data, id: doc.id });
  });
  return postsList;
};
