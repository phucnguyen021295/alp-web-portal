"use client";

import { Flex, Layout } from "antd";
import Image from "next/image";

import FormLogin from "@/app/login/components/FormLogin";

import "./page.local.scss";

const { Content } = Layout;

export default function Home() {
    return (
        <Layout className="alp-login">
            <Content>
                <Flex
                    style={{ height: "100%" }}
                    vertical
                    align="center"
                    justify="center"
                >
                    <Image
                        src={require('@/public/logo.svg')}
                        alt="Vercel Logo"
                        width={150}
                        height={64}
                        priority
                        style={{marginBottom: 40, boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)'}}
                    />
                    <FormLogin />
                </Flex>
            </Content>
        </Layout>
    );
}
