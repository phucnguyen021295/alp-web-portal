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
                <LabelBorder label="Dự án" value="KING PALACE" />
                <LabelBorder label="Mã sản phẩm" value="CH0505" />
            </Flex>

            <Label label="Thông tin chứng từ" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Số phiếu " value="A0101/HDDC" />
                <LabelBorder label="Ngày ký" value="01/04/2024" />
                <LabelBorder label="Loại chuyển nhượng" value="HĐMB" />
                <LabelBorder label="Số giao dịch" value="000001424/HĐMB" />
            </Flex>
        </Flex>
    );
};

export default memo(Common);
