import React from 'react'

const AuthInput = (props: any) => {
    return (
        <div className="form-floating">
            <input type={props.type} className="form-control" placeholder={props.placeholder} required id={props.id}
                onChange={e => props.onChange(e.target.value)}
            />
            <label>{props.label}</label>
        </div>
    );
};

export default AuthInput;