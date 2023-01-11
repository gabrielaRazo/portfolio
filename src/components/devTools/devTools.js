import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import IconHooks from '../../assets/icons/icon-hooks.png';
import IconTesting from '../../assets/icons/icon-react-testing.png';
import IconStyledComponets from '../../assets/icons/icon-styledComponets.png';
import {
  Horizontal,
  IconCards,
  Text,
  Title,
  ContainerResponsive,
} from '../card/card.style';
const DevTools = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={3} sm={6} xs={6}>
          <Title>Dev Tools</Title>
        </Col>
        <Col lg={8} md={9} sm={6} xs={6}>
          <Horizontal />
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon
                  icon="vscode-icons:file-type-reactjs"
                  width="50"
                  height="50"
                />
              </IconCards>
              <Text>React</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:redux" width="40" height="40" />
              </IconCards>
              <Text>Redux</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:redux-saga" width="50" height="50" />
              </IconCards>
              <Text>Redux Saga</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <img src={IconHooks} />
              </IconCards>
              <Text>React Hooks</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <img src={IconTesting} />
              </IconCards>
              <Text>React Testing Library</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon
                  icon="logos:postman-icon"
                  color="#f1502f"
                  width="40"
                  height="40"
                />
              </IconCards>
              <Text>Postman</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <img src={IconStyledComponets} />
              </IconCards>
              <Text>Styled Componets</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon
                  icon="logos:ant-design"
                  color="pink"
                  width="40"
                  height="40"
                />
              </IconCards>
              <Text>Ant Design</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="icon-park:github" width="40" height="40" />
              </IconCards>
              <Text>Github</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:bitbucket" width="40" height="40" />
              </IconCards>
              <Text>Bitbucket</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:bootstrap" width="40" height="40" />
              </IconCards>
              <Text>Bootstrap</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="ion:terminal" width="40" height="40" />
              </IconCards>
              <Text>Terminal</Text>
            </Row>
          </ContainerResponsive>
        </Col>
      </Row>
    </>
  );
};
export default DevTools;
