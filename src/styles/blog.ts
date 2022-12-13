import {
  BoxProps,
  ButtonProps,
  FlexProps,
  ListItemProps,
  ListProps,
  TextProps,
} from "@chakra-ui/react";

export const mainBlogWrapper: BoxProps = {
  maxW: "814px",
  w: "95%",
  marginX: "auto",
  marginY: "120px",
  textAlign: "left",
  color: "#814226",
};

export const headerText: TextProps = {
  fontWeight: "bold",
  textAlign: "center",
};

export const headerOptions: FlexProps = {
  my: "8",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

export const blogDetailsFlex: FlexProps = {
  alignItems: "center",
};

export const blogDetails: FlexProps = {
  flexDir: "column",
  marginInlineStart: "4",
};

export const blogAuthorProps: TextProps = {
  fontWeight: "bold",
  fontSize: ["md", "lg"],
};

export const blogDateProps: TextProps = {
  opacity: "60",
  fontSize: ["sm", "md"],
};

export const blogIconsFlex: FlexProps = {
  w: "210px",
  justifyContent: "space-evenly",
  my: ["5", "0"],
};

export const blogContentProps: TextProps = {
  fontSize: ["14", "18"],
  w: "95%",
  marginX: "auto",
};

export const blogButton: ButtonProps = {
  marginRight: "4",
  color: "#814226",
  bgColor: "#FFF2EC",
  fontSize: ["14", "18"],
};

export const listProps: ListProps = {
  w: "90%",
  marginX: "auto",
  marginY: "18",
  fontSize: ["14", "18"],
  opacity: "0.9",
};
export const listItemProps: ListItemProps = {
  marginY: "6",
};

export const buttonFlex: FlexProps = {
  marginY: "6",
  w: "95%",
  marginX: "auto",
};

export const bottomDetails: FlexProps = {
  my: "8",
  mx: "2",
};

export const bottomDetailsWrapper: FlexProps = {
  alignItems: "center",
  w: "full",
  justifyContent: "space-between",
};

export const bottomDetailsProps: FlexProps = {
  flexDir: "column",
  marginInlineStart: "4",
};

export const bottomIconsWrapper: FlexProps = {
  w: "210px",
  justifyContent: "space-evenly",
  my: ["5", "0"],
};

export const blogAuthorDetailsWrapper: FlexProps = {
  alignItems: "center",
  my: "8",
};

export const bottomTextWrapper: TextProps = {
  ml: "2",
};

export const blogimageProps = {
  marginY: "5",
  h: ["250px", "400px"],
  w: "full",
  borderRadius: "14px",
};

export const blogAvatarProps = {
  w: "14",
  h: "14",
};
