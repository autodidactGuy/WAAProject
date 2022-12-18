import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { jobAdvertisements } from './Data/JobAdvertisements'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';


import TenLastJobAdv from './Components/Dashboards/TenLastJobAdv'
import WorkExperienceList from './Components/WorkExperience/WorkExperienceList'
import Login from './Components/Connection/Login'
import Register from './Components/Connection/Register'
import Navbar from './Components/Navbar/Navbar';


const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                
            <Navbar/>
                
            </Header>

            <TenLastJobAdv />
            <WorkExperienceList/>
            <Login/>
            <Register/>

            {/*<Content className="site-layout" style={{ padding: '0 50px' }}>*/}
            {/*    <Breadcrumb style={{ margin: '16px 0' }}>*/}
            {/*        <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
            {/*        <Breadcrumb.Item>List</Breadcrumb.Item>*/}
            {/*        <Breadcrumb.Item>App</Breadcrumb.Item>*/}
            {/*    </Breadcrumb>*/}
            {/*    <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>*/}
            {/*        {jobAdvertisements.map(j => <div>{j.Title}</div>)}*/}

            {/*        <Card title="Card title">*/}
            {/*            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>*/}
            {/*                Inner Card content*/}
            {/*            </Card>*/}
            {/*            <Card*/}
            {/*                style={{*/}
            {/*                    marginTop: 16,*/}
            {/*                }}*/}
            {/*                type="inner"*/}
            {/*                title="Inner Card title"*/}
            {/*                extra={<a href="#">More</a>}*/}
            {/*            >*/}
            {/*                Inner Card content*/}
            {/*            </Card>*/}
            {/*        </Card>*/}

            {/*    </div>*/}
            {/*</Content>*/}
            <Footer style={{ textAlign: 'center' }}>Ant Design �2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;