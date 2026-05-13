import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import collectionImage from "@/images/bag-1.1.webp";
import bag1 from "@/images/bag-1-.webp";
import bag45 from "@/images/bag-1-1.webp";
import bag79 from "@/images/bag-1-2.webp";
import bag60 from "@/images/bag-1-3.webp";
import bag2 from "@/images/bag-2.jpeg";
import bag3 from "@/images/bag-3.jpeg";
import bag4 from "@/images/bag-4.jpeg";
import bag5 from "@/images/bag-5.jpeg";
import bag61 from "@/images/bag-3.1.jpeg";
import bag62 from "@/images/bag-4.1.jpeg";
import bag176 from "@/images/bag-3.2.webp";
import bag177 from "@/images/bag-3.3.webp";
import bag178 from "@/images/bag-3.4.webp";
import bag179 from "@/images/bag-3.5.webp";
import bag180 from "@/images/bag-3.6.webp";
import bag181 from "@/images/bag-3.7.webp";
import bag182 from "@/images/bag-3.8.webp";
import bag183 from "@/images/bag-3.9.webp";
import bag184 from "@/images/bag-3.10.webp";
import bag185 from "@/images/bag-3.11.webp";
import bag6 from "@/images/bag-6.webp";
import bag63 from "@/images/bag-6.1.webp";
import bag7 from "@/images/bag-6.2.webp";
import bag8 from "@/images/bag-6.3.webp";
import bag9 from "@/images/bag-9.jpeg";
import bag246 from "@/images/bag-9.1.webp";
import bag10 from "@/images/bag-10.jpeg";
import bag64 from "@/images/bag-10.1.jpeg";
import bag11 from "@/images/bag-11.jpeg";
import bag12 from "@/images/bag-12.webp";
import bag13 from "@/images/bag-12.1.webp";
import bag14 from "@/images/bag-12.2.webp";
import bag15 from "@/images/bag-12.3.webp";
import bag16 from "@/images/bag-16.webp";
import bag17 from "@/images/bag-16.1.webp";
import bag18 from "@/images/bag-18.jpeg";
import bag65 from "@/images/bag-18.1.jpeg";
import bag19 from "@/images/bag-19.jpeg";
import bag20 from "@/images/bag-20.jpeg";
import bag66 from "@/images/bag-20.1.jpeg";
import bag21 from "@/images/bag-22.webp";
import bag22 from "@/images/bag-22.1.webp";
import bag50 from "@/images/bag-22.2.webp";
import bag23 from "@/images/bag-23.jpeg";
import bag24 from "@/images/bag-24.webp";
import bag25 from "@/images/bag-24.1.webp";
import bag26 from "@/images/bag-26.webp";
import bag217 from "@/images/bag-26.1.webp";
import bag218 from "@/images/bag-26.2.webp";
import bag219 from "@/images/bag-26.3.webp";
import bag27 from "@/images/bag-27.webp";
import bag28 from "@/images/bag-27.1.webp";
import bag215 from "@/images/bag-27.2.webp";
import bag29 from "@/images/bag-29.jpeg";
import bag67 from "@/images/bag-29.1.jpeg";
import bag30 from "@/images/bag-30.jpeg";
import bag31 from "@/images/bag-57.webp";
import bag59 from "@/images/bag-57.1.webp";
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
import bag36 from "@/images/bag-36-.webp";
import bag68 from "@/images/bag-36-1.webp";
import bag37 from "@/images/bag-36-2.webp";
import bag38 from "@/images/bag-38.jpeg";
import bag69 from "@/images/bag-38.1.jpeg";
import bag39 from "@/images/bag-39.jpeg";
import bag40 from "@/images/bag-40.jpeg";
import bag41 from "@/images/bag-41.webp";
import bag70 from "@/images/bag-41.1.webp";
import bag42 from "@/images/bag-41.2.webp";
import bag43 from "@/images/bag-43.webp";
import bag44 from "@/images/bag-43.1.webp";
import bag71 from "@/images/bag-43.2.webp";
import bag75 from "@/images/bag-43.3.webp";
import bag46 from "@/images/bag-46.webp";
import bag47 from "@/images/bag-47-.webp";
import bag72 from "@/images/bag-47-1.webp";
import bag48 from "@/images/bag-47-2.webp";
import bag49 from "@/images/bag-47-3.webp";
import bag52 from "@/images/bag-50.webp";
import bag53 from "@/images/bag-50.1.webp";
import bag73 from "@/images/bag-50.2.webp";
import bag74 from "@/images/bag-50.3.webp";
import bag54 from "@/images/bag-52.webp";
import bag55 from "@/images/bag-52.1.webp";
import bag76 from "@/images/bag-52.2.webp";
import bag56 from "@/images/bag-54.webp";
import bag57 from "@/images/bag-54.1.webp";
import bag58 from "@/images/bag-54.2.webp";
import bag77 from "@/images/bag-54.3.webp";
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
import bag172 from "@/images/bag-64.4.webp";
import bag173 from "@/images/bag-64.5.webp";
import bag174 from "@/images/bag-64.6.webp";
import bag175 from "@/images/bag-64.7.webp";
import bag122 from "@/images/bag-65.webp";
import bag123 from "@/images/bag-65.1.webp";
import bag124 from "@/images/bag-65.2.webp";
import bag125 from "@/images/bag-65.3.webp";
import bag127 from "@/images/bag-66.webp";
import bag128 from "@/images/bag-66.1.webp";
import bag129 from "@/images/bag-66.2.webp";
import bag130 from "@/images/bag-66.3.webp";
import bag131 from "@/images/bag-67.webp";
import bag132 from "@/images/bag-67.1.webp";
import bag133 from "@/images/bag-67.2.webp";
import bag162 from "@/images/bag-67.3.webp";
import bag163 from "@/images/bag-67.4.webp";
import bag164 from "@/images/bag-67.5.webp";
import bag165 from "@/images/bag-67.6.webp";
import bag166 from "@/images/bag-67.7.webp";
import bag169 from "@/images/bag-67.8.webp";
import bag170 from "@/images/bag-67.9.webp";
import bag206 from "@/images/bag-67.10.webp";
import bag207 from "@/images/bag-67.11.webp";
import bag208 from "@/images/bag-67.12.webp";
import bag209 from "@/images/bag-67.13.webp";
import bag205 from "@/images/bag-67.14.webp";
import bag134 from "@/images/bag-68.webp";
import bag135 from "@/images/bag-68.1.webp";
import bag136 from "@/images/bag-68.2.webp";
import bag137 from "@/images/bag-68.3.webp";
import bag159 from "@/images/bag-68.4.webp";
import bag160 from "@/images/bag-68.5.webp";
import bag161 from "@/images/bag-68.6.webp";
import bag167 from "@/images/bag-68.7.webp";
import bag226 from "@/images/bag-68.8.webp";
import bag227 from "@/images/bag-68.9.webp";
import bag211 from "@/images/bag-68.10.webp";
import bag202 from "@/images/bag-68.12.webp";
import bag203 from "@/images/bag-68.11.webp";
import bag245 from "@/images/bag-68.13.webp";
import bag168 from "@/images/bag-69.webp";
import bag138 from "@/images/bag-69.1.webp";
import bag204 from "@/images/bag-83.4.webp";
import bag78 from "@/images/bag-83.6.webp";
import bag244 from "@/images/bag-83.5.webp";
import bag139 from "@/images/bag-70.webp";
import bag126 from "@/images/bag-70.1.webp";
import bag189 from "@/images/bag-70.2.webp";
import bag190 from "@/images/bag-70.3.webp";
import bag140 from "@/images/bag-21.webp";
import bag141 from "@/images/bag-21.1.webp";
import bag142 from "@/images/bag-21.2.webp";
import bag51 from "@/images/bag-49.webp";
import bag220 from "@/images/bag-49.1.webp";
import bag212 from "@/images/bag-49.2.webp";
import bag143 from "@/images/bag-49.3.webp";
import bag144 from "@/images/bag-62.2.webp";  
import bag146 from "@/images/bag-71.webp";
import bag147 from "@/images/bag-71.1.webp";
import bag148 from "@/images/bag-71.2.webp";
import bag149 from "@/images/bag-71.3.webp";
import bag150 from "@/images/bag-71.4.webp";
import bag151 from "@/images/bag-55.webp";
import bag171 from "@/images/bag-55.1.webp";
import bag210 from "@/images/bag-55.2.webp";
import bag152 from "@/images/bag-72.1.webp";
import bag153 from "@/images/bag-72.2.webp";
import bag154 from "@/images/bag-72.3.webp";
import bag155 from "@/images/bag-72.4.webp";
import bag156 from "@/images/bag-72.5.webp";
import bag157 from "@/images/bag-72.6.webp";
import bag158 from "@/images/bag-72.7.webp";
import bag186 from "@/images/bag-75.webp";
import bag187 from "@/images/bag-75.1.webp";
import bag188 from "@/images/bag-75.2.webp";
import bag191 from "@/images/bag-79.webp";
import bag192 from "@/images/bag-79.1.webp";
import bag193 from "@/images/bag-79.2.webp";
import bag194 from "@/images/bag-79.3.webp";
import bag195 from "@/images/bag-76.webp";
import bag196 from "@/images/bag-76.1.webp";
import bag197 from "@/images/bag-76.2.webp";
import bag198 from "@/images/bag-76.3.webp";
import bag199 from "@/images/bag-77.webp";
import bag200 from "@/images/bag-77.1.webp";
import bag201 from "@/images/bag-77.2.webp";
import bag213 from "@/images/bag-83.webp";
import bag214 from "@/images/bag-83.1.webp";
import bag216 from "@/images/bag-83.2.webp";
import bag221 from "@/images/bag-82.webp";
import bag222 from "@/images/bag-82.1.webp";
import bag223 from "@/images/bag-82.2.webp";
import bag224 from "@/images/bag-82.3.webp";
import bag225 from "@/images/bag-82.4.webp";
import bag228 from "@/images/bag-7.webp";
import bag229 from "@/images/bag-7.1.webp";
import bag230 from "@/images/bag-7.2.webp";
import bag231 from "@/images/bag-7.3.webp";
import bag232 from "@/images/bag-8.webp";
import bag233 from "@/images/bag-8.1.webp";
import bag234 from "@/images/bag-8.2.webp";
import bag235 from "@/images/bag-8.3.webp";
import bag236 from "@/images/bag-13.webp";
import bag237 from "@/images/bag-13.1.webp";
import bag238 from "@/images/bag-13.2.webp";
import bag239 from "@/images/bag-13.3.webp";
import bag240 from "@/images/bag-14.webp";
import bag241 from "@/images/bag-14.1.webp";
import bag242 from "@/images/bag-14.2.webp";
import bag243 from "@/images/bag-14.3.webp";


