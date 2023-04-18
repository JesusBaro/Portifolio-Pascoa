import styled from "styled-components";

// export const Main = styled.main`
// `

    export const SectionProduct = styled.div`
    height:100vh;
    margin-top:2rem;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    @media (min-width: 200px) and (max-width:501px) {
        height:max-content;
       
    }
`

export const Span = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:#F28705;
    margin-left:2rem;
    width:10vw;
    height:5vh;
    border-radius:4vh 4vh 0 0 ;
    font-weight:600;
    color:white;
    font-weight:700;
    @media (min-width: 200px) and (max-width:501px) {
        width:40vw;
        font-size:1.2em;
    }
`

export const DivCard = styled.div`
    border:solid black;
    border-radius:4vh;
    width:25vw;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    flex-direction:column;
    @media (min-width: 200px) and (max-width:501px) {
        width:80vw;
        height:55vh;
        margin-bottom:2rem;
        flex-direction:column;

    }
    div{
    display:flex;
    justify-content:center;
    align-items:center;
    width:15vw;
    height:5vh;
    font-size:0.9em;
    font-weight:200;
    font-family: 'Inter';
    @media (min-width: 200px) and (max-width:501px) {
        width:90%;
        text-align:center;
        font-size:1.1em;
    }}

    button{
        background-color:orange;
        border:transparent;
        box-shadow:0rem 0.1rem 0.2rem 0.1rem;
        width:8vw;
        height:5vh;
        margin:1rem 0rem 1rem 0rem;
        font-weight:600;
        text-transform:uppercase;
        font-family: 'Inter', sans-serif;
        &:focus{
            color:white;
        }
        @media (min-width: 200px) and (max-width:501px) {
            width:20vw;
        }
}
`
export const ImgItem = styled.img`
    height:18vh;
    margin:1rem 1rem 1rem 1rem;
    @media (min-width: 200px) and (max-width:501px) {
        height:20vh;
    }
`
export const StoreWeb = styled.section`
    border:solid black;
    height:80vh;
    margin-top:1rem;
    background-color:#8A493D;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    @media (min-width: 200px) and (max-width:501px) {
        display:none;


    }
    section{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border:solid black; 
        height:90%;
        width:30%;
        text-align:center;
        @media (min-width: 200px) and (max-width:501px) {
        width:90%;

    }
    }
    h2{
        color:white;
        font-weight:600;
    }
    a{
        font-weight:600;
        text-decoration:none;
        color:white;
        margin-bottom:1rem;
    }
    div{
        width:60%;
        height:45%;
        border-radius:75%;
        border:solid red;
        background-image:url("https://s3-alpha-sig.figma.com/img/21f7/347b/5f13e75665a6efa890fe1e4e115b19db?Expires=1682294400&Signature=Zwvan3uHaHV~htxllp6nRRgeF8KWsVTWoPX3xgDilcwrRJAkTbIQApBJYkksbDCYopssFepH7AdeKINVYAY1uYZMT8JtJZ4vD77aSunF1l3u8q6ytAZ4IwTnzaRXlhAvGOeq4HAGg2eO5LW3Y2bTLFRk3ktXKT95RwvLTjoRZOlO3sELnVoJD-VqdqvSbnQ4GIFAnS4yX7SYEHZOaepXdkPeNTyQOHKPYtZATrKkoVUPvl34dIHswYs4IXIbvd3L03NNf0xbp-Q9CgiQ1ahhibUzHKS0F-EPUGyfQ~fDpeyhlUb24D9tFO~y3HpKjxZHWLxQCxK8CFlE-owTz0WeQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
        background-position:center;
        background-size:cover;
        display:flex;
    justify-content:center;
    align-items:center;

    }

`
export const StoreMobile = styled.section`
    @media (min-width: 200px) and (max-width:501px) {
    border:solid black;
    height:80vh;
    margin-top:1rem;
    background-color:#8A493D;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    @media (min-width: 501px) and (max-width:1800px) {
        display:none;

    }
    section{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border:solid black; 
        height:90%;
        width:30%;
        text-align:center;
        @media (min-width: 200px) and (max-width:501px) {
        width:90%;

    }
    }
    h2{
        color:white;
        font-weight:600;
    }
    a{
        font-weight:600;
        text-decoration:none;
        color:white;
        margin-bottom:1rem;
    }
    div{
        width:60%;
        height:45%;
        border-radius:75%;
        border:solid red;
        background-image:url("https://s1.static.brasilescola.uol.com.br/be/2022/11/vista-de-um-por-do-sol-sobre-as-nuvens-com-o-ceu-apresentando-varias-cores.jpg");
        background-position:center;
        background-size:cover;
        display:flex;
    justify-content:center;
    align-items:center;

    }

    }
   
`
