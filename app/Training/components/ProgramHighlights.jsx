import React from 'react'

const ProgramHighlights = () => {
  return (
    <section className="container mx-auto flex-col space-y-4 text-black py-12">
    <h2 className="sm:text-3xl text-xl font-semibold">Program Highlights</h2>
    <div>
      <ul className="sm:text-lg text-md list-disc ml-5">
        <li className="mb-2">
        Hands-On Labs: Immerse yourself in real-world projects and scenarios.
        </li>
        <li className="mb-2">
        Expert Instructors: Learn from seasoned DevOps practitioners, sharing insights from the tech trenches.
        </li>
        <li className="mb-2">
        Continuous Skill Enhancement: Stay connected even after the program ends. Access resources and updates to stay ahead.
        </li>
      </ul>
    </div>
  </section>
  )
}

export default ProgramHighlights