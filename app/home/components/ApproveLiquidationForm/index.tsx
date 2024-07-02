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
    onClose: () => void
}

const ApproveTransferForm: React.FC<Props> = (props: Props) => {
    const { formId, open, status, maTT, id, onClose, ...otherProps } = props;
    const [postApprove, response] = usePostApproveMutation();

    const onFinish = (value: object) => {
        const noiDung = value.noiDung ? value.noiDung.trim() : "";
        postApprove({formId, id, maTT, noiDung: noiDung}).then((_response) => {
            if(_response.error) {
                message.error(`${_response.error?.data?.Message}!.[${_response.error?.status}]`);
                return
            }
            message.info(`${status} thành công!`);
            onClose()
        })
        .catch((error) => {
            console.log(error);
            message.error(`Đã có lỗi xảy ra, vui lòng thử lại sau!`);
        });
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
