import React from "react";

const Technologies = () => {
  return (
    <>
      <section id='Technologies' className="container mx-auto text-black my-16 xs:px-4 md:px-16">
        <div className="w-fit">
          <h1 className="section-title font-bold mb-16 text-2xl">
            Technologies & providers{" "}
          </h1>
        </div>
        <div className="grid grid-cols-3  place-items-center pb-4">
          {/* <div className="col-start-2 col-span-4"> */}
          <img src="/images/microsoft-azure-2 1.svg" />
          <img src="/images/512px-Amazon_Web_Services_Logo 1.svg" />
          <img src="/images/google_cloud-ar21 1.svg" />
        </div>
        <div className="grid grid-cols-6 place-items-center">
          <img src="/images/kubernetes-ar21 1.svg" />
          <img src="/images/03-dark-blue-docker-logo 1.svg" />
          <img src="/images/jenkins-ar21 1.svg" />
          <img src="/images/gitlab-ar21 1.svg" />
          <img src="/images/Group.svg" />
          <img src="/images/ansible-ar21 1.svg" />
        </div>
      </section>
    </>
  );
};

export default Technologies;
