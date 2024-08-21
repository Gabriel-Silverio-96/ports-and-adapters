import { useEffect, useState } from "react";
import { Card } from "src/components/Card/Card";
import { useApi } from "src/shared/hooks/useApi";

function CardPost() {
  const api = useApi();

  const [data, setData] = useState<unknown>({});
  const payload = {
    id: 3,
    name: "John",
  };

  const fetchData = async () => {
    try {
      const response = await api.post("/todos", {
        headers: {
          "Content-Something": "value",
        },
        payload,
      });

      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      title="Post"
      color="green"
      response={data}
      onClick={() => fetchData()}
      payload={payload}
    />
  );
}

export { CardPost };
