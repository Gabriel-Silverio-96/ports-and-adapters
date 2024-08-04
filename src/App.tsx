import { useEffect } from "react";
import { useApi } from "src/shared/hooks/useApi";

function App() {
  const api = useApi();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/todos", {
          headers: {
            "Content-Something": "value",
          },
        });

        console.log(":::SUC ", response);
      } catch (error) {
        console.error(">>>ERROR ", error);
      }
    };
    getData();
  }, []);

  return <>Hello</>;
}

export default App;
