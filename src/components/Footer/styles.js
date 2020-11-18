import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  width: 100%;
  height: 150px;
  left: 0px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: space-between;

  /* Goiaba */

  background: #e2645a;
`;
export const MediaWrapper = styled.div`
  justify-content: flex-end;

  padding-top: 70px;
`;

export const SocialMedia = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 50px;
`;

export const Text = styled.span`
  color: #fff;
  margin-left: 50px;
  font-size: 20px;
`;
