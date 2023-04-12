import React from 'react';
import * as S from "./StyledMain.js";

import OvoDeColherEspe from "../Assets/ovoDeColherEspe.png";
import ovoDeColherTrad from "../Assets/ovoDeColherTrad.jpeg";
import cestaDeOvos from "../Assets/cestaDeOvos.jpeg";
import OvosKids from "../Assets/OvosKids.jpeg";
import Trufas from "../Assets/Trufas.jpeg";
import barraChoc from "../Assets/barraChoc.jpeg";
import LojaCopa from "../Assets/loja-Copa.jpeg";
import LojaLaranjeiras from "../Assets/loja-laranjeiras.jpeg";
import LojaSp from "../Assets/loja-Sp.jpeg";


export default function Main() {

  const CardsNoPromo = [
    {
      image: ovoDeColherTrad,
      descrition: "Ovos de colher Tradicional a partir de 250g.",
      promo: "%teste%",

    },
    {
      image: Trufas,
      descrition: "Kit de Trufas a partir de 12 unidades.",
    },
    {
      image: barraChoc,
      descrition: "Barra de Chocolate crocontes.",
    }];

  const CardsPromo = [
    {
      image: cestaDeOvos,
      descrition: "Cesta de Chocolate monte você mesmo.",
      promo: "12% desconto",

    },
    {
      image: OvoDeColherEspe,
      descrition: "Ovos de colher Especiais a partir de 350g.",
      promo: "10% desconto",
    },

    {
      image: OvosKids,
      descrition: "Ovos coloridos para brincar com a criançada.",
      promo: "5% desconto",
    }
  ];

  const StoreInformation = [{
    imageImport: {LojaLaranjeiras},
    imageLink: "https://s3-alpha-sig.figma.com/img/21f7/347b/5f13e75665a6efa890fe1e4e115b19db?Expires=1682294400&Signature=Zwvan3uHaHV~htxllp6nRRgeF8KWsVTWoPX3xgDilcwrRJAkTbIQApBJYkksbDCYopssFepH7AdeKINVYAY1uYZMT8JtJZ4vD77aSunF1l3u8q6ytAZ4IwTnzaRXlhAvGOeq4HAGg2eO5LW3Y2bTLFRk3ktXKT95RwvLTjoRZOlO3sELnVoJD-VqdqvSbnQ4GIFAnS4yX7SYEHZOaepXdkPeNTyQOHKPYtZATrKkoVUPvl34dIHswYs4IXIbvd3L03NNf0xbp-Q9CgiQ1ahhibUzHKS0F-EPUGyfQ~fDpeyhlUb24D9tFO~y3HpKjxZHWLxQCxK8CFlE-owTz0WeQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Laranjeiras",
    timeFunction: [
      {timeOne: "Seg 11h às 19h"},
      {timeTwo: "Ter a Sexta 9h às 20h"},
      {timeThree: "Sáb e Dom 10h às 19h"},
    ],
    adress: "Rua Ipiranga, 132 - Laranjeiras, Rio de Janeiro"
  },
  {
    imageLink:"https://s3-alpha-sig.figma.com/img/b5b0/1449/6c83dcdf243efcb6d0fa78bf005b6d14?Expires=1682294400&Signature=RwS7dvQGnI62VzhwifHGghtd~ZG5q4h~45jTJ9VjJFo3IkSNl-fZSez7XJ1qJ8~nyiT1WAP3Hv8EjdPzhEIBRDeNWJYsmOMNfD5CHtrrv7TseENr1qa-6jWJDv2BOuOuHQiSPW3UV8UAlC0TuEd6~nMW0JJmz6YvMCiT4zxxvHm3iolhyKeqnWC3Ps7wpJ2farDIFoQzr9sB70r7DnnGaoVs~nSvR-iFSGVNm9YY-tSwc4I9C3HmZYPGXbHpbgdUWOCIlpuf1TmEIWqYsh9ekfJT36zgL1hlaHCASMS9-AQMyP898IyWbIk4T59KpHCGas5qGoh24AoDsHTNu0dnZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    imageImport: {LojaCopa},
    title: "Copacabana",
    timeFunction: [{
      timeOne: "Seg 11h às 19h"
    },
    { 
      timeTwo: "Ter a Sexta 10h às 21h"
    },
    { timeThree: "Sáb e Dom 11h às 20h"
    }],
    adress: "Av. Nossa Sra. de Copacabana, 978 - Rio de Janeiro"
  },
  {
    imageLink:"https://s3-alpha-sig.figma.com/img/85fd/e874/70db6506b7c9c4bf66b8baa7c3b9c0d1?Expires=1682294400&Signature=S4Yly5EtLnHq4KQG5RCmAPf2V9EZn6TFOCCFXL4RSxvRcBgb2iS0hNcwxxCoE3fTfp7p-Fr5Kyr8mpBcaVtU57pad1HkMUBWEv3LbGC8R51Pa7n9FKdl7elt4K38hkOq3BdWXbGg7LaG45uBa4pw5Gijk6zX9U6UE9JqfXGe5oNgL7Sl2smvo08NgK~023z0AIu3uSC7mFXMb8~MY6WWkcLjDtHw5SaYiCligaKGzrraL-T9podPTV4z-tPOaRDeuNEiytPKy4JB18pHFT~Ww-SqCufGnKL03vfpogfiSHZtxudRCoFWemF-Cgy1yk-RsYBplm23ZxWglnmw9NyUZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    imageImport: {LojaSp},
    title: "Vila Madalena",
    timeFunction: [{
      timeOne: "Segunda a Sábado 10 às 18h"
    }],
    adress: "Av. Brg. Faria Lima, 2232 - Jardim Paulistano, São Paulo"
  },
  ]
  return (
    <main>

      <S.SectionProduct>
        {CardsPromo.map((item) => (
          <section>
            <S.Span>{item.promo}</S.Span>
            <S.DivCard>
              <S.ImgItem src={item.image} alt={item.descrition} />
              <div> {item.descrition}</div>
              <button>Comprar</button>
            </S.DivCard>
          </section>
        ))}

        {CardsNoPromo.map((item) => (
          <section>
           <S.Span>{item.promo}</S.Span>
            <S.DivCard>
              <S.ImgItem src={item.image} alt={item.descrition} />
              <div> {item.descrition}</div>
              <button>Comprar</button>
            </S.DivCard>
          </section>
        ))}
      </S.SectionProduct>

      <S.Store>
        {StoreInformation.map((item) => (
          <div>
            {/* pq as fotos nao estao abrindo */}
            <img src={item.imageImport} alt="foto da entrada"/>
            <img src={item.imageLink} alt="foto da entrada"/>

            <h2>{item.title}</h2>
            <ul>
              {/* como fazer para ele não renderizar as 3 <li>, só quando precisa */}
              <li>{item.timeFunction.timeOne}</li>
              <li>{item.timeFunction.timeTwo}</li>
              <li>{item.timeFunction.timeThree}</li>
            </ul>
            <a href='' target='{_blank}'>{item.adress}</a>
          </div>

        ))}
      </S.Store>
    </main>

  );
}
