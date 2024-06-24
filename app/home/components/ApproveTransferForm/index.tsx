import React from "react";
import { ModalProps, message } from "antd";

// Components
import ApprovalForm from "@/app/components/ApprovalForm";
import { usePostApproveMutation } from "@/app/home/apis";

interface Props extends ModalProps {
    open: boolean;
    status: string;
    id: number;
    formId: number;
    maTT: number;
}

const ApproveTransferForm: React.FC<Props> = (props: Props) => {
    const { open, status, id, formId, maTT, ...otherProps } = props;
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
