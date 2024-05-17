import styled from 'styled-components';

export const Page4DetailWrapper = styled.div`
    width:100%;
    height:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:auto;
    }
    .img {
        width:100%;
        display:flex;
        justify-content:center;
        flex-shink:1;
    }
    .text {
        width:100%;
        .title {
            font-size:1.3rem;
            font-weight:bold;
            text-align:center;

        }
        .overview {
            font-size:1rem;
            text-indent:2em;
        }
        .participation {
            margin-bottom:1.25rem;
            font-size:1rem;
        }
        .skills {
            .skill {
                // display:inline-block;
                margin-right:1.2rem;
                font-size:1.125rem;
                // font-weight:bold;
                color:'red';
            }
        }
        .icons {
            display:flex;
            .icon {
                margin-right:1.25rem;
            } 
        }
    }
`