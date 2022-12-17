import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  orderBy,
  startAt
} from "firebase/firestore";

export const getPostByTitle = async title => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const post = querySnapshot.docs.find(doc => doc.data().title === title);
    return post.data();
  } catch (error) {
    throw new Error("Fallo en obtener el post: ", error);
  }
};

export const getCategories = async () => {
  const categoriesList = [];
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach(doc => {
      categoriesList.push({ ...doc.data(), id: doc.id });
    });
    return categoriesList;
  } catch (error) {
    throw new Error("Fallo en obtener las categorías: ", error);
  }
};

export const getLastPosts = async () => {
  try {
    const q = query(
      collection(db, "posts"),
      limit(1),
      orderBy("date_creation", "desc")
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs[0].data();
    return data;
  } catch (error) {
    throw new Error("Fallo en obtener el ultimo post: ", error);
  }
};

export const getPostCount = async () => {
  try {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    throw new Error("Fallo en obtener el conteo de los posts: ", error);
  }
};

export const getPosts = async page => {
  const postsList = [];
  try {
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
  } catch (error) {
    throw new Error("Fallo en obtener el listado de los posts: ", error);
  }
};
