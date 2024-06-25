import React, { memo } from "react";
import { Flex } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface Props {
    data: object;
}

const CustomerReceivesTransfer: React.FC<Props> = (props: Props) => {
    const { data } = props;
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
                <LabelBorder label="Họ và tên" value={data.ncnHoTen} />
                <LabelBorder label="Ngày sinh" value={data.ncnNgaySinh} />
                <LabelBorder label="Nơi sinh" value={data.ncnNoiSinh} />
                <LabelBorder label="Số CMND/CCCD" value={data.ncnSoCMND} />
                <LabelBorder label="Ngày cấp" value={data.ncnNgayCapCMND} />
                <LabelBorder label="Nơi cấp" value={data.ncnNoiCapCMND} />
                <LabelBorder label="Điện thoại" value={data.ncnDienThoai} />
                <LabelBorder label="Email" value={data.ncnEmail} />
                <LabelBorder
                    label="Địa chỉ thường trú"
                    value={data.ncnDiaChiTT}
                />
                <LabelBorder label="Địa chỉ liên lạc" value={data.khDiaChiLL} />
            </Flex>
        </Flex>
    );
};

export default memo(CustomerReceivesTransfer);
