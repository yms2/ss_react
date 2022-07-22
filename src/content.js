import React from "react";
import './content.css'
function Content(){
    return(
        <div className="content2">
            <div className="buy">
                <div className="img1">
                    <h2>Galaxy S22 Series</h2>
                    <p>더욱 강력해진 갤럭시를 삼성카드 결제시 최대 29만원 상당 혜택으로 만나보세요</p>
                    <span><a href="#"> 더 알아보기</a><button>구매하기</button></span>
                </div>
                <div className="img2">
                    <h2>Neo QLED</h2>
                    <p>Global No.1이 만든 새로운 화질의 시작</p>
                    <span><a href="#"> 더 알아보기</a><button>제품 모두 보기</button></span>
                </div>
                <div className="img3">
                    <h2>BESPOKE 무풍에어컨</h2>
                    <p>무풍에어컨으로 하루종일 기분 좋은 시원함을 느껴보세요</p>
                    <span><button>제품 모두 보기</button></span>
                </div>
                <div className="trend">
                    <h2>스토리 <br/> #DoWhatYouCant</h2>
                <img src="https://images.samsung.com/kdp/cms_contents/151281/6c312bd7-bc30-43a8-a8d4-4d5e05380e6b.jpg"></img>
                    <div className="trend_r">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;