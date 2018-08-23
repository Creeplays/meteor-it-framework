/// <reference types="node" />
import { IEncoder, IEncoderPacket } from '../';
export default class MsgPackEncoder implements IEncoder {
    /**
     * Schemaless encoder built on MsgPack
     */
    constructor();
    setRandomToRpc(random: number, rpc: string): void;
    resetRandomToRpc(random: number): void;
    getExistingRpcMethods(): string[];
    hasRpcMethod(name: string): boolean;
    getExistingEvents(): string[];
    hasEvent(name: string): boolean;
    encodeData(data: IEncoderPacket): Buffer;
    decodeData(buffer: Buffer): IEncoderPacket;
}
