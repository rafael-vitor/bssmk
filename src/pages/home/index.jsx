
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Menu, Form, Button, Grid, Header, Segment, Image, Message } from 'semantic-ui-react';

import './style.css';

class Home extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      cardsList: '',
    };
  }

  handleSubmit() {
    console.log(this.state.cardsList);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { cardsList } = this.state;
    console.log({cardsList});

    return (
      <div className="Home">
        <Menu fixed="top" inverted borderless>
          <Menu.Item header>Blood Sugar Sex Magik</Menu.Item>
        </Menu>
        <div className="Home-form">
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='red' textAlign='center'>
                <Image src='https://files.slack.com/files-pri/T024ZJBML-F8LUNFB8E/bssmk?pub_secret=2a8406c9f8' />
                {' '}
                Cole sua lista de cartas
              </Header>
              <Form size='large'>
                <Segment>
                  <Form.Field
                    as="textarea"
                    value={this.state.cardsList}
                    name="cardsList"
                    onChange={this.handleInputChange}
                    placeholder='Lista de cartas'
                  />
                  <Button color='red' fluid size='large'> Procurar </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;

// import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// const LoginForm = () => (
//   <div className='login-form'>
//     <style>{`
//       body > div,
//       body > div > div,
//       body > div > div > div.login-form {
//         height: 100%;
//       }
//     `}</style>
//   </div>
// )

// export default LoginForm
