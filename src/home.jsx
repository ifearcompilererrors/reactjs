import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './nav.jsx'
import ApplicantTable from './table.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <ApplicantTable />
      </div>
    );
  }
}
