import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  /* where, */
  orderBy,
  startAt
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

export const getPostCount = async () => {
  const q = query(collection(db, "posts"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size;
};

export const getPosts = async page => {
  const postsList = [];
  const categories = await getCategories();

  const q = query(collection(db, "posts"), orderBy("date_creation", "desc"));

  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[(page - 1) * 10];

  const next = query(
    collection(db, "posts"),
    orderBy("date_creation", "desc"),
    startAt(lastVisible),
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
