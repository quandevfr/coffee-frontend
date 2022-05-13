import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';

function LogIn() {
  const navigate = useNavigate();

  const handleLogInClicked = () => {
    navigate('/');
  };

  return (
    <div className='login'>
      <div className='login__card'>
        <div className='group__useName'>
          <label htmlFor='name'>Tài khoản</label>
          <input type='text' id='name' placeholder='Tài khoản...' />
        </div>
        <div className='group__password'>
          <label htmlFor='pass'>Password</label>
          <input type='text' id='pass' placeholder='Mật khẩu...' />
        </div>
        <button className='btn__login' onClick={handleLogInClicked}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default LogIn;
