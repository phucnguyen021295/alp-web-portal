import React, { memo } from "react";
import { Flex } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface Props {}

const Customer: React.FC<Props> = (props: Props) => {
    return (
        <Flex
            vertical
            style={{
                height: "calc(100vh - 240px)",
                overflow: "auto",
                margin: "0 -24px",
            }}
        >
            <Label label="Người đứng tên" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Họ và tên" value="Nguyễn Hồng Phúc" />
                <LabelBorder label="Ngày sinh" value="02/12/1995" />
                <LabelBorder label="Nơi sinh" value="Thái Bình" />
                <LabelBorder label="Số CMND/CCCD" value="123456789" />
                <LabelBorder label="Ngày cấp" value="01/09/2016" />
                <LabelBorder label="Nơi cấp" value="CA Thái Bình" />
                <LabelBorder label="Điện thoại" value="01234568798" />
                <LabelBorder label="Email" value="phuc@gmail.com" />
            </Flex>
        </Flex>
    );
};

export default memo(Customer);
