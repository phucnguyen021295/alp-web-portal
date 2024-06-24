'use client'
import { Empty } from "antd";

const CustomEmpty = () => (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{textAlign: 'center'}} description="Không có dữ liệu!" />
);

export default CustomEmpty;