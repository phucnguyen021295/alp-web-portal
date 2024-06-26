import React, { memo, useMemo } from "react";
import { Flex, Table, TableProps } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import moment from "moment";
import formatMoney from "@/app/utils/formatMoney";

interface DataType {
    key: string;
    batch: string;
    dateOfPayment: string;
    typeTT: string;
    ratioTT: string;
    corresponding: string;
    ratioVAT: string;
    taxVAT: string;
    pbt: string;
    PhiBT: number;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "Đợt",
        dataIndex: "batch",
        key: "batch",
        width: 50,
        align: "center",
    },
    {
        title: "Ngày thanh toán",
        dataIndex: "dateOfPayment",
        key: "dateOfPayment",
        width: 150,
        align: "center",
    },
    {
        title: "Kiểu TT",
        dataIndex: "typeTT",
        key: "typeTT",
        align: "center",
        width: 120,
    },
    {
        title: "Tỷ lệ TT",
        dataIndex: "ratioTT",
        key: "ratioTT",
        width: 120,
        align: "center",
    },
    {
        title: "Tương ứng",
        dataIndex: "corresponding",
        key: "corresponding",
        align: "center",
        width: 100,
    },
    {
        title: "Tỷ lệ VAT",
        dataIndex: "ratioVAT",
        key: "ratioVAT",
        align: "center",
        width: 120,
    },
    {
        title: "Thuế VAT",
        dataIndex: "taxVAT",
        key: "taxVAT",
        align: "center",
        width: 100,
    },
    {
        title: "% PBT",
        dataIndex: "pbt",
        key: "pbt",
        width: 80,
        align: "center",
    },
    {
        title: "Phí bảo trì",
        dataIndex: "PhiBT",
        key: "PhiBT",
        width: 100,
        align: "center",
    },
];

// const data: DataType[] = [
//     {
//         key: "1",
//         batch: "1",
//         dateOfPayment: "05/06/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "30%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "2",
//         batch: "2",
//         dateOfPayment: "07/06/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "30%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "3",
//         batch: "3",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "4",
//         batch: "4",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "20%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "5%",
//         taxVAT: "25.000.000",
//         pbt: "100%",
//     },
//     {
//         key: "5",
//         batch: "5",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "6",
//         batch: "6",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "30%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "7",
//         batch: "7",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "8",
//         batch: "8",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "9",
//         batch: "9",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
//     {
//         key: "10",
//         batch: "10",
//         dateOfPayment: "08/07/2024",
//         typeTT: "Giá gồm VAT",
//         ratioTT: "25%",
//         corresponding: "1.500.000.000",
//         ratioVAT: "0%",
//         taxVAT: "0",
//         pbt: "0%",
//     },
// ];

interface Props {
    data: [];
}

const ProcessPrice: React.FC<Props> = (props: Props) => {
    const { data } = props;

    const _data = useMemo(() => {
        return data.map((item) => ({
            key: item.ID,
            batch: item.DotTT,
            dateOfPayment: item.NgayTT ? moment(item.NgayTT).format('DD/MM/YYYY') : "",
            typeTT: item.TenKTT,
            ratioTT: `${item.TyLeTT || 0}%`,
            corresponding: formatMoney(item.TuongUng),
            ratioVAT: `${item.TyLeVAT || 0}%`,
            taxVAT: item.ThueVAT,
            pbt: `${item.GiamTruTTS || 0}%`,
            PhiBT: item.PhiBT,
        }));
    }, [data]);

    return (
        <Flex
            vertical
            style={{
                height: "calc(100vh - 240px)",
                overflow: "auto",
                margin: "0 -24px",
            }}
        >
            <Label label="Thanh toán 5 đợt (30/30/20/25/5)" />
            <Table
                columns={columns}
                dataSource={_data}
                scroll={{ x: 1024 }}
                pagination={false}
                style={{ margin: "0 24px" }}
            />
        </Flex>
    );
};

export default memo(ProcessPrice);
