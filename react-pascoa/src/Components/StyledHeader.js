import styled from "styled-components";
// font-family: 'Inter', sans-serif;
// font-family: 'Righteous', cursive;
// import IconRight from ".Assets/iconRight.png";

export const HeaderContainer = styled.header`
height:100vh;
background-image:url("https://s3-alpha-sig.figma.com/img/cb88/20fe/ddb894d1302fab1fe84e427e523345df?Expires=1681689600&Signature=Y0-KTCXc~voJednUDo-g1yKEvR~0j6DapQq7GCILFBTqo5pK4jX69-lFXjnKekMnyRKNm8lIjYzdWyS3DCFyTyuIR4gt-3S6X6Uuy7DB~pGOQCkBgtT9Dn01m9OVGhlcJT6STKzC2b-3vKlSS47YPck0NAtlWY2-KHzxCs~oGkAeKCv9QzY-hN0HLH9bHYBQyaANqpQMHJLzxhVnCe44IWvCuh3T~uZam21eTLHDfq3cRrO9pRosSbH4NPN~czgb5~mi85L8s6JnotNySNEhT-T4WAzNFg1Q4X~LaWmgFwKxyKCTAvu4nLUn-TFSXfiXHN0itoKqNKT-d31MOXWBFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
background-position:center;
background-size:cover;




section{ //envolve a div com a logo e a nav
    /* border:solid green; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:10vh;
    @media (min-width: 200px)and (max-width:501px) {
        flex-direction:column;
        height:20vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
}
div{ 
    /* border:solid red; */
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:15%;
    background-color:white;
    @media (min-width: 200px)and (max-width:501px) {
        /* border:solid powderblue; */
        width:55vw;  
        height:8vh;
        background-color:transparent;
    }
img{
    height:6vh;
    @media (min-width: 200px)and (max-width:501px) {
        height:7vh;
    }
}
h2{
    font-family: 'Righteous', cursive;
    font-weight:400;
    color:#F2B705;
    @media (min-width: 200px)and (max-width:501px) {
        font-size:2em;
    }
}
}

nav{
    background-color:rgba(0,0,0, 0.7);
    width:85vw;
    height:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width: 200px)and (max-width:501px) {
        background-color:rgba(0,0,0, 0.7);
        height:7vh;
        width:100vw;

    }
    ul{
        /* border:solid red; */
        width:60%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        @media (min-width: 200px)and (max-width:501px) {
            /* border:solid blue; */
             width:90%;
            position:relative;
            right:1rem;
    
        }
    }
    li{
    
        color:#F28705;
        font-family: 'Inter', sans-serif;
        font-weight:400;
        text-transform:uppercase;
        list-style: none;
        @media (min-width: 200px)and (max-width:501px) {
            font-size:0.8em;
        }
    }
        li:hover{
            text-decoration:underline white;  
        }
     
}
//media headerContainer

}
`
export const SectionTittle = styled.div`
        /* border:solid red; */
        height:90vh;
        background-color:transparent;
        display:flex;
        justify-content:center;
        flex-direction:column;
    @media (min-width: 200px)and (max-width:501px) {
        /* border:solid blue; */
        flex-direction:column;
        justify-content:space-evenly;
        height:85vh;
        
    }
    div{
        /* border:solid red; */
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    span{
        margin:0vw 0vw 3vw 3vw;

        width:30vw;
        color:white;
        @media (min-width: 200px)and (max-width:501px) {
            font-family: 'Inter', sans-serif;
            font-weight:700;
            width:80vw;
            position: relative;
            bottom:15vh;
    }
    }
    `
export const ButtonLeft = styled.button`
    width:3vw;
    height:3vw;
    background-color: ${props => props.buttonColorLeftFn || "#F2B705"};
    border-radius:10%;
    border:transparent;
    &:hover{
        background-color: "#F2B705";

    }
    @media (min-width: 200px)and (max-width:501px) {
        width:12vw;
        height:12vw;   
    }
`    
export const ButtonRight = styled.button`
    width:3vw;
    height:3vw;
    background-color: ${props => props.buttonColorRightFn || "#F2B705"};
    border-radius:10%;
    border:transparent;
    @media (min-width: 200px)and (max-width:501px) {
        width:12vw;
        height:12vw;   
    }
`    