import React, { useMemo, useState } from "react";
import { Button, Cascader, Flex, Table } from "antd";
import type { CascaderProps, TableProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

// Components
import DepositApprovalForm from "@/app/home/components/DepositApprovalForm";
import DepositSlip from "@/app/home/components/DepositSlip";
import { useGetListTransactionQuery } from "@/app/home/apis";
import moment from "moment";

interface DataType {
    key: string;
    name: string;
    code: string;
    customer: string;
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
        value: "approval-procedures",
        label: "Thủ tục duyệt",
        children: [
            {
                value: "approval-procedures-children",
                label: "Thủ tục duyệt",
            },
            {
                value: "procedure-not-approved",
                label: "Thủ tục không duyệt",
            },
        ],
    },
    {
        value: "accountant-approves",
        label: "Kế toán duyệt",
        children: [
            {
                value: "approval-procedures-children",
                label: "Thủ tục duyệt",
            },
            {
                value: "procedure-not-approved",
                label: "Thủ tục không duyệt",
            },
        ],
    },
];

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

interface Props {
    params: object;
}

const COLOR = {
    'Đã thu tiền': "rgba(127, 194, 65, 1)",
    'Đã duyệt': "rgba(127, 194, 65, 0.9)",
    'Chờ duyệt': "rgba(255, 214, 10, 1)",
    'Đã thanh lý': 'rgb(223 91 49)'
}

const DepositTable: React.FC<Props> = (props: Props) => {
    const { params = {} } = props;
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [item, setItemSelected] = useState("");
    const [status, setStatus] = useState("");
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
                    if (value.includes("see-details")) {
                        setOpenDetail(true);
                        setItemSelected(record);
                    } else {
                        const option = selectOptions[selectOptions.length - 1];
                        setStatus(option.label);
                        setItemSelected(record);
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
            width: 150,
        },
        {
            title: "Khách hàng",
            dataIndex: "customer",
            key: "customer",
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
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: COLOR[_] || 'rgb(221 223 49)',
                            color: "#fff",
                        }}
                    >
                        <span>{_}</span>
                    </Flex>
                );
            },
            width: 200,
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

    const _data1 = useMemo(() => {
        if (data?.data) {
            return data.data.map((item: any) => ({
                key: item.ID,
                name: item.TenDA,
                code: item.KyHieuSP,
                customer: "Trần Công Hậu",
                status: item.TenTT,
                votes: item.SoPhieu,
                signDay: moment(item.NgayKy).format("DD/MM/YYYY"),
                creator: item.NguoiTao,
                dateCreated: moment(item.NgayTao).format("DD/MM/YYYY"),
                maTT: item.MaTT
            }));
        }
        return [];
    }, [data?.data]);

    console.log("params", params);
    return (
        <>
            <Table
                columns={columns}
                dataSource={_data1}
                loading={isLoading}
                pagination={{
                    onChange: (page, pageSize) => {
                        setPagination({ current: page, pageSize });
                    },
                    total: data?.count | 0,
                    showTotal: (total, range) =>
                        `Hiển thị từ ${range[0]} - ${range[1]} của ${data?.count} mục`,
                }}
                scroll={{ x: 1250 }}
            />
            {open && (
                <DepositApprovalForm
                    open={open}
                    status={status}
                    formId={parseInt(params?.formId)}
                    id={item.key}
                    maTT={item.maTT}
                    onClose={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            )}

            {openDetail && (
                <DepositSlip
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
