"use client";

import { Layout } from "antd";

// Components
import HeaderHome from '@/app/home/components/Header';
import ContentHome from '@/app/home/components/Content';

import "./page.local.scss";

const { Content, Header } = Layout;

export default function Home() {
    return (
        <Layout>
            <Header>
                <HeaderHome />
            </Header>
            <Content style={{marginTop: 24, minHeight: 'calc(100vh - 96px)'}}>
                <ContentHome />
            </Content>
        </Layout>
    );
}
