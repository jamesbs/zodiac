// package: 
// file: example.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Example extends jspb.Message { 
    getChinese(): string;
    setChinese(value: string): void;

    getPinyin(): string;
    setPinyin(value: string): void;

    getEnglish(): string;
    setEnglish(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Example.AsObject;
    static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Example;
    static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
}

export namespace Example {
    export type AsObject = {
        chinese: string,
        pinyin: string,
        english: string,
    }
}
