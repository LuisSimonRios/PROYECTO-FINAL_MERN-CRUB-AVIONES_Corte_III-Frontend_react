import { Table, Space, Button } from 'antd';
import { listarAviones } from "../../../api/avion"
import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'Modelo',
    dataIndex: 'modelo',
    key: 'modelo',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: text => <a>{text}</a>,
  },
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    key: 'matricula',
  },
  {
    title: 'País',
    dataIndex: 'pais',
    key: 'pais',
  },
  {
    title: 'Num asientos',
    dataIndex: 'num_asientos',
    key: 'num_asientos',
  },
  {
    title: 'Año',
    dataIndex: 'año',
    key: 'año',
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/admin/editar-avion/${record._id}`}> Editar </Link>
        
      </Space>
    ),
  },
];


export default function TableAviones() {
  const [data, setData] = React.useState(null);
  listarAviones().then((data)=>{
    setData(data.data)
  })
  return (<Table columns={columns} dataSource={data} />)
} 