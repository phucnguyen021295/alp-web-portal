import React, { memo } from "react";
import {Flex, Table, TableProps } from "antd";

// Components
import Label from '@/app/home/components/DepositSlip/components/Label';

interface DataType {
    key: string;
    stt: string;
    programme: string;
    discountedValue: string;
    accumulated: number;
    artifacts: number;
    ratio: string;
    money: string;
}


const columns: TableProps<DataType>["columns"] = [
    {
        title: "STT",
        dataIndex: "stt",
        key: "stt",
    },
    {
        title: "Chương trình",
        dataIndex: "programme",
        key: "programme",
    },
    {
        title: "Giá trị tính chiết khấu",
        dataIndex: "discountedValue",
        key: "discountedValue",
        align: "center",
    },
    {
        title: "Tỷ lệ TT",
        dataIndex: "accumulated",
        key: "accumulated",
    },
    {
        title: "Tương ứng",
        dataIndex: "artifacts",
        key: "artifacts",
        align: "center",
    },
    {
        title: "Tỷ lệ VAT",
        dataIndex: "ratio",
        key: "ratio",
        align: "center",
    },
    {
        title: "Thuế VAT",
        dataIndex: "money",
        key: "money",
        align: "center",
    }
];

const data: DataType[] = [
    {
        key: "1",
        stt: "1",
        programme: "Chiết khấu mua nhiều",
        discountedValue: "Giá chưa VAT",
        accumulated: 1,
        artifacts: 0,
        ratio: "1%",
        money: "100.000.000",
        
    },
    {
        key: "2",
        stt: "2",
        programme: "Chiết khấu tiền mặt",
        discountedValue: "Giá chưa VAT",
        accumulated: 1,
        artifacts: 0,
        ratio: "0%",
        money: "80.000.000",
        
    },
    {
        key: "3",
        stt: "3",
        programme: "Tặng vàng",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "4",
        stt: "4",
        programme: "Chiết khấu thanh toán sớm",
        discountedValue: "Giá chưa VAT",
        accumulated: 1,
        artifacts: 1,
        ratio: "5%",
        money: "25.000.000",
    },
    {
        key: "5",
        stt: "5",
        programme: "Chiết khấu giới thiệu KH",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "6",
        stt: "6",
        programme: "08/07/2024",
        discountedValue: "Giá chưa VAT",
        accumulated: 1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "7",
        stt: "7",
        programme: "08/07/2024",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "8",
        stt: "8",
        programme: "08/07/2024",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "9",
        stt: "9",
        programme: "08/07/2024",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    },
    {
        key: "10",
        stt: "10",
        programme: "08/07/2024",
        discountedValue: "Giá chưa VAT",
        accumulated:1,
        artifacts: 0,
        ratio: "0%",
        money: "0",
        
    }
];

interface Props {
}

const SalesPolicy: React.FC<Props> = (props: Props) => {
    return (
        <Flex vertical style={{height: 'calc(100vh - 240px)', overflow: 'auto', margin: "0 -24px",}}>
            <Label label="Chính sách bán hàng tháng 04/2024" />
            <Table columns={columns} dataSource={data} scroll={{x: 800}} style={{margin: "0 24px"}} />
        </Flex>
    );
};

export default memo(SalesPolicy);
