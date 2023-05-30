/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    Cell27222?: PrimitiveOverrideProps<FlexProps>;
    Content27223?: PrimitiveOverrideProps<FlexProps>;
    Text27224?: PrimitiveOverrideProps<TextProps>;
    Cell27231?: PrimitiveOverrideProps<FlexProps>;
    Content27232?: PrimitiveOverrideProps<FlexProps>;
    Text27233?: PrimitiveOverrideProps<TextProps>;
    Cell27228?: PrimitiveOverrideProps<FlexProps>;
    Content27229?: PrimitiveOverrideProps<FlexProps>;
    Text27230?: PrimitiveOverrideProps<TextProps>;
    Cell27225?: PrimitiveOverrideProps<FlexProps>;
    Content27226?: PrimitiveOverrideProps<FlexProps>;
    Text27227?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
