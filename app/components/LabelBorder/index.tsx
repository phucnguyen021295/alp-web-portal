import React, { CSSProperties } from "react";
import { Flex } from "antd";
import { merge } from "lodash";

const style: CSSProperties = {
    border: "1px solid #d9d9d9",
    minHeight: 40,
    borderRadius: 8,
    padding: "7px 11px",
    textDecoration: 'none',
};

interface Props {
    label?: string;
    value: string;
    textValue?: string;
}

const LabelBorder: React.FC<Props> = (props: Props) => {
    const { label, value, textValue = 'left' } = props;
    return (
        <Flex vertical style={{marginBottom: label ? 24 : 0}}>
            {label && <span style={{paddingBottom: 8}}>{label}</span>}
            <Flex align="center" style={merge(style, {justifyContent: textValue})}>
                {value}
                {!value && <div style={{height: 24}} />}
            </Flex>
        </Flex>
    );
};

export default LabelBorder;
