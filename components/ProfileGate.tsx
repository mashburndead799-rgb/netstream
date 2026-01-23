import React from 'react';
import { PlusCircle } from 'lucide-react';

export interface Profile {
  id: number;
  name: string;
  avatar: string;
  isKid?: boolean;
}

interface ProfileGateProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
}

const ProfileGate: React.FC<ProfileGateProps> = ({ profiles, onSelectProfile }) => {
  return (
    <div className="fixed inset-0 bg-[#141414] z-50 flex flex-col items-center justify-center animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-5xl text-white font-medium mb-8 md:mb-12 tracking-wide text-center">Qui est-ce ?</h1>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {profiles.map((profile) => (
          <div 
            key={profile.id} 
            className="group flex flex-col items-center cursor-pointer w-24 md:w-32 gap-2"
            onClick={() => onSelectProfile(profile)}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-gray-500 group-hover:text-white text-lg transition-colors duration-200 truncate max-w-full text-center">
              {profile.name}
            </span>
          </div>
        ))}
        
        {/* Bouton Ajouter un profil (Visuel) */}
        <div className="group flex flex-col items-center cursor-pointer w-24 md:w-32 gap-2">
           <div className="w-24 h-24 md:w-32 md:h-32 rounded-md flex items-center justify-center bg-transparent border-2 border-transparent group-hover:bg-white group-hover:border-white transition-all duration-200">
              <PlusCircle className="w-12 h-12 text-gray-500 group-hover:text-gray-800" />
           </div>
           <span className="text-gray-500 group-hover:text-white text-lg transition-colors duration-200">
              Ajouter
           </span>
        </div>
      </div>

      <button className="border border-gray-500 text-gray-500 hover:text-white hover:border-white px-6 py-2 tracking-widest uppercase text-sm md:text-lg transition-all duration-200">
        Gérer les profils
      </button>
    </div>
  );
};

export default ProfileGate;