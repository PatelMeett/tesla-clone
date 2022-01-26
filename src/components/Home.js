import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
       <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="./images/solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="./images/solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=" "
        backgroundImg="./images/accessories.jpg"
        leftBtnText="Shop now"
      />

      <Footer>
        <a href="#" class="copyright">Tesla &copy; 2022</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
        <a href="#">Engage</a>
        <a href="#">Locations</a>
      </Footer>
    </Container>

  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index:10;
`
const Footer = styled.div`
    display: flex;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-size:.8em;
        font-weight: 300;
        padding: 0 10px;
        flex-Wrap: nowrap;
    }
`