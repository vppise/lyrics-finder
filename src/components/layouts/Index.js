import React, {Fragment} from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search'

 const Index = () => {
    return (
        <Fragment>
            <Search />
            <Tracks />
        </Fragment>
    )
}
// "engines": {
//     "node": "12.17.0",
//     "npm": "6.14.4"
//   },
export default Index;