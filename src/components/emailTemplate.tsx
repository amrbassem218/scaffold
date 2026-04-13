import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#EED9B9",
        color: "#5E0006",
        fontFamily: '"Departure Mono", "Courier New", Courier, monospace',
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div>
        <h1>Scaffold</h1>
      </div>
      <div
        style={{
          borderLeft: "2px solid #D53E0F",
          paddingLeft: "20px",
          marginBottom: "30px",
        }}
      >
        <p style={{ margin: "0 0 10px 0", color: "#9B0F06" }}>
          {">"} root@scaffold:~$
        </p>
        <h1
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "normal",
            color: "#D53E0F",
          }}
        >
          RSVP_CONFIRMED.exe
        </h1>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p style={{ margin: "0 0 20px 0" }}>
          <span style={{ color: "#D53E0F" }}>hola</span>,{" "}
          <span style={{ color: "#D53E0F" }}>{firstName}</span>
        </p>
        <p style={{ margin: "0 0 15px 0", lineHeight: "1.6" }}>
          you&apos;re officially on the list.
        </p>
        <p style={{ margin: "0 0 15px 0", lineHeight: "1.6" }}>
          we&apos;ll hit you up when the date drops.
        </p>
        <p style={{ margin: "0", lineHeight: "1.6" }}>
          keep an eye on your inbox, {`{spam}`} folder included.
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid #9B0F06",
          borderBottom: "1px solid #9B0F06",
          padding: "20px 0",
          marginBottom: "30px",
        }}
      >
        <pre
          style={{
            margin: "0",
            color: "#9B0F06",
            fontSize: "10px",
            lineHeight: "1.4",
          }}
        >
          {`+----------------------+----------------------+
|     STATUS           |     CONFIRMATION     |
+----------------------+----------------------+
|  [x] RSVP Accepted   |  #SC-2026-XXXX       |
|  [ ] Launch Date    |  Timestamp: undefined    |
|  [ ] End Date      |  Timestamp: nill |
+----------------------+----------------------+`}
        </pre>
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <span style={{ color: "#9B0F06" }}>[ </span>
        <span style={{ color: "#D53E0F" }}>Build cool sites</span>
        <span style={{ color: "#9B0F06" }}> ]</span>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0", fontSize: "10px", color: "#9B0F06" }}>
          {`>`.repeat(20)} end of transmission {`<`.repeat(20)}
        </p>
      </div>
    </div>
  );
}
