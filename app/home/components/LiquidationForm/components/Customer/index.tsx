import React, { memo } from "react";
import { Flex } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";
import moment from "moment";

interface Props {
    data: object
}

const TransferCustomers: React.FC<Props> = (props: Props) => {
    const {data} = props;
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
                <LabelBorder label="Họ và tên" value={data.khHoTen} />
                <LabelBorder label="Ngày sinh" value={moment(data.khNgaySinh).format('DD/MM/YYYY')} />
                <LabelBorder label="Nơi sinh" value={data.khNoiSinh} />
                <LabelBorder label="Số CMND/CCCD" value={data.khSoCMND} />
                <LabelBorder label="Ngày cấp" value={moment(data.khNgayCapCMND).format('DD/MM/YYYY')} />
                <LabelBorder label="Nơi cấp" value={data.khNoiCapCMND} />
                <LabelBorder label="Điện thoại" value={data.khDienThoai} />
                <LabelBorder label="Email" value={data.khEmail} />
                <LabelBorder label="Địa chỉ thường trú " value={data.khDiaChiTT} />
                <LabelBorder label="Địa chỉ liên lạc" value={data.khDiaChiLL} />
            </Flex>
        </Flex>
    );
};

export default memo(TransferCustomers);
