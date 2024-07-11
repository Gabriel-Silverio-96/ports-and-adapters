import { useEffect } from "react";
import { useApi } from "./shared/hooks/useApi";

function App() {
  const api = useApi();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get({ endpoint: "/todos" });
        console.log(response);
      } catch (error) {
        console.error("GET TODOS ", error);
      }
    };
    getData();
  }, []);

  return <>Hello</>;
}

export default App;
