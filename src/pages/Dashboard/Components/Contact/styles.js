import styled from "styled-components";
import Button from "Components/Button";

export const Container = styled.section`
  padding: 100px 20px;
  margin-bottom: 100px;
  background-color: #111;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ContactInfoBx = styled.div``;

export const FormBx = styled.div`
  min-width: 60%;
`;

export const ContactInfo = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;
export const ContactMe = styled.h1`
  font-weight: 600;
  font-size: 30px;
`;
export const ContactInfoH3 = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: #fff;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;
export const Paragraph = styled.p`
  color: #fff;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
  color: #fff;
`;

export const Text = styled.div``;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  :first-child {
    margin-top: 50px;
  }
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const AnimationContainer = styled.div`
  display: flex;
  align-self: flex-start;
  cursor: pointer;
  transform: translateX(-40px);
`;

export const ButtonCustom = styled(Button)`
  width: 35%;
  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
