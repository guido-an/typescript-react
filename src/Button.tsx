import React from 'react'
import { ButtonColor } from './enums';
  
interface ButtonProps {
    text: string;
    color?: ButtonColor;
    margin?: string;
  }

export const Button: React.FC<ButtonProps> = ({ text, color = ButtonColor.Default, margin }) => {
    const getColorStyle = () => {
        switch (color) {
          case ButtonColor.Green:
            return { color: 'green' };
          case ButtonColor.Red:
            return { color: 'red' };
          default:
            return { color: 'black' };
        }
      };
    
    const style = { 
        ...getColorStyle(),
        margin,
     } 
    return(
        <div style={style}>
           {text}
        </div>
    )
}