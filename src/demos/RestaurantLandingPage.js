import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";

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
        imageSrc="/hero.webp"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Subscribe Us"
        watchVideoButtonText="Explore"
      />

      <HeroScrollDemo />
      <MainFeature
        subheading={<Subheading>Established Since 2024</Subheading>}
        heading={
          <>
            Problems
            <wbr /> <HighlightedText>We Solve</HighlightedText>
          </>
        }
        description={
          <Description>
            In cities like Indore, students from nearby towns often encounter a
            challenge with mess dining. They are required to pay in advance for
            a month-long mess subscription, limiting their options to a single
            dining place. As time passes, they become fatigued by the repetitive
            meals, longing for variety and flexibility in their dining choices
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={"/hero.jpg"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* <TypewriterEffectSmoothDemo /> */}
      <MainFeature
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
        textOnLeft={true}
        imageSrc={"/img3.jpg"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
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
        imageSrc="/img2.jpg"
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
