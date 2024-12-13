import { DependencyList, useEffect } from "react";

interface TicketField {
  ticket: string; // UUID
}
interface TypeField {
  type: string;
  codes: string[]; // market codes
  is_only_realtime?: boolean;
}
interface FormatField {
  format?: string; // SIMPLE | DEFAULT
}

export type UpbitWsReqForm = [TicketField, TypeField, FormatField?];

export const useUpbitWebSocket = (
  url: string,
  upbitWsReqForm: UpbitWsReqForm,
  onmsgHandler: (event: MessageEvent) => void,
  deps: DependencyList | undefined
) => {
  useEffect(() => {
    const socket = connect(url, upbitWsReqForm, onmsgHandler);

    return ()=>{socket.close()};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const connect = (
  url: string,
  upbitWsReqForm: UpbitWsReqForm,
  onmsgHandler: (event: MessageEvent) => void
) => {
  console.debug("WebSocket connecting ... ", url);
  const socket = new WebSocket(url);
  socket.onerror = (error: Event) => {
    console.error("WebSocket Error:", error);
  };
  socket.onclose = () => {
    console.debug("WebSocket closed.");
  };
  socket.onopen = () => {
    console.debug(
      "WebSocket connnection established. send request form.",
      upbitWsReqForm
    );
    socket.send(JSON.stringify(upbitWsReqForm));
  };
  socket.onmessage = onmsgHandler;
  
  return socket;
};