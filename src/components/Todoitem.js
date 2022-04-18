import { Button, Card, Typography } from 'antd'
import React, { Component } from 'react'

import { Divider } from 'antd';

import { DeleteOutlined, DeleteTwoTone } from '@ant-design/icons'

import './s.css';

const { Title } = Typography;

const cardcss = {
  width: 1000,
  margin: '10px 0px',
  background: '#292929',
  color: 'white',
  fontWeight: 'bold',

}



export default class Todoitem extends Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <div>
        <Card
          title={
            <Title level={5} style={{ color: 'white' }}>
              Avi-Todo - {this.props.pindex + 1}
            </Title>}
          bordered={false}
          style={cardcss}
          extra={
            <Title level={5} style={{ color: 'white' }}>
              <DeleteOutlined onClick={() => this.props.onTodoSelect(this.props.pindex)} style={{ color: 'red' }} />
              <Divider type='vertical'/>
              {this.props.ptime}
            </Title>
          }>
          <p>{this.props.ptodo}</p>


        </Card>

      </div>
    )
  }
}