import { fromTheme } from "tailwind-merge";

const products = [
  {
    id: 32,
    name: "Bolsa Baú Preta- Luce Douce",
    price: "R$ 99,00",
    description:
      " Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.🖤 ",
    media: [
      { type: "image", src: bag122 },
      { type: "image", src: bag123 },
      { type: "image", src: bag124 },
      { type: "image", src: bag125 },
      // { type: "video", src: "/videos/opt-bag-65.mp4" },
    ],
  },

  {
    id: 33,
    name: "Bolsa Baú Caramelo Luce Douce",
    price: "R$ 99,00",
    description:
      " Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.🧡",
    media: [
      { type: "image", src: bag127 },
      { type: "image", src: bag130 },
      { type: "image", src: bag128 },
      { type: "image", src: bag129 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 37,
    name: "Bolsa Baú Vinho",
    price: "R$ 99,00",
    description:
      "Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.💜",
    media: [
      { type: "image", src: bag139 },
      { type: "image", src: bag126 },
      { type: "image", src: bag189 },
      { type: "image", src: bag190 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 21,
    name: "Bolsa Baú",
    price: "R$ 99,00",
    description:
      " Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.🤎",
    media: [
      { type: "image", src: bag47 },
      { type: "image", src: bag72 },
      { type: "image", src: bag49 },
      { type: "image", src: bag48 },
     { type: "video", src: "/videos/opt-bag-9.1.mp4" },
    ],
  },

  {
    id: 18,
    name: "Bolsa Baú",
    price: "R$ 99,00",
    description:
      "Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.",
    media: [
      { type: "image", src: bag36 },
      { type: "image", src: bag68 },
      { type: "image", src: bag37 },
      // { type: "video", src: "/videos/opt-bag18.1.mp4" },
    ],
  },
  {
    id: 1,
    name: "Bolsa Baú",
    price: "R$ 99,00",
    description:
      "Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e ate",
    media: [
      { type: "image", src: bag45 },
      { type: "image", src: bag1 },
      { type: "image", src: bag79 },
      { type: "image", src: bag60 },
      // { type: "video", src: "/videos/opt-bag-1.1.mp4" },
    ],
  },
  {
    id: 5,
    name: "Bolsa Baú",
    price: "R$ 99,00",
    description:
      " Bolsa em couro sintético modelo baú (handbag) da marca Luce Douce, caracterizada por seu design funcional, possui formato estruturado estilo baú com compartimento principal espaçoso e bolsos externos funcionais. O modelo é frequentemente acompanhado por um lenço decorativo amarrado à alça, adicionando um toque moderno e personalizado. Apresenta alças de mão fixas e acompanha uma alça transversal removível e ajustável, permitindo o uso tanto no ombro quanto na mão.Detalhes: Acabamento com ferragens em metal dourado, incluindo zíperes e detalhes das alças, que conferem um visual elegante e atemporal.🤎",
    media: [
      { type: "image", src: bag12 },
      { type: "image", src: bag13 },
      { type: "image", src: bag14 },
      { type: "image", src: bag15 },
      // { type: "video", src: "/videos/opt-bag5.1.mp4" },
      // { type: "video", src: "/videos/opt-bag5.2.mp4" },
      // { type: "video", src: "/videos/opt-bag5.mp4" },
    ],
  },
  {
    id: 2,
    name: "Bolsa Scrunchie",
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
      { type: "image", src: bag176 },
      { type: "image", src: bag177 },
      { type: "image", src: bag178 },
      { type: "image", src: bag179 },

      // { type: "image", src: bag181 },
      // { type: "image", src: bag184 },
      // { type: "image", src: bag185 },
      // { type: "image", src: bag182 },
      // { type: "image", src: bag180 },
      // { type: "image", src: bag183 },
      { type: "video", src: "/videos/opt-bag2.2.mp4" },
      { type: "video", src: "/videos/opt-bag-9.3.mp4" },
    ],
  },
  {
    id: 3,
    name: " PROMOÇÃO-Bolsa Baú + CARTEIRA  EM COURO LEGÍTIMO ",
    price: "R$ 135,00",
    walletPrice: "59,90",
    description:
      "Bolsa formato Baú (Bowling Bag) bege com alça de mão Scrunchie. O grande diferencial é a alça curta com efeito franzido ou trançado, que traz uma tendência de moda atual e conforto ao carregar. Acompanha alça transversal longa removível e ajustável, permitindo o uso a tiracolo ou cruzada.Carteira com design minimalista que segue a mesma cor e material da bolsa para um visual conjunto (matching set). Tamanho compacto ideal para cartões, documentos e notas, com fecho de aba e botão de pressão.Esse conjunto é ideal para ocasiões casuais ou eventos sociais que pedem um acessório com estética moderna e sofisticada.",
    media: [
      { type: "image", src: bag6 },
      { type: "image", src: bag63 },
      { type: "image", src: bag7 },
      { type: "image", src: bag8 },
    ],
  },
  {
    id: 42,
    name: "PROMOÇÃO- Bolsa Baú + Carteira Croco em Couro Legítimo",
    price: "R$ 135,00",
    walletPrice: "59,90",
    description:
      " Bolsa formato Baú (Bowling Bag) preta com alça de mão Scrunchie. O grande diferencial é a alça curta com efeito franzido ou trançado, que traz uma tendência de moda atual e conforto ao carregar. Acompanha alça transversal longa removível e ajustável, permitindo o uso a tiracolo ou cruzada no corpo para maior praticidade.SOBRE O KIT:Dica de Estilo:Essa combinação é ideal para um visual Urban Chic. Você pode usar esse kit comu um conjunto de alfaiataria (blazer e calça) para um ar profissional. Jeans de lavagem escura e uma camisa branca para um evento casual elegante.Vestidos fluidos, onde a estrutura da bolsa ajuda a equilibrar a leveza da roupa.🖤 ",
    media: [
      { type: "image", src: bag186 },
      { type: "image", src: bag187 },
      { type: "image", src: bag188 },
     { type: "video", src: "/videos/opt-bag-9.mp4" },
    ],
  },

  {
    id: 100,
    name: "Bolsa Baú Preta + Carteira",
    walletPrice: "59,90",
    price: "R$ 99,90",
    description:
      "Bolsa pequena em couro sintético estruturada com acabamento clássico e sofisticado, ideal para ambientes corporativos ou eventos casuais elegantes. Acompanha alça de mão personalizada com um lenço removível estampado, que adiciona um toque moderno e feminino ao acessório. Confeccionada em material sintético (PU) com textura que imita o couro granulado, oferecendo durabilidade e um toque macio. Possui fechamento principal por zíper, repartição únic, acompanha uma alça transversal ajustável para diferentes formas de uso.Carteira Feminina:Modelo compacto e retangular, seguindo a mesma textura e cor da bolsa para formar um conjunto harmonioso. Aba frontal com botão de pressão interno, garantindo segurança aos itens pessoais",
    media: [
      { type: "image", src: bag231 },
      { type: "image", src: bag228 },
      { type: "image", src: bag229 },
      { type: "image", src: bag230 },
       { type: "video", src: "/videos/opt-bag-9.2.mp4" },
    ],
  },

  {
    id: 101,
    name: "Bolsa Tote + Carteira",
    walletPrice: "59,90",
    price: "R$ 149,90",
    description:
      "Bolsa em couro sintético modelo clássico e elegante do tipo Tote ou Castelo, com estrutura rígida que mantém o formato.Material: Confeccionada em material sintético de alta qualidade (courino).Detalhes: Possui ferragens douradas nos encaixes das alças e um detalhe metálico superior que confere um toque de sofisticação.Alças: Conta com alça de mão dupla fixa e, geralmente, acompanha uma alça transversal removível e ajustável para maior versatilidade.Espaço Interno: Amplo compartimento principal, ideal para carregar itens essenciais do dia a dia, como celular, maquiagem e documentos.Carteira: modelo retangular tipo envelope ou clutch que combina perfeitamente com a cor e o material da bolsa.Funcionalidade: Design compacto com fechamento seguro de imã, e detalhes frontais que harmonizam com o visual do kit.Este conjunto é ideal para ocasiões que pedem um visual mais formal ou profissional. ",
    media: [
      { type: "image", src: bag232 },
      { type: "image", src: bag233 },
      { type: "image", src: bag234 },
      { type: "image", src: bag235 },
      // { type: "video", src: "/videos/opt-bag-1.1.mp4" },
    ],
  },
  {
    id: 102,
    name: "Bolsa + Carteira",
    walletPrice: "59,90",
    price: "R$ 149,90",
    description:
      " Conjunto de bolsa e carteira preto, couro sintético, da marca Chica Fiore, apresenta um design clássico e estruturado, ideal para uso executivo ou ocasiões formais.A bolsa principal possui um formato de tote estruturada, com as seguintes características comuns a modelos similares da marca: Confeccionada em poliuretano (couro tecnológico), o que oferece resistência e facilidade de limpeza.Alças: Possui alças de mão fixas e frequentemente acompanha uma alça transversal removível e ajustável para maior versatilidade.Interior: Forrada com tecido personalizado, contando com divisórias internas e bolsos com zíper para organização de itens como celulares e documentos. Acompanha porta-moedas removível.Características da CarteiraA carteira que acompanha o conjunto segue o estilo clutch.Pode ser usada como carteira de mão ou adaptada com uma alça de pulso removível com compartimentos internos para cartões, cédulas e, em alguns modelos, um porta-moedas integrado.",
    media: [
      { type: "image", src: bag236 },
      { type: "image", src: bag237 },
      { type: "image", src: bag238 },
      { type: "image", src: bag239 },
      // { type: "video", src: "/videos/opt-bag-1.1.mp4" },
    ],
  },
  {
    id: 103,
    name: "Bolsa+ Carteira",
    walletPrice: "59,90",
    price: "149,90",
    description:
      " Conjunto de bolsa e carteira marrom, couro sintético, da marca Chica Fiore, apresenta um design clássico e estruturado, ideal para uso executivo ou ocasiões formais.A bolsa principal possui um formato de tote estruturada, com as seguintes características comuns a modelos similares da marca:Confeccionada em poliuretano (couro tecnológico), o que oferece resistência e facilidade de limpeza.Alças: Possui alças de mão fixas e frequentemente acompanha uma alça transversal removível e ajustável para maior versatilidade.Interior: Forrada com tecido personalizado, contando com divisórias internas e bolsos com zíper para organização de itens como celulares e documentos.Características da CarteiraA carteira que acompanha o conjunto segue o estilo clutch.Pode ser usada como carteira de mão ou adaptada com uma alça de pulso removível com compartimentos internos para cartões, cédulas e, em alguns modelos, um porta-moedas integrado.",
    media: [
      { type: "image", src: bag240 },
      { type: "image", src: bag241 },
      { type: "image", src: bag242 },
      { type: "image", src: bag243 },
      // { type: "video", src: "/videos/opt-bag-1.1.mp4" },
    ],
  },

  {
    id: 13,
    name: "Bolsa Tote Média Preta",
    price: "R$ 125,00",
    description:
      "Bolsa média Tote ou executiva em couro sintético. O acabamento externo possui uma textura em relevo (frequentemente chamada de mini tressê ou lezard), que confere um toque sofisticado. Formato retangular rígido, ideal para ocasiões casuais ou profissionais.",
    media: [
      { type: "image", src: bag26 },
      { type: "image", src: bag217 },
      { type: "image", src: bag218 },
      { type: "image", src: bag219 },

      // { type: "video", src: "/videos/opt-bag13.1.mp4" },
    ],
  },
  {
    id: 54,
    name: "Bolsa Tote Média",
    price: "R$ 159,00 ",
    description:
      "Bolsa Tote média, couro sintético, modelo executivo clássico, com um design estruturado e elegante.  Possui alças duplas fixas para ser carregada na mão ou no ombro. Acompanha uma alça transversal removível e regulável para maior praticidade.",
    media: [
      { type: "image", src: bag212 },
      { type: "image", src: bag220 },
      { type: "image", src: bag143 },
      { type: "image", src: bag51 },
      // { type: "video", src: "" },
    ],
  },
  {
    id: 23,
    name: "Bolsa Tote Média",
    price: "R$ 149,90",
    description:
      " Bolsa Tote média couro sintético, com design estruturado e clássico, sendo um modelo versátil para o uso diário ou eventos sociais. Possui alças duplas fixas para ser carregada na mão ou no ombro. Acompanhauma alça transversal removível e regulável para maior praticidade. ",
    media: [
      { type: "image", src: bag46 },
      { type: "video", src: "/videos/opt-bag-9.5.mp4" },
    ],
  },
  {
    id: 16,
    name: "Bolsa Tote Média",
    price: "R$ 149,90",
    description:
      " Bolsa Tote média couro sintético, com design estruturado e clássico, sendo um modelo versátil para o uso diário ou eventos sociais. Possui alças duplas fixas para ser carregada na mão ou no ombro. Acompanhauma alça transversal removível e regulável para maior praticidade.",
    media: [
      { type: "image", src: bag31 },
      { type: "image", src: bag59 },

      { type: "video", src: "/videos/opt-bag-9.4.mp4" },
    ],
  },
  {
    id: 22,
    name: "Bolsa Tote Média",
    price: "R$ 149,90",
    description:
      "Bolsa Tote média couro sintético, com design estruturado e clássico, sendo um modelo versátil para o uso diário ou eventos sociais. Possui alças duplas fixas para ser carregada na mão ou no ombro. Acompanha uma alça transversal removível e regulável para maior praticidade.",
    media: [
      { type: "image", src: bag43 },
      { type: "image", src: bag71 },
      { type: "image", src: bag44 },
      { type: "image", src: bag75 },
      // { type: "video", src: "/videos/opt-bag21.1.mp4" },
    ],
  },
  {
    id: 8,
    name: "Bolsa Tote Média",
    price: "R$ 159,00",
    description:
      "Bolsa Tote média, com design clássico e funcional.  Possui formato trapezoidal com base plana, o que permite que a bolsa fique em pé sozinha quando apoiada.Acabamento Estruturado: Fabricada em material sintético de alta qualidade, conferindo durabilidade e um aspecto rígido e elegante.Inclui alças de mão fixas e uma alça transversal removível e ajustável para uso no ombro, oferecendo maior liberdade de movimento.Estilo Casual Chic: É ideal para ambientes de trabalho ou eventos sociais, combinando facilmente com diferentes visuais, desde o jeans até roupas mais formais.",
    media: [
      { type: "image", src: bag50 },
      { type: "image", src: bag22 },
      { type: "image", src: bag21 },
      //{ type: "video", src: "/videos/opt-bag-8.1.mp4" },
    ],
  },
  {
    id: 10,
    name: "Bolsa Tote Média Marrom",
    price: "R$ 125,00",
    description:
      " Bolsa média Tote ou executiva em couro sintético. O acabamento externo possui uma textura em relevo (frequentemente chamada de mini tressê ou lezard), que confere um toque sofisticado. Formato retangular rígido, ideal para ocasiões casuais ou profissionais. ",
    media: [
      { type: "image", src: bag142 },
      { type: "image", src: bag140 },
      { type: "image", src: bag141 },

      // { type: "video", src: "/videos/opt-bag22.mp4" },
    ],
  },
  {
    id: 55,
    name: "Bolsa Transversal",
    price: "R$ 79,90 ",
    description:
      "Bolsa transversal pequena, couro sintético com alça ajustável.",
    media: [
      { type: "image", src: bag216 },
      { type: "image", src: bag213 },
      { type: "image", src: bag214 },
      { type: "image", src: bag204 },

      // { type: "video", src: "" },
    ],
  },
  {
    id: 14,
    name: "Bolsa Transversal",
    price: "R$ 79,90",
    description:
      "Bolsa transversal pequena, couro sintético com alça ajustável. ",
    media: [
      { type: "image", src: bag27 },
      { type: "image", src: bag28 },
      { type: "image", src: bag215 },
      { type: "image", src: bag78 },

      // { type: "video", src: "/videos/opt-bag14.1.mp4" },
    ],
  },
  {
    id: 20,
    name: "Bolsa Transversal",
    price: "R$ 79,90",
    description:
      "Bolsa transversal pequena, couro sintético com alça ajustável.",
    media: [
      { type: "image", src: bag41 },
      { type: "image", src: bag42 },
      { type: "image", src: bag70 },
      { type: "image", src: bag244 },

      // { type: "video", src: "" },
    ],
  },

  {
    id: 26,
    name: "Bolsa Pequena- Couro Legítimo",
    price: "R$ 149,00",
    description:
      " BOLSA PEQUENA EM COURO LEGÍTIMO, modelo shoulder bag (bolsa de ombro) ou tiracolo,  unissex, valorizada por sua praticidade e design atemporal.Material confeccionado em couro bovino legítimo com acabamento macio. Interior com forro. Possui um formato retangular compacto, ideal para transportar itens essenciais como carteira, celular e chaves. Acompanha uma alça transversal ajustável, permitindo liberdade de movimento. ",
    media: [
      { type: "image", src: bag56 },
      { type: "image", src: bag57 },
      { type: "image", src: bag58 },
      { type: "image", src: bag77 },
      // { type: "video", src: "/videos/bag-8.1.mp4" },
    ],
  },

  {
    id: 39,
    name: "Promoção- Bolsa Transversal",
    price: "R$ 89,90",
    description:
      "Bolsa transversal pequena e estruturada de cor prata metálica.",
    media: [
      { type: "image", src: bag171 },
      { type: "image", src: bag151 },
      { type: "image", src: bag210 },

      { type: "video", src: "/videos/opt-bag-39.mp4" },
    ],
  },

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
    id: 49,
    name: "Bolsa Hobo Média – Azul Marinho",
    price: "R$ 120,00",
    description:
      "Bolsa hobo média, também conhecida como bolsa de ombro, na cor azul marinho. Possui formato flexível em meia-lua e alça única, garantindo conforto para o uso diário. Modelo atemporal, com acabamento soft, que permite que a bolsa se curve e se ajuste naturalmente ao corpo.Design e Funcionalidade:•Design minimalista e elegante•	Fecho em zíper para maior segurança	•	Detalhes metálicos dourados nas junções da alça•	Interior espaçoso, ideal para carregar itens essenciaisMaterial de Alta Qualidade:Confeccionada em material sintético PU (Poliuretano) premium, resistente, flexível e de fácil limpeza, não racha nem descasca com facilidade.",
    media: [
      { type: "image", src: bag199 },
      { type: "image", src: bag200 },
      { type: "image", src: bag201 },

      // { type: "video", src: "" },
    ],
  },

  {
    id: 31,
    name: "Bolsa Transversal Crossbody",
    price: "R$ 90,00",
    description:
      "Bolsa pequena em couro sintético, na cor caramelo, com design moderno e muito funcional. Destaca-se pela alça de fita larga ajustável, que garante conforto e versatilidade no uso, podendo ser utilizada como transversal ou de ombro.Possui múltiplos compartimentos com zíperes dourados, geralmente três bolsos frontais — ideais para organizar itens essenciais como celular, carteira e documentos. Em alguns modelos, acompanha chaveiro de ursinho, que adiciona um toque charmoso e descontraído ao acessório. Disponível na cor caramelo e caqui",
    media: [
      { type: "image", src: bag118 },
      { type: "image", src: bag119 },
      { type: "image", src: bag120 },
      { type: "image", src: bag121 },
      { type: "image", src: bag172 },
      { type: "image", src: bag173 },
      { type: "image", src: bag175 },
      { type: "image", src: bag174 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  //
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
      //{ type: "image", src: bag246 },
      { type: "video", src: "/videos/opt-bag4.1.mp4" },
      { type: "video", src: "/videos/opt-bag4.mp4" },
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
      //{ type: "video", src: "/videos/opt-bag62.mp4" },
      //{ type: "video", src: "/videos/opt-bag62.1.mp4" },
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
    id: 11,
    name: "Bolsa de Mão Média Marrom",
    price: "R$ 140,00",
    description:
      "Bolsa de formato baú, com design moderno e elegante. Possui alça de mão trançada e alça transversal ajustável, ambas na cor marrom, oferecendo estilo e praticidade para o dia a dia.",
    media: [
      { type: "image", src: bag23 },
      { type: "video", src: "/videos/opt-bag-11.mp4" },
      { type: "video", src: "/videos/opt-bag-11.1.mp4" },
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
    id: 48,
    name: "Bolsa Tote Média Chica Fiore – Creme",
    price: "R$ 140,00 ",
    description:
      "Bolsa tote média em poliuretano (PU), na cor creme/bege, da marca Chica Fiore. Possui design clássico e estruturado, sendo espaçosa, prática e versátil — ideal para o dia a dia, trabalho ou estudos.Detalhes da Bolsa:•	Marca: Chica Fiore•	Modelo: Tote (bolsa de mão/ombro)•	Material: Poliuretano (PU)•	Cor: Creme/Bege•	Alças: Dupla de mão/ombro + alça transversal removível e ajustável•	Acompanha: Pequena carteira/porta-objetos destacávelFuncional e elegante, é perfeita para quem busca organização e estilo em um único acessório.",
    media: [
      { type: "image", src: bag195 },
      { type: "image", src: bag196 },
      { type: "image", src: bag197 },
      { type: "image", src: bag198 },

      { type: "video", src: "/videos/opt-bag-76.mp4" },
    ],
  },
  {
    id: 6,
    name: "Mochila Marrom Média",
    price: "R$ 149,00",
    description:
      "Mochila marrom média, possui um acabamento em material sintético com textura granulada (estilo pebble) e detalhes metálicos em dourado.Funcionalidade: O modelo conta com um compartimento principal espaçoso e bolsos frontais com fechamento em zíper, ideais para organizar itens de rápido acesso.",
    media: [
      { type: "image", src: bag16 },
      { type: "image", src: bag17 },
      // { type: "video", src: "/videos/opt-bag6.1.mp4" },
    ],
  },
  {
    id: 12,
    name: "Mochila Bege Média",
    price: "R$ 149,00",
    description:
      " Mochila bege média, possui um acabamento em material sintético com textura granulada (estilo pebble) e detalhes metálicos em dourado.Funcionalidade: O modelo conta com um compartimento principal espaçoso e bolsos frontais com fechamento em zíper, ideais para organizar itens de rápido acesso.",
    media: [
      { type: "image", src: bag24 },
      { type: "image", src: bag25 },
      // { type: "video", src: "/videos/opt-bag12.1.mp4" },
    ],
  },

  {
    id: 36,
    name: "Carteira de Mão Artesanal Couro Legítimo",
    price: "R$ 105,00",
    description:
      "Carteira de mão artesanal EM COURO LEGÍTIMO com design funcional e estilo rústico elegante.  Confeccionada inteiramente em couro legítimo, o que garante durabilidade e resistência superiores.",
    media: [
      { type: "image", src: bag168 },
      { type: "image", src: bag138 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 24,
    name: "Carteira em Couro Legítimo BABY BLUE UNISSEX ",
    price: "R$ 99,00",
    description:
      "Confeccionada em couro bovino legítimo com textura levemente granulada (floater), o que garante durabilidade e toque macio.",
    media: [
      { type: "image", src: bag73 },
      { type: "image", src: bag74 },
      { type: "image", src: bag52 },
      { type: "image", src: bag53 },

      // { type: "video", src: "/videos/bag-8.1.mp4" },
    ],
  },
  // {
  //   id: 25,
  //   name: "Carteira em Couro Legítimo",
  //   price: "R$ 105,00",
  //   description:
  //     "CARTEIRA EM COURO LEGÍTIMO apresenta um acabamento clássico em textura croco (que imita a pele de crocodilo), sendo um acessório versátil que pode ser utilizado tanto como carteira quanto como bolsa de mão ou clutch.",
  //   media: [
  //     { type: "image", src: bag54 },
  //     { type: "image", src: bag55 },
  //     { type: "image", src: bag76 },

  //     // { type: "video", src: "/videos/bag-8.1.mp4" },
  //   ],
  // },
  {
    id: 40,
    name: "Promoção- Carteiras femininas variadas",
    price: "R$ 59,90",
    description:
      "Carteiras confeccionadas em couro sintético (poliuretano/P.U.) de alta qualidade.",
    media: [
      { type: "image", src: bag134 },
      { type: "image", src: bag135 },
      { type: "image", src: bag136 },
      { type: "image", src: bag137 },
      { type: "image", src: bag159 },
      { type: "image", src: bag160 },
      { type: "image", src: bag161 },
      { type: "image", src: bag167 },
      { type: "image", src: bag245 },
      { type: "image", src: bag226 },
      { type: "image", src: bag227 },
      { type: "image", src: bag211 },
      { type: "image", src: bag202 },
      { type: "image", src: bag203 },

      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },
  {
    id: 34,
    name: "Promoção- Carteiras femininas variadas Chica Fiore",
    price: "R$ 59,90",
    description:
      " Carteiras da marca Chica Fiore são confeccionada em couro sintético (poliuretano/P.U.) de alta qualidade. ",
    media: [
      { type: "image", src: bag131 },
      { type: "image", src: bag132 },
      { type: "image", src: bag133 },
      { type: "image", src: bag162 },
      { type: "image", src: bag163 },
      { type: "image", src: bag164 },
      { type: "image", src: bag165 },
      { type: "image", src: bag166 },
      { type: "image", src: bag169 },
      { type: "image", src: bag170 },
      { type: "image", src: bag206 },
      { type: "image", src: bag207 },
      { type: "image", src: bag208 },
      { type: "image", src: bag209 },
      { type: "image", src: bag205 },
      // { type: "video", src: "/videos/bag2.2.mp4" },
    ],
  },

  {
    id: 60,
    name: "Mala de Mão Viagem/Esportiva",
    price: "R$ 99,00",
    description:
      "Mala de mão com design elegante na cor rosa, versátil e funcional. Ideal para academia, viagens curtas (inclusive como mala de bordo) ou para o uso diário.Características:•	Amplo espaço interno, com compartimentos internos e externos com zíper para melhor organização;•	Alça de mão fixa para transporte prático;•	Alça transversal removível e ajustável, proporcionando conforto e versatilidade no uso;•	Modelo leve e funcional, ideal para diferentes rotinas.",
    media: [
      { type: "image", src: bag221 },
      { type: "image", src: bag222 },
      { type: "image", src: bag223 },
      { type: "image", src: bag224 },
      { type: "image", src: bag225 },

      // { type: "video", src: "" },
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
    id: 47,
    name: "Mala de Mão, Courino",
    price: "R$ 89,90",
    // description:
    //   "Bolsa tiracolo de estilo clássico e versátil, ideal para uso durante o dia ou à noite. Confeccionada em couro sintético, possui fecho em metal e alça de corrente preta que adiciona um toque moderno e elegante.Disponível nas cores branco, bege, caramelo e creme.",
    media: [
      { type: "image", src: bag193 },
      { type: "image", src: bag191 },
      { type: "image", src: bag192 },
      { type: "image", src: bag194 },

      // { type: "video", src: "" },
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
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Coleção</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças exclusivas que combinam qualidade premium com design
            sofisticado
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-3xl transform rotate-1"></div>
          <img
            src={collectionImage}
            alt="Coleção exclusiva de bolsas femininas"
            loading="lazy"
            decoding="async"
            className="relative rounded-3xl shadow-2xl w-full  h-auto object-contain"
          />
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
                        onClick={() =>
                          media.type === "image" &&
                          handleWhatsAppClick(product.name)
                        }
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt={`${product.name} - imagem ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        ) : (
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
                  {(product as any).walletPrice ? (
                    <div className="space-y-1">
                      <p className="text-xl font-bold text-luxury">
                        Bolsa: {product.price}
                      </p>
                      <p className="text-base font-semibold text-foreground/80">
                        Carteira: {(product as any).walletPrice}
                      </p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-luxury">
                      {product.price}
                    </p>
                  )}
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
