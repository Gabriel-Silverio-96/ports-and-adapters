import "src/components/Card/Card.css";

function Card() {
  return (
    <div role="article" className="card">
      <div className="card-header">
        <h2>Card</h2>
      </div>

      <div className="card-content">
        <div>
          <h5>Response</h5>
          <pre>
            {JSON.stringify(
              {
                id: 1,
                name: "John",
              },
              null,
              2
            )}
          </pre>
        </div>
        <div>
          <h5>Payload</h5>

          <pre>
            {JSON.stringify(
              {
                id: 1,
                name: "John",
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>

      <div className="card-footer">
        <button>Refresh</button>
      </div>
    </div>
  );
}

export { Card };
