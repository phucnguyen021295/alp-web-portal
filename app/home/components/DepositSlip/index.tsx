import React from "react";
import { Tabs, Modal, ModalProps, TabsProps } from "antd";

// Components
import Common from '@/app/home/components/DepositSlip/components/Common';
import Customer from '@/app/home/components/DepositSlip/components/Customer';
import Price from '@/app/home/components/DepositSlip/components/Price';
import ProcessPrice from '@/app/home/components/DepositSlip/components/ProcessPrice';
import SalesPolicy from '@/app/home/components/DepositSlip/components/SalesPolicy';
import { useGetDetailTransactionQuery } from "@/app/home/apis";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Chung",
        children: <Common />,
    },
    {
        key: "2",
        label: "Khách hàng",
        children: <Customer />,
    },
    {
        key: "3",
        label: "Giá bán",
        children: <Price />,
    },
    {
        key: "4",
        label: "Tiến độ thanh toán",
        children: <ProcessPrice />,
    },
    {
        key: "5",
        label: "Chính sách bán hàng",
        children: <SalesPolicy />,
    },
];

interface Props extends ModalProps {
    open: boolean;
    id: string;
    formid: string;
}

const DepositApprovalForm: React.FC<Props> = (props: Props) => {
    const { open, formid, id, ...otherProps } = props;
    const { data, isLoading } = useGetDetailTransactionQuery({formid, id});

    return (
        <Modal
            title="Phiếu đặt cọc"
            centered
            open={open}
            footer={null}
            width={900}
            style={{height: 'calc(100vh - 100px)'}}
            {...otherProps}
        >
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Modal>
    );
};

export default DepositApprovalForm;
