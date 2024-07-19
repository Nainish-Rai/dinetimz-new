import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import SingleCol from "components/faqs/SingleCol";
import SingleColFaq1 from "components/faqs/SingleColFaq1";
import SingleColFaq2 from "components/faqs/SingleColFaq2";

function FaqPage() {
  return (
    <AnimationRevealPage>
      <Header />
      <SingleColFaq1 />
      <SingleColFaq2 />

      <Footer />
    </AnimationRevealPage>
  );
}

export default FaqPage;
