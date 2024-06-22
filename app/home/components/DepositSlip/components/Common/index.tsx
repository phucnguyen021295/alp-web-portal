import React, { memo } from "react";
import { Flex } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface Props {}

const Common: React.FC<Props> = (props: Props) => {
    return (
        <Flex
            vertical
            style={{
                height: "calc(100vh - 240px)",
                overflow: "auto",
                margin: "0 -24px",
            }}
        >
            <Label label="Sản phẩm" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Dự án" value="KING" />
                <LabelBorder label="Khu" value="A" />
                <LabelBorder label="Phân khu" value="Chưa chọn" />
                <LabelBorder label="Mã sản phẩm" value="CH0505" />
                <LabelBorder label="Diện tích thông thủy" value="112.4" />
                <LabelBorder label="Diện tích tim tường" value="116.56" />
            </Flex>

            <Label label="Thông tin chứng từ" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Dự án" value="KING" />
                <LabelBorder label="Khu" value="A" />
                <LabelBorder label="Phân khu" value="Chưa chọn" />
                <LabelBorder label="Mã sản phẩm" value="CH0505" />
                <LabelBorder label="Diện tích thông thủy" value="112.4" />
                <LabelBorder label="Diện tích tim tường" value="116.56" />
            </Flex>
        </Flex>
    );
};

export default memo(Common);
