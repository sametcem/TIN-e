import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import DateTimeNow from './DateTimeNow.jsx';
import LinkBuilder from './LinkBuilder.jsx';
import SignInLink from './SignInLink.jsx';
import Clock from './Clock.jsx';
import SmallForm from './SmallForm.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Project</p>
        <AwesomeComponent />
        <DateTimeNow />
        <LinkBuilder  url='http://www.onet.pl' label='Onet Webpage' />
        <SignInLink user="{session:true}"  />
        <Clock />
        <SmallForm />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));



