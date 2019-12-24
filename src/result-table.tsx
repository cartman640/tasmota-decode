import React from 'react';
import { PinOut } from './convert-tasmota';

const ResultTable: React.FC<Props> = ({pinouts}) => {
   if (pinouts === undefined) return <React.Fragment></React.Fragment>;
   return (
      <table className="table table-hover table-sm">
         <thead>
            <tr>
               <th>GPIO Pin</th>
               <th>Name</th>
               <th>Description</th>
            </tr>
         </thead>
         <tbody>
            {pinouts.map(pinout => <ResultTableRow key={pinout.pin} pin={pinout.pin} name={pinout.name} description={pinout.description} />)}
         </tbody>
      </table>
   )
}

const ResultTableRow: React.FC<{pin: string; name: string, description: string}> = ({pin, name, description}) => {
   return (
      <tr>
         <td><code>{pin}</code></td>
         <td>{name}</td>
         <td>{description}</td>
      </tr>
   );
}

type Props = {
   pinouts: PinOut[] | undefined
}

export default ResultTable;