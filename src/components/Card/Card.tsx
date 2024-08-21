import "src/components/Card/Card.css";
import type { Card } from "src/components/Card/types";
import { Button } from "src/components/Button";

function Card(props: Card): JSX.Element {
  const { response, payload, onClick, color = "brown", title } = props;

  const isUndefinedPayload = payload === undefined;

  return (
    <div role="article" className={`card color-${color}`}>
      <div className="card-header">
        <h2>{title}</h2>
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
        <Button onClick={onClick}>Refresh</Button>
      </div>
    </div>
  );
}

export { Card };
