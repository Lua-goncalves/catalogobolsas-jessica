import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import bag1 from "@/images/bag-1.jpeg";
import bag79 from "@/images/bag1.2.jpeg";
import bag60 from "@/images/bag-1.3.jpeg";
import bag2 from "@/images/bag-2.jpeg";
import bag3 from "@/images/bag-3.jpeg";
import bag61 from "@/images/bag-3.1.jpeg";
import bag4 from "@/images/bag-4.jpeg";
import bag62 from "@/images/bag-4.1.jpeg";
import bag5 from "@/images/bag-5.jpeg";
import bag6 from "@/images/bag-6.jpeg";
import bag63 from "@/images/bag-6.1.jpeg";
import bag7 from "@/images/bag-7.jpeg";
import bag8 from "@/images/bag-8.jpeg";
import bag9 from "@/images/bag-9.jpeg";
import bag10 from "@/images/bag-10.jpeg";
import bag64 from "@/images/bag-10.1.jpeg";
import bag11 from "@/images/bag-11.jpeg";
import bag12 from "@/images/bag-12.jpeg";
import bag13 from "@/images/bag-13.jpeg";
import bag14 from "@/images/bag-14.jpeg";
import bag15 from "@/images/bag-15.jpeg";
import bag16 from "@/images/bag-16.jpeg";
import bag17 from "@/images/bag-17.jpeg";
import bag18 from "@/images/bag-18.jpeg";
import bag65 from "@/images/bag-18.1.jpeg";
import bag19 from "@/images/bag-19.jpeg";
import bag20 from "@/images/bag-20.jpeg";
import bag66 from "@/images/bag-20.1.jpeg";
import bag21 from "@/images/bag-21.jpeg";
import bag22 from "@/images/bag-22.jpeg";
import bag23 from "@/images/bag-23.jpeg";
import bag24 from "@/images/bag-24.jpeg";
import bag25 from "@/images/bag-25.jpeg";
import bag26 from "@/images/bag-26.jpeg";
import bag27 from "@/images/bag-27.jpeg";
import bag28 from "@/images/bag-28.jpeg";
import bag29 from "@/images/bag-29.jpeg";
import bag67 from "@/images/bag-29.1.jpeg";
import bag30 from "@/images/bag-30.jpeg";
import bag31 from "@/images/bag-31.jpeg";
import bag32 from "@/images/bag-32.webp";
import bag81 from "@/images/bag-32.2.webp";
import bag80 from "@/images/bag-32.1.webp";
import bag33 from "@/images/bag-33.webp";
import bag82 from "@/images/bag-33.1.webp";
import bag83 from "@/images/bag-33.2.webp";
import bag84 from "@/images/bag-33.3.webp";
import bag34 from "@/images/bag-34.webp";
import bag85 from "@/images/bag-34.1.webp";
import bag35 from "@/images/bag-35.webp";
import bag86 from "@/images/bag-35.1.webp";
import bag87 from "@/images/bag-35.2.webp";
import bag88 from "@/images/bag-35.3.webp";
import bag89 from "@/images/bag-35.4.webp";
import bag90 from "@/images/bag-35.5.webp";
import bag91 from "@/images/bag-35.6.webp";
import bag145 from "@/images/bag-35.7.webp";
import bag36 from "@/images/bag-36.jpeg";
import bag68 from "@/images/bag-36.1.jpeg";
import bag37 from "@/images/bag-37.jpeg";
import bag38 from "@/images/bag-38.jpeg";
import bag69 from "@/images/bag-38.1.jpeg";
import bag39 from "@/images/bag-39.jpeg";
import bag40 from "@/images/bag-40.jpeg";
import bag41 from "@/images/bag-41.jpeg";
import bag70 from "@/images/bag-41.1.jpeg";
import bag42 from "@/images/bag-42.jpeg";
import bag43 from "@/images/bag-43.jpeg";
import bag71 from "@/images/bag-43.1.jpeg";
import bag44 from "@/images/bag-44.jpeg";
import bag45 from "@/images/bag-1.1.jpeg"
import bag46 from "@/images/bag-46.jpeg";
import bag47 from "@/images/bag-47.jpeg";
import bag72 from "@/images/bag-47.3.jpeg";
import bag48 from "@/images/bag-47.1.jpeg";
import bag49 from "@/images/bag-47.2.jpeg";
import bag50 from "@/images/bag-48.jpeg";
import bag51 from "@/images/bag-49.jpeg";
import bag52 from "@/images/bag-50.jpeg";
import bag53 from "@/images/bag-51.jpeg";
import bag73 from "@/images/bag-51.1.jpeg";
import bag74 from "@/images/bag-51.2.jpeg";
import bag54 from "@/images/bag-52.jpeg";
import bag55 from "@/images/bag-53.jpeg";
import bag75 from "@/images/bag-53.1.jpeg";
import bag56 from "@/images/bag-54.jpeg";
import bag57 from "@/images/bag-55.jpeg";
import bag76 from "@/images/bag-55.1.jpeg";
import bag58 from "@/images/bag-56.jpeg";
import bag59 from "@/images/bag-57.jpeg";
import bag77 from "@/images/bag-58.jpeg";
import bag78 from "@/images/bag-59.jpeg";
import bag92 from "@/images/bag-60.webp";
import bag93 from "@/images/bag-60.1.webp";
import bag94 from "@/images/bag-60.2.webp";
import bag95 from "@/images/bag-60.3.webp";
import bag96 from "@/images/bag-60.4.webp";
import bag97 from "@/images/bag-60.5.webp";
import bag98 from "@/images/bag-60.6.webp";
import bag99 from "@/images/bag-60.7.webp";
import bag100 from "@/images/bag-60.8.webp";
import bag101 from "@/images/bag-60.9.webp";
import bag102 from "@/images/bag-61.webp";
import bag103 from "@/images/bag-61.1.webp";
import bag104 from "@/images/bag-61.2.webp";
import bag105 from "@/images/bag-61.3.webp";
import bag106 from "@/images/bag-61.4.webp";
import bag107 from "@/images/bag-61.5.webp";
import bag108 from "@/images/bag-61.6.webp";
import bag109 from "@/images/bag-61.7.webp";
import bag110 from "@/images/bag-62.webp";
import bag111 from "@/images/bag-62.1.webp";
import bag112 from "@/images/bag-63.webp";
import bag113 from "@/images/bag-63.1.webp";
import bag114 from "@/images/bag-63.2.webp";
import bag115 from "@/images/bag-63.3.webp";
import bag116 from "@/images/bag-63.4.webp";
import bag117 from "@/images/bag-63.5.webp";
import bag118 from "@/images/bag-64.webp";
import bag119 from "@/images/bag-64.1.webp";
import bag120 from "@/images/bag-64.2.webp";
import bag121 from "@/images/bag-64.3.webp";
import bag122 from "@/images/bag-65.webp";
import bag123 from "@/images/bag-65.1.webp";
import bag124 from "@/images/bag-65.2.webp";
import bag125 from "@/images/bag-65.3.webp";
import bag126 from "@/images/bag-65.4.webp";
import bag127 from "@/images/bag-66.webp";
import bag128 from "@/images/bag-66.1.webp";
import bag129 from "@/images/bag-66.2.webp";
import bag130 from "@/images/bag-66.3.webp";
import bag131 from "@/images/bag-67.webp";
import bag132 from "@/images/bag-67.1.webp";
import bag133 from "@/images/bag-67.2.webp";
import bag169 from "@/images/bag-67.3.webp";
import bag170 from "@/images/bag-67.4.webp";
import bag134 from "@/images/bag-68.webp";
import bag135 from "@/images/bag-68.1.webp";
import bag136 from "@/images/bag-68.2.webp";
import bag137 from "@/images/bag-68.3.webp";
import bag167 from "@/images/bag-68.4.webp";
import bag138 from "@/images/bag-69.webp";
import bag168 from "@/images/bag-69.1.webp";
import bag139 from "@/images/bag-70.webp";
import bag140 from "@/images/bag-21.1.webp";
import bag141 from "@/images/bag-21.2.webp";
import bag142 from "@/images/bag-22.1.webp";
import bag143 from "@/images/bag-22.2.webp";
import bag144 from "@/images/bag-62.2.webp";  
import bag146 from "@/images/bag-71.webp";
import bag147 from "@/images/bag-71.1.webp";
import bag148 from "@/images/bag-71.2.webp";
import bag149 from "@/images/bag-71.3.webp";
import bag150 from "@/images/bag-71.4.webp";
import bag151 from "@/images/bag-55.2.webp";
import bag171 from "@/images/bag-55.3.webp";
import bag152 from "@/images/bag-72.1.webp";
import bag153 from "@/images/bag-72.2.webp";
import bag154 from "@/images/bag-72.3.webp";
import bag155 from "@/images/bag-72.4.webp";
import bag156 from "@/images/bag-72.5.webp";
import bag157 from "@/images/bag-72.6.webp";
import bag158 from "@/images/bag-72.7.webp";
import bag159 from "@/images/bag-73.webp";
import bag160 from "@/images/bag-73.1.webp";
import bag161 from "@/images/bag-73.2.webp";
import bag162 from "@/images/bag-74.webp";
import bag163 from "@/images/bag-74.1.webp";
import bag164 from "@/images/bag-74.2.webp";
import bag165 from "@/images/bag-74.3.webp";
import bag166 from "@/images/bag-74.4.webp";


