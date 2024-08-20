import { useEffect } from "react";
import "./style/global.css";
import { useApi } from "src/shared/hooks/useApi";
import { Card } from "./components/Card/Card";

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

  return <Card />;
}

export default App;
