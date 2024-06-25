import React, { useMemo } from "react";
import { Tabs, Modal, ModalProps, TabsProps } from "antd";

// Components
import Common from '@/app/home/components/LiquidationForm/components/Common';
import Customer from '@/app/home/components/LiquidationForm/components/Customer';
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
        if(data?.objTL) {
            const items: TabsProps["items"] = [
                {
                    key: "1",
                    label: "Chung",
                    children: <Common data={data.objTL} />,
                },
                {
                    key: "2",
                    label: "Khách hàng",
                    children: <Customer data={data.objTL} DongSoHuu={data?.DongSoHuu} />,
                },
            ];
            return items;
        }
        return [];
    }, [data])

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
            <Tabs defaultActiveKey="1" items={_items} onChange={onChange} />
        </Modal>
    );
};

export default DepositApprovalForm;
