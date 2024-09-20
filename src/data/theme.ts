type Theme = {
  lightTheme: Color;
  darkTheme: Color;
};

type Color = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
};

const Colors: Theme = {
  lightTheme: {
    primary: 'orange',
    secondary: 'yellow',
    text: '#333333',
    background: '#f5f5f5',
  },
  darkTheme: {
    primary: 'orange',
    secondary: 'yellow',
    text: '#f5f5f5',
    background: '#333333',
  },
};

export default Colors;
