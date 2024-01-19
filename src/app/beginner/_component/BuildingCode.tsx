import React from 'react'
import { Table} from 'antd'
import type { TableProps } from 'antd'

interface DataType {
    key: string;
    name1: string;
    code1: string;
    name2: string;
    code2: string;
  }

  const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name1',
        key: 'name1',
      },
      {
        title: 'Code',
        dataIndex: 'code1',
        key: 'code1',
      },

      {
        title: 'Name',
        dataIndex: 'name2',
        key: 'name2',
      },
      {
        title: 'Code',
        dataIndex: 'code2',
        key: 'code2',
      },
      
    
  ]

  const data: DataType[] = [
    { key: '1', code1: 'AC', name1: 'Assumption Chapel', code2: 'AR', name2: 'Centre for Automotive Research' },
    { key: '2', code1: 'BB', name1: 'Biology Building', code2: 'CC', name2: 'Canterbury College' },
    { key: '3', code1: 'CE', name1: 'Centre For Engineering Innovation', code2: 'CN', name2: 'Chrysler Hall North' },
    { key: '4', code1: 'CS', name1: 'Chrysler Hall South', code2: 'D1', name2: '167 Ferry (Downtown)' },
    { key: '5', code1: 'DB', name1: 'Drama Building', code2: 'DH', name2: 'Dillon Hall' },
    { key: '6', code1: 'ED', name1: 'Neal Education Building', code2: 'EH', name2: 'Essex Hall' },
    { key: '7', code1: 'ER', name1: 'Erie Hall', code2: 'HK', name2: 'HK Building' },
    { key: '8', code1: 'JC', name1: 'Jackman Dramatic Art Centre', code2: 'LB', name2: 'Ianni Law Building' },
    { key: '9', code1: 'LE', name1: 'LeBel Building', code2: 'LL', name2: 'Leddy Library' },
    { key: '10', code1: 'LT', name1: 'Lambton Tower', code2: 'MB', name2: 'O\'Neil Medical Education Centre' },
    { key: '11', code1: 'MH', name1: 'Memorial Hall', code2: 'MU', name2: 'Music Building' },
    { key: '12', code1: 'OB', name1: 'Odette Building', code2: 'SD', name2: 'St. Denis Center' },
    { key: '13', code1: 'SF', name1: 'St. Francis School', code2: 'TC', name2: 'Toldo Health Education Centre' },
    { key: '14', code1: 'UC', name1: 'C.A.W. Student Centre', code2: 'WL', name2: 'West Library' },
  ]

  export default function BuildingCode() {
    return(
        <Table columns={columns} dataSource={data} />
    )

}