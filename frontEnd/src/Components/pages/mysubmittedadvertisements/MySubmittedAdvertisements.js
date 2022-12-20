import React from 'react'
import { submittedAdvertisements } from '../../../Data/submittedAdvertisementData'
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Company',
    dataIndex: 'CompanyName',
    key: 'campany',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'description',
  },
  {
    title: 'State',
    dataIndex: 'State',
    key: 'state',
  },
  {
    title: 'City',
    dataIndex: 'City',
    key: 'city',
  },
  
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'created',
    dataIndex: 'PublicationDate',
    key: 'PublicationDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function MySubmittedAdvertisements() {
  return (
    <div>
    <h1 style={{margin:'15px'}}> Applied job </h1>
    <Table columns={columns} dataSource={submittedAdvertisements} />
    </div>
  )
}
export default MySubmittedAdvertisements
