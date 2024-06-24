import React, { memo } from "react";
import { Col, Flex, Row, Space } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface Props {
    data: object
}

const Price: React.FC<Props> = (props: Props) => {
    const {data} = props;




    return (
        <Flex
            vertical
            style={{
                height: "calc(100vh - 240px)",
                margin: "0 -24px",
            }}
        >
            <Flex vertical>
            <Row>
                <Col span={8}>
                    <Label label="Trường" />
                </Col>
                <Col span={8}>
                    <Label label="Giá niêm yết" />
                </Col>
                <Col span={8}>
                    <Label label="Giá sau chiết khấu" />
                </Col>
            </Row>
            <Flex vertical style={{ margin: "0 24px" }}>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá chưa VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyDonGiaChuaVAT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckDonGiaChuaVAT} />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị chưa VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyTongGiaTriChuaVAT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckTongGiaTriChuaVAT} />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Thuế VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyThueVAT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckThueVAT} />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá gồm VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyDonGiaGomVAT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckDonGiaGomVAT} />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị gồm VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyTongGiaTriGomVAT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckTongGiaTriGomVAT} />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Phí bảo trì:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyPhiBaoTri} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckPhiBaoTri} />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá QSD đất:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyDonGiaDat} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckDonGiaDat} />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Giá trị QSD đất:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyGiaTriDat} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckGiaTriDat} />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá gồm VAT, PDT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyDonGiaVATPBT} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gnygsckDonGia} />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị gồm VAT, PBT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value={data.gnyTongGiaTri} />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value={data.gsckTongGiaTri} />
                    </Col>
                </Row>
            </Flex>
            </Flex>
        </Flex>
    );
};

export default memo(Price);
