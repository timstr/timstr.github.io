import * as React from "react";
import { Color } from "../interfaces/Color";
import { DynamicTabMenu } from "./DynamicTabMenu";
import { BigImage } from "./BigImage";
import { ActualSizeImage } from "./ActualSizeImage";

interface ImageProps {
    readonly fileName: string;
    readonly title: string;
}

interface ImageListProps {
    readonly folderName: string;
    readonly images: ReadonlyArray<ImageProps>;
    readonly actualSize?: boolean;
}

export const TabbedImages = (props: ImageListProps) => (
    <DynamicTabMenu
        contentColor={new Color("#cccccc")}
        backgroundColor={new Color("#dddddd")}
    >
        {props.images.map((img) => ({
            title: img.title,
            render: () => {
                const name = props.folderName + "/" + img.fileName;
                return props.actualSize ? (
                    <ActualSizeImage name={name} />
                ) : (
                    <BigImage name={name} />
                );
            },
        }))}
    </DynamicTabMenu>
);
