type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appThemes = {
  color: {
    neonGreen: "#4AE551",
    offWhite: "#E2E2E2",
    fleetGrey: "#A6AFBD",
    marineBlue: "#A6AFBD",
    navyBlue: "#0B162F",
    bg: "#0F172A",
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
