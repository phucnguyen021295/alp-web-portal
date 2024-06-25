import React, { memo } from "react";
import { Flex, Table, TableProps } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface DataType {
    key: string;
    STT: string;
    HoTen: string;
    NgaySinh: string;
    NoiSinh: string;
    SoCMND: string;
    NgayCap: number;
    NoiCap: string;
    DCTT: string;
    DCLL: string;
    DTCD: string;
    DiDong: string;
    Email: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "STT",
        dataIndex: "STT",
        key: "STT",
    },
    {
        title: "Họ và tên",
        dataIndex: "HoTen",
        key: "HoTen",
    },
    {
        title: "Ngày sinh",
        dataIndex: "NgaySinh",
        key: "NgaySinh",
    },
    {
        title: "Nơi Sinh",
        dataIndex: "customer",
        key: "customer",
    },
    {
        title: "Số CMND/CCCD",
        dataIndex: "SoCMND",
        key: "SoCMND",
    },
    {
        title: "Ngày cấp",
        dataIndex: "NgayCap",
        key: "NgayCap",
    },
    {
        title: "Nơi cấp",
        dataIndex: "NoiCap",
        key: "NoiCap",
    },
    {
        title: "Điện thoại",
        dataIndex: "DiDong",
        key: "DiDong",
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: "Email",
    },
    {
        title: "Địa chỉ thường trú",
        dataIndex: "DCTT",
        key: "DCTT",
    },
    {
        title: "Địa chỉ liên lạc",
        dataIndex: "DCLL",
        key: "DCLL",
    },
    {
        title: "DTCD",
        dataIndex: "DTCD",
        key: "DTCD",
    },
];


interface Props {
    data: object;
    KhachNhan: [];
}

const CustomerReceivesTransfer: React.FC<Props> = (props: Props) => {
    const { data, KhachNhan = [] } = props;
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

            <Label label="Đồng sở hữu" />
            <Table
                columns={columns}
                dataSource={KhachNhan}
                pagination={false}
                scroll={{ x: 1360 }}
                style={{padding: '0 8px'}}
            />
        </Flex>
    );
};

export default memo(CustomerReceivesTransfer);
