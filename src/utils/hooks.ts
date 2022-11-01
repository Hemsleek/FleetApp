import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  authenticateUserAnonymously,
  collectionRef,
} from "../services/firebase";
import { startLoading, stopLoading } from "../store/loaderReducer";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await authenticateUserAnonymously();
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapShot) => {
      const usersData = querySnapShot.docs.map((doc) => {
        console.log({ docData: doc.data().data });
        return doc.data().data;
      });
      console.log({ usersData });
      setUsers(usersData);
    });

    return () => {
      unsubscribe();
      setUsers([]);
    };
  }, []);

  return {
    users,
  };
};
