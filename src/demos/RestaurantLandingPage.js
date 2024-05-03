import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import BackgroundAsImageWithCenteredContent from "components/hero/BackgroundAsImageWithCenteredContent";
import Vision from "components/custom/Vision";
import { HeroParallax } from "components/custom/HeroParallax";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      {/* <Hero
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
      /> */}
      <HeroParallax />
      <br />
      <br />

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
        imageSrc={"/img2.jpg"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
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
        textOnLeft={false}
        imageSrc={"/img3.jpg"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
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

      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
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
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
