import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import './App.css';

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  let defaultKey = match.url.replace('/', '') || 'employee';
  return <ConfigProvider locale={zh_CN}>
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultKey]}
          className="menu"
        >
        </Menu>
      </Header>
      <Content className="contentWrap">
      </Content>
      <Footer className="footer">TypeScript in Action</Footer>
    </Layout>
  </ConfigProvider>
}

export default App;
