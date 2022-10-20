import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  LinkProps,
  TextProps,
} from "@chakra-ui/react";

export const aboutSectionHero: BoxProps = {
  as: "section",
  display: "flex",
  flexDir: "column",
  h: "758px",
  w: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundPosition: "right center ",
  backgroundRepeat: "no-repeat ",
  backgroundSize: "cover",
  background: " url(/assets/unilorinbg.png)",
};
export const aboutSectionHistory: BoxProps = {
  as: "section",
  m: "210px 0",
};
export const aboutSmHeading: TextProps = {
  as: "h2",
  fontSize: "32px",
  textAlign: "center",
  mb: "8px",
  color: "brown.trans",
};

export const leaderWrapper: BoxProps = {
  padding: "40px",
  w: "457px",
  h: "690px",
  rounded: "3xl",
};

export const studentBodyWrapper: FlexProps = {
  padding: "40px",
  w: "300px",
  h: "501px",
  rounded: "3xl",
};

export const studentBodyImage = {
  height: "300px",
  borderTopRadius: "3xl",
};

export const studentBodyFlex = {
  w: "90%",
  minW: "270px",
  margin: "auto",
  mt: "9",
  justifyContent: "space-around",
};

export const leaderImage = {
  height: "457px",
  width: "450px",
  borderTopRadius: "3xl",
};

export const leaderFlex: FlexProps = {
  w: "90",
  margin: "auto",
  mt: "9",
  justifyContent: "space-around",
};

export const leaderButton: ButtonProps = {
  rounded: "full",
  p: "3",
  fontSize: "lg",
  mt: "6",
};

export const leaderLink: LinkProps = {
  marginRight: "2",
  bg: "#F3F2F2",
  p: "2",
  rounded: "full",
};

export const mainTextWrapper: BoxProps = {
  w: "80%",
  margin: "auto",

  color: "#814226",
  my: { base: "8", md: "16" },
};

export const mainTextBox: BoxProps = {
  mt: { base: "12", md: "24", lg: "36" },
  w: "fit-content",
  textAlign: "center",
  margin: "auto",
};

export const mainTextHeading: HeadingProps = {
  my: "2",
};

export const mainText: TextProps = {
  fontSize: "1.2rem",
  opacity: "70%",
};

export const aboutLgHeading: TextProps = {
  as: "h1",
  fontSize: "56px",
  fontWeight: 700,
  textAlign: "center",
  color: "brown.trans",
};
export const aboutPrimaryHeading: HeadingProps = {
  fontSize: "40px",
  fontWeight: 700,
  color: "brown.deep",
  mb: "40px",
};
export const aboutHistoryText: TextProps = {
  fontSize: "18px",
  lineHeight: "25.2px",
  mb: "40px",
  maxW: { base: " 100%", md: "100%", lg: " 434px" },
};
export const aboutHistoryPlayCircle: BoxProps = {
  pos: "absolute",
  w: { base: "70px", md: "100px", lg: "120px" },
  h: { base: "100px", md: "110px", lg: "126px" },
  top: "40%",
  left: "40%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "brown.trans",
};
export const aboutDepartmentProps: BoxProps = {
  textAlign: "center",
  mb: "110px",
};
export const departmentBoxProps: BoxProps = {
  padding: { base: "12px", md: "30px" },
  borderRadius: "16px",
  maxW: "477px",
  w: "400px !important",
  h: "464px !important",
  boxShadow:
    "0px 12px 16px rgba(0, 0, 0, 0.03), 0px 4px 6px rgba(16, 24, 40, 0.02)",
};
export const iconDepartmentBoxProps: BoxProps = {
  clipPath:
    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
  padding: "30px",
  height: "120px",
  width: "120px",
  alignItems: "center",
  justifyContent: "center",
  mb: "48px",
  borderRadius: "18px",
  bgColor: "brown.transDark",
};
export const departmentBoxHeading: HeadingProps = {
  fontSize: "28px",
  fontWeight: 700,
  color: "brown.deep",
  mb: "18px",
};
export const departmentBoxSummary: TextProps = {
  fontSize: "16px",
  lineHeight: "28px",
  color: "grey.light",
  mb: "24px",
};
