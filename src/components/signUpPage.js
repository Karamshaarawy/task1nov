import { Layout, Row, Col, Form, Input, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import Logo from "../assests/R.png";
import classes from "./styles.module.css";

const { Content, Footer } = Layout;

const signUpPage = () => {
  return (
    <Layout className={classes.layout}>
      <div className={classes.logoSpan}>
        <img src={Logo} alt="Logo" />
      </div>
      <Content>
        <Row justify="center">
          <Col className={classes.column}>
            <Form name="signUp">
              <Form.Item
                name="userName"
                rules={[{ required: true, message: "Please Enter Your name" }]}
              >
                <Input
                  prefix={<UserOutlined className={classes.icons} />}
                  placeholder="Enter Your Name"
                  className={classes.fields}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please Enter Your name" }]}
              >
                <Input
                  prefix={<MailOutlined className={classes.icons} />}
                  placeholder="Enter Your E-mail"
                  className={classes.fields}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please Enter Your name" }]}
              >
                <Input
                  prefix={<EyeOutlined className={classes.icons} />}
                  placeholder="Enter Your Password"
                  className={classes.fields}
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: "Please Enter Your name" }]}
              >
                <Input
                  prefix={<MobileOutlined className={classes.icons} />}
                  placeholder="Enter Your Phone Number"
                  className={classes.fields}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="SignUP"
                  className={classes.column}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default signUpPage;
