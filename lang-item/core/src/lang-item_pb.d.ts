// package: 
// file: lang-item.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as example_pb from "./example_pb";

export class LangItem extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getChinese(): string;
    setChinese(value: string): void;

    getPinyin(): string;
    setPinyin(value: string): void;

    clearEnglishList(): void;
    getEnglishList(): Array<string>;
    setEnglishList(value: Array<string>): void;
    addEnglish(value: string, index?: number): string;

    clearExamplesList(): void;
    getExamplesList(): Array<example_pb.Example>;
    setExamplesList(value: Array<example_pb.Example>): void;
    addExamples(value?: example_pb.Example, index?: number): example_pb.Example;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LangItem.AsObject;
    static toObject(includeInstance: boolean, msg: LangItem): LangItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LangItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LangItem;
    static deserializeBinaryFromReader(message: LangItem, reader: jspb.BinaryReader): LangItem;
}

export namespace LangItem {
    export type AsObject = {
        id: string,
        chinese: string,
        pinyin: string,
        englishList: Array<string>,
        examplesList: Array<example_pb.Example.AsObject>,
    }
}
