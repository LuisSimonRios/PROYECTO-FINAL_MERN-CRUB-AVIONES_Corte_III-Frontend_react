import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/MenuTop";
import MenuSider from "../components/adminComponents/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/SignIn";
import "./LayoutAdmin.scss"

export default function LayoutAdmin(props){
  const [menuCoLLapsed, setMenuCoLLapsed] = useState(false);
  const { Header, Content, Footer } = Layout
  const { children } = props;
  const user = localStorage.getItem("user_id");
  /* const Location = userLocation(); */
  if (!user) {
    return (
      <>
        <SignIn />
        <Routes>
          <Route path="/admin/login/*" element={<SignIn />} />
        </Routes>
        {/* <Navigate to={"/admin/Login"} state={{ from: Location }} replace /> */}
    </>
    );
  }
  return (
    <Layout>
      <MenuSider menuCoLLapsed={menuCoLLapsed} />
      <Layout 
          className="layout-admin"
          style={{ marginLeft: menuCoLLapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin_header">
          <MenuTop
            menuCoLLapsed={menuCoLLapsed}
            setMenuCoLLapsed={setMenuCoLLapsed}
          />
        </Header>
        <Content className="layout-admin_content">{children}</Content>
        <Footer className="layout-admin_footer">
            <GithubOutlined style={{ fontsize: "17px" }} /> SimonR
          </Footer>
      </Layout>
    </Layout>
  );
}
