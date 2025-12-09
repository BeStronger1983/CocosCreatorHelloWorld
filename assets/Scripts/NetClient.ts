export class NetClient {
    private ws: WebSocket | null = null;

    connect(url: string) {
        this.ws = new WebSocket(url);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClose.bind(this);
    }

    private onOpen(ev: Event) {
        console.log("WebSocket connected.");
    }

    private onMessage(ev: MessageEvent) {
        console.log("Receive:", ev.data);
    }

    private onError(ev: Event) {
        console.error("WebSocket error:", ev);
    }

    private onClose(ev: CloseEvent) {
        console.log("WebSocket closed:", ev.code, ev.reason);
    }

    send(data: string | ArrayBuffer) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(data);
        }
    }

    close() {
        this.ws?.close();
    }
}
