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
  heading = "FAQs for students ",
  description = "And we have got answers to all of them.",
  faqs = [
    {
      question: "1. How do I sign up for Dinetimz?",
      answer:
        "You can sign up for Dinetimz by downloading our mobile app from the App Store or Google Play Store. Follow the registration process to create your account.",
    },
    {
      question: "2. Can I switch between messes during the month?",
      answer:
        "Yes, one of the benefits of Dinetimz is the flexibility to switch between participating messes as often as you like during the subscription period.",
    },
    {
      question: "3. How do I place orders using Dinetimz?",
      answer:
        "Ordering is easy. Simply open the app, select your desired mess and place your order. Once you have taken a subscription, you now just have to scan the QR code of any mess to order your meal.",
    },
    {
      question: "4. What happens if I have dietary preferences or allergies?",
      answer:
        "You can specify your dietary preferences and allergies in your Dinetimz profile. The app will help you find messes that cater to your needs.",
    },
    {
      question:
        "5. What if I have issues with my order or need customer support?",
      answer:
        "Dinetimz provides customer support through the app. If you have any issues with your order or need assistance, you can contact our support team via chat or email.",
    },
    {
      question:
        "6. Are there any restrictions on the number of times I can dine out using Dinetimz in a day?",
      answer:
        "There are no restrictions on the number of times you can dine out in a day using Dinetimz. You have the freedom to enjoy meals at participating messes as per your subscription.",
    },
    {
      question:
        "7. Can I cancel my Dinetimz subscription anytime, and will I get a refund?",
      answer:
        "You can cancel your Dinetimz subscription at any time. However, please note that subscription fees are non-refundable. Your cancellation will be effective from the next billing cycle.",
    },
    {
      question:
        "8. What should I do if a mess I want to dine at is not listed on Dinetimz?",
      answer:
        "If a specific mess you prefer is not listed on Dinetimz, you can suggest it to us through the app. We'll make efforts to onboard additional messes based on student preferences.",
    },
    {
      question:
        "9. How is my personal information and payment data secured on Dinetimz?",
      answer:
        "Dinetimz employs robust security measures to protect your personal information and payment data. We use encryption technologies to ensure the safety of your sensitive information.",
    },
    {
      question:
        "10. Can I use Dinetimz to order food for takeaway or delivery?",
      answer:
        "Currently, Dinetimz is designed for dine-in experiences at participating messes. Takeaway and delivery options may be introduced in the future.",
    },
    {
      question:
        "11. How can I track my subscription and billing details on Dinetimz?",
      answer:
        "You can easily access your subscription and billing details through the Dinetimz app. Your subscription status, payment history, and billing information can all be found in your user account.",
    },
    {
      question:
        "12. Are there any penalties for switching between messes frequently?",
      answer:
        "Dinetimz encourages flexibility and variety in dining choices. There are no penalties for switching between messes as often as you like within your subscription period.",
    },
    {
      question:
        "13. What should I do if I have specific dietary restrictions or preferences?",
      answer:
        "Dinetimz allows you to specify your dietary restrictions and preferences in your profile. We will recommend messes that align with your dietary needs.",
    },
    {
      question: "14. Can I refer Dinetimz to my friends and earn rewards?",
      answer:
        "Yes, Dinetimz may offer a referral program that allows you to refer friends and earn rewards or discounts for successful referrals. Check the app or website for details on ongoing promotions.",
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
