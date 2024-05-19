import styled from 'styled-components';
import shangyouLogo from '@/assets/icon/shangyou.png';
import tuoliangfeng from '@/assets/icon/托良峰.png';
import sunloadingLogo from '@/assets/icon/sunloadingLogo.png';
import zhixing from '@/assets/icon/yaobangbang.png';

export const Page3Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    padding-right:10rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    font-size:1rem;
    .title {
        font-size:1.5rem;
        font-weight:bold;
    }
    >.content {
        height:60%;
        overflow-y:auto;
        padding:0 1.25rem;
        .top {
            margin-top:1rem;
            margin-bottom:1rem;
            display:flex;
            gap:10px;
            align-items:center;
            .left {
                width:50px;
                height:50px;
                border-radius:50%;
                background-color:#fff;
                border:1px solid #fff;
                display:flex;
                justify-content:center;
                align-items:center;
                animation:logo 2s ease infinite;

                &.logo1 {
                    background-image:url(${shangyouLogo});
                    background-size:inherit;
                    background-position:left;
                    
                }
                &.logo2 {
                    background-image:url(${sunloadingLogo});
                    background-size:cover;
                }
                
            }
            .right {
                flex:1;
            }
        }
        .workContent {
            width:100%;
            font-size:0.9rem;
            .item {
                margin-bottom:1rem;

            }
        }
    }
    @keyframes logo2222 {
        0% {
            opacity:1;
        }
        50% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
     }

`