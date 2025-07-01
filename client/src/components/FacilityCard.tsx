import React from 'react';
import { Facility } from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-interactive">
      <img 
        src={facility.image} 
        alt={`${facility.title} - ${facility.description}`}
        className="w-full h-48 object-cover rounded-xl mb-4"
        loading="lazy"
        decoding="async"
      />
      <div className="flex items-center mb-3">
        <div className={`w-12 h-12 ${facility.color} rounded-lg flex items-center justify-center mr-4`}>
          <i className={`${facility.icon} text-white`} aria-hidden="true"></i>
        </div>
        <h3 className="font-poppins font-semibold text-lg text-gray-900">{facility.title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
    </div>
  );
}
