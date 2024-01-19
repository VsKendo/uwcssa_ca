import React from 'react'
import {Table} from 'antd'
import type { TableProps } from 'antd'

interface DataType {
    key: string;
    name: string;
    address: string;
    email: string;
  }
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
    
  ]
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'Office of the Registrar 注册办公室',
      address: 'Chrysler Hall North: South Entrance',
      email: 'registrar@uwindsor.ca',
    },
    {
        key: '2',
        name: 'Organization of Part-Time University Students (OPUS) 非全日制学生办公室',
        address: 'CAW Student Centre 1st Floor Room 172',
        email: 'opus@uwindsor.ca',
      },
      {
        key: '3',
        name: 'Student Accounts Office 学生账户办公室',
        address: 'Chrysler Hall North, 1st Floor',
        email: 'cashiers@uwindsor.ca',
      },
      {
        key: '4',
        name: 'International Student Centre 国际学生中心',
        address: '2nd Floor Laurier Hall',
        email: 'isc@uwindsor.ca',
      },
      {
        key: '5',
        name: 'FACULTY OF GRADUATE STUDIES 研究生院',
        address: 'the third floor of Chrysler Hall Tower',
        email: 'gradst@uwindsor.ca',
      },
    
  ]

export default function SchoolContact() {
    return(
        <Table columns={columns} dataSource={data} />
    )

}