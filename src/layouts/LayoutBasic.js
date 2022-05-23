import {React} from "react";
import { Layout } from "antd";
import "./LayoutBasic.scss"
import MenuTop from "../components/clientComponents/MenuTop"

export default function LayoutBasic(props){
  const { children } = props
  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <Layout className="layout-basic">
        <Header classNAme="layout-basic_header">
          <MenuTop></MenuTop>
        </Header>
        <Content className="layout-basic_content">{children}</Content>
        <Footer className="layout-basic_footer">React Project 2022</Footer>
      </Layout>
    </Layout>
  )
}