import React from 'react';
import Input from '../Input'
import {Button} from '../Button'
import {Link} from 'react-router-dom'


function Registration() {
  return (
    <>
      <div className="Registration">
        <h1 style={{color: "white"}}>Đăng kí</h1>
        <br/>
        <Input label="Họ và tên " type="text" placeholder="Name your"/>
        <Input label="Số điện thoại " type="text" placeholder="Number Phone your"/>
        <Input label="Địa chỉ " type="text" placeholder="Adress"/>
        <Input label="Tài khoản " type="text" placeholder="Email your"/>
        <Input label="Mật khẩu " type="password" placeholder="Password"/>
        <br/>
        {Button && <Button buttonSize="btn--medium" buttonStyle="btn--outline">
                <Link to="/" style={{color:'white', textDecoration: 'none'}}>
                    Đăng kí
                </Link>
            </Button>}
        <br/>
        <p style={{color:'white', margin: "20px 0"}}>Nếu đã có tài khoản vui lòng đăng nhập ngay <Link to="/Sign-up" style={{color:'red', textDecoration: 'none'}}>Tại đây</Link></p>
      </div>
    </>
  )
}

export default Registration;