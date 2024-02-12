import React from "react";

const CourseContent = () => {
  return (
    <section className="container mx-auto flex-col space-y-4 text-black py-12">
      <h2 className="sm:text-3xl text-xl font-semibold">Course Content</h2>
      <div>
        <ul className="sm:text-lg text-md list-disc ml-5">
          <li className="mb-2">
           <span className="font-semibold">Foundations of DevOps:</span>  Fostering collaborative mindset development
            through core principles and practices.
          </li>
          <li className="mb-2">
          <span className="font-semibold">Automation with Ansible:</span> Streamlining operations through efficient
            configuration management and the automation of routine tasks.
          </li>
          <li className="mb-2">
          <span className="font-semibold">Infrastructure as Code (IaC) with Terraform:</span> Implementing
            version-controlled infrastructure for the systematic building and
            management of infrastructure through code.
          </li>
          <li className="mb-2">
          <span className="font-semibold"> CI/CD Pipelines:</span> Enhancing development efficiency by implementing
            robust Continuous Integration and Continuous Deployment, thereby
            streamlining development workflows.
          </li>
          <li className="mb-2">
          <span className="font-semibold">Microservices Architecture:</span> Enabling seamless integration of design
            principles and implementation through the containerization of
            microservices using Docker.
          </li>
          <li className="mb-2">
          <span className="font-semibold">Container Orchestration with Kubernetes:</span> Efficiently orchestrating
            and automating the management and scaling of containerized
            applications.
          </li>
          <li className="mb-2">
          <span className="font-semibold">Advanced DevOps Practices:</span> Applying real-world advanced DevOps
            concepts, including monitoring strategies for gaining insights and
            facilitating rapid scaling.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CourseContent;
