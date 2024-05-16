const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

const colors = {
  purple: "#8c7ae6",
  white: "#f5f6fa",
  black: "#2f3640",
  yellow: "#F9F871",
};

const theme = {
  device,
  fontSize,
  colors,
};

export default theme;
