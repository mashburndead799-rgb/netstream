import React, { useState } from 'react';

interface LoginProps {
  onLogin: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle entre Login et Inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Pour l'inscription
  const [error, setError] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Récupération de la "base de données" locale
    let accounts = JSON.parse(localStorage.getItem('netstream_accounts') || '[]');

    // --- CRÉATION DU COMPTE PAR DÉFAUT (Si inexistant) ---
    const defaultEmail = "yoonicornu@gmail.com";
    const defaultUser = {
        id: "admin-master",
        name: "Yoonicornu",
        email: defaultEmail,
        password: "Y2502@ooni",
        profiles: [
          { 
            id: 1, 
            name: 'Yoonicornu', 
            avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsTqh5S1vK33ms/AAAABVJm9l9iYgV1iT5lX7y5Wk_Iqf6X8t8k7wX7z8r8y9v9z_8.png?r=fcd",
            isKid: false 
          },
          { 
            id: 2, 
            name: 'Enfants', 
            avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovFWzk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS2JBFZ440jXsvgUN6ls5iY9hI_13oM1rdD1ZJqg6VwITeWj-n-yW962c_v7CK5WkC.png?r=fcd", 
            isKid: true 
          }
        ]
    };

    // Vérifie si le compte admin existe, sinon on l'injecte
    if (!accounts.some((u: any) => u.email === defaultEmail)) {
        accounts.push(defaultUser);
        localStorage.setItem('netstream_accounts', JSON.stringify(accounts));
    }


    if (isSignUp) {
      // --- LOGIQUE D'INSCRIPTION ---
      
      // 1. Vérifier si l'email existe déjà
      const existingUser = accounts.find((u: any) => u.email === email);
      if (existingUser) {
        setError("Cet email est déjà utilisé. Essayez de vous connecter.");
        return;
      }

      // 2. Création du nouvel utilisateur
      const newUser = {
        id: Date.now().toString(),
        name: name || email.split('@')[0],
        email: email,
        password: password, 
        profiles: [
          { 
            id: 1, 
            name: name || 'Moi', 
            avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsTqh5S1vK33ms/AAAABVJm9l9iYgV1iT5lX7y5Wk_Iqf6X8t8k7wX7z8r8y9v9z_8.png?r=fcd",
            isKid: false 
          },
          { 
            id: 2, 
            name: 'Enfants', 
            avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovFWzk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS2JBFZ440jXsvgUN6ls5iY9hI_13oM1rdD1ZJqg6VwITeWj-n-yW962c_v7CK5WkC.png?r=fcd", 
            isKid: true 
          }
        ]
      };

      // 3. Sauvegarde AUTOMATIQUE dans le localStorage
      // Cela garantit que les identifiants sont stockés immédiatement
      accounts.push(newUser);
      try {
          localStorage.setItem('netstream_accounts', JSON.stringify(accounts));
          console.log("Compte créé et sauvegardé avec succès.");
      } catch (e) {
          setError("Erreur lors de la sauvegarde du compte. Espace insuffisant ?");
          return;
      }
      
      // 4. Connexion automatique après inscription
      onLogin(newUser);

    } else {
      // --- LOGIQUE DE CONNEXION ---
      // On recharge les comptes depuis le localStorage pour être sûr d'avoir la version la plus récente
      const freshAccounts = JSON.parse(localStorage.getItem('netstream_accounts') || '[]');
      const user = freshAccounts.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        onLogin(user);
      } else {
        setError("Email ou mot de passe incorrect.");
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="relative h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Logo */}
      <div className="absolute top-6 left-6 md:left-12">
        <h1 className="text-red-600 text-4xl md:text-5xl font-bold tracking-tighter shadow-xl select-none">NETSTREAM</h1>
      </div>

      <div className="relative z-10 bg-black/75 p-8 md:p-16 rounded-md w-full max-w-[450px] min-h-[550px] flex flex-col justify-center animate-in fade-in zoom-in duration-500">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignUp ? "S'inscrire" : "S'identifier"}
        </h1>
        
        {error && (
            <div className="bg-[#e87c03] p-3 rounded text-white text-sm mb-4 flex items-center gap-2">
                <span>⚠️</span> {error}
            </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4 flex flex-col">
          
          {isSignUp && (
            <div className="bg-[#333] rounded px-4 py-1 relative focus-within:bg-[#454545] transition-colors">
              <label className="text-xs text-gray-400 absolute top-1 left-4">Nom</label>
              <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-none text-white focus:outline-none w-full pt-4 pb-1 text-base placeholder-transparent" 
                  placeholder="Votre nom"
              />
            </div>
          )}

          <div className="bg-[#333] rounded px-4 py-1 relative focus-within:bg-[#454545] transition-colors">
            <label className="text-xs text-gray-400 absolute top-1 left-4">Email</label>
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none w-full pt-4 pb-1 text-base placeholder-transparent" 
                placeholder="Email"
            />
          </div>
          
          <div className="bg-[#333] rounded px-4 py-1 relative focus-within:bg-[#454545] transition-colors">
             <label className="text-xs text-gray-400 absolute top-1 left-4">Mot de passe</label>
             <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none w-full pt-4 pb-1 text-base placeholder-transparent" 
                placeholder="Mot de passe"
             />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-red-600 py-3 text-white font-bold rounded mt-6 hover:bg-red-700 transition duration-200"
          >
            {isSignUp ? "Créer mon compte" : "S'identifier"}
          </button>
        </form>

        <div className="flex items-center justify-between text-[#b3b3b3] text-sm font-medium mt-4">
           {!isSignUp && (
             <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-gray-400 hover:text-gray-200">
               <input type="checkbox" className="w-4 h-4 rounded bg-[#333] border-none focus:ring-0 accent-gray-500" defaultChecked />
               Se souvenir de moi
             </label>
           )}
           <a href="#" className="hover:underline text-xs text-gray-400 hover:text-gray-200 ml-auto">Besoin d'aide ?</a>
        </div>
        
        <div className="mt-10 text-[#737373] text-base">
           <p>
             {isSignUp ? "Vous avez déjà un compte ?" : "Première visite sur NetStream ?"} 
             <button 
                onClick={toggleMode} 
                className="text-white hover:underline cursor-pointer ml-2 font-medium bg-transparent border-none p-0 inline"
             >
                {isSignUp ? "Connectez-vous." : "Inscrivez-vous."}
             </button>
           </p>
           <p className="text-xs text-[#8c8c8c] mt-4">
             Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.
           </p>
        </div>
      </div>
    </div>
  );
};
export default Login;