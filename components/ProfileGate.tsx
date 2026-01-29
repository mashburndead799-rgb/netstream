import React, { useState } from 'react';
import { PlusCircle, Upload, Link as LinkIcon, Check, Camera, Edit2, Trash2, X } from 'lucide-react';

export interface Profile {
  id: number;
  name: string;
  avatar: string;
  isKid?: boolean;
}

interface ProfileGateProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
  user?: any;
  onUpdateUser?: (user: any) => void;
}

const ProfileGate: React.FC<ProfileGateProps> = ({ profiles, onSelectProfile, user, onUpdateUser }) => {
  const [view, setView] = useState<'list' | 'manage' | 'edit' | 'create'>('list');
  
  // State for Editing/Creating
  const [editingProfileId, setEditingProfileId] = useState<number | null>(null);
  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isKid, setIsKid] = useState(false);
  const [imageMode, setImageMode] = useState<'url' | 'upload'>('upload');
  const [imageUrlInput, setImageUrlInput] = useState('');

  // Helpers
  const resetForm = () => {
      setProfileName('');
      setProfileImage('https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsTqh5S1vK33ms/AAAABVJm9l9iYgV1iT5lX7y5Wk_Iqf6X8t8k7wX7z8r8y9v9z_8.png?r=fcd');
      setIsKid(false);
      setEditingProfileId(null);
      setImageUrlInput('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
      if (imageUrlInput) setProfileImage(imageUrlInput);
  };

  const startCreate = () => {
      resetForm();
      setView('create');
  };

  const startEdit = (profile: Profile) => {
      setEditingProfileId(profile.id);
      setProfileName(profile.name);
      setProfileImage(profile.avatar);
      setIsKid(!!profile.isKid);
      setView('edit');
  };

  const handleSave = () => {
      if (!profileName || !user || !onUpdateUser) return;

      let updatedProfiles = [...profiles];

      if (view === 'create') {
          const newProfile: Profile = {
              id: Date.now(),
              name: profileName,
              avatar: profileImage,
              isKid: isKid
          };
          updatedProfiles.push(newProfile);
      } else if (view === 'edit' && editingProfileId) {
          updatedProfiles = updatedProfiles.map(p => 
              p.id === editingProfileId 
                  ? { ...p, name: profileName, avatar: profileImage, isKid: isKid } 
                  : p
          );
      }

      onUpdateUser({ ...user, profiles: updatedProfiles });
      setView('manage'); // Return to manage screen
      resetForm();
  };

  const handleDelete = () => {
      if (!editingProfileId || !user || !onUpdateUser) return;
      
      const updatedProfiles = profiles.filter(p => p.id !== editingProfileId);
      onUpdateUser({ ...user, profiles: updatedProfiles });
      
      // If no profiles left (shouldn't happen ideally but...), or just standard flow
      setView('manage');
      resetForm();
  };

  // --- RENDER: FORM (Edit or Create) ---
  if (view === 'create' || view === 'edit') {
      return (
        <div className="fixed inset-0 bg-[#141414] z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
            <div className="max-w-2xl w-full px-4">
                <h1 className="text-4xl md:text-5xl text-white font-medium mb-4">
                    {view === 'create' ? 'Ajouter un profil' : 'Modifier le profil'}
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8 border-t border-b border-[#333] py-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative group w-32 h-32 md:w-40 md:h-40">
                            <img src={profileImage} alt="Preview" className="w-full h-full rounded shadow-lg object-cover" />
                            <div className="absolute inset-0 bg-black/40 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer pointer-events-none">
                                <Camera className="text-white w-10 h-10" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <input 
                            type="text" 
                            placeholder="Nom" 
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="w-full bg-[#666] text-white placeholder-gray-300 px-4 py-3 rounded text-lg focus:outline-none focus:bg-[#555]"
                        />

                        {/* Image Source Selection */}
                        <div className="bg-[#222] p-4 rounded border border-[#333]">
                            <p className="text-gray-400 text-sm mb-3 font-semibold uppercase tracking-wide">Changer l'image</p>
                            <div className="flex gap-4 mb-4 border-b border-[#444]">
                                <button 
                                    onClick={() => setImageMode('upload')}
                                    className={`pb-2 text-sm font-medium ${imageMode === 'upload' ? 'text-white border-b-2 border-red-600' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Fichier Local
                                </button>
                                <button 
                                    onClick={() => setImageMode('url')}
                                    className={`pb-2 text-sm font-medium ${imageMode === 'url' ? 'text-white border-b-2 border-red-600' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Lien Internet
                                </button>
                            </div>

                            {imageMode === 'upload' ? (
                                <div className="relative">
                                    <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="flex items-center gap-3 bg-[#333] hover:bg-[#444] text-white px-4 py-2 rounded cursor-pointer transition">
                                        <Upload className="w-5 h-5" />
                                        <span>Choisir une image</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <input type="text" placeholder="https://..." value={imageUrlInput} onChange={(e) => setImageUrlInput(e.target.value)} className="flex-1 bg-[#333] text-white text-sm px-3 py-2 rounded focus:outline-none" />
                                    <button onClick={handleUrlSubmit} className="bg-white text-black px-3 py-2 rounded hover:bg-gray-200"><Check className="w-4 h-4" /></button>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsKid(!isKid)}>
                            <div className={`w-6 h-6 border border-[#666] flex items-center justify-center ${isKid ? 'bg-white' : ''}`}>
                                {isKid && <Check className="w-5 h-5 text-black" />}
                            </div>
                            <span className="text-white text-lg">Enfant ?</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    <button 
                        onClick={handleSave}
                        disabled={!profileName}
                        className={`px-8 py-2 font-bold text-lg uppercase tracking-wide transition ${!profileName ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}
                    >
                        Enregistrer
                    </button>
                    <button 
                        onClick={() => { setView('manage'); resetForm(); }}
                        className="px-8 py-2 border border-[#666] text-[#666] font-bold text-lg uppercase tracking-wide hover:border-white hover:text-white transition"
                    >
                        Annuler
                    </button>
                    {view === 'edit' && profiles.length > 1 && (
                        <button 
                            onClick={handleDelete}
                            className="px-8 py-2 border border-[#666] text-[#666] font-bold text-lg uppercase tracking-wide hover:border-red-600 hover:text-red-600 transition ml-auto"
                        >
                            Supprimer
                        </button>
                    )}
                </div>
            </div>
        </div>
      );
  }

  // --- RENDER: LIST / MANAGE ---
  return (
    <div className="fixed inset-0 bg-[#141414] z-50 flex flex-col items-center justify-center animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-5xl text-white font-medium mb-8 md:mb-12 tracking-wide text-center">
          {view === 'manage' ? 'Gérer les profils' : 'Qui est-ce ?'}
      </h1>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {profiles.map((profile) => (
          <div 
            key={profile.id} 
            className="group flex flex-col items-center cursor-pointer w-24 md:w-32 gap-2 relative"
            onClick={() => view === 'manage' ? startEdit(profile) : onSelectProfile(profile)}
          >
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden border-2 transition-all duration-200 relative ${view === 'manage' ? 'border-gray-500 opacity-80 hover:border-white hover:opacity-100' : 'border-transparent group-hover:border-white'}`}>
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
              
              {/* Overlay edit icon in manage mode */}
              {view === 'manage' && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Edit2 className="text-white w-8 h-8" />
                  </div>
              )}
            </div>
            <span className={`text-lg transition-colors duration-200 truncate max-w-full text-center ${view === 'manage' ? 'text-gray-400' : 'text-gray-500 group-hover:text-white'}`}>
              {profile.name}
            </span>
          </div>
        ))}
        
        {/* Ajouter un profil (Visible si < 5) */}
        {profiles.length < 5 && (
            <div 
                className="group flex flex-col items-center cursor-pointer w-24 md:w-32 gap-2"
                onClick={startCreate}
            >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-md flex items-center justify-center bg-transparent border-2 border-transparent group-hover:bg-white group-hover:border-white transition-all duration-200">
                <PlusCircle className="w-12 h-12 text-gray-500 group-hover:text-gray-800" />
            </div>
            <span className="text-gray-500 group-hover:text-white text-lg transition-colors duration-200">
                Ajouter
            </span>
            </div>
        )}
      </div>

      {view === 'manage' ? (
          <button 
            onClick={() => setView('list')}
            className="bg-white text-black font-bold px-8 py-2 text-lg uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors"
          >
            Terminé
          </button>
      ) : (
          <button 
            onClick={() => setView('manage')}
            className="border border-gray-500 text-gray-500 hover:text-white hover:border-white px-6 py-2 tracking-widest uppercase text-sm md:text-lg transition-all duration-200"
          >
            Gérer les profils
          </button>
      )}
    </div>
  );
};

export default ProfileGate;