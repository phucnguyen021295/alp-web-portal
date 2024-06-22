import React, { memo } from "react";
import { Col, Flex, Row, Space } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

interface Props {}

const Price: React.FC<Props> = (props: Props) => {
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
                        <LabelBorder value="0" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="0" />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị chưa VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Thuế VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá gồm VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị gồm VAT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>
                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Phí bảo trì:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá QSD đất:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="5.746.855.091" />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Giá trị QSD đất:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="0" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="0" />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Đơn giá gồm VAT, PDT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="0" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="0" />
                    </Col>
                </Row>

                <Row align="middle" style={{ marginBottom: 24 }}>
                    <Col span={8}>Tổng giá trị gồm VAT, PBT:</Col>
                    <Col span={8} style={{ paddingRight: 12 }}>
                        <LabelBorder value="6.385.551.600" />
                    </Col>
                    <Col span={8} style={{ paddingLeft: 12 }}>
                        <LabelBorder value="6.385.551.600" />
                    </Col>
                </Row>
            </Flex>
            </Flex>
        </Flex>
    );
};

export default memo(Price);
