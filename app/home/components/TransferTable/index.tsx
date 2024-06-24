import React, { useMemo, useState } from "react";
import { Button, Cascader, Flex, Table } from "antd";
import type { CascaderProps, TableProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

// Components
import ApproveTransferForm from "@/app/home/components/ApproveTransferForm";
import TransferForm from "@/app/home/components/TransferForm";
import { useGetListTransactionQuery } from "@/app/home/apis";
import { merge } from "lodash";
import moment from "moment";

interface DataType {
    key: string;
    name: string;
    code: string;
    customer: string;
    customer_nhan: string;
    status: number;
    votes: string;
    signDay: string;
    creator: string;
    dateCreated: string;
}

const options: Option[] = [
    {
        value: "see-details",
        label: "Xem chi tiết",
    },
    {
        value: "2",
        label: "Duyệt",
    },
    {
        value: "3",
        label: "Không duyệt",
    },
];

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const COLOR = {
    'Đã thu tiền': "rgba(127, 194, 65, 1)",
    'Đã duyệt': "rgba(127, 194, 65, 0.9)",
    'Chờ duyệt': "rgba(255, 214, 10, 1)",
    'Đã thanh lý': 'rgb(223 91 49)',
    'Đã xác nhận': 'rgb(12 170 18)'
}

// const _data: DataType[] = [
//     {
//         key: "1",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Đinh Văn B",
//         customer_nhan: "Đinh Văn B",
//         status: 0,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "2",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 0,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "3",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "4",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "5",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "6",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 0,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "7",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "8",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "9",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "10",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "11",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "12",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "13",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "14",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
//     {
//         key: "15",
//         name: "KING PALACE",
//         code: "A0401",
//         customer: "Trần Công Hậu",
//         customer_nhan: "Đinh Văn B",
//         status: 1,
//         votes: "A0401/HĐĐC",
//         signDay: "01/04/2024",
//         creator: "Nguyễn Thùy Linh",
//         dateCreated: "28/03/2024",
//     },
// ];

interface Props {
    params: object;
}

const DepositTable: React.FC<Props> = (props: Props) => {
    const { params = {} } = props;
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [status, setStatus] = useState("");
    const [item, setItemSelected] = useState("");
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const _params = {
        ...params,
        ...{ pageindex: pagination.current, pagesize: pagination.pageSize },
    };
    const { data, isLoading } = useGetListTransactionQuery(_params);

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Dự án",
            dataIndex: "name",
            key: "name",
            width: 200,
        },
        {
            title: "",
            dataIndex: "action",
            render: (_: any, record: any) => {
                const onChange: CascaderProps<Option>["onChange"] = (
                    value,
                    selectOptions
                ) => {
                    console.log(value);
                    if (value.includes("see-details")) {
                        setOpenDetail(true);
                        setItemSelected(record);
                    } else {
                        const option = selectOptions[selectOptions.length - 1];
                        setStatus(option.label);
                        setItemSelected(merge(record, { maTT: option.value }));
                        setOpen(true);
                    }
                };
                return (
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    >
                        <Button
                            type="text"
                            shape="circle"
                            icon={<EllipsisOutlined />}
                        />
                    </Cascader>
                );
            },
            width: 30,
            align: "center",
        },
        {
            title: "Mã sản phẩm",
            dataIndex: "code",
            key: "code",
            align: "center",
            width: 180,
        },
        {
            title: "Khách CN",
            dataIndex: "customer",
            key: "customer",
            width: 200,
        },
        {
            title: "Khách nhận CN",
            dataIndex: "customer_nhan",
            key: "customer_nhan",
            width: 200,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (_) => {
                return (
                    <Flex
                        align="center"
                        justify="center"
                        style={{
                            padding: '4px 8px',
                            minHeight: 40,
                            borderRadius: 30,
                            backgroundColor: COLOR[_] || 'rgb(221 223 49)',
                            color: "#fff",
                        }}
                    >
                        <span>{_}</span>
                    </Flex>
                );
            },
            width: 220,
            align: "center",
        },
        {
            title: "Số phiếu",
            dataIndex: "votes",
            key: "votes",
            align: "center",
            width: 100,
        },
        {
            title: "Ngày ký",
            dataIndex: "signDay",
            key: "signDay",
            align: "center",
            width: 120,
        },
        {
            title: "Người tạo",
            dataIndex: "creator",
            key: "creator",
            width: 200,
        },
        {
            title: "Ngày tạo",
            dataIndex: "dateCreated",
            key: "dateCreated",
            align: "center",
            width: 120,
        },
    ];

    const _data = useMemo(() => {
        if (data?.data) {
            return data.data.map((item: any) => ({
                key: item.ID,
                name: item.TenDA,
                code: item.KyHieuSP,
                customer: item.TenKH,
                customer_nhan: item.TenKHNCN,
                status: item.TenTT,
                votes: item.SoPhieu,
                signDay: moment(item.NgayKy).format('DD/MM/YYYY'),
                creator: item.NguoiTao,
                dateCreated: moment(item.NgayTao).format('DD/MM/YYYY'),
                maTT: item.MaTT
            }));
        }
        return [];
    }, [data?.data]);

    return (
        <>
            <Table
                columns={columns}
                dataSource={_data}
                loading={isLoading}
                pagination={{
                    onChange: (page, pageSize) => {
                        setPagination({ current: page, pageSize });
                    },
                    total: data?.count || 0,
                    showTotal: (total, range) =>
                        `Hiển thị từ ${range[0]} - ${range[1]} của ${total} mục`,
                }}
                scroll={{ x: 1360 }}
            />
            {open && (
                <ApproveTransferForm
                    status={status}
                    open={open}
                    formId={parseInt(params?.formId)}
                    id={item.key}
                    maTT={parseInt(item.maTT)}
                    onClose={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            )}

            {openDetail && (
                <TransferForm
                    open={openDetail}
                    formid={params?.formId}
                    id={item.key}
                    onClose={() => setOpenDetail(false)}
                    onCancel={() => setOpenDetail(false)}
                />
            )}
        </>
    );
};

export default DepositTable;
