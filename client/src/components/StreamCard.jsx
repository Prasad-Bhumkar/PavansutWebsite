import React from 'react';

export default function StreamCard({ stream, icon }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 border-t-4 ${stream.borderColor}`}>
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${stream.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <i className={`${icon} ${stream.iconColor} text-2xl`} aria-hidden="true"></i>
        </div>
        <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{stream.title}</h3>
        <p className={`${stream.iconColor} font-medium`}>{stream.subtitle}</p>
      </div>
      <ul className="space-y-3 text-gray-600">
        {stream.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className={`fas fa-check-circle ${stream.checkColor} mr-3`} aria-hidden="true"></i>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500">Pre-Primary to Class 6</p>
      </div>
    </div>
  );
}
