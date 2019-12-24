import React, {ChangeEvent} from 'react';

const InputGroup: React.FC<Props> = ({name, label, value, setter}) => {
   return (
      <div className="form-group">
         <label htmlFor="{name}Input">{label}</label>
         <input 
            type="text" 
            name={name} 
            className="form-control" 
            id="{name}Input"
            value={value}
            onChange={setter}
         ></input>
      </div>
   );
}

type Props = {
   name: string,
   label: string,
   value: string,
   setter: (event: ChangeEvent<HTMLInputElement>) => void
}

export default InputGroup;