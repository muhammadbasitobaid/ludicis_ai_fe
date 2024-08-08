import React from 'react';
import BigCell from './BigCell';
import Heading from '../Heading';
import Button from '../Button';
import SmallCell from './SmallCell';

const GridSystem = () => {
  return (
    <div className="grid grid-cols-custom gap-0 w-full">
      <div className="border-l border-b border-r border-t border-slate"></div>
      <div className="col-span-3 border-b border-r border-t border-slate">
        <BigCell>
          <Button variant="secondary">Why Lucidis.ai?</Button>
          <Heading variant="md" level={1} className='text-primary p-8 max-w-[40%] text-center'>The Edge We Provide</Heading>
        </BigCell>
      </div>
      <div className="border-r border-b border-t border-slate"></div>
      <div className="border-l border-r border-b border-slate"></div>
      
      {/* Row */}
      <div className="border-r border-b border-slate">
        <SmallCell heading="High Availability" text="Save countless hours of manual data processing" />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Accuracy" text="Increase accuracy and reliability of data-driven decisions" />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="AI/ML" text="Enhance the effectiveness of AI and machine learning projects" />
      </div>
      <div className="border-r border-b border-slate"></div>

      {/* Row */}
      <div className="border-l border-r border-b border-slate"></div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Efficiency" text="Improve overall operational efficiency" />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Digital Transformation" text="Accelerate digital transformation initiatives" />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Data Science" text="Improve data science capabilities" />
      </div>
      <div className="border-r border-b border-slate"></div>

      {/* Row */}
      <div className="border-l border-b border-r border-slate"></div>
      <div className="col-span-3 border-b border-r border-slate">
        <BigCell>
          <Button variant="secondary">Lucidis.ai key Features?</Button>
          <Heading variant="md" level={1} className='text-primary p-8 max-w-[40%] text-center'>Key Features</Heading>
        </BigCell>
      </div>
      <div className="border-r border-b border-slate"></div>
      
      {/* Row */}
      <div className="border-l border-r border-b border-slate"></div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Multi-Format Data Extraction" list={[
          "Process PDFs, Excel files, Word documents, video, and audio",
          "Advanced OCR for next-gen text recognition",
          "Accurate transcription of audio and video content"
        ]} />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="AI-Powered Data Cleanup" list={[
          "Handle 'dirty data' with ease",
          "Extrapolate key insights automatically",
          "Transform unstructured data into structured formats"
        ]} />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Intelligent Document Monitoring" list={[
          "Seamless integration with cloud storage solutions",
          "Automated processing using customizable templates",
          "Real-time data extraction and conversion"
        ]} />
      </div>
      <div className="border-r border-b border-slate"></div>

      {/* Row */}
      <div className="border-l border-r border-b border-slate"></div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Enhanced Data Accessibility" list={[
          "Convert extracted data to JSON for universal compatibility",
          "Improve searchability and analyzability of your information",
          "Support for Retrieval Augmented Generation (RAG) implementations"
        ]} />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Advanced Template System" list={[
          "Create custom templates for recurring document types",
          "Automate extraction of key values and data points",
          "Ensure consistency across large volumes of documents"
        ]} />
      </div>
      <div className="border-r border-b border-slate">
        <SmallCell heading="Enhanced Data Accessibility" list={[
          "Convert extracted data to JSON for universal compatibility",
          "Improve searchability and analyzability of your information",
          "Support for Retrieval Augmented Generation (RAG) implementations"
        ]} />
      </div>
      <div className="border-r border-b border-slate"></div>
    </div>
  );
};

export default GridSystem;
