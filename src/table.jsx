import React from 'react';
import ReactDOM from 'react-dom';

// Import React Table
import ReactTable from "react-table";

var data = require('../data.json')

var state = { source: data };

const fetched_data = state.source.map(function(data) {
  return (
    { 
      'name': data.first_name + ' ' + data.last_name,
      'status': data.applications[0].status,
      'appdate': data.applications[0].role.updated,
      'lastAction': getAction(data.applications[0].role.updated == data.applications[0].role.created),
      'location': data.applications[0].role.school.location,
      'profile': 'angeliquedecastro.com'
    }
  );
});

function getAction(bool) {
  return bool ? 'Something' : 'No Action'
}

export default class ApplicantTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: fetched_data
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Applicant",
              accessor: "name"
            },
            {
              Header: "Status",
              accessor: "status"
            },
            {
              Header: "Application Date",
              accessor: "appdate"
            },
            {
              Header: "Last Action",
              accessor: "lastAction"
            },
            {
              Header: "Location",
              accessor: "location"
            },
            {
              Header: "Go To Profile",
              accessor: "profile"
            }
          ]}
          defaultPageSize={17}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

