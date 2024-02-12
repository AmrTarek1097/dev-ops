import React from "react";

const Architecture = () => {
  return (
    <section className="container mx-auto flex-col space-y-4 text-black py-12">
      <h2 className="sm:text-3xl text-xl font-semibold">Architecture</h2>
      <p className="sm:text-lg text-md font-normal leading-8">
        The architecture revolves around a serverless design where AWS Lambda
        functions handle specific tasks, triggered by events such as data
        updates or user requests. Data is stored in Amazon DynamoDB, ensuring
        rapid access and scalability. S3 buckets store and manage large-scale
        data sets. The architecture is designed to seamlessly scale with demand,
        promoting optimal performance and reliability.
      </p>
    </section>
  );
};

export default Architecture;
