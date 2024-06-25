"use client";

import React, { useMemo, useState } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import DepositTable from "../DepositTable";
import TransferTable from "../TransferTable";
import LiquidationTable from "../LiquidationTable";
import Filter from "../Filter";

// Styles
import "./index.local.scss";
import { merge } from "lodash";

const PARAMS_DEFAULT = {
    tukhoa: "",
    mada: 0,
    matt: 0,
    tungay: "2019-01-01",
    denngay: "2024-12-31",
    pageindex: 1,
    pagesize: 10,
};

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [formId, setFormId] = useState("28");
    const _params = {...PARAMS_DEFAULT, ...{formId}}
    const [params, setFilter] = useState(_params);

    const onChange = (key: string) => {
        setFormId(key);
        const _params = merge(PARAMS_DEFAULT, {formId: key});
        setFilter({..._params})
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onFilter = (value: object) => {
        const _params = merge({...PARAMS_DEFAULT}, {formId}, value);
        setFilter({..._params})
    }

    const operations = (
        <Button
            type="text"
            shape="circle"
            size="large"
            onClick={showDrawer}
            icon={<FilterOutlined />}
        />
    );

    const items = useMemo(() => {
        const items: TabsProps["items"] = [
            {
                key: "27",
                label: "Giữ chỗ",
                children: <DepositTable params={params} title_detail={'Phiếu giữ chỗ'} />,
            },
            {
                key: "28",
                label: "Đặt cọc",
                children: <DepositTable params={params} title_detail={'Phiếu đặt cọc'} />,
            },
            {
                key: "26",
                label: "Hợp đồng Góp vốn",
                children: <DepositTable params={params} title_detail={'Hợp đồng Góp vốn'} />,
            },
            {
                key: "29",
                label: "Hợp đồng mua bán",
                children: <DepositTable params={params} title_detail={'Hợp đồng mua bán'} />,
            },
            {
                key: "32",
                label: "Chuyển nhượng",
                children: <TransferTable params={params} />,
            },
            {
                key: "31",
                label: "Thanh lý",
                children: <LiquidationTable params={params} />,
            },
        ];
        return items;
    }, [params]);

    return (
        <>
            <Tabs
                defaultActiveKey="28"
                items={items}
                onChange={onChange}
                className="alp-content"
                tabBarExtraContent={operations}
            />
            <Filter
                formId={formId}
                open={open}
                setFilter={onFilter}
                onClose={onClose}
            />
        </>
    );
};

export default App;
