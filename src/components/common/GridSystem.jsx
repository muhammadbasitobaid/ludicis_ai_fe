import React from 'react';

const GridSystem = () => {
  return (
    <div className="grid grid-cols-custom gap-0 w-full h-screen">
      <div className="border-l border-b border-r border-gray-400">1</div>
      <div className="col-span-3 border-b border-r border-gray-400">2</div>
      <div className="border-r border-b border-gray-400">3</div>
      <div className="border-l border-r border-b border-gray-400">4</div>
      <div className="border-r border-b border-gray-400">5</div>
      <div className="border-r border-b border-gray-400">6</div>
      <div className="border-r border-b border-gray-400">7</div>
      <div className="border-r border-b border-gray-400">8</div>
      <div className="border-r border-gray-400">9</div>
      <div className="border-r border-gray-400">10</div>
      <div className="border-r border-gray-400">11</div>
      <div className="border-r border-gray-400">12</div>
      <div className="border-r border-gray-400">13</div>
    </div>
  );
};

export default GridSystem;
