'use client'

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { usePostLoginMutation } from "@/app/login/apis";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const FormLogin: React.FC = () => {
    const router = useRouter();
    const [postLogin, response] = usePostLoginMutation();
    const { isLoading, isError } = response;
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
        postLogin({ username: values.username, password: values.password })
            .then((_response) => {
                const {data} = _response;
                // const redirect = searchParams.get("redirect");
                setCookie('token', data.token);
                localStorage.setItem('profile', JSON.stringify(data.profile))
                router.push("/home", { scroll: false });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Flex
            style={{
                width: 396,
                background: "#fff",
                borderRadius: 16,
                padding: '20px 32px',
                marginBottom: 80,
                boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
                border: "0.5px solid rgba(255, 255, 255, 1)",
            }}
            vertical
        >
            <h2
                style={{ textAlign: "center", marginBottom: 20, marginTop: 12 }}
            >
                ĐĂNG NHẬP
            </h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập tài khoản!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        size="large"
                        placeholder="Tài khoản"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        size="large"
                        type="password"
                        placeholder="Mật khẩu"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        className="login-form-button"
                        loading={isLoading}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};

export default FormLogin;
