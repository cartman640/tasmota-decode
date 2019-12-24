import React, {ChangeEvent, FormEvent} from 'react';
import InputGroup from './input-group';
import ResultTable from './result-table';
import * as tasmota from './convert-tasmota';
import './App.css';

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      template: '',
      result: undefined,
      error: undefined
    };
    this.templateSettter = this.templateSettter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  templateSettter(e: ChangeEvent<HTMLInputElement>) {
    this.setState({template: e.target.value});
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.template === '') return this.setState({result: undefined, error: undefined});
    try {
      const pinOut = tasmota.convert(this.state.template);
      this.setState({result: pinOut, error: undefined});
    } catch (e) {
      console.error(e.stack || e);
      this.setState({error: e.message, result: undefined});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Decode Tasmota Template</h1>
          <p className="lead">Decode Tasmota template JSON into GPIO pin mapping for ESP Home.</p>
          <hr className="my-4" />
          <form className="form" onSubmit={this.handleSubmit}>
            <InputGroup 
              name="template" 
              label="Tasmota Template JSON" 
              value={this.state.template} 
              setter={this.templateSettter}
              placeholder='{"NAME":"Arlec Single","GPIO":[0,0,0,0,57,0,0,0,21,0,90,0,0],"FLAG":0,"BASE":18}' />

            <div className="d-flex flex-row align-items-start">
              <button type="submit" id="decodeButton" className="btn btn-primary btn-lg p-2">Decode</button>
              <Error>{this.state.error}</Error>
            </div>
          </form>
        </div>
        <div className="flex">
          <ResultTable pinouts={this.state.result} />
        </div>
      </div>
    )
  }
}

const Error: React.FC = (props) => {
  if (!props.children) return <React.Fragment></React.Fragment>;
  return (
    <div id="errorMessage" className="alert alert-danger flex-fill" role="alert">
      {props.children}
    </div>
  );
}

interface State {
  template: string;
  result: tasmota.PinOut[] | undefined;
  error: string | undefined;
}