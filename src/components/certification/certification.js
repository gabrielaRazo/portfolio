import React from 'react';
import { Col, Row, SpaceBottom } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import {
  BodyCard,
  ContainerImg,
  IconContainer,
  Tags,
  Text,
  Title,
  TitleBody,
  TitleCard,
} from './certification.style';
import { certification } from '../../mock/mockCertifications';
const Certification = () => {
  return (
    <>
      {certification.map((item) => (
        <>
          <Row>
            <Col lg={11} md={11} sm={11} xs={11}>
              <TitleCard>
                <Row centered>
                  <Col lg={8} md={9} sm={11} xs={11}>
                    <Title>{item.title}</Title>
                  </Col>
                  <Col lg={3} md={2} sm={11} xs={11}>
                    <SpaceBottom xs={-1.5} sm={-1.5} md={0} />
                    <Title rigth>{item.date}</Title>
                  </Col>
                </Row>
              </TitleCard>
            </Col>
          </Row>
          <Row>
            <Col lg={11} md={11} sm={11} xs={11}>
              <BodyCard>
                <Row centered>
                  <Col lg={6} md={4} sm={12} xs={12}>
                    <TitleBody>
                      <IconContainer>
                        <img src={item.logo} />
                      </IconContainer>
                      {item.company}
                      <IconContainer left>
                        <a href={item.iconDiploma.link} target="_blank">
                          <Icon
                            icon={item.iconDiploma.url}
                            color={item.iconDiploma.color}
                            width={item.iconDiploma.width}
                            height={item.iconDiploma.height}
                          />
                        </a>
                      </IconContainer>
                    </TitleBody>
                  </Col>
                  <Col lg={0} md={3} sm={0} xs={0}></Col>
                  <Col lg={6} md={4} sm={12} xs={12}>
                    <SpaceBottom xs={-1.5} sm={-1.5} md={0} />
                    <TitleBody rigth>
                      <a href={item.url.url} target="_blank">
                        <IconContainer rigth>
                          <Icon
                            icon={item.iconLink.url}
                            color={item.iconLink.color}
                            width={item.iconLink.width}
                            height={item.iconLink.height}
                          />
                        </IconContainer>
                        {item.url.title}
                      </a>
                    </TitleBody>
                  </Col>
                </Row>
                <Row centered>
                  <Col lg={11} md={11} sm={11} xs={11}>
                    <Text>{item.text}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12} space>
                    {item.tags.map((tag) => (
                      <Tags>
                        <span>{tag.title}</span>
                      </Tags>
                    ))}
                  </Col>
                  <Col lg={9} md={9} sm={8} xs={6}></Col>
                  {item.iconProject && (
                    <Col lg={3} md={3} sm={4} xs={6}>
                      <ContainerImg>
                        <a href={item.iconProject.link} target="_blank">
                          <img src={item.iconProject.url} />
                        </a>
                        <a href={item.iconGithub.link} target="_blank">
                          <IconContainer left>
                            <Icon
                              icon={item.iconGithub.url}
                              color={item.iconLink.color}
                            />
                          </IconContainer>
                        </a>
                      </ContainerImg>
                    </Col>
                  )}
                </Row>
              </BodyCard>
            </Col>
          </Row>
        </>
      ))}
    </>
  );
};
export default Certification;
