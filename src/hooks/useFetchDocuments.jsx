import { useState, useEffect } from "react";
import { db } from "../firebase/Config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  QuerySnapshot,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoad(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        // busca
        // dashboard

        q = await query(collectionRef, orderBy("createdAt", "desc"));

        await onSnapshot(q, (QuerySnapshot) => {
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoad(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoad(false);
      }
    }
    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return documents, loading, error;
};
