import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Page2 from '../Container/Page2';

const tabs = [
  { title: <Badge>Transport</Badge> },
  { title: <Badge>Food</Badge> },
  { title: <Badge>Delivery</Badge> }
];

export default class Tabbar extends Component {
  state = {
    data: 3
  };
  render() {
    return (
      <div>
        <Tabs
          tabs={tabs}
          swipeable={false}
          initialPage={this.state.data}
          onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
            }}>
            Content of first tab
          </div>
          <div>
            <Page2 />
          </div>
          <div />
        </Tabs>
        <WhiteSpace />

        <WhiteSpace />
      </div>
    );
  }
}
