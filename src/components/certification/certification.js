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
import IconGeneration from '../../assets/icons/generation.png';
import IconPetIt from '../../assets/icons/petit.png';
import { certification } from '../../mock/mockCertifications';
const Certification = () => {
  console.log('certification', certification);
  return (
    <>
      {certification.map((type) => (
        <>
          <Row>
            <Col lg={11} md={11} sm={11} xs={11}>
              <TitleCard>
                <Row centered>
                  <Col lg={8} md={9} sm={11} xs={11}>
                    <Title>{type.title}</Title>
                  </Col>
                  <Col lg={3} md={2} sm={11} xs={11}>
                    <SpaceBottom xs={-1.5} sm={-1.5} md={0} />
                    <Title rigth>{type.date}</Title>
                  </Col>
                </Row>
              </TitleCard>
            </Col>
          </Row>
          <Row>
            <Col lg={11} md={11} sm={11} xs={11}>
              <BodyCard>
                <Row centered>
                  <Col lg={6} md={7} sm={11} xs={11}>
                    <TitleBody>
                      <IconContainer>
                        <img src={type.logo} />
                      </IconContainer>
                      {type.company}
                      <IconContainer left>
                        <Icon
                          icon={type.iconDiploma.url}
                          color={type.iconDiploma.color}
                          width={type.iconDiploma.width}
                          height={type.iconDiploma.height}
                        />
                      </IconContainer>
                    </TitleBody>
                  </Col>

                  <Col lg={5} md={4} sm={11} xs={11}>
                    <SpaceBottom xs={-1.5} sm={-1.5} md={0} />
                    <TitleBody rigth>
                      <a href={type.url.url}>
                        <IconContainer rigth>
                          <Icon
                            icon={type.iconLink.url}
                            color={type.iconLink.color}
                            width={type.iconLink.width}
                            height={type.iconLink.height}
                          />
                        </IconContainer>
                        {type.url.title}
                      </a>
                    </TitleBody>
                  </Col>
                </Row>
                <Row centered>
                  <Col lg={11} md={11} sm={11} xs={11}>
                    <Text>{type.text}</Text>
                  </Col>
                </Row>
                <Row centered>
                  <Col lg={9} md={9} sm={11} xs={11}>
                    {type.tags.map((item) => (
                      <Tags>
                        <span>{item.title}</span>
                      </Tags>
                    ))}
                  </Col>
                  <Col lg={2} md={2} sm={4} xs={4}>
                    <ContainerImg>
                      <img src={type.iconProject} />
                    </ContainerImg>
                  </Col>
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
