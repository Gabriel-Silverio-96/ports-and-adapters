import { useEffect, useState } from "react";
import { Card } from "src/components/Card/Card";
import { useApi } from "src/shared/hooks/useApi";

function CardGet() {
  const api = useApi();

  const [data, setData] = useState<unknown>({});

  const fetchData = async () => {
    try {
      const response = await api.get("/todos", {
        headers: {
          "Content-Something": "value",
        },
      });

      setData(response.data);
    } catch (error) {
      console.error("GET", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Card title="Get" response={data} onClick={() => fetchData()} />;
}

export { CardGet };
