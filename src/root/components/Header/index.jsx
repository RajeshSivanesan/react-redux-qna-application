import React from 'react';
import './index.scss';

import { AppText, AppTextDescription } from '../../../constants';

/**
 * Page Header
 * @returns React.Component
 */
function Header() {
    return (
        <header className="header col-xs-12 col-sm-12 col-md-8">
            <div className='headingWrapper'>
                <h1 className='heading'>{AppText}</h1>
                <p>{AppTextDescription}</p>
            </div>
        </header>
    )
}

export default Header;
