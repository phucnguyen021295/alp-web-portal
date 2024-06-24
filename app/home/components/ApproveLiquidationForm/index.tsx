import React from "react";
import { ModalProps, message } from "antd";

// Components
import ApprovalForm from "@/app/components/ApprovalForm";

// Apis
import { usePostApproveMutation } from "@/app/home/apis";

interface Props extends ModalProps {
    open: boolean;
    status: string;
    formId: number;
    id: number;
    maTT: number;
}

const ApproveTransferForm: React.FC<Props> = (props: Props) => {
    const { open, status, maTT, id, ...otherProps } = props;
    const [postApprove, response] = usePostApproveMutation();

    const onFinish = (value: object) => {
        if(value.noiDung && value.noiDung.trim()) {
            postApprove({formId, id, maTT, noiDung: value.noiDung}).then((_response) => {
                message.info(`${status} thành công!`);
            })
            .catch((error) => {
                console.log(error);
                message.error(`Đã có lỗi xảy ra, vui lòng thử lại sau!`);
            });
        }
    };

    return (
        <ApprovalForm
            title="Duyệt thanh lý"
            status={status}
            open={open}
            isLoading={false}
            onFinishPerform={onFinish}
            {...otherProps}
        />
    );
};

export default ApproveTransferForm;
