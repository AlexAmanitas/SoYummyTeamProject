// import styled from 'styled-components';
import styled from 'styled-components';
// import { theme } from 'constants';
import { NavLink } from 'react-router-dom';
import emailIcon from '../../images/footer/email.svg';
import spinachMob from '../../images/background/spinach_bottom_right_mob_1x.png';
import spinachTab from '../../images/background/spinach_bottom_right_tab_1x.png';
import spinachDesk from '../../images/background/spinach_bottom_right_desk_1x.png';
// import upSpinach from '../../images/background/spinach_bottom_left_mob_1x.png';

export const FooterStyle = styled.footer`
  font-family: ${p => p.theme.fonts.primary};
  /* padding-top: 50px; */
  /* padding-bottom: 32px; */
  /* text-align: center; */
  background-color: ${p => p.theme.colors.footerBG};
`;

export const FoterBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  // width: 1200px;
  /* padding-left: 15px; */
  /* padding-right: 15px; */

  color: ${p => p.theme.colors.primaryLightText};
  padding-top: 28px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 50px 94px 23px 32px;
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 64px 100px 50px;
  }
`;

export const MainFooterContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 40px;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

////////////////// Styled Title -- Logo//////////
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    justify-content: start;
    align-items: center;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Logo = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
    width: 44px;
    height: 44px;
  }
`;

export const TitleText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
`;
export const DescriptionList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    list-style: disc;
  }
`;
export const DescriptionItem = styled.li`
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: ${p => p.theme.colors.primaryLightText};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

///////////////  Styled Navigation /////////
export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    text-align: start;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 101px;
  }
`;

export const ItemNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Styledlink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryLightText};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.greenAccent};
  }
`;

///////////////  Styled SubscribeForm /////////
export const SubscribeContainer = styled.div`
  /* display: none; */
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 235px;
  }
`;

export const SubscribeBox = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const SubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryLightText};
  margin-bottom: 14px;
`;
export const SubscribeText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryLightText};

  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    display: inline-flex;
    text-align: start;
    margin-bottom: 0px;
  }
`;

export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid ${p => p.theme.colors.primaryLightText};
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;
  color: ${p => p.theme.colors.primaryLightText};
  font-size: 10px;
  line-height: 1.5;
  padding-left: 42px;

  margin-bottom: 8px;
  background-image: url(${emailIcon});
  background-size: 16px 12px;
  background-repeat: no-repeat;
  background-position: 15px;

  &::placeholder {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.primaryLightText};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${p => p.theme.colors.darkAccent} inset !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-text-fill-color: ${p => p.theme.colors.primaryLightText} !important;
    background-color: transparent !important;
    background-image: url(${emailIcon});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 12px;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    font-size: 14px;
    line-height: 21px;
    background-size: 20px 16px;
    &::placeholder {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
    margin-right: 0;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 1.5;
    &::placeholder {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: none;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: ${p => p.theme.colors.greenAccent};
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 44px;

  &:valid {
    color: ${p => p.theme.colors.primaryLightText};
  }

  &:hover:valid,
  :focus:valid {
    color: ${p => p.theme.colors.darkAccent};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
  }
`;

///////////////  Styled FollowUs /////////
export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;

export const IconImg = styled.img`
  width: 18px;
  &:hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    width: 20px;
  }
`;

///////////////  Styled Rights /////////
export const RightsBox = styled.div`
  background-color: ${p => p.theme.colors.lightBackground};
  padding: 28px 0px;
  background-image: url(${spinachMob});
  background-size: inherit;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media screen and (min-width: 768px) {
    padding: 32px 0px;
    background-image: url(${spinachTab});
  }
  @media screen and (min-width: 1440px) {
    padding: 50px 0px;
    background-image: url(${spinachDesk});
  }
`;

export const RightsText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #22252a;
  opacity: 0.5;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
  }
`;
export const Span = styled.span`
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }
`;
