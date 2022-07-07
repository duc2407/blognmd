import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom'
import Input from '../Input';
import { Button } from '../Button';

export default function SignUp(){
    return (
        <div className="bg-login">
            <h1 style={{color: "white", paddingTop:'20px'}}>Đăng nhập</h1>
            <Input label="Đăng nhập" type="text" placeholder="Email your"/>
            <Input label="Mật khẩu" type="password" placeholder="Password your"/>
            <br/>
            {Button && <Button buttonSize="btn--medium" buttonStyle="btn--outline">
                <Link to="/" style={{color:'white', textDecoration: 'none'}}>
                    Đăng nhập
                </Link>
            </Button>}
            <p style={{color:'white', padding: '20px 0'}}>Nếu chưa có tài khoản, vui lòng đăng kí <Link to="/Registration" style={{color:'red', textDecoration: 'none'}}>Tại đây</Link>.</p>
        </div>
    )
}
