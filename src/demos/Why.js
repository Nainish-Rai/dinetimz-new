import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import MainFeature from "components/features/TwoColWithButton.js";
import { benefitsArray, messProviderBenefitsArray } from "data.js";

import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ContainerScroll } from "components/custom/Container-Scroll-Animation";
import { HeroScrollDemo } from "components/custom/ContainerScroll";
import { HeroParallaxDemo } from "components/custom/HeroParallaxContainer";
import { WavyBackgroundDemo } from "components/custom/WavyBackgroundContainer";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "components/custom/TypeWriter";
import { TypewriterEffectSmoothDemo } from "components/custom/TypeWriterContainer";
import { WordPullUp } from "components/WordPullUp";
import MessBenefits from "components/hero/MessBenefits";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Discover Dine Decide <HighlightedText>DineTimz</HighlightedText>
          </>
        }
        description="At Dinetimz, we dream of a world where every meal feels like a new adventure. We want to break the routine of eating the same thing every day. Our goal is to bring people together through diverse and exciting flavors, making dining a fun and memorable experience for everyone. Imagine a future where every bite is a discovery, and variety is the spice of life"
        imageSrc="/benefits.svg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Subscribe Us"
        watchVideoButtonText="Explore"
      />

      {/* <HeroScrollDemo /> */}
      <div className="max-w-7xl flex flex-col items-center w-full mx-auto">
        {benefitsArray.map((benefit) => (
          <div>
            <WordPullUp words={benefit.title} />

            <p className="my-4 text-center font-medium text-lg max-w-5xl">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <MessBenefits />

      {/* <TypewriterEffectSmoothDemo /> */}
      {/* <HeroScrollDemo /> */}
      <div className="max-w-7xl flex flex-col items-center w-full mx-auto">
        {messProviderBenefitsArray.map((benefit) => (
          <div>
            <WordPullUp words={benefit.title} />

            <p className="my-4 text-center font-medium text-lg max-w-5xl">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      {/* <MainFeature
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Solutions
            <wbr /> <HighlightedText>We Developed</HighlightedText>
          </>
        }
        description={
          <Description>
            We have developed a DINETIMZ application that serves as an
            aggregator for mess facilities in the area. Through our application,
            students can subscribe and gain access to a network of associated
            messes. By simply scanning our preinstalled QR code, students are
            empowered to choose their meals from any participating mess. This
            solution not only provides them with the freedom to dine at various
            places but also eliminates the monotony of having the
            same meal every day.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={"/img3.jpg"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> */}
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}

      <MainFeature
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            The Vision <HighlightedText>We Dream</HighlightedText>
          </>
        }
        description={
          <Description>
            At Dinetimz, we dream of a world where every meal feels like a new
            adventure. We want to break the routine of eating the same thing
            every day. Our goal is to bring people together through diverse and
            exciting flavors, making dining a fun and memorable experience for
            everyone. Imagine a future where every bite is a discovery, and
            variety is the spice of life!"
          </Description>
        }
        // primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={false}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <DownloadApp
        text={
          <>
            Donwload the App and Connect with us on Whatsapp{" "}
            <HighlightedTextInverse>DineTimz App.</HighlightedTextInverse>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
