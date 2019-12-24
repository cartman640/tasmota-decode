import React, {ChangeEvent} from 'react';
import './input-group.css';

const InputGroup: React.FC<Props> = ({name, label, value, setter, placeholder}) => {
   const id = `${name}Input`;
   return (
      <div className="form-group">
         <label htmlFor={id}>{label}</label>
         <input 
            type="text" 
            name={name} 
            className="form-control" 
            id={id}
            value={value}
            onChange={setter}
            placeholder={placeholder}
         ></input>
      </div>
   );
}

type Props = {
   name: string,
   label: string,
   value: string,
   placeholder?: string
   setter: (event: ChangeEvent<HTMLInputElement>) => void
}

export default InputGroup;