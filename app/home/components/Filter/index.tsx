"use client";

import React, { useEffect, useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Drawer,
    Form,
    FormItemProps,
    Input,
    Select,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";
import {merge} from 'lodash'

// Apí
import { useGetListProjectQuery, useGetListStatusQuery } from "@/app/home/apis";

const { RangePicker } = DatePicker;

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

const removeUndefinedFields = (obj: object) => {
    for (const key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
};

const { Option } = Select;

interface Props {
    open: boolean;
    setFilter: (data: object) => void;
    onClose: () => void;
    formId: string;
}

const Filter: React.FC<Props> = (props: Props) => {
    const [form] = Form.useForm();
    const { formId, open, setFilter, onClose } = props;
    const { data: data1, isLoading: isLoading1 } = useGetListProjectQuery({});
    const { data: data2, isLoading: isLoading2 } = useGetListStatusQuery({
        formId,
    });

    useEffect(() => {
        form.resetFields();
    }, [formId])

    const onFinish = (value: object) => {
        console.log(removeUndefinedFields(value));
        let params = removeUndefinedFields(value);
        if(params.date && params.date.length > 1) {
            params = merge(params, {tungay: moment(params?.date[0]).format('L'), denngay: moment(params?.date[1]).format('L')})
        }
        delete params.date;


        setFilter(params);
        onClose();
    };

    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps["disabledDate"] = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf("day");
    };

    const OptionDuAn = useMemo(() => {
        if (!data1) {
            return [];
        }

        return data1.map((item: any) => (
            <Option key={item.MaDA} value={item.MaDA}>
                {item.TenDA}
            </Option>
        ));
    }, [data1]);

    const OptionTT = useMemo(() => {
        if (!data2) {
            return [];
        }

        return data2.map((item: any) => (
            <Option key={item.MaTT} value={item.MaTT}>
                {item.TenTT}
            </Option>
        ));
    }, [data2]);

    return (
        <Drawer
            title="Lọc dữ liệu"
            placement={"right"}
            closable={false}
            onClose={onClose}
            open={open}
            key={"right"}
            extra={
                <Button
                    type="text"
                    shape="circle"
                    onClick={onClose}
                    icon={<CloseOutlined />}
                />
            }
        >
            <Form name="form_item_path" layout="vertical" onFinish={onFinish} form={form}>
                <MyFormItem name="mada" label="Dự án">
                    <Select size="large" placeholder="Chọn dự án" allowClear>
                        {OptionDuAn}
                    </Select>
                </MyFormItem>
                <MyFormItem name="date" label="Chọn ngày">
                    <RangePicker size="large" style={{ width: "100%" }} />
                </MyFormItem>
                <MyFormItem name="matt" label="Trạng thái" >
                    <Select size="large" placeholder="Chọn trạng thái" allowClear>
                        {OptionTT}
                    </Select>
                </MyFormItem>

                <MyFormItem name="tukhoa" label="Lọc theo Khách hàng hoặc Mã sản phẩm">
                    <Input size="large" placeholder="Khách hàng hoặc Mã sản phẩm" allowClear />
                </MyFormItem>

                <Button size="large" type="primary" htmlType="submit" block>
                    Lọc
                </Button>
            </Form>
        </Drawer>
    );
};

export default Filter;
