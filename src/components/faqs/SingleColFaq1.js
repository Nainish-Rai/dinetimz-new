import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  subheading = "FAQS",
  heading = "FAQs for mess providers",
  description = "And we have got answers to all of them.",
  faqs = [
    {
      question: "1. How can my mess or hostel partner with Dinetimz?",
      answer:
        "To partner with Dinetimz, you can reach out to our team through the 'Partner with Us' section on our website or contact us directly. We will guide you through the onboarding process.",
    },
    {
      question:
        "2. What are the benefits of joining Dinetimz as a mess provider?",
      answer:
        "By partnering with Dinetimz, you can expand your customer base and reach a wider audience of students. You'll also benefit from increased visibility and marketing support.",
    },
    {
      question:
        "3. How does Dinetimz handle payments and subscriptions for mess providers?",
      answer:
        "Dinetimz manages all payments and subscriptions on behalf of mess providers. We ensure timely disbursement of subscription fees to your mess or hostel.",
    },
    {
      question:
        "4. Can I customize the menu and pricing for my mess on Dinetimz?",
      answer:
        "Yes, you have the flexibility to customize your menu offerings, BUT pricing on our platform will remain constant as decided by us. We provide tools for you to update your menu as needed.",
    },
    {
      question:
        "5. What kind of support does Dinetimz offer to mess providers?",
      answer:
        "Dinetimz offers ongoing support to ensure a seamless experience. Our team is available to assist with any technical issues, and we provide marketing support to boost your visibility.",
    },
    {
      question:
        "6. How does Dinetimz handle customer reviews and feedback for messes?",
      answer:
        "Dinetimz collects customer reviews and feedback for messes through the app. We encourage students to rate and provide feedback on their dining experiences, which can help you improve your services.",
    },
    {
      question:
        "7. What responsibilities do I have as a partner mess provider?",
      answer:
        "As a partner mess provider, you are responsible for maintaining the quality and hygiene of your food offerings. You should also ensure timely order fulfillment and provide excellent customer service.",
    },
    {
      question: "8. Is there a fee for mess providers to join Dinetimz?",
      answer:
        "Dinetimz may charge a nominal onboarding fee to cover the cost of integration and support. This fee can vary based on your specific requirements.",
    },
    {
      question:
        "9. How can I update my mess's profile and menu on the Dinetimz app?",
      answer:
        "You can easily update your mess's profile and menu through your Dinetimz partner account. Our team will provide you with access and instructions.",
    },
    {
      question:
        "10. Can I offer special promotions or discounts for Dinetimz users?",
      answer:
        "Yes, you have the flexibility to create special promotions or discounts for Dinetimz users. This can be a great way to attract more students to your mess.",
    },
    {
      question:
        "11. How can I track the performance and popularity of my mess on Dinetimz?",
      answer:
        "Dinetimz provides you with access to analytics and reporting tools that allow you to track the performance and popularity of your mess on the platform. You can monitor order volumes, customer reviews, and other key metrics.",
    },
    {
      question:
        "12. What happens if a student has an issue with their order at my mess?",
      answer:
        "In case a student encounters any issues with their order, they can contact Dinetimz customer support, who will connect with you to resolve the problem promptly.",
    },
    {
      question: "13. How to delete account?",
      answer: "Delete account option is in the profile page.",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
