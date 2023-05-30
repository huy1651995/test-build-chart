// import { CreateCSSProperties } from '@material-ui/styles';
import { CreateCSSProperties } from '@material-ui/styles';
import * as flexTypes from './flex';

const flex = {
  ...flexTypes,
};

const widthFill: CreateCSSProperties = { width: '100%' };
const heightFill: CreateCSSProperties = { height: '100%' };
const fill: CreateCSSProperties = { ...widthFill, ...heightFill };
const absoluteFill: CreateCSSProperties = {
  ...fill,
  position: 'absolute',
};
const dimmensions = {
  widthFill,
  heightFill,
  fill,
  absoluteFill,
};

const color = {
  primary: {
    main: 'rgba(19, 158, 223, 1)',
    dark: 'rgba(0, 119, 190, 1)',
    light: 'rgba(140, 219, 249, 1)',
    background: 'rgba(19, 158, 223, 0.2)',
  },
  secondary: {
    main: 'rgba(145, 93, 211, 1)',
    dark: 'rgba(100, 60, 173, 1)',
    light: 'rgba(225, 197, 250, 1)',
    background: 'rgba(251, 246, 255, 1)',
  },
  custom: {
    main: 'rgba(102, 128, 147, 1)',
    dark: 'rgba(72, 88, 103, 1)',
    light: 'rgba(206, 215, 222, 1)',
    background: 'rgba(243, 244, 245, 1)',
  },
  chart: {
    ruby: 'rgba(210, 49, 49, 1)',
    amber: 'rgba(228, 110, 19, 1)',
    citrine: 'rgba(251, 187, 49, 1)',
    emerald: 'rgba(82, 202, 77, 1)',
    amazonite: 'rgba(61, 200, 160, 1)',
    apatite: 'rgba(88, 198, 242, 1)',
    sapphire: 'rgba(19, 158, 223, 1)',
    lolite: 'rgba(59, 37, 122, 1)',
    amethyst: 'rgba(100, 60, 173, 1)',
    graphithe: 'rgba(121, 125, 129, 1)',
    zebrite: 'rgba(0, 0, 0, 1)',
  },

  warning: {
    main: 'rgba(236, 158, 6, 1)',
    dark: 'rgba(194, 110, 0, 1)',
    light: 'rgba(253, 213, 107, 1)',
    background: 'rgba(255, 248, 225, 1)',
  },
  error: {
    main: 'rgba(210, 49, 49, 1)',
    dark: 'rgba(192, 30, 30, 1)',
    light: 'rgba(243, 138, 138, 1)',
    background: 'rgba(255, 243, 243, 1)',
  },
  success: {
    main: 'rgba(56, 175, 50, 1)',
    dark: 'rgba(27, 117, 17, 1)',
    light: 'rgba(116, 225, 112, 1)',
    background: 'rgba(241, 255, 241, 1)',
  },
  info: {
    main: 'rgba(19, 158, 223, 1)',
    dark: 'rgba(49, 95, 190, 1)',
    light: 'rgba(116, 225, 112, 1)',
    hover: 'rgba(91, 139, 223, 0.1)',
  },
  gray: {
    light: 'rgba(206, 215, 222, 1)',
    main: 'rgba(121, 125, 129, 1)',
  },
  blueGray: 'rgba(102, 128, 147, 1)',
  dark: 'rgba(72, 88, 103, 1)',
  redViolet: 'rgba(221, 82, 151, 1)',
  yellowGreen: 'rgba(148, 175, 22, 1)',
  text: {
    primary: 'rgba(19, 23, 28, 0.9)',
  },
  background: 'rgba(250, 250, 250, 1)',
};

const borderRadius = {
  card: 15,
  chip: 50,
  button: 5,
};

const iconButton = (
  colorMain?: string,
  background?: string,
): CreateCSSProperties => ({
  color: colorMain || color.primary.main,
  padding: 8,
  borderRadius: borderRadius.button,
  '&:hover': {
    background: background || color.primary.background,
  },
  '& svg *': {
    fill: colorMain || color.primary.main,
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },
});

// style must be applied to the classes={{tooltip}} class
const tooltip = (colorMain?: string): CreateCSSProperties => ({
  background: colorMain || color.primary.dark,
  fontWeight: 600,
  '& .MuiTooltip-arrow': {
    color: colorMain || color.primary.dark,
  },
});

const beforeAfter: CreateCSSProperties = {
  position: 'absolute',
  content: '""',
  display: 'block',
  top: 0,
  left: 0,
  ...dimmensions.fill,
};

const centerAbsolute = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const dropShadow = {
  card: '1px 1px 6px rgba(0,0,0,.2)',
};
const textArea: CreateCSSProperties = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  borderRadius: 5,
  color: 'inherit',
  border: 'none',
  overflow: 'auto',
  outline: 'none',

  // -webkit-box-shadow: none;
  // -moz-box-shadow: none;
  // box-shadow: none;
};

const chartColorMap = {
  apatite: color.chart.apatite,
  emerald: color.chart.emerald,
  amber: color.chart.amber,
  amazonite: color.chart.amazonite,
  citrine: color.chart.citrine,
};

interface TypographyCSS {
  display1: React.CSSProperties;
  display2: React.CSSProperties;
  display3: React.CSSProperties;
  title1: React.CSSProperties;
  title2: React.CSSProperties;
  title3: React.CSSProperties;
  subtitle1: React.CSSProperties;
  subtitle2: React.CSSProperties;
  subtitle3: React.CSSProperties;
  body1: React.CSSProperties;
  body2: React.CSSProperties;
  caption: React.CSSProperties;
  label: React.CSSProperties;
  overline1: React.CSSProperties;
  overline2: React.CSSProperties;
}

export const typography: TypographyCSS = {
  display1: {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 96,
    lineHeight: '100px',
  },
  display2: {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 60,
    lineHeight: '70px',
  },
  display3: {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 48,
    lineHeight: '56px',
  },
  title2: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '32px',
  },
  title1: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 36,
    lineHeight: '48px',
  },
  title3: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '26px',
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '26px',
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: 0.15,
  },
  subtitle3: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: 0.2,
  },
  body1: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '26px',
    letterSpacing: 0.15,
  },
  body2: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '22px',
    letterSpacing: 0.2,
  },
  caption: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: 0.4,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: '16px',
    letterSpacing: 0.4,
  },
  overline1: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '20px',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  overline2: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '16px',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
};

const style = {
  flex,
  typography,
  dimmensions,
  color,
  borderRadius,
  beforeAfter,
  dropShadow,
  chartColorMap,
  iconButton,
  tooltip,
  textArea,
  centerAbsolute,
};
export default style;
