import productDesktop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cartIcon from "./assets/images/icon-cart.svg";
import "./App.css";

function App() {
  return (
    <main className="flex max-w-2xl mx-4 my-8 md:mx-auto flex-col md:flex-row bg-white rounded-2xl min-h-10 overflow-hidden">
      <section className="object-center">
        <img
          className="hidden md:block object-cover"
          src={productDesktop}
          alt="perfume desktop"
        />
        <img
          className="block md:hidden object-cover"
          src={productMobile}
          alt="perfurm mobile"
        />
      </section>
      <section className="flex flex-col justify-between p-6 md:p-8 gap-4 md:gap-0 md:w-10/12">
        <header className="flex flex-col gap-2 md:gap-4">
          <span className="text-dark-grayish-blue uppercase tracking-[.5em] text-xs">
            Perfume
          </span>
          <h1 className="font-fraunces text-3xl md:text-4xl text-very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>
        </header>
        <p className="text-dark-grayish-blue mb-2 md:mb-0">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <section className="flex justify-start items-center gap-6">
          <span className="font-fraunces text-3xl text-dark-cyan">$149.99</span>
          <span className="text-dark-grayish-blue line-through">$169.99</span>
        </section>
        <button className="bg-dark-cyan rounded-lg flex justify-center items-center gap-4 text-white p-4 font-semibold">
          <img src={cartIcon} alt="cart icon" />
          Add to Cart
        </button>
      </section>
    </main>
  );
}

export default App;
