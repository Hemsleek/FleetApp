type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// width= 375px
// height= 667px

export const appThemes = {
  color: {
    neonGreen: "#4AE551",
    offWhite: "#E2E2E2",
    fleetGrey: "#A6AFBD",
    navyBlue: "#0B162F",
    bg: "#0F172A",
    border: "#112147",
  },
  font: {
    large: "24px",
    medium: "14px",
    small: "12px",
  },
  spacer: {
    small: "8px",
    large: "16px",
  },
};
