import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, ChevronUp, Flame } from "lucide-react";
import { useState } from "react";
import bag1 from "@/images/bag-47.webp";
import bag2 from "@/images/bag-47.1.webp";
import bag3 from "@/images/bag-47.2.jpeg";
import bag4 from "@/images/bag-47.3.jpeg";
import bag5 from "@/images/bag-48.webp";
import bag6 from "@/images/bag-48.1.webp";
import bag7 from "@/images/bag-48.2.jpeg";
import bag51 from "@/images/bag-36.webp";
import bag8 from "@/images/bag-76.webp";
import bag9 from "@/images/bag-76.1.webp";
import bag10 from "@/images/bag-78.webp";
import bag11 from "@/images/bag-78.1.webp";
import bag12 from "@/images/bag-78.2.webp";
import bag13 from "@/images/bag-9.webp";
import bag14 from "@/images/bag-9.1.webp";
import bag15 from "@/images/bag-9.2.webp";
import bag16 from "@/images/bag-10.webp";
import bag17 from "@/images/bag-10.1.webp";
import bag18 from "@/images/bag-10.2.webp";
import bag19 from "@/images/bag-11.webp";
import bag20 from "@/images/bag-11.1.webp";
import bag21 from "@/images/bag-11.2.webp";
import bag22 from "@/images/bag-11.3.webp";
//import bag52 from "@/images/bag-36.1.webp";
import bag53 from "@/images/bag-37.webp";
const bag5Video = "/public/videos/opt-bag-9.6.mp4";

const saleProducts = [
  {
    id: "sale-3",
    name: "KIT BOLSA SATCHEL",
    oldPrice: "R$ 299,90",
    price: "R$ 199,00",
    description:
      "Conjunto premium com bolsa em couro sintético resistente e carteira em couro legítimo. Design atemporal, perfeito para presentear ou renovar seu visual. Promoção válida enquanto durarem os estoques.",
    images: [bag5, bag6, bag7],
  },
  {
    id: "sale-1",
    name: "Bolsa em Couro Sintético- Estilo Croco + Nécessaire ",
    oldPrice: "R$ 150,00",
    price: "R$ 99,00",
    description:
      "Combo exclusivo: bolsa em couro sintético de alta qualidade acompanhada de nécessaire. Acabamento sofisticado, espaçosa e versátil para o dia a dia. Edição limitada — últimas unidades em queima de estoque.",
    images: [bag51, bag53],
    video: bag5Video,
  },
  {
    id: "sale-2",
    name: "Kit baby blue 💙",
    oldPrice: "R$ 299,90",
    price: "R$ 199,00",
    description:
      "Conjunto premium com bolsa em couro sintético resistente e carteira em couro legítimo. Design atemporal, perfeito para presentear ou renovar seu visual. Promoção válida enquanto durarem os estoques.",
    images: [bag1, bag2, bag3, bag4],
  },

  {
    id: "sale-4",
    name: "Bolsa Tote Pequena",
    oldPrice: "R$ 150,90",
    price: "R$ 99,00",
    description:
      "Bolsa Tote pequena, acessório atemporal que combina facilmente com diversos estilos, do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões. ",
    images: [bag8, bag9],
  },
  {
    id: "sale-5",
    name: "Bolsa Tote Média",
    oldPrice: "R$ 180,00",
    price: "R$ 129,00",
    description:
      "Bolsa Tote média, acessório atemporal que combina facilmente com diversos estilos, do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões",
    images: [bag10, bag11, bag12],
  },
  {
    id: "sale-6",
    name: "Bolsa Tote Pequena",
    oldPrice: "R$ 150,90",
    price: "R$ 99,00",
    description:
      " Bolsa Tote pequena, acessório atemporal que combina facilmente com diversos estilos, do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões. ",
    images: [bag13, bag14, bag15],
  },

  {
    id: "sale-7",
    name: "BOLSA TOTE PEQUENA E MÉDIA  🧡🖤",
    price: " P R$ 99,00 - M R$ 129,00",

    images: [ bag17, bag18],
  },
  {
    id: "sale-9",
    name: "BOLSA TOTE GRANDE, MÉDIA E PEQUENA 🧡🖤",
    price: " P R$ 99,00 - M R$ 129,00 -  G R$ 149,00",

    images: [bag16,],
  },
  {
    id: "sale-8",
    name: "BOLSA TOTE MÉDIA, BASE FIRME 🖤",
    oldPrice: "R$ 180,00",
    price: "R$ 139,90",
    // description:
    //   " Bolsa Tote pequena, acessório atemporal que combina facilmente com diversos estilos, do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões. ",
    images: [bag20, bag21, bag22],
  },
];

const SaleSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse na promoção de QUEIMA DE ESTOQUE: ${productName}`,
    );
    window.open(
      "https://wa.me/5519998449681?text=Olá! Gostaria de mais informações sobre as bolsas",
      "_blank",
    );
  };

  return (
    <section
      id="queima-estoque"
      className="py-16 md:py-24 bg-gradient-to-b from-sand/40 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury/10 text-luxury text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
            <Flame className="w-4 h-4" />
            Oferta Imperdível
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-luxury">
            QUEIMA DE ESTOQUE
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
            BOLSA EM COURO SINTÉTICO + CARTEIRA EM COURO LEGÍTIMO
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {saleProducts.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden border-2 border-luxury/30 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-up bg-card relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div
                        className="relative aspect-square cursor-pointer"
                        onClick={() => handleWhatsAppClick(product.name)}
                      >
                        <img
                          src={image}
                          alt={`${product.name} - imagem ${imgIndex + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  {product.video && (
                    <CarouselItem>
                      <div
                        className="relative aspect-square cursor-pointer bg-black"
                        onClick={() => handleWhatsAppClick(product.name)}
                      >
                        <video
                          src={product.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="none"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  )}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              <div className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                    <span className="text-2xl font-bold text-luxury">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() =>
                      setExpanded(expanded === product.id ? null : product.id)
                    }
                    className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-luxury transition-colors"
                  >
                    Ver Descrição
                    {expanded === product.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {expanded === product.id && (
                    <div className="mt-3 text-sm text-muted-foreground animate-fade-in">
                      {product.description}
                    </div>
                  )}
                </div>

                <Button
                  variant="luxury"
                  className="w-full animate-pulse-soft"
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

export default SaleSection;
