import React from 'react';
import { withRouter } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
)


export default HomePage;