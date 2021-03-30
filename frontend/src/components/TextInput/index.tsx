import React, { useState } from 'react'
import { Container, Label, Input } from './style';

const TextInput = ({value, set, type, label, style, divStyle, required}) => {

  const [focused, setFocused] = useState(false);

  return (
    <Container style={divStyle}>
      {label && <Label>{label}</Label>}
      <Input 
        value={value}
        onChange={e => set(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={type}
        style={style}
        focused={focused}
        required={required}/>
    </Container>
  )
}

export default TextInput
