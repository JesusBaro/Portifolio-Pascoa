import React, { useState } from 'react';
import * as S from "./StyledHeader.js";
import IconLeft from "../Assets/iconLeft.png";
import IconRight from "../Assets/iconRight.png";
import logo from "../Assets/logoDoceLar.png"

export default function Header() {

  //botao direito 
  const [buttonColorLeft,setButtonColorLeft]= useState("#F2B705");

  //botao esquerdo
  const [buttonColorRight,setButtonColorRight]= useState("#F2B705");

  return (
    <>
    <S.HeaderContainer>
      <section>
        <div>
          <img src={logo} alt="logo Doce Lar" />
          <h2>Doce Lar</h2>
        </div>

        <nav>
          <ul>
            <li>Produtos</li>
            <li>Onde Encontrar</li>
            <li>Contatos</li>
          </ul>
        </nav>


      </section>
      <S.SectionTittle>
        <span>
          <h1>Cada produto feito artesanalmente </h1>
        </span>

        <div >
          <S.ButtonLeft 
          buttonColorLeftFn={buttonColorLeft}
           onClick={()=>{setButtonColorLeft(buttonColorLeft === "#F2B705"? "#F28705":"#F2B705" )}}>
            <img src={IconLeft} alt="botão para avançar para esquerda"/>
            </S.ButtonLeft>

          <S.ButtonRight 
          buttonColorRightFn={buttonColorRight}
           onClick={()=>{setButtonColorRight(buttonColorRight === "#F2B705"? "#F28705":"#F2B705" )}}>
               <img src={IconRight} alt="botão para avançar para direita"/>
             </S.ButtonRight>
        </div>
      </S.SectionTittle>
    </S.HeaderContainer>


    </>
  );
}
// 