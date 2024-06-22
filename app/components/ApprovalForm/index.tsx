import React, { useState } from "react";
import {
    Button,
    Flex,
    Form,
    FormItemProps,
    Input,
    Modal,
    ModalProps,
} from "antd";

// Components
import LabelBorder from "@/app/components/LabelBorder";

const { TextArea } = Input;

const MyFormItemContext = React.createContext<(string | number)[]>([]);

function toArr(
    str: string | number | (string | number)[]
): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
        name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
};

interface Props extends ModalProps {
    open: boolean;
    onFinishPerform: (data: object) => void;
    isLoading: boolean;
    status: string;
}

const DepositApprovalForm: React.FC<Props> = (props: Props) => {
    const { title, status, open, isLoading = false, onFinishPerform, ...otherProps } = props;

    return (
        <Modal
            title={title}
            centered
            open={open}
            width={500}
            footer={null}
            {...otherProps}
        >
            <Form name="form_item_path" layout="vertical" onFinish={onFinishPerform} style={{marginTop: 20}}>
                <LabelBorder value={status} label="Trạng thái" />

                <MyFormItem name="noiDung" label="Ghi chú hoặc lý do">
                    <TextArea rows={4} size="large" placeholder="Ghi chú hoặc lý do" />
                </MyFormItem>

                <Flex justify="flex-end">
                    <Button type="primary" loading={isLoading} htmlType="submit">
                        Thực hiện
                    </Button>
                </Flex>
            </Form>
        </Modal>
    );
};

export default DepositApprovalForm;
