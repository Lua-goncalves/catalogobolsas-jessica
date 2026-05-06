import { Banknote, CreditCard, Wallet, QrCode } from "lucide-react";

const methods = [
  { icon: Banknote, label: "Dinheiro" },
  { icon: CreditCard, label: "Crédito 3x sem juros" },
  { icon: Wallet, label: "Débito" },
  { icon: QrCode, label: "Pix" },
];

const Payments = () => {
  return (
    <section className="py-10 bg-sand/30 border-y border-luxury/10">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm md:text-base uppercase tracking-widest text-luxury mb-6">
          Formas de Pagamento
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {methods.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background shadow-sm border border-luxury/10"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-luxury" />
              <span className="text-xs md:text-sm font-medium text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payments;
