import React, { Component } from 'react';
import {
  Grid,
  Image,
  Container,
  Button,
  Icon,
  Menu,
  Label
} from 'semantic-ui-react';
import { WhiteSpace } from 'antd-mobile';
import './image.css';

export default class Lista extends Component {
  state = {
    food: [
      {
        image:
          'http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-pedas.jpg',
        judul: 'pecel',
        harga: 8000
      },
      {
        image:
          'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
        judul: 'nasi uduk',
        harga: 4000
      },
      {
        image:
          'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
        judul: 'jus pokat',
        harga: 4000
      },
      {
        image:
          'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
        judul: 'akua',
        harga: 4000
      }
    ]
  };
  render() {
    return (
      <div>
        <div>
          <WhiteSpace />
          <Container>
            {this.state.food.map(datum => {
              return (
                <div>
                  <Grid>
                    <Grid.Column width={5}>
                      <Image src={datum.image} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <p>{datum.judul}</p>

                      <p>Harga :{datum.harga} </p>
                      <Menu>
                        <Menu.Item as="a">
                          <Icon name="shop" />
                          <Label color="teal" floating>
                            22
                          </Label>
                        </Menu.Item>
                        <Menu.Item>
                          <Icon name="plus" />
                        </Menu.Item>
                        <Menu.Item>
                          <Icon name="minus" />
                        </Menu.Item>
                      </Menu>
                    </Grid.Column>
                  </Grid>
                </div>
              );
            })}
            <WhiteSpace />
            <Button color="green">Beli</Button>
          </Container>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}
