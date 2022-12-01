import React from 'react';
import './Input.scss';

export function InputText(props) {
    return (
        <input type="text" className="dt-input-text" placeholder={props.value} />
    )
}
export function InputEmail(props) {
    return (
        <input type="email" className="dt-input-email" placeholder={props.value} />
    )
}
export function InputPassword(props) {
    return (
        <input type="password" className="dt-input-password" placeholder={props.value} />
    )
}
export function TextArea(props) {
    return (
        <textarea cols="30" rows="5" placeholder={props.value}></textarea>
    )
}