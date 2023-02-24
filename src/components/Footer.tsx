import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full  text-white py-8">
      <div className="container mx-auto">
        <p className="text-center text-xl digitacao">
          Desenvolvido por{" "}
          <a
            className="hover:text-orange-500"
            href="https://github.com/GabrielSilva2012/"
          >
            Gabriel Henrique
            </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;