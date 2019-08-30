import { createContext } from 'react';


const ThemeContext = createContext(['green', () => {}]); // created as a hook containing 'green' as property and dummy arrow function as update property.

export default ThemeContext;