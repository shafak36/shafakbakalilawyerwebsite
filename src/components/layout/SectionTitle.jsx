import { Stack } from "@mui/material";

const SectionTitle = ({ subTitle, subTitleColor, title, titleColor }) => {
  return (
    <Stack width={"fit-content"} alignItems={"center"} spacing={1}>
      <span className="overlineText" style={{ color: subTitleColor }}>
        {subTitle}
      </span>
      <h2 className="sectionTitle" style={{ color: titleColor }}>
        {title}
      </h2>
    </Stack>
  );
};

export default SectionTitle;
