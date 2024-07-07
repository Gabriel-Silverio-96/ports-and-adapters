import { useEffect } from "react";
import ApiAdapter from "./shared/adapters/api/api-adapter";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiAdapter.get({ endpoint: "/todos" });
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
