import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LaunchItem   from './launchitem';
import MissionKey from './missionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
        
    }
`;

export class launches extends Component {
    render() {
        return (
            <Fragment>
              <h1 className="display-4 my-3">Launch List</h1>
              <MissionKey/>
              <Query query={LAUNCHES_QUERY}>
                  {
                      ({ loading, error, data }) => {
                        if(loading) return <img src={require('./528310e3eb0474e6.gif')} alt="DevNet/Space" style={{ width:50, display: 'block', margin: 'auto' }}/>
                        if(error) console.log(error);
                        
                        return <Fragment>
                            {
                                data.launches.map(launch => (
                                    <LaunchItem key={launch.flight_number} launch={launch}/>
                                ))
                            }
                        </Fragment>
                      }
                  }
              </Query>
            </Fragment>
        )
    }
}

export default launches
