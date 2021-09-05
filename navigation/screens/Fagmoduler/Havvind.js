import React from 'react';
import styled from 'styled-components';


function App() {
  return (
    <Bedriftsbeskrivelse122
      person2Props={bedriftsbeskrivelse122Data.person2Props}
      description2Props={bedriftsbeskrivelse122Data.description2Props}
      data-id="293:1032:an-component-instance"
    />
  );
}

export default App;


function Bedriftsbeskrivelse122(props) {
  const { person2Props, description2Props } = props;

  return (
    <Bedriftsbeskrivelse1 data-id="293:1032">
      <Info data-id="293:1033">
        <TopContent data-id="293:1034">
          <Person2
            avatar={person2Props.avatar}
            nameDateProps={person2Props.nameDateProps}
            data-id="293:1036:an-component-instance"
          />
          <Description2 spanText2={description2Props.spanText2} data-id="293:1040:an-component-instance" />
        </TopContent>
      </Info>
    </Bedriftsbeskrivelse1>
  );
}

const Bedriftsbeskrivelse1 = styled.div`
  ${Border1pxMercury}
  width: 343px;
  height: 191px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white);
  border-radius: 14px;
  overflow: hidden;
`;

const Info = styled.div`
  width: 311px;
  display: flex;
  align-items: flex-start;
`;

const TopContent = styled.div`
  width: 311px;
  height: 163px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



function Person2(props) {
  const { avatar, nameDateProps } = props;

  return (
    <Person data-id="293:1036">
      <Avatar data-id="293:1037" src={avatar} />
      <NameDate data-id="293:1038:an-component-instance">{nameDateProps.children}</NameDate>
    </Person>
  );
}

const Person = styled.div`
  width: 225px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;



function NameDate(props) {
  const { children } = props;

  return (
    <NameDate1 data-id="293:1038">
      <Schibsted data-id="293:1039">{children}</Schibsted>
    </NameDate1>
  );
}

const NameDate1 = styled.div`
  width: 173px;
  height: 20px;
  margin-left: 12px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const Schibsted = styled.div`
  ${LatoBlackBlack15px}
  min-height: 20px;
  letter-spacing: -0.24px;
  line-height: 20px;
  white-space: nowrap;
`;



function Description2(props) {
  const { spanText2 } = props;

  return (
    <Description data-id="293:1040">
      <Text1 data-id="293:1041">
        <Span0>
          Om oss
          <br />
        </Span0>
        <Span1>{spanText2}</Span1>
      </Text1>
    </Description>
  );
}

const Description = styled.div`
  width: 311px;
  height: 123px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const Text1 = styled.p`
  ${LatoBoldBlack14px}
  width: 313px;
  min-height: 244px;
  margin-bottom: -121px;
  letter-spacing: -0.24px;
  line-height: 20px;
`;

const Span0 = styled.span`
  ${LatoBoldBlack14px}
  letter-spacing: -0.03px;
`;

const Span1 = styled.span`
  font-family: var(--font-family-lato);
  color: var(--black);
  font-size: var(--font-size-l2);
  letter-spacing: -0.03px;
`;


export const LatoBoldBlack14px = css`
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-l2);
  font-weight: 700;
  font-style: normal;
`;

export const LatoBlackBlack15px = css`
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;

export const Border1pxMercury = css`
  border: 1px solid var(--mercury);
`;
const nameDateData = {
    children: "Schibsted",
};

const person2Data = {
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/61322634741f3ccfdeac659e/releases/613227444c3b7bf7ff9c16cb/img/avatar-16@2x.png",
    nameDateProps: nameDateData,
};

const description2Data = {
    spanText2: <><br />Som Norges største bank tilbyr vi et komplett tilbud av finansielle tjenester gjennom mobil, nettbank, bankkontorer og internasjonale kontorer.</>,
};

const bedriftsbeskrivelse122Data = {
    person2Props: person2Data,
    description2Props: description2Data,
};

