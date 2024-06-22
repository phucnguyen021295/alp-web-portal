import React from "react";
import { Tabs, Modal, ModalProps, TabsProps } from "antd";

// Components
import Common from '@/app/home/components/LiquidationForm/components/Common';
import Customer from '@/app/home/components/LiquidationForm/components/Customer';

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
];

interface Props extends ModalProps {
    open: boolean;
}

const DepositApprovalForm: React.FC<Props> = (props: Props) => {
    const { open, ...otherProps } = props;

    return (
        <Modal
            title="Thanh lý"
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
