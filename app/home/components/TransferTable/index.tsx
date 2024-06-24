import React, { useState } from "react";
import { Button, Cascader, Flex, Table } from "antd";
import type { CascaderProps, TableProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

// Components
import ApproveTransferForm from "@/app/home/components/ApproveTransferForm";
import TransferForm from "@/app/home/components/TransferForm";
import { useGetListTransactionQuery } from "@/app/home/apis";
import { merge } from "lodash";

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

const _data: DataType[] = [
    {
        key: "1",
        name: "KING PALACE",
        code: "A0401",
        customer: "Đinh Văn B",
        customer_nhan: "Đinh Văn B",
        status: 0,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "2",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 0,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "3",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "4",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "5",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "6",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 0,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "7",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "8",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "9",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "10",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "11",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "12",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "13",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "14",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
    {
        key: "15",
        name: "KING PALACE",
        code: "A0401",
        customer: "Trần Công Hậu",
        customer_nhan: "Đinh Văn B",
        status: 1,
        votes: "A0401/HĐĐC",
        signDay: "01/04/2024",
        creator: "Nguyễn Thùy Linh",
        dateCreated: "28/03/2024",
    },
];

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
        },
        {
            title: "Mã sản phẩm",
            dataIndex: "code",
            key: "code",
            align: "center",
        },
        {
            title: "Khách CN",
            dataIndex: "customer",
            key: "customer",
        },
        {
            title: "Khách nhận CN",
            dataIndex: "customer_nhan",
            key: "customer_nhan",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                if (record.status === 1) {
                    return (
                        <Flex
                            align="center"
                            justify="center"
                            style={{
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: "rgba(127, 194, 65, 0.9)",
                                color: "#fff",
                            }}
                        >
                            <span>Thủ tục đã duyệt</span>
                        </Flex>
                    );
                }
                return (
                    <Flex
                        align="center"
                        justify="center"
                        style={{
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: "rgba(255, 214, 10, 1)",
                        }}
                    >
                        <span>Chờ duyệt</span>
                    </Flex>
                );
            },
            width: 180,
            align: "center",
        },
        {
            title: "Số phiếu",
            dataIndex: "votes",
            key: "votes",
            align: "center",
        },
        {
            title: "Ngày ký",
            dataIndex: "signDay",
            key: "signDay",
            align: "center",
        },
        {
            title: "Người tạo",
            dataIndex: "creator",
            key: "creator",
        },
        {
            title: "Ngày tạo",
            dataIndex: "dateCreated",
            key: "dateCreated",
            align: "center",
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={_data}
                pagination={{
                    showTotal: (total, range) =>
                        `Hiển thị từ ${range[0]} - ${range[1]} của ${total} mục`,
                }}
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
