import { useState, useEffect } from "react";

import api from "../services/api";

const WeddingHook = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadWedding() {
      const wedding = await api.get("/wedding");
      setData(wedding);
    }
    loadWedding();
  }, []);

  return data;
};

export default WeddingHook;
