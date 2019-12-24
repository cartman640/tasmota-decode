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
         <ResultTableRows pinouts={pinouts} />
      </table>
   )
}

const ResultTableRows: React.FC<{pinouts: PinOut[]}> = ({pinouts}) => {
   const rows = pinouts.map(({pin, name, description}, index) => {
      return (
         <tr key={index}>
            <td><code>{pin}</code></td>
            <td>{name}</td>
            <td>{description}</td>
         </tr>
      );
   });
   return <tbody>{rows}</tbody>;
}

type Props = {
   pinouts: PinOut[] | undefined
}

export default ResultTable;