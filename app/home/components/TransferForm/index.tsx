import React, { useMemo } from "react";
import { Tabs, Modal, ModalProps, TabsProps, Flex, Spin } from "antd";

// Components
import Common from '@/app/home/components/TransferForm/components/Common';
import TransferCustomers from '@/app/home/components/TransferForm/components/TransferCustomers';
import CustomerReceivesTransfer from '@/app/home/components/TransferForm/components/CustomerReceivesTransfer';
import { useGetDetailTransactionQuery } from "@/app/home/apis";

const onChange = (key: string) => {
    console.log(key);
};

interface Props extends ModalProps {
    open: boolean;
    formid: number;
    id: number;
}

const DepositApprovalForm: React.FC<Props> = (props: Props) => {
    const { open, formid, id, ...otherProps } = props;
    const { data, isLoading } = useGetDetailTransactionQuery({formid, id});

    const _items = useMemo(() => {
        if(data?.objCN) {
            const items: TabsProps["items"] = [
                {
                    key: "1",
                    label: "Chung",
                    children: <Common data={data.objCN} />,
                },
                {
                    key: "2",
                    label: "Khách hàng chuyển nhượng",
                    children: <TransferCustomers data={data.objCN} KhachChuyen={data.KhachChuyen} />,
                },
                {
                    key: "3",
                    label: "Khách hàng nhận chuyển nhượng",
                    children: <CustomerReceivesTransfer data={data.objCN} KhachNhan={data.KhachNhan} />,
                },
            ];
            return items;
        }
        return [];
    }, [data])

    return (
        <Modal
            title="Chuyển nhượng"
            centered
            open={open}
            footer={null}
            width={900}
            style={{height: 'calc(100vh - 100px)'}}
            {...otherProps}
        >
            {
                isLoading ? (
                    <Flex justify="center">
                        <Spin />
                    </Flex>
                ) : (
                    <Tabs defaultActiveKey="1" items={_items} onChange={onChange} />
                )
            }
        </Modal>
    );
};

export default DepositApprovalForm;