import { fromTheme } from "tailwind-merge";

const products = [
  {
    id: 37,
    name: "Bolsa Tiracolo, Modelo Especial - Ideal para Presente",
    price: "R$ 69,90",
    // description:
    //   "Bolsa tiracolo de estilo clássico e versátil, ideal para uso durante o dia ou à noite. Confeccionada em couro sintético, possui fecho em metal e alça de corrente preta que adiciona um toque moderno e elegante.Disponível nas cores branco, bege, caramelo e creme.",
    media: [
      { type: "image", src: bag147 },
      { type: "image", src: bag146 },
      { type: "image", src: bag148 },
      { type: "image", src: bag149 },
      { type: "image", src: bag150 },

      // { type: "video", src: "" },
    ],
  },

  {
    id: 39,
    name: "Bolsa Tiracolo Modelo Especial, Alça Removível - Ideal para Presente",
    price: "R$ 69,90",
    // description:
    //   "Bolsa tiracolo de estilo clássico e versátil, ideal para uso durante o dia ou à noite. Confeccionada em couro sintético, possui fecho em metal e alça de corrente preta que adiciona um toque moderno e elegante.Disponível nas cores branco, bege, caramelo e creme.",
    media: [
      { type: "image", src: bag152 },
      { type: "image", src: bag153 },
      { type: "image", src: bag154 },
      { type: "image", src: bag155 },
      { type: "image", src: bag156 },
      { type: "image", src: bag157 },
      { type: "image", src: bag158 },

      // { type: "video", src: "" },
    ],
  },

  {
    id: 17,
    name: "Bolsa Tiracolo em Couro Sintético",
    price: "R$ 59,90",
    description:
      "Bolsa tiracolo de estilo clássico e versátil, ideal para uso durante o dia ou à noite. Confeccionada em couro sintético, possui fecho em metal e alça de corrente preta que adiciona um toque moderno e elegante.Disponível nas cores branco, bege, caramelo e creme.",
    media: [
      { type: "image", src: bag32 },
      { type: "image", src: bag80 },
      { type: "image", src: bag81 },
      { type: "image", src: bag33 },
      { type: "image", src: bag82 },
      { type: "image", src: bag83 },
      { type: "image", src: bag84 },
      { type: "image", src: bag34 },
      { type: "image", src: bag85 },
      { type: "image", src: bag35 },
      { type: "image", src: bag86 },
      { type: "image", src: bag87 },
      { type: "image", src: bag88 },
      { type: "image", src: bag89 },
      { type: "image", src: bag90 },
      { type: "image", src: bag91 },
      { type: "image", src: bag145 },
      // { type: "video", src: "" },
    ],
  },

  {
    id: 30,
    name: "Bolsa Crossbody",
    price: "R$ 90,00",
    description:
      "Bolsa pequena estilo crossbody (tiracolo), com formato quadrado tipo caixa e textura matelassê (acolchoada) na parte externa. Possui fechamento com zíper duplo, garantindo praticidade e segurança.Acompanha alça de mão curta decorativa, com mistura de elos de corrente brancos e bolas verdes, além de alça transversal/ombro ajustável na cor verde (embalada separadamente) O design une elementos clássicos, como o matelassê e o formato estruturado, com detalhes modernos e despojados nas alças, tornando a peça versátil para looks casuais ou mais arrumados.",
    media: [
      { type: "image", src: bag113 },
      { type: "image", src: bag115 },
      { type: "image", src: bag117 },
      { type: "image", src: bag112 },
      { type: "image", src: bag114 },
      { type: "image", src: bag116 },

      { type: "video", src: "/videos/opt-bag63.mp4" },
    ],
  },

  {
    id: 1,
    name: "Bolsa Tote Caramelo com Lenço Decorativo",
    price: "R$ 135,00",
    description:
      "Bolsa em couro sintético na cor caramelo, modelo tote com alças duplas e lenço decorativo. Possui zíper frontal dourado e design versátil, que combina com diversos estilos.O lenço é um detalhe moderno e personalizável, ma tendência popular que permite transformar o visual da bolsa, podendo ser amarrado de diferentes maneiras para criar estilos variados.",
    media: [
      { type: "image", src: bag45 },
      { type: "image", src: bag1 },
      { type: "image", src: bag79 },
      { type: "image", src: bag60 },
      { type: "video", src: "/videos/opt-bag-1.1.mp4" },
    ],
  },
  {
    id: 2,
    name: "Bolsa Chicago",
    price: "R$ 135,00",
    description:
      "Modelo elegante em couro sintético, com alça de mão franzida (ou plissada) e alça transversal que une estilo e praticidade.Disponível nas cores preta e bege.",
    media: [
      { type: "image", src: bag2 },
      { type: "image", src: bag3 },
      { type: "image", src: bag61 },
      { type: "image", src: bag4 },
      { type: "image", src: bag62 },
      { type: "image", src: bag5 },
      { type: "video", src: "/videos/opt-bag2.2.mp4" },
    ],
  },
  {
    id: 32,
    name: "Bolsa Baú Caramelo",
    price: "R$ 99,00",
    description:
      " Bolsa estilo baú, tamanho pequeno, na cor caramelo, com design charmoso e funcional. Acompanha laço animal print (onça-pintada), alça de mão e alça transversal ajustável e removível, permitindo diferentes formas de uso. Possui forro interno em tecido, compartimentos organizados e fechamento em zíper, unindo praticidade e estilo para o dia a dia ou ocasiões especiais. ",
    media: [
      { type: "image", src: bag123 },
      { type: "image", src: bag122 },
      { type: "image", src: bag124 },
      { type: "image", src: bag125 },
      { type: "image", src: bag126 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 33,
    name: "Bolsa Baú Café",
    price: "R$ 99,00",
    description:
      " Bolsa estilo baú, tamanho pequeno, na cor café, com design elegante e funcional. Acompanha laço decorativo, alça de mão e alça transversal ajustável e removível, oferecendo versatilidade no uso. Possui forro interno em tecido, compartimentos organizados e fechamento em zíper, ideal para o dia a dia ou ocasiões especiais.",
    media: [
      { type: "image", src: bag130 },
      { type: "image", src: bag128 },
      { type: "image", src: bag127 },
      { type: "image", src: bag129 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 37,
    name: "Bolsa Baú Preta",
    price: "R$ 99,00",
    description:
      "Bolsa estilo baú, tamanho pequeno, na cor preta, com design elegante e funcional. Acompanha laço decorativo, alça de mão e alça transversal ajustável e removível, oferecendo versatilidade no uso. Possui forro interno em tecido, compartimentos organizados e fechamento em zíper, ideal para o dia a dia ou ocasiões especiais.",
    media: [
      { type: "image", src: bag139 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 31,
    name: "Bolsa Transversal Crossbody",
    price: "R$ 90,00",
    description:
      "Bolsa pequena em couro sintético, na cor caramelo, com design moderno e muito funcional. Destaca-se pela alça de fita larga ajustável, que garante conforto e versatilidade no uso, podendo ser utilizada como transversal ou de ombro.Possui múltiplos compartimentos com zíperes dourados, geralmente três bolsos frontais — ideais para organizar itens essenciais como celular, carteira e documentos. Em alguns modelos, acompanha chaveiro de ursinho, que adiciona um toque charmoso e descontraído ao acessório.",
    media: [
      { type: "image", src: bag118 },
      { type: "image", src: bag119 },
      { type: "image", src: bag120 },
      { type: "image", src: bag121 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 3,
    name: "Bolsa Compacta e Versátil",
    price: "R$ 90,00",
    description:
      "Bolsa de design compacto, que também pode ser usada como bolsa de ombro. Prática e elegante, é perfeita para o dia a dia.",
    media: [
      { type: "image", src: bag6 },
      { type: "image", src: bag63 },
      { type: "image", src: bag7 },
      { type: "image", src: bag8 },
      // { type: "video", src: "" },
    ],
  },
  {
    id: 4,
    name: "Bolsa de Couro Sintético",
    price: "R$ 99,00 a R$ 149,00",
    description:
      " Peça atemporal que combina facilmente com diversos estilos, do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões.Disponível nos tamanhos pequeno R$ 99,00 , médio R$ 129,00 e grande R$ 149,00 e também na cor preta.",
    media: [
      { type: "image", src: bag9 },
      { type: "image", src: bag10 },
      { type: "image", src: bag64 },
      { type: "image", src: bag11 },
      { type: "video", src: "/videos/opt-bag4.1.mp4" },
      { type: "video", src: "/videos/opt-bag4.mp4" },
    ],
  },
  {
    id: 5,
    name: "Bolsas Grandes Elegantes",
    price: "R$ 165,00",
    description:
      "Bolsas grandes com designs modernos, versáteis e elegantes, acabamento impecável e detalhes sofisticados em metal. Possuem alças ajustáveis para uso no ombro ou transversal, oferecendo praticidade para o dia a dia. A bolsa exibida na foto acompanha uma pequena bolsinha pendurada, ideal como porta-moedas. Perfeitas para diversas ocasiões, desde looks casuais até os mais elegantes.Disponível nas cores preta, marrom, caramelo e vinho.",
    media: [
      { type: "image", src: bag12 },
      { type: "image", src: bag13 },
      { type: "image", src: bag14 },
      { type: "image", src: bag15 },
      { type: "video", src: "/videos/opt-bag5.1.mp4" },
      { type: "video", src: "/videos/opt-bag5.2.mp4" },
      { type: "video", src: "/videos/opt-bag5.mp4" },
    ],
  },
  {
    id: 6,
    name: "Bolsa Hobo Caramelo",
    price: "R$ 165,00",
    description:
      "Bolsa em formato meia-lua, confeccionada em material sintético maleável e desestruturado, que adquire um caimento natural ao ser apoiada. Versátil e casual, é perfeita para o uso diário, proporcionando um visual moderno e despojado.",
    media: [
      { type: "image", src: bag16 },
      { type: "image", src: bag17 },
      { type: "video", src: "/videos/opt-bag6.1.mp4" },
    ],
  },
  {
    id: 7,
    name: "Bolsa Hobo Grande",
    price: "R$ 139,00",
    description:
      "Bolsa Hobo de design curvado na parte superior, com alça de ombro ajustável, zíperes laterais com puxadores decorativos e detalhe de metal dourado na parte frontal. Disponível nas cores prata metálico e marrom, combina estilo e praticidade para o dia a dia.",
    media: [
      { type: "image", src: bag18 },
      { type: "image", src: bag65 },
      { type: "image", src: bag19 },
      { type: "video", src: "/videos/opt-bag7.1.mp4" },
    ],
  },
  {
    id: 29,
    name: "Bolsa Meia-Lua",
    price: "R$ 120,00",
    description:
      " Bolsa média estilo hobo, em couro sintético, com formato de meia-lua e corpo curvado. Possui alça de ombro curta e grossa e fecho em zíper, ideal para o dia a dia por ser leve e espaçosa.Acompanha um pingente de pelúcia removível pendurado na alça, deixando o modelo mais moderno e estiloso.Cores disponíveis: Preta | Caramelo",
    media: [
      { type: "image", src: bag144 },
      { type: "image", src: bag110 },
      { type: "image", src: bag111 },
      { type: "video", src: "/videos/opt-bag-29.mp4" },
      { type: "video", src: "/videos/opt-bag62.mp4" },
      { type: "video", src: "/videos/opt-bag62.1.mp4" },
    ],
  },

  {
    id: 9,
    name: "Bolsa Hobo Preta",
    price: "R$ 139,00",
    description:
      " Bolsa grande em couro sintético, com alça de ombro trançada e detalhes dourados que acrescentam sofisticação. Elegante e espaçosa, perfeita para o dia a dia ou ocasiões especiais.",
    media: [
      { type: "image", src: bag20 },
      { type: "image", src: bag66 },
      // { type: "video", src: "" },
    ],
  },
  {
    id: 8,
    name: "Bolsa de Mão Bicolor",
    price: "R$ 135,00",
    description:
      " Bolsa em couro sintético com alça de mão, apresentando design bicolor elegante, parte superior em bege e inferior em azul claro com textura. Sofisticada e moderna, ideal para diversas ocasiões.",
    media: [
      { type: "image", src: bag50 },
      { type: "video", src: "/videos/opt-bag-8.1.mp4" },
    ],
  },
  {
    id: 10,
    name: "Bolsa de Ombro Média Bicolor",
    price: "R$ 135,00",
    description:
      "Bolsa média com alça superior e fecho de aba, com design bicolor elegante. Disponível nas combinações creme e preto e creme e cinza. Versátil e sofisticada, perfeita para o dia a dia.",
    media: [
      { type: "image", src: bag142 },
      { type: "image", src: bag22 },
      { type: "image", src: bag143 },
      { type: "image", src: bag21 },
      { type: "image", src: bag140 },
      { type: "image", src: bag141 },
      { type: "video", src: "/videos/opt-bag22.mp4" },
    ],
  },
  {
    id: 11,
    name: "Bolsa de Mão Média Marrom",
    price: "R$ 140,00",
    description:
      "Bolsa de formato baú, com design moderno e elegante. Possui alça de mão trançada e alça transversal ajustável, ambas na cor marrom, oferecendo estilo e praticidade para o dia a dia.",
    media: [
      { type: "image", src: bag23 },
      { type: "video", src: "/videos/opt-bag11.1.mp4" },
    ],
  },
  {
    id: 12,
    name: "Bolsa Média Marrom",
    price: "R$ 149,00",
    description:
      "Bolsa média em couro sintético de alta qualidade, com design moderno e estruturado. Conta com três repartições internas, incluindo uma com zíper, oferecendo praticidade e organização. Versátil, perfeita para o dia a dia de trabalho ou ocasiões casuais.",
    media: [
      { type: "image", src: bag24 },
      { type: "image", src: bag25 },
      { type: "video", src: "/videos/opt-bag12.1.mp4" },
    ],
  },
  {
    id: 13,
    name: "Bolsa Média Preta",
    price: "R$ 135,00",
    description:
      "Bolsa de design moderno e elegante, com acabamento sofisticado. Possui alça transversal ajustável e removível, além de fechamento com zíper para mais praticidade e segurança.",
    media: [
      { type: "image", src: bag26 },
      { type: "video", src: "/videos/opt-bag13.1.mp4" },
    ],
  },
  {
    id: 14,
    name: "Bolsa Pequena Bege",
    price: "R$ 95,00",
    description:
      " Bolsa de alça dupla de mão, confeccionada em material sintético, com alça de ombro removível e design delicado. Acompanha um lenço estampado que complementa o visual com charme e elegância.",
    media: [
      { type: "image", src: bag27 },
      { type: "image", src: bag28 },
      { type: "video", src: "/videos/opt-bag14.1.mp4" },
    ],
  },
  {
    id: 15,
    name: "Bolsa Preta Compacta",
    price: "R$ 120,00",
    description:
      "Bolsa pequena e elegante em couro sintético, com aba sofisticada e alça de ombro longa e ajustável. Versátil e prática, ideal para ocasiões casuais e formais.",
    media: [
      { type: "image", src: bag29 },
      { type: "image", src: bag67 },
      { type: "image", src: bag30 },
      // { type: "video", src: "" },
    ],
  },
  {
    id: 16,
    name: "Bolsa Social Preta",
    price: "R$ 165,00",
    description:
      " Bolsa social em courino sintético, com alça de mão e alça transversal ajustável e removível. Apresenta detalhes em tressê na parte frontal, unindo elegância e praticidade para ocasiões formais ou do dia a dia.",
    media: [
      { type: "image", src: bag31 },
      { type: "video", src: "/videos/opt-bag16.1.mp4" },
    ],
  },

  {
    id: 18,
    name: "Bolsa Tote Branca Texturizada com Nécessaire",
    price: "R$ 149,00",
    description:
      "Conjunto elegante composto por uma bolsa de ombro tipo tote e uma nécessaire removível. A bolsa principal possui formato espaçoso, alças curtas e acabamento texturizado que imita couro de crocodilo, confeccionada em couro sintético de alta qualidade. Perfeita para quem busca praticidade e sofisticação no dia a dia.",
    media: [
      { type: "image", src: bag36 },
      { type: "image", src: bag68 },
      { type: "image", src: bag37 },
      { type: "video", src: "/videos/opt-bag18.1.mp4" },
    ],
  },
  {
    id: 19,
    name: "Bolsa Tote",
    price: "R$ 139,90",
    description:
      "Modelo espaçoso e prático, ideal para o dia a dia. Possui design moderno e funcional, perfeito para carregar todos os seus itens com estilo e elegância.Disponível nas cores marrom e preta.",
    media: [
      { type: "image", src: bag38 },
      { type: "image", src: bag69 },
      { type: "image", src: bag39 },
      { type: "image", src: bag40 },
      { type: "video", src: "/videos/opt-bag19.1.mp4" },
    ],
  },
  {
    id: 20,
    name: "Conjunto de Bolsas Femininas Pretas",
    price: "R$ 149,00",
    description:
      "Conjuntocomposto por duas bolsas elegantes:•	Bolsa Tote Grande: Design de cesta trançada com alças curtas, confeccionada em couro sintético com textura trançada. Espaçosa e versátil, perfeita para o dia a dia ou compromissos mais formais.•	Bolsa Crossbody Menor: Modelo transversal com alça longa e ajustável, ideal para praticidade e estilo no dia a dia.A bolsa menor é inclusa como brinde, tornando este conjunto ainda mais atraente.",
    media: [
      { type: "image", src: bag41 },
      { type: "image", src: bag42 },
      { type: "image", src: bag70 },
      // { type: "video", src: "" },
    ],
  },
  {
    id: 21,
    name: "Bolsa Satchel Bicolor",
    price: "R$ 135,00",
    description:
      "  Bolsa de mão com alça superior, apresentando design bicolor elegante, parte superior em tom creme e inferior em azul claro. Possui fecho de metal dourado, que adiciona um toque sofisticado. Versátil e atemporal, é perfeita tanto para o dia a dia quanto para eventos mais formais.",
    media: [
      { type: "image", src: bag47 },
      { type: "image", src: bag72 },
      { type: "image", src: bag49 },
      { type: "image", src: bag48 },
      { type: "video", src: "/videos/opt-bag21.3.mp4" },
    ],
  },
  {
    id: 22,
    name: "Mochila Urbana Preta Feminina",
    price: "R$ 95,00",
    description:
      "Mochila feminina em couro sintético, com alças duplas para maior conforto. Possui bolsos frontais com zíper e bolsos laterais, oferecendo praticidade e organização para o dia a dia urbano.",
    media: [
      { type: "image", src: bag43 },
      { type: "image", src: bag71 },
      { type: "image", src: bag44 },
      { type: "video", src: "/videos/opt-bag21.1.mp4" },
    ],
  },
  {
    id: 23,
    name: "Bolsa de Couro Sintético Bege",
    price: "R$ 149,00",
    description:
      " Bolsa em couro sintético, tamanho pequeno, com alças de mão e alça de ombro longa, unindo praticidade e elegância em um design delicado e versátil. ",
    media: [
      { type: "image", src: bag46 },
      { type: "video", src: "/videos/opt-bag23.1.mp4" },
    ],
  },
  {
    id: 24,
    name: "Bolsa Quilted Satchel Marrom",
    price: "R$ 135,00",
    description:
      "Bolsa média em couro sintético, com textura matelassê e design clássico. Possui alças de mão e alça transversal removível, oferecendo praticidade e elegância. O tecido acolchoado confere um toque sofisticado, tornando-a uma peça versátil que combina com diversas ocasiões e looks refinados.",
    media: [
      { type: "image", src: bag51 },
      { type: "image", src: bag73 },
      { type: "image", src: bag74 },
      { type: "image", src: bag52 },
      { type: "image", src: bag53 },
      { type: "image", src: bag75 },
      // { type: "video", src: "/videos/bag-8.1.mp4" },
    ],
  },
  {
    id: 25,
    name: "Bolsa Satchel Média Preta",
    price: "R$ 140,00",
    description:
      " Bolsa em couro sintético, estilo satchel, com estrutura firme e design elegante. Possui alças curtas e alça longa removível, além de detalhes em corrente dourada que adicionam um toque sofisticado e moderno.",
    media: [
      { type: "image", src: bag54 },
      { type: "image", src: bag55 },
      { type: "image", src: bag76 },
      // { type: "video", src: "/videos/bag-8.1.mp4" },
    ],
  },
  {
    id: 26,
    name: "Bolsa Tote Média",
    price: "R$ 140,00",
    description:
      " Bolsa em couro sintético, modelo tote de tamanho médio, com alças de mão e formato estruturado. Acompanha uma bolsa menor, que pode ser usada como carteira ou porta-moedas, além de uma alça transversal removível e ajustável.O conjunto é versátil, prático e elegante, ideal para o dia a dia, o trabalho ou eventos casuais.Disponível nas cores caramelo e café.",
    media: [
      { type: "image", src: bag56 },
      { type: "image", src: bag57 },
      { type: "image", src: bag58 },
      { type: "image", src: bag77 },
      { type: "image", src: bag59 },
      { type: "image", src: bag78 },
      // { type: "video", src: "/videos/bag-8.1.mp4" },
    ],
  },

  {
    id: 39,
    name: "Bolsa Tote Média",
    price: "R$ 140,00",
    description:
      " Bolsa em couro sintético, modelo tote de tamanho médio, com alças de mão e formato estruturado. Acompanha uma bolsa menor, que pode ser usada como carteira ou porta-moedas, além de uma alça transversal removível e ajustável.O conjunto é versátil, prático e elegante, ideal para o dia a dia, o trabalho ou eventos casuais.",
    media: [
      { type: "image", src: bag171 },
      { type: "image", src: bag151 },
      { type: "video", src: "/videos/opt-bag-39.mp4" },
    ],
  },

  {
    id: 27,
    name: "Mala T60",
    price: "R$ 89,90",
    description:
      " A T60 é um modelo versátil de mala/mochila esportiva e de viagem, reconhecida por sua alta capacidade e praticidade. Fabricada em tecido espessado composto (T60), é resistente, durável e muitas vezes impermeável — ideal para diferentes ambientes e rotinas intensas.Principais Características:•	Capacidade aproximada de 60 litros, perfeita para viagens curtas, treinos, academia ou atividades esportivas.•	Design multifuncional: pode ser usada como bolsa transversal, mala de mão ou mochila, graças às alças versáteis e, em muitos modelos, removíveis.	•	Material resistente e impermeável: produzida majoritariamente em poliéster reforçado, com costuras resistentes para uso frequente.•	Organização inteligente: múltiplos compartimentos, incluindo bolso exclusivo para calçados, garantindo mais higiene e organização interna.•	Bolsos externos: bolsos frontais e laterais com zíper para itens pequenos como celular, chaves e documentos.•	Design unissex, popular entre atletas, estudantes, viajantes e profissionais.•	Modelo genérico, podendo ser encontrado por diferentes marcas e fabricantes.",
    media: [
      { type: "image", src: bag92 },
      { type: "image", src: bag93 },
      { type: "image", src: bag94 },
      { type: "image", src: bag95 },
      { type: "image", src: bag96 },
      { type: "image", src: bag97 },
      { type: "image", src: bag98 },
      { type: "image", src: bag99 },
      { type: "image", src: bag100 },
      { type: "image", src: bag101 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 28,
    name: "Mala Zaoqiu",
    price: "R$ 89,90",
    description:
      "Mala esportiva e de viagem com design de grande capacidade, ideal para quem busca organização e praticidade. Possui divisão inteligente entre zona seca e zona molhada, além de compartimento independente para calçados.Feita em tecido texturizado resistente ao desgaste e a riscos, garantindo durabilidade. Na parte traseira, conta com encaixe para haste de mala de rodinhas, facilitando o transporte em viagens.Principais Características:	•	Bolsa de mão com alça transversal removível e regulável;•	2 compartimentos principais, sendo um específico para roupas sujas ou molhadas;•	Bolso principal espaçoso, ideal para carteira, nécessaire, cadernos, roupas e itens do dia a dia;•	Bolso lateral para celular, canetas e objetos menores;•	Bolso lateral exclusivo para calçado;•	Bolso frontal com zíper para acesso rápido;•	Compartimento traseiro para acoplar na mala de viagem;•	Alça lateral de mão para facilitar o carregamento;	•	Material impermeável com acabamento e metais de alta qualidade.",
    media: [
      { type: "image", src: bag109 },
      { type: "image", src: bag102 },
      { type: "image", src: bag103 },
      { type: "image", src: bag104 },
      { type: "image", src: bag105 },
      { type: "image", src: bag106 },
      { type: "image", src: bag107 },
      { type: "image", src: bag108 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 34,
    name: "Carteira Feminina Grande",
    price: "R$ 59,90",
    description:
      " Carteira em couro sintético, tamanho grande, com múltiplas repartições internas e porta-cartões, oferecendo ótima organização. Possui fecho em zíper para moedas e design elegante, além de pingente de franja (tassel) que adiciona um toque moderno e sofisticado.",
    media: [
      { type: "image", src: bag169 },
      { type: "image", src: bag170 },
      { type: "image", src: bag131 },
      { type: "image", src: bag132 },
      { type: "image", src: bag133 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 35,
    name: "Carteira Preta em Couro Sintético",
    price: "R$ 59,90",
    description:
      "Carteira confeccionada em couro sintético, na cor preta, com textura em relevo que agrega sofisticação ao design. Possui fecho de fivela e detalhe de tassel (pendão) colorido, trazendo um toque moderno e elegante.Funcional e prática, conta com compartimentos internos para cartões, documentos e moedas, podendo acomodar também o celular, conforme o modelo.",
    media: [
      { type: "image", src: bag167 },
      { type: "image", src: bag134 },
      { type: "image", src: bag135 },
      { type: "image", src: bag136 },
      { type: "image", src: bag137 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 36,
    name: "Carteira Feminina Compacta",
    price: "R$ 59,90",
    description:
      "Carteira com design compacto, equipada com aba frontal e fecho de fivela decorativa. Confeccionada em material com textura levemente granulada, apresenta um visual elegante e moderno. Possui pingente de franjas (tassel) na lateral, que adiciona charme ao acessório.O interior é forrado e conta com divisões para cartões e documentos, unindo praticidade e estilo para o dia a dia.",
    media: [
      { type: "image", src: bag168 },
      { type: "image", src: bag138 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 40,
    name: "Carteira Média Lisa",
    price: "R$ 59,90",
    // description:
    //   "Carteira com design compacto, equipada com aba frontal e fecho de fivela decorativa. Confeccionada em material com textura levemente granulada, apresenta um visual elegante e moderno. Possui pingente de franjas (tassel) na lateral, que adiciona charme ao acessório.O interior é forrado e conta com divisões para cartões e documentos, unindo praticidade e estilo para o dia a dia.",
    media: [
      { type: "image", src: bag159 },
      { type: "image", src: bag160 },
      { type: "image", src: bag161 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 41,
    name: "Carteira Pequena",
    price: "R$ 59,90",
    // description:
    //   "Carteira com design compacto, equipada com aba frontal e fecho de fivela decorativa. Confeccionada em material com textura levemente granulada, apresenta um visual elegante e moderno. Possui pingente de franjas (tassel) na lateral, que adiciona charme ao acessório.O interior é forrado e conta com divisões para cartões e documentos, unindo praticidade e estilo para o dia a dia.",
    media: [
      { type: "image", src: bag162 },
      { type: "image", src: bag163 },
      { type: "image", src: bag164 },
      { type: "image", src: bag165 },
      { type: "image", src: bag166 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
];

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse na ${productName}`);
    window.open(`https://wa.me/5519998449681?text=${message}`, "_blank");
  };

  const toggleDescription = (productId: number) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Coleção</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças exclusivas que combinam qualidade premium com design sofisticado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {product.media.map((media, index) => (
                    <CarouselItem key={index}>
                      <div 
                        className="relative aspect-square cursor-pointer"
                        onClick={() => media.type === "image" && handleWhatsAppClick(product.name)}
                      >
                        {media.type === "image" ? (
                        <img 
                          src={media.src} 
                          alt={`${product.name} - imagem ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />) : (
                          <video
                          src={media.src}
                          className="w-full h-full object-cover"
                          controls
                          />
                        )}
                      </div>
                  
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-2xl font-bold text-luxury">{product.price}</p>
                </div>

                {/* Description Toggle */}
                <div>
                  <button
                    onClick={() => toggleDescription(product.id)}
                    className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-luxury transition-colors"
                  >
                    Ver Descrição
                    {expandedProduct === product.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedProduct === product.id && (
                    <div className="mt-3 text-sm text-muted-foreground animate-fade-in">
                      {product.description}
                    </div>
                  )}
                </div>

                {/* WhatsApp Button */}
                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={() => handleWhatsAppClick(product.name)}
                >
                  Compre Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
