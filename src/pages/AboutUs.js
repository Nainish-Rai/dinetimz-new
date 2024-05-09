import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        heading="We are Dinetimz."
        buttonRounded={false}
        description="Introducing Dinetimz, where culinary innovation meets a passion for diverse dining experiences. Founded by Idrees, a final student pursuing his Chartered Accountancy with a unique blend of technological prowess and business acumen, and Taher, a seasoned tax practitioner and business consultant. Both hailing from Indore, these visionary founders recognized the challenges students face with monotonous meals and embarked on a mission to transform dining routines. Dinetimz is not merely an aggregator of local mess vendors and tiffin services; it is a commitment to breaking the monotony by offering a dynamic platform where subscribers can enjoy a variety of flavors. Our founders' dedication, coupled with the vibrant culinary community they've built, ensures that every meal is not just a necessity but a delightful exploration of tastes. Join us in revolutionizing the way students experience dining – where diversity, quality, and innovation converge to create the Dinetimz differenc"
        // primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We at DineTimz aim to break the routine of eating the same thing every day."
        buttonRounded={false}
        // primaryButtonText="Contact Us"
        description="At Dinetimz, we dream of a world where every meal feels like a new adventure. We want to break the routine of eating the same thing every day. Our goal is to bring people together through diverse and exciting flavors, making dining a fun and memorable experience for everyone. Imagine a future where every bite is a discovery, and variety is the spice of life!"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Our Values are as follows:"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Customer Support to Students and their families. We are always here for you.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Our team is made up of dedicated and skilled individuals. We are always here for you.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "We are always here for you. Customer Satisfaction is our top priority.",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  );
};
