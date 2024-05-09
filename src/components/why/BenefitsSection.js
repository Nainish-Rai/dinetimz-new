import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Increased dining options",
      description:
        "Our application provides students with a wide range of mess providers to choose from, giving them access to a variety of dining options. They can explore different cuisines, menus, and meal plans, expanding their choices beyond a single mess provider.",
      illustration: "placeholder-image-dining-options.svg", // Add your image path
    },
    // ... Add your remaining benefits with illustration placeholders
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Benefits to Students
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md relative
                       hover:bg-white transition-colors duration-300
                       animate-fade-in"
          >
            {/* Illustration: position absolute for overlay */}
            <img
              src={benefit.illustration}
              alt={benefit.title}
              className="absolute top-4 right-4 opacity-50"
            />

            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
