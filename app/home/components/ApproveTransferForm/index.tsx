import React from "react";
import { ModalProps } from "antd";

// Components
import ApprovalForm from "@/app/components/ApprovalForm";

interface Props extends ModalProps {
    open: boolean;
    status: string;
}

const ApproveTransferForm: React.FC<Props> = (props: Props) => {
    const { open, status, ...otherProps } = props;
    const onFinish = (value: object) => {
        
    };

    return (
        <ApprovalForm
            title="Duyệt chuyển nhượng"
            status={status}
            open={open}
            isLoading={false}
            onFinishPerform={onFinish}
            {...otherProps}
        />
    );
};

export default ApproveTransferForm;
