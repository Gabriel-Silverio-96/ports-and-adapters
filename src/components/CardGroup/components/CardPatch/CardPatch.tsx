import { useEffect, useState } from "react";
import { Card } from "src/components/Card/Card";
import { useApi } from "src/shared/hooks/useApi";

function CardPatch() {
  const api = useApi();

  const [data, setData] = useState<unknown>({});
  const payload = {
    id: 4,
    name: "John",
  };

  const fetchData = async () => {
    try {
      const response = await api.patch("/todos", {
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
      title="Patch"
      color="blue"
      response={data}
      onClick={() => fetchData()}
      payload={payload}
    />
  );
}

export { CardPatch };
