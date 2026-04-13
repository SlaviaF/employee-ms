import React from 'react'

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Icon */}
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${color} text-3xl text-white`}>
        {icon}
      </div>

      {/* Text content */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">{text}</p>
        <p className="text-xl font-semibold text-gray-800">{number}</p>
      </div>

    </div>
  )
}

export default SummaryCard