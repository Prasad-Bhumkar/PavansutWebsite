import React from 'react';

export default function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
      <img 
        src={faculty.image} 
        alt={`${faculty.name} - ${faculty.title}`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        loading="lazy"
      />
      <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-1">{faculty.name}</h3>
      <p className="text-school-primary font-medium mb-2">{faculty.title}</p>
      <p className="text-sm text-gray-600 mb-4">{faculty.bio}</p>
      <div className="flex justify-center flex-wrap gap-2">
        {(faculty.specialization || []).map((spec, index) => (
          <span 
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
}
