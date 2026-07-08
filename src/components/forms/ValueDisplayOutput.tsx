interface ValueDisplayOutputProps {
  code: string;
}

export default function ValueDisplayOutput({ code }: ValueDisplayOutputProps) {
  return (
    <div className="value-display-container">
      <div className="value-display-header">
        <span className="value-display-title">Usage Guidance</span>
      </div>
      <div className="value-display-content">
        <div className="output-item">
          <span className="output-label">
            Format String (Use in <code className="inline-code">default-value-display</code>)
          </span>
          <code className="output-code">{code}</code>
        </div>
        <div className="output-item">
          <span className="output-label">
            In <code className="inline-code">line</code> (as placeholder)
          </span>
          <code className="output-code">{`{value_${code}}`}</code>
        </div>
        <div className="output-item">
          <span className="output-label">
            In <code className="inline-code">value</code> query
          </span>
          <code className="output-code">{`<holder>;value;${code}`}</code>
        </div>
        <div className="output-item">
          <span className="output-label">
            In <code className="inline-code">top_value</code> query
          </span>
          <code className="output-code">{`<holder>;top_value;<position>;${code}`}</code>
        </div>
      </div>
    </div>
  );
}
