import React, { CSSProperties } from "react";
import { Flex } from "antd";

const style: CSSProperties = {
    border: "1px solid #d9d9d9",
    minHeight: 40,
    borderRadius: 8,
    padding: "7px 11px",
};

interface Props {
    label?: string;
    value: string;
}

const LabelBorder: React.FC<Props> = (props: Props) => {
    const { label, value } = props;
    return (
        <Flex vertical style={{marginBottom: label ? 24 : 0}}>
            {label && <span style={{paddingBottom: 8}}>{label}</span>}
            <Flex align="center" style={style}>
                {value}
            </Flex>
        </Flex>
    );
};

export default LabelBorder;
