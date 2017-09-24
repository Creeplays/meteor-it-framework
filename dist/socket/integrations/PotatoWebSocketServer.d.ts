import { WebSocketClient, PotatoSocketUniversal, IEncoder, IServerOpenHandler, IServerCloseHandler, IServerOpenCloseHandler } from '../';
import Logger from '@meteor-it/logger';
export declare class PotatoWebSocketServerInternalClient extends PotatoSocketUniversal {
    websocket: WebSocketClient;
    session: any;
    id: string;
    constructor(id: string, server: PotatoWebSocketServer, websocket: any);
    sendBufferToRemote(buffer: any): void;
}
export default class PotatoWebSocketServer extends PotatoSocketUniversal {
    clients: {
        [key: string]: PotatoWebSocketServerInternalClient;
    };
    constructor(name: string | Logger, encoder: IEncoder);
    emit(event: string, data: any): boolean;
    openHandlers: IServerOpenHandler[];
    closeHandlers: IServerCloseHandler[];
    on(event: string, listener: IServerOpenCloseHandler): void;
    handler(req: any, websocket: any): void;
}
