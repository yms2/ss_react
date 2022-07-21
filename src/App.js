import React from 'react';
import './App.css';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa"
import {BsArrowUpRight} from "react-icons/bs"
import Mainimg from './mainimg';
import Body from './body';

function App() {
  return (
    <div className='wrap'>
      <div className='header'>
        <div className='header_in'>
          <div className='logo'>
            <img src='https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg'></img>
          </div>
          <div className='nav_L'>
            <ul>
              <li>제품</li>
              <li>이벤트/선물하기</li>
              <li>갤럭시 캠퍼스 스토어</li>s
              <li>큐커 식품관</li>
              <li>#YouMake</li>
              <li>스마트싱스</li>
              <li>아울렛</li>
              <li>고객서비스</li>
              </ul>
          </div>
          <div className='nav_R'>
              <ul>
                <li>스토리</li>
                <li>멤버십</li>
                <li>디지털프라자<FaMapMarkerAlt className='icons'/></li>
                <li>사회공헌<BsArrowUpRight className='icons' /></li>
                <li>비지니스<BsArrowUpRight className='icons'/></li>
                <AiOutlineSearch className='icon' size='32px'/>
                <AiOutlineShoppingCart className='icon' size='32px'/>
                <AiOutlineUser className='icon' size='32px'/>
              </ul>
          </div>
          
        </div>
      </div>

      <div>
        <Mainimg/>
        <Body/>
      </div>
    </div>
    
  );
}

export default App;
