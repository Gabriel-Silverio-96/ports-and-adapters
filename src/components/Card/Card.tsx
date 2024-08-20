import "src/components/Card/Card.css";
import type { Card } from "src/components/Card/types";

function Card(props: Card) {
  const { response, payload, onClick } = props;

  const isUndefinedPayload = payload === undefined;

  return (
    <div role="article" className="card">
      <div className="card-header">
        <h2>Card</h2>
      </div>

      <div className="card-content">
        <div className="card-response">
          <h5>Response</h5>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>

        <div className="card-payload" hidden={isUndefinedPayload}>
          <h5>Payload</h5>
          <pre>{JSON.stringify(payload, null, 2)}</pre>
        </div>
      </div>

      <div className="card-footer">
        <button onClick={onClick}>Refresh</button>
      </div>
    </div>
  );
}

export { Card };