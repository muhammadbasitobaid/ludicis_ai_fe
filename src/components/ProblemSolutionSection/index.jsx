import React from 'react'
import Container from '../common/Container'
import TwoSectionLayout from '../common/TwoSectionLayout'

const ProblemSolutionSection = () => {

    return (
        <div className='bg-white'>
            <Container >
                <TwoSectionLayout
                    heading="The Problem: Data Chaos"
                    listItems={[
                        "Valuable insights buried in mountains of unstructured data",
                        "Time wasted manually processing and extracting information",
                        "Inaccurate data leading to flawed decision-making",
                        "Digital transformation efforts stalling after basic document scanning",
                        "AI chatbots struggling with imprecise data retrieval"
                    ]}
                    imageSrc="/images/data_chaos.png"
                />

                <TwoSectionLayout
                    heading="The Solution: Lucidis.ai"
                    text={
 "<strong style='font-weight: 700; color: black;'>Lucidis.ai</strong> is the next-generation data cleaning and management solution that brings order to chaos. By harnessing the power of advanced AI and machine vision, we transform your complex documents into structured, searchable, and actionable data."
                    }
                    imageSrc="/images/solution.png"
                    reverse
                />
            </Container>
        </div>
    )

}

export default ProblemSolutionSection