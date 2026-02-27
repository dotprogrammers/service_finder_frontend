import React, { useEffect, useState } from "react";
import { Modal, Tabs, Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

export default function AuthModal({ open, onClose, initialTab }) {
  const [activeTab, setActiveTab] = useState("signin");
  const [signInForm] = Form.useForm();
  const [signUpForm] = Form.useForm();

  useEffect(() => {
    if (open) {
      setActiveTab(initialTab === "signup" ? "signup" : "signin");
      signInForm.resetFields();
      signUpForm.resetFields();
    }
  }, [open, initialTab, signInForm, signUpForm]);

  const handleCancel = () => {
    onClose?.();
  };

  const onSignInFinish = async (values) => {
    // TODO: connect your API here
    // console.log("Sign In:", values);
    message.success("Signed in (demo).");
    onClose?.();
  };

  const onSignUpFinish = async (values) => {
    // TODO: connect your API here
    // console.log("Sign Up:", values);
    message.success("Account created (demo).");
    onClose?.();
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
      destroyOnClose
      width={420}
    >
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={[
          {
            key: "signin",
            label: "Sign In",
            children: (
              <Form
                form={signInForm}
                layout="vertical"
                onFinish={onSignInFinish}
                requiredMark={false}
              >
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email." },
                    { type: "email", message: "Please enter a valid email." },
                  ]}
                >
                  <Input
                    placeholder="Email Address"
                    prefix={<MailOutlined />}
                    autoComplete="email"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password." },
                    { min: 6, message: "Password must be at least 6 characters." },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    prefix={<LockOutlined />}
                    autoComplete="current-password"
                  />
                </Form.Item>

                <div className="text-center text-sm mb-4">
                  Don&apos;t have an account?
                  <span
                    onClick={() => setActiveTab("signup")}
                    className="text-green-500 pl-2 cursor-pointer"
                  >
                    Sign up here
                  </span>
                </div>

                <Button
                  htmlType="submit"
                  type="primary"
                  block
                >
                  Sign In
                </Button>
              </Form>
            ),
          },
          {
            key: "signup",
            label: "Sign Up",
            children: (
              <Form
                form={signUpForm}
                layout="vertical"
                onFinish={onSignUpFinish}
                requiredMark={false}
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name." },
                    { min: 2, message: "Name must be at least 2 characters." },
                  ]}
                >
                  <Input
                    placeholder="Full Name"
                    prefix={<UserOutlined />}
                    autoComplete="name"
                  />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email." },
                    { type: "email", message: "Please enter a valid email." },
                  ]}
                >
                  <Input
                    placeholder="Email Address"
                    prefix={<MailOutlined />}
                    autoComplete="email"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter a password." },
                    { min: 6, message: "Password must be at least 6 characters." },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder="Password"
                    prefix={<LockOutlined />}
                    autoComplete="new-password"
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "Please confirm your password." },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match.")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm Password"
                    prefix={<LockOutlined />}
                    autoComplete="new-password"
                  />
                </Form.Item>

                <div className="text-center text-sm mb-4">
                  Already have an account?
                  <span
                    onClick={() => setActiveTab("signin")}
                    className="text-green-500 pl-2 cursor-pointer"
                  >
                    Sign In here
                  </span>
                </div>

                <Button
                  htmlType="submit"
                  type="primary"
                  block
                >
                  Sign Up
                </Button>
              </Form>
            ),
          },
        ]}
      />
    </Modal>
  );
}