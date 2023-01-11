import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import IconHooks from '../../assets/icons/icon-hooks.png';
import IconTesting from '../../assets/icons/icon-react-testing.png';
import IconStyledComponets from '../../assets/icons/icon-styledComponets.png';
import { Horizontal, IconCards, Text, Title } from './devTools.style';
const DevTools = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Title>Dev Tools</Title>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <Horizontal />
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon
              icon="vscode-icons:file-type-reactjs"
              width="50"
              height="50"
            />
          </IconCards>
          <Text>React</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:redux" width="40" height="40" />
          </IconCards>
          <Text>Redux</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:redux-saga" width="50" height="50" />
          </IconCards>
          <Text>Redux Saga</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <img src={IconHooks} />
          </IconCards>
          <Text>React Hooks</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <img src={IconTesting} />
          </IconCards>
          <Text>React Testing Library</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon
              icon="logos:postman-icon"
              color="#f1502f"
              width="40"
              height="40"
            />
          </IconCards>
          <Text>Postman</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <img src={IconStyledComponets} />
          </IconCards>
          <Text>Styled Componets</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:ant-design" color="pink" width="40" height="40" />
          </IconCards>
          <Text>Ant Design</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="icon-park:github" width="40" height="40" />
          </IconCards>
          <Text>Github</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:bitbucket" width="40" height="40" />
          </IconCards>
          <Text>Bitbucket</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:bootstrap" width="40" height="40" />
          </IconCards>
          <Text>Bootstrap</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="ion:terminal" width="40" height="40" />
          </IconCards>
          <Text>Terminal</Text>
        </Col>
      </Row>
    </>
  );
};
export default DevTools;
