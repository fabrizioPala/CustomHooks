import { Color } from "./Color";
export function Colors({ colorList}) {
    
  return (
    
    <ul>
  
      {colorList.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}