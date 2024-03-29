import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Domain Parked</title>
      </Head>

      <Main>
        <Title>
          Coming Soon!
        </Title>
        <Description>
          This domain has been parked for use in our future projects.
        </Description>
        <Description>
          This means that we are working on something new and exciting which will be hosted here.
        </Description>
      </Main>
      
      <br /><br />

      <Footer>
        <FooterText>
         © 2021 - 2022 Git Logs  |{" "}
          <Website href="https://gitlogs.instatus.com/">Status Updates</Website> |{" "}
          <Twitter href="https://twitter.com/GithubLogs">
            Follow us on Twitter
          </Twitter>
        </FooterText>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #23222B;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const P = styled.span`
  margin-right: 5px;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 20px;
  color: white
`;

const FooterText = styled.p`
  color: white;
`;

const Twitter = styled.a`
  text-decoration: none;
  color: #025683;
`;

const Website = styled.a`
  text-decoration: none;
  color: #025683;
`;
