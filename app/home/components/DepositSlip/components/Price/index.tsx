import React, { memo } from "react";
import { Col, Flex, Row, Space } from "antd";

// Components
import Label from "@/app/home/components/DepositSlip/components/Label";
import LabelBorder from "@/app/components/LabelBorder";

// Utils
import formatMoney from "@/app/utils/formatMoney";

import "./index.local.scss";

interface Props {
    data: object;
}

const Price: React.FC<Props> = (props: Props) => {
    const { data } = props;

    return (
        <Flex
            className="alp-phieudatcoc-giaban"
            vertical
            style={{
                height: "calc(100vh - 240px)",
                // margin: "0 -24px",
                overflow: "auto",
                width: "100%",
            }}
        >
            <Flex vertical style={{ minWidth: 600 }}>
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
                    {data.spTypeId == 1 ? (
                        <>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaChuaVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gsckDonGiaChuaVAT
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá trị chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyTongGiaTriChuaVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gsckTongGiaTriChuaVAT
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Thuế VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyThueVAT)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckThueVAT)}
                                    />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá gồm VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaGomVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gsckDonGiaGomVAT
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá trị gồm VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyTongGiaTriGomVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gsckTongGiaTriGomVAT
                                        )}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Phí bảo trì:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyPhiBaoTri)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckPhiBaoTri)}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá gồm VAT, PBT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyDonGia)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckDonGia)}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá trị gồm VAT, PBT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyTongGiaTri)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckTongGiaTri)}
                                    />
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá trị HĐ chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyTongGiaTriChuaVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gsckTongGiaTriChuaVAT
                                        )}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Thuế VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckThueVAT)}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá trị HĐ gồm VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyTongGiaTri)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gsckTongGiaTri)}
                                    />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá đất chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyDonGiaDat)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng tiền đất chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyTongTienDat)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>VAT đất:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyVatDat)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá đất có VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaDatVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng tiền đất có VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyTongTienDatVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá QSD đất:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaQSDDat
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Giá trị QSD đất:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyGiaTriQSDDat
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>

                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá XD chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaChuaVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá XD chưa VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyTienXD)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Thuế VAT XD:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyThueVAT)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Đơn giá XD gồm VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(
                                            data.gnyDonGiaGomVAT
                                        )}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>
                            <Row align="middle" style={{ marginBottom: 24 }}>
                                <Col span={8}>Tổng giá XD gồm VAT:</Col>
                                <Col span={8} style={{ paddingRight: 12 }}>
                                    <LabelBorder
                                        textValue="right"
                                        value={formatMoney(data.gnyTienXDVAT)}
                                    />
                                </Col>
                                <Col span={8} style={{ paddingLeft: 12 }}>
                                    <LabelBorder textValue="right" value={""} />
                                </Col>
                            </Row>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default memo(Price);
