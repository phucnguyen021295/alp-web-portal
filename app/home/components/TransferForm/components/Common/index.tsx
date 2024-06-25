import React, { memo } from "react";
import { Flex } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";
import moment from "moment";

interface Props {
    data: object
}

const Common: React.FC<Props> = (props: Props) => {
    const {data} = props;
    return (
        <Flex
            vertical
            style={{
                height: "calc(100vh - 240px)",
                overflow: "auto",
                margin: "0 -24px",
            }}
        >
            <Label label="Sản phẩm" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Dự án" value={data.spTenDA} />
                <LabelBorder label="Mã sản phẩm" value={data.spKyHieu} />
            </Flex>

            <Label label="Thông tin chứng từ" />
            <Flex vertical style={{ margin: "0 24px" }}>
                <LabelBorder label="Số phiếu " value={data.ctSoPhieu} />
                <LabelBorder label="Ngày ký" value={moment(data.ctNgayKy).format('DD/MM/YYYY')} />
                <LabelBorder label="Loại chuyển nhượng" value={data.ctTenLCN} />
                <LabelBorder label="Số giao dịch" value={data.ctSoGD} />
            </Flex>
        </Flex>
    );
};

export default memo(Common);
