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
import bag52 from "@/images/bag-36.1.webp";
import bag53 from "@/images/bag-37.webp";

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
    name: "KIT BOLSA CROCO 🐊",
    oldPrice: "R$ 299,90",
    price: "R$ 229,00",
    description:
      "Combo exclusivo: bolsa em couro sintético de alta qualidade acompanhada de carteira em couro legítimo. Acabamento sofisticado, espaçosa e versátil para o dia a dia. Edição limitada — últimas unidades em queima de estoque.",
    images: [bag51, bag52, bag53],
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
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
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
