import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-toolbox/lib/input';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import '../index.css'


export default class NavigationBar extends React.Component {
  render() {
    const actions = [
      { label: 'Status', raised: true, icon: 'arrow_drop_down'},
      { label: 'More Filters', raised: true, icon: 'arrow_drop_down'},
      { label: 'Clear', raised: true, icon: 'clear'}
    ];

    const Navbar = () => (
      <div className="navigation-mynavbar">
        <Input type='text' label='Search candidates' className='navigation-mynavbar-search' name='search'icon='people'/>
        <div className='navigation-mynavbar-item'>
          <Navigation type='horizontal' actions={actions}/>
        </div>
      </div>
    );

    return <Navbar />
  }
}