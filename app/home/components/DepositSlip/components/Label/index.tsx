import React, { CSSProperties } from "react";
import { Flex } from "antd";

const style: CSSProperties = {
    height: "48px",
    background: "rgba(242, 242, 242, 1)",
    padding: "12px 24px",
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 8,
};

interface Props {
    label: string;
}

const Label: React.FC<Props> = (props: Props) => {
    const { label } = props;
    return (
        <Flex align="center" style={style}>
            <span>{label}</span>
        </Flex>
    );
};

export default Label;
