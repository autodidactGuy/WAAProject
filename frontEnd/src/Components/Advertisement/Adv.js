import React from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';

const Adv = (props) => (
    <>
        <Card title={<>


                    <div> {props.adv.Title} </div>
                    <div style={{ color: 'gray', fontSize: '12px' }}> <CalendarOutlined /> {props.adv.PublicationDate} </div>


                    </>}
            bordered={false}
            style={{ margin: '5px' }}>
            <Row>
                <Col>
                    <Avatar shape="square" size={100}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAh1BMVEX///8ApO/yUCJ/ugD/uQD84dv/+u/+8/D/twD2iXF8uADzUBv/y00Aou//wBn/7snv+f73+u/h7snX7vzJ6fv3++ymzmXyShahzE2LwBno89dNvfNlv/MApu8ZrPD96eX/0Fv/89b4rJu924au0m3xRATu9uD8/v+G0Pfg8/3/2XttxPT/xi/dU5jdAAABYklEQVR4nO3cSVICURREUVBREaQRFcUGsMNu/+tz9qsGv4YZhnLuBjJOvPnr9SRJ0j50kq6Zml+Fq/qehuHWxfd8ne1lVQMOX5fZBgV4c5bt9qIKXB5EG7WBh9EAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQG76/xOOcrWAkZ9HRfsrQfhmqm3Vbh5DShJ0j43S7crU8fpqr73u3Afxfc5zrbZ1oD359n6iwIcn2abTOvAfrSHNvAoGSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgXwf+xnfKr8dwDXAzyfZdA+4Wl+FmZWs7DVd9EStJkv5bP2+4QdB1EE8RAAAAAElFTkSuQmCC"
                    icon={<UserOutlined />} />
                </Col>
                <Col style={{marginLeft:'5px'}}>
                    <div> Campany : {props.adv.CompanyName} </div>
                    <div> <EnvironmentOutlined /> {props.adv.State}, {props.adv.City} </div>
                    <div> {props.adv.Description} </div>

                </Col>
            </Row>

        </Card>
    </>
);
export default Adv;

