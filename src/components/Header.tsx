import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Produtos", id: "produtos" },
    { label: "Diferenciais", id: "diferenciais" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed p-8 top-0 left-0 right-0 z-50 bg-background/95 bg-gradient-to-r backdrop-blur-sm border-b border-border shadow-sm">
      <div className=" ">
        <div className="flex items-center justify-between h-12">
          {/* Logo Space */}
          <div className="flex items-center ml-0">
            <div className="w-40 h-20 bg-gradient-to-r rounded flex  justify-center">
              <img className="h-[90px] w-auto mr-3" src="/logo.jpeg" alt="" />
            <p className=" flex whitespace-nowrap mt-8 text-lg text-gray-800 font-light ">Lua Bolsas</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-luxury transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg text-foreground hover:text-luxury transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
