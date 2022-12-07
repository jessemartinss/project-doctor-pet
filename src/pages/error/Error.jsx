import React from 'react';
import './Error.scss';
import IconError from '../../assets/icons/icon-error.svg';

export default function Error() {
  return (
    <React.Fragment>
        <div className="dt-error">
            <img src={IconError} alt="Error" />
        </div>
    </React.Fragment>
  )
}
