const GPIO = [0, 1, 2, 3, 4, 5, 9, 10, 12, 13, 14, 15, 16];
const components = require('./components.json') as Component[];

export function convert(inputLine: string): PinOut[] {
   const template = JSON.parse(inputLine) as Template;
   
   try {
      const pins = template.GPIO.map((componentKey, index) => {
         const component = components.filter(c => c.id === componentKey)[0];
         const pin = `GPIO${GPIO[index]}`;

         return { ...component, pin };
      });

      return pins.filter(pin => pin.id !== 0);
   } catch (e) {
      console.error(e.stack || e);
      throw new Error('Cannot convert template, invalid input');
   }
}

interface Template {
   NAME: string;
   GPIO: number[];
   FLAG: number;
   BASE: number;
}

interface Component {
   id: number;
   name: string;
   description: string;
}

export interface PinOut extends Component {
   pin: string;
}