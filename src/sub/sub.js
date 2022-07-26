import React from 'react';
import './sub.css'
function Sub(){
    return(
        <div>
            <div className='Sub'>
            <div className='Mainimg'>
                <div className='Main'>
                    <h2>#YouMake 프로젝트</h2>
                    <div className='Maintxt'>
                        <p>올 여름 핫한 제품 ~50% OFF<br/> 최대 74만 상당 아낌없는 혜택까지!</p>
                        <p>2022.07.18(월)~2022.07.31(일)</p>
                    </div>
                </div>
            </div>
            <div className='Subtitle'>
            <div className='Content'>
                <ul>
                    <li className='item1'><a href='#'>
                        <span>#YouMake</span>
                        <br/>7월 한정 혜택</a></li>
                    <li className='item2'><a href='#'><span>#YouMake</span><br/>특별 패키지</a></li>
                    <li className='item3'><a href='#'><span>#YouMake</span><br/>전 제품 보기</a></li>
                    <li className='item4'><a href='#'><span>#YouMake</span><br/>로블록스 이벤트</a></li>
                    <li className='item5'><a href='#'><span>#YouMake</span><br/>취향공존 커뮤니티</a></li>
                    <li className='item6'><a href='#'><span>#YouMake</span><br/>공동구매</a></li>
                </ul>
                <div className='Subtitle2'>
                    <div className='sub2txt'>
                    <h2>당신에게 딱 맞춘 <br/> 최대 <span>74만</span> 상당 헤택 모아보기</h2>
                    <p> 구매할수록 점점 커지는 혜택부터 더욱 풍성해진 이벤트까지!</p>
                    </div>
                    <div className='sub2con'>
                        <div className='event1'>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box01_pc.png'></img>
                            
                                <li><p>런칭 혜택 01</p></li>
                                <li><span>행사 기간 중 최종 결제 금액대별 <br/> N페이 포인트 최대 30만 쿠폰 증정!</span></li>
                                <li className='e_txt1'>삼성닷컴 ID 기준, 결제금액 합산 1회 적용</li>
                                <li className='e_txt2'>갤럭시 캠퍼스 스토어 대상 모델 구매 고객 제외</li>
                                
                        </div>
                        <div className='event2'>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box02_pc.png'></img>
                                <li><p>런칭 혜택 02</p></li>
                                <li><span>#YouMake 위클리 핫딜! <br/>매주 특별한 제품, 선착순 혜택!</span></li>
                                <li className='e_txt1'>일부 모델 한정</li>
                                <li className='e_txt2'>이번주 핫딜 제품 보기 〉 </li>
                        </div>
                        <div className='event3'>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box03_pc.png'></img>
                        <li><p>런칭 혜택 03</p></li>
                                <li><span>중고가전 추가보상 대상 모델 구매 후 <br/>구제품 반납 시,최대20만 추가해택!</span></li>
                                <li className='e_txt1'>일부 모델 한정</li>
                        </div>
                    </div>
                    <div className='sub2con2'>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box04_pc.png'></img>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box05_pc.png'></img>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box06_pc.png'></img>
                        <img src='https://images.samsung.com/kdp/event/sec/0711_youmake/launching/benefit/bf_box07_pc.png'></img>
                    </div>
                </div>
        </div>
        </div>
            </div>
        </div>
    )
}
export default Sub;