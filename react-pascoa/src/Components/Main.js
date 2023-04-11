import React from 'react';
import * as S from "./StyledMain.js"; 

import OvoDeColherEspe from "../Assets/ovoDeColherEspe.png";
import ovoDeColherTrad from "../Assets/ovoDeColherTrad.jpeg";
import cestaDeOvos from "../Assets/cestaDeOvos.jpeg";
import OvosKids from "../Assets/OvosKids.jpeg";
import Trufas from "../Assets/Trufas.jpeg";
import barraChoc from "../Assets/barraChoc.jpeg";


export default function Main() {

  const CardsNoPromo = [
    {
    image: ovoDeColherTrad,
    descrition:"Ovos de colher Tradicional a partir de 250g.",

  },
  {
    image:Trufas,
    descrition:"Kit de Trufas a partir de 12 unidades.",
  },
  {
    image:barraChoc,
    descrition:"Barra de Chocolate crocontes.",
  }];

  const CardsPromo = [
  {
    image:cestaDeOvos,
    descrition:"Cesta de Chocolate monte você mesmo.",
    promo:"12% desconto",
  
  },
  {
    image:OvoDeColherEspe,
    descrition:"Ovos de colher Especiais a partir de 350g.",
    promo:"10% desconto",
  },

  {
    image:OvosKids,
    descrition:"Ovos coloridos para brincar com a criançada.",
    promo:"5% desconto",
  }
  ];

  const StoreInformation =[{
    title:"Laranjeiras",
    timeFunction:["Seg 11h às 19h", "Ter a Sexta 9h às 20h","Sáb e Dom 10h às 19h"],
    adress:"Rua Ipiranga, 132 - Laranjeiras, Rio de Janeiro"
  },
  {
    title:"Copacabana",
    timeFunction:["Seg 11h às 19h", "Ter a Sexta 10h às 21h","Sáb e Dom 11h às 20h"],
    adress:"Av. Nossa Sra. de Copacabana, 978 - Rio de Janeiro"
  },
  {
    title:"Vila Madalena",
    timeFunction:["Segunda a Sábado 10 às 18h"],
    adress:"Av. Brg. Faria Lima, 2232 - Jardim Paulistano, São Paulo"
  },
]
  return (
    <main>

      <S.SectionProduct>
    {CardsPromo.map((item)=>(
      <section>
        <S.Span>{item.promo}</S.Span>
        <S.DivCard> 
        <S.ImgItem src={item.image} alt={item.descrition}/>
        <div> {item.descrition}</div>
        <button>Comprar</button>
        </S.DivCard>
      </section>
    ))}

    {CardsNoPromo.map((item)=>(
      <section>
        <S.DivCard> 
        <S.ImgItem src={item.image} alt={item.descrition}/>
        <div> {item.descrition}</div>
        <button>Comprar</button>
        </S.DivCard>
      </section>
    ))}
  </S.SectionProduct>

    <S.Store>
<div>
  <img src="" alt=""/>
  <h2>titlulo</h2>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <a href='' target=''>titlulo</a>
</div>
    </S.Store>
    </main>

  );
}
