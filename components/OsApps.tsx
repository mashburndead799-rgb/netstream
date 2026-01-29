import React, { useState, useEffect, useRef } from 'react';
import { Save, RefreshCw, Globe, ShieldAlert, Cpu, Palette, Type, Trash2, Wifi, Battery, HardDrive, User, Lock, Monitor, Volume2, Command, Search, Radio, Bluetooth, Mic, Bell, Info, Layers, Download, Power, Database, Terminal as TerminalIcon, Camera, Music, Image, Map, Calculator, Calendar, Mail, MessageSquare, DollarSign, Activity, Crosshair, Box, Grid, AlertTriangle, Eye, Hexagon, Play, Pause, Square, Watch, Music4, Binary, Shuffle, FileWarning, TrendingUp, Move, Maximize, Circle, ChevronDown, Upload } from 'lucide-react';

// --- SHARED UTILS ---
const AppContainer = ({ children, className = "" }: any) => (
    <div className={`h-full w-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 overflow-hidden flex flex-col ${className}`}>
        {children}
    </div>
);

const Toolbar = ({ title, children }: any) => (
    <div className="bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700 p-3 flex items-center justify-between shrink-0 shadow-sm">
        <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{title}</span>
        <div className="flex gap-2">{children}</div>
    </div>
);

// --- 1. CALCULATOR ---
export const CalculatorApp = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handlePress = (val: string) => {
        if (val === 'C') { setDisplay('0'); setEquation(''); return; }
        if (val === '=') {
            try {
                // eslint-disable-next-line no-eval
                const res = eval(equation + display).toString();
                setDisplay(res);
                setEquation('');
            } catch { setDisplay('Error'); }
            return;
        }
        if (['+', '-', '*', '/'].includes(val)) {
            setEquation(equation + display + val);
            setDisplay('0');
        } else {
            setDisplay(display === '0' ? val : display + val);
        }
    };

    return (
        <AppContainer>
            <div className="bg-white dark:bg-[#0f172a] p-6 text-right text-4xl font-light text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 h-32 flex flex-col justify-end">
                <span className="text-sm text-slate-500 h-6 mb-1">{equation}</span>
                {display}
            </div>
            <div className="grid grid-cols-4 gap-1 p-1 flex-1 bg-slate-100 dark:bg-[#1e293b]">
                {['7','8','9','/', '4','5','6','*', '1','2','3','-', 'C','0','=','+'].map(b => (
                    <button 
                        key={b} 
                        onClick={() => handlePress(b)} 
                        className={`text-xl font-medium rounded-lg transition-colors ${
                            ['C','=','+','-','*','/'].includes(b) 
                            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                            : 'bg-white dark:bg-[#334155] hover:bg-slate-50 dark:hover:bg-[#475569] text-slate-900 dark:text-white shadow-sm'
                        }`}
                    >
                        {b}
                    </button>
                ))}
            </div>
        </AppContainer>
    );
};

// --- 2. PIXEL PAINT ---
export const PaintApp = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [color, setColor] = useState('#000000');
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0,0,canvas.width, canvas.height);
            }
        }
    }, []);

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        const rect = canvasRef.current.getBoundingClientRect();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 5, 0, Math.PI * 2);
        ctx.fill();
    };

    return (
        <AppContainer>
            <Toolbar title="Studio">
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-8 w-8 bg-transparent border-none cursor-pointer rounded overflow-hidden" />
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full" onClick={() => {
                    const ctx = canvasRef.current?.getContext('2d');
                    if(ctx) {
                        ctx.fillStyle = '#ffffff';
                        ctx.fillRect(0,0,1000,1000);
                    }
                }}><Trash2 size={18} className="text-red-500"/></button>
            </Toolbar>
            <canvas 
                ref={canvasRef} 
                className="flex-1 cursor-crosshair w-full h-full block bg-white"
                onMouseDown={() => setIsDrawing(true)}
                onMouseUp={() => setIsDrawing(false)}
                onMouseMove={draw}
            />
        </AppContainer>
    );
};

// --- 3. SNAKE GAME ---
export const SnakeApp = () => {
    const [snake, setSnake] = useState([[5, 5]]);
    const [food, setFood] = useState([10, 10]);
    const [dir, setDir] = useState([0, 1]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const moveSnake = () => {
            if (gameOver) return;
            const newHead = [snake[0][0] + dir[0], snake[0][1] + dir[1]];
            
            if (newHead[0] < 0 || newHead[0] >= 20 || newHead[1] < 0 || newHead[1] >= 20 || snake.some(s => s[0] === newHead[0] && s[1] === newHead[1])) {
                setGameOver(true);
                return;
            }

            const newSnake = [newHead, ...snake];
            if (newHead[0] === food[0] && newHead[1] === food[1]) {
                setScore(s => s + 1);
                setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
            } else {
                newSnake.pop();
            }
            setSnake(newSnake);
        };

        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, dir, food, gameOver]);

    const handleKey = (e: React.KeyboardEvent) => {
        switch(e.key) {
            case 'ArrowUp': if (dir[1] !== 1) setDir([0, -1]); break;
            case 'ArrowDown': if (dir[1] !== -1) setDir([0, 1]); break;
            case 'ArrowLeft': if (dir[0] !== 1) setDir([-1, 0]); break;
            case 'ArrowRight': if (dir[0] !== -1) setDir([1, 0]); break;
        }
    };

    return (
        <AppContainer className="items-center justify-center bg-slate-900" >
            <div className="outline-none p-4 rounded-xl bg-slate-800 shadow-2xl" tabIndex={0} onKeyDown={handleKey} autoFocus>
                <div className="mb-4 flex justify-between text-white font-bold px-2">
                    <span>SCORE: {score}</span>
                    {gameOver && <button onClick={() => { setSnake([[5,5]]); setGameOver(false); setScore(0); }} className="text-blue-400 hover:underline">REJOUER</button>}
                </div>
                <div className="grid grid-cols-20 grid-rows-20 w-80 h-80 bg-slate-950 rounded-lg border border-slate-700 overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)' }}>
                    {Array.from({ length: 400 }).map((_, i) => {
                        const x = i % 20;
                        const y = Math.floor(i / 20);
                        const isSnake = snake.some(s => s[0] === x && s[1] === y);
                        const isFood = food[0] === x && food[1] === y;
                        return <div key={i} className={`${isSnake ? 'bg-green-500 rounded-sm' : isFood ? 'bg-red-500 rounded-full scale-75' : ''}`} />;
                    })}
                </div>
                <div className="text-center text-slate-500 text-xs mt-4">Utilisez les flèches du clavier</div>
            </div>
        </AppContainer>
    );
};

// --- 4. CAMERA ---
export const CameraApp = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => { if (videoRef.current) videoRef.current.srcObject = stream; })
            .catch(() => setError("Camera unavailable or permission denied."));
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
            }
        };
    }, []);

    return (
        <AppContainer className="bg-black relative">
            {error ? <div className="flex items-center justify-center h-full text-red-500">{error}</div> :
            <video ref={videoRef} autoPlay className="w-full h-full object-cover transform scale-x-[-1]" />}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button className="w-16 h-16 bg-white rounded-full border-4 border-slate-300 active:scale-95 transition-transform"></button>
            </div>
        </AppContainer>
    );
};

// --- 5. CRYPTO MARKET ---
export const CryptoApp = () => (
    <AppContainer>
        <Toolbar title="Marchés" />
        <div className="p-4 space-y-3">
            {[
                { n: 'Bitcoin', s: 'BTC', p: '98,420.00', c: 'text-green-500', ch: '+5.2%' },
                { n: 'Ethereum', s: 'ETH', p: '4,200.50', c: 'text-green-500', ch: '+2.1%' },
                { n: 'Cardano', s: 'ADA', p: '0.42', c: 'text-red-500', ch: '-1.4%' },
                { n: 'Solana', s: 'SOL', p: '145.00', c: 'text-green-500', ch: '+8.5%' },
            ].map(c => (
                <div key={c.s} className="flex justify-between items-center bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs">{c.s}</div>
                        <div>
                            <span className="font-semibold block">{c.n}</span>
                            <span className="text-xs text-slate-500">{c.s}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block font-medium">${c.p}</span>
                        <span className={`text-xs font-bold ${c.c}`}>{c.ch}</span>
                    </div>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 6. TASK MANAGER ---
export const TaskManagerApp = () => (
    <AppContainer>
        <div className="bg-white dark:bg-[#1e293b] text-xs font-semibold p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between text-slate-500">
            <span className="w-16">ID</span><span className="flex-1">NOM</span><span>CPU</span><span className="w-16 text-right">MEM</span>
        </div>
        <div className="flex-1 overflow-y-auto">
            {[...Array(15)].map((_, i) => (
                <div key={i} className="flex justify-between p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">
                    <span className="w-16 text-slate-400">{1000 + i * 53}</span>
                    <span className="flex-1 font-medium">{['System', 'Chrome', 'NetStream', 'Discord', 'Node', 'Python'][i % 6]}</span>
                    <span className="text-slate-500">{(Math.random() * 20).toFixed(1)}%</span>
                    <span className="w-16 text-right text-blue-500">{(Math.random() * 500).toFixed(0)} MB</span>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 7. WEATHER ---
export const WeatherApp = () => (
    <AppContainer className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
        <div className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-3xl font-light mb-1">Paris</h1>
            <p className="text-blue-100 mb-12">France</p>
            <div className="flex flex-col items-center">
                <div className="text-8xl font-thin mb-4">24°</div>
                <div className="text-xl font-medium mb-8">Ensoleillé</div>
            </div>
            <div className="grid grid-cols-3 gap-8 w-full max-w-md text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div><div className="text-blue-100 text-xs mb-1">HUMIDITÉ</div><div className="font-bold">45%</div></div>
                <div><div className="text-blue-100 text-xs mb-1">UV</div><div className="font-bold">Faible</div></div>
                <div><div className="text-blue-100 text-xs mb-1">VENT</div><div className="font-bold">12 km/h</div></div>
            </div>
        </div>
    </AppContainer>
);

// --- 8. NOTES ---
export const NotesApp = () => {
    const [text, setText] = useState("Liste de courses :\n- Lait\n- Pain\n- Oeufs\n\nIdée projet :\nCréer une app météo...");
    return (
        <AppContainer>
            <textarea className="w-full h-full bg-yellow-50 dark:bg-[#1e293b] text-slate-800 dark:text-slate-200 p-6 outline-none resize-none text-base leading-relaxed" value={text} onChange={e => setText(e.target.value)} />
        </AppContainer>
    );
};

// --- 9. MUSIC PLAYER ---
export const MusicApp = () => (
    <AppContainer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-64 h-64 rounded-2xl shadow-2xl bg-gradient-to-tr from-pink-500 to-violet-500 flex items-center justify-center">
                <Music size={64} className="text-white/50"/>
            </div>
        </div>
        <div className="p-8 bg-black/20 backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-1">Midnight City</h3>
            <p className="text-slate-400 mb-6">M83</p>
            <div className="h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
                <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mb-6">
                <span>1:20</span>
                <span>4:03</span>
            </div>
            <div className="flex justify-between items-center px-4">
                <button className="text-slate-400 hover:text-white"><Shuffle size={20}/></button>
                <div className="flex items-center gap-6">
                    <button className="text-white hover:scale-110 transition"><Play size={24} className="rotate-180"/></button>
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition shadow-lg"><Pause size={24} fill="currentColor"/></button>
                    <button className="text-white hover:scale-110 transition"><Play size={24}/></button>
                </div>
                <button className="text-slate-400 hover:text-white"><RefreshCw size={20}/></button>
            </div>
        </div>
    </AppContainer>
);

// --- 10. MAPS ---
export const MapsApp = () => (
    <AppContainer>
        <div className="relative w-full h-full bg-[#e5e7eb] overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-xl animate-bounce"></div>
            
            <div className="absolute top-4 left-4 right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3">
                <Search className="text-slate-400" size={20}/>
                <input type="text" placeholder="Rechercher ici..." className="flex-1 outline-none text-sm text-slate-700"/>
            </div>
        </div>
    </AppContainer>
);

// --- 11. CALENDAR ---
export const CalendarApp = () => (
    <AppContainer className="bg-white dark:bg-[#0f172a]">
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Juin 2025</h2>
            <div className="grid grid-cols-7 gap-4 text-center text-sm mb-4">
                {['L','M','M','J','V','S','D'].map(d => <div key={d} className="text-slate-400 font-bold">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className={`aspect-square flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer ${i === 14 ? 'bg-blue-500 text-white font-bold shadow-md hover:bg-blue-600' : ''}`}>{i+1}</div>
                ))}
            </div>
            <div className="mt-8">
                <h3 className="font-bold text-slate-500 text-xs uppercase mb-4 tracking-wider">Aujourd'hui</h3>
                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                    <div className="text-center">
                        <span className="block font-bold text-lg text-blue-600 dark:text-blue-400">10:00</span>
                    </div>
                    <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">Réunion Projet</div>
                        <div className="text-xs text-slate-500">Salle de conférence A</div>
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
);

// --- 12. MAIL ---
export const MailApp = () => (
    <AppContainer>
        <Toolbar title="Boîte de réception">
            <button className="text-blue-500"><RefreshCw size={16}/></button>
        </Toolbar>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
                { from: 'Netflix', sub: 'Nouveautés de la semaine', time: '10:42', preview: 'Découvrez les derniers films ajoutés...' },
                { from: 'Banque', sub: 'Relevé de compte', time: '09:15', preview: 'Votre relevé mensuel est disponible.' },
                { from: 'Maman', sub: 'Dimanche ?', time: 'Hier', preview: 'On mange ensemble ce dimanche ? Bisous.' },
                { from: 'LinkedIn', sub: 'Nouvelle offre d\'emploi', time: 'Hier', preview: 'Un recruteur a consulté votre profil.' },
            ].map((m, i) => (
                <div key={i} className="p-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{m.from}</span>
                        <span className="text-xs text-slate-400">{m.time}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{m.sub}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{m.preview}</div>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 13. CHAT ---
export const ChatApp = () => (
    <AppContainer>
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50 dark:bg-[#0f172a]">
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                <div className="bg-white dark:bg-[#1e293b] p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[80%]">Salut ! Tu as vu le dernier film ?</div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[80%]">Oui, c'était incroyable ! Surtout la fin.</div>
            </div>
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                <div className="bg-white dark:bg-[#1e293b] p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[80%]">On en parle demain ?</div>
            </div>
        </div>
        <div className="p-3 bg-white dark:bg-[#1e293b] border-t border-slate-200 dark:border-slate-700 flex gap-2">
            <input type="text" placeholder="Message..." className="flex-1 bg-slate-100 dark:bg-[#0f172a] rounded-full px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500" />
            <button className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"><Play size={16} className="ml-0.5"/></button>
        </div>
    </AppContainer>
);

// --- 14. GALLERY ---
export const GalleryApp = () => (
    <AppContainer>
        <div className="grid grid-cols-3 gap-1 p-1 overflow-y-auto">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-slate-200 dark:bg-slate-800 overflow-hidden relative group cursor-pointer rounded-lg">
                    <img src={`https://picsum.photos/400?random=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 15. ANTIVIRUS ---
export const AntivirusApp = () => {
    const [progress, setProgress] = useState(0);
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        if(scanning && progress < 100) {
            const t = setTimeout(() => setProgress(p => p + 1), 50);
            return () => clearTimeout(t);
        }
    }, [scanning, progress]);

    return (
        <AppContainer className="items-center justify-center p-8 text-center bg-white dark:bg-[#0f172a]">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 transition-colors ${scanning ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                <ShieldAlert size={64} />
            </div>
            <h2 className="text-2xl font-bold mb-2">{scanning ? (progress < 100 ? "Analyse en cours..." : "Système Sécurisé") : "Defender Pro"}</h2>
            <p className="text-slate-500 mb-8 max-w-xs mx-auto">Protection en temps réel active. Dernière analyse : Hier.</p>
            
            {scanning ? (
                <div className="w-64 mx-auto">
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-blue-500 transition-all duration-75" style={{width: `${progress}%`}}></div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{progress}%</p>
                </div>
            ) : (
                <button onClick={() => { setScanning(true); setProgress(0); }} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all">Lancer l'analyse</button>
            )}
        </AppContainer>
    );
};

// --- 16. SHOP ---
export const ShopApp = () => (
    <AppContainer>
        <Toolbar title="Boutique" />
        <div className="grid grid-cols-2 gap-4 p-4 overflow-y-auto">
            {[
                { n: 'Processeur X9', p: '299€', img: 'https://via.placeholder.com/150' },
                { n: 'Casque Audio', p: '89€', img: 'https://via.placeholder.com/150' },
                { n: 'Clavier Méca', p: '129€', img: 'https://via.placeholder.com/150' },
                { n: 'Souris Gamer', p: '59€', img: 'https://via.placeholder.com/150' }
            ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition cursor-pointer">
                    <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg mb-3 flex items-center justify-center">
                        <Box className="text-slate-300" size={32}/>
                    </div>
                    <div className="font-bold text-sm text-slate-800 dark:text-white mb-1">{item.n}</div>
                    <div className="text-blue-600 font-bold text-sm">{item.p}</div>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 17. NEWS ---
export const NewsApp = () => (
    <AppContainer>
        <Toolbar title="À la une" />
        <div className="divide-y divide-slate-100 dark:divide-slate-800 overflow-y-auto">
            {[
                "Technologie : La nouvelle puce quantique révolutionne l'industrie.",
                "Santé : Les bienfaits de la marche quotidienne confirmés.",
                "Sport : Finale intense hier soir au stade.",
                "Culture : Le nouveau musée ouvre ses portes demain.",
                "Espace : Une mission vers Mars prévue pour 2030."
            ].map((n, i) => (
                <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                    <div className="flex gap-3">
                        <div className="w-16 h-12 bg-slate-200 rounded-lg flex-shrink-0"></div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1 line-clamp-2">{n}</h4>
                            <p className="text-xs text-slate-500">Il y a 2h • Le Monde</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 18. HELP ---
export const HelpApp = () => (
    <AppContainer className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Bienvenue</h1>
        <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
            <p>Voici votre nouveau système d'exploitation.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Navigation</h3>
                <p>Utilisez la barre des tâches en bas pour lancer vos applications. Le menu démarrer centralise tout ce dont vous avez besoin.</p>
            </div>
            <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Astuces</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Double-cliquez sur la barre de titre pour agrandir une fenêtre.</li>
                    <li>Utilisez le terminal pour les commandes avancées.</li>
                    <li>Personnalisez votre fond d'écran dans les paramètres.</li>
                </ul>
            </div>
        </div>
    </AppContainer>
);

// --- 19. CODE EDITOR ---
export const CodeApp = () => (
    <AppContainer>
        <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-sm overflow-auto text-slate-300 leading-relaxed">
            <div className="flex"><span className="text-slate-600 select-none mr-4">1</span> <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-yellow-300">'react'</span>;</div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">2</span> </div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">3</span> <span className="text-blue-400">const</span> <span className="text-yellow-200">App</span> = () <span className="text-blue-400">=&gt;</span> &#123;</div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">4</span> &nbsp;&nbsp;<span className="text-blue-400">return</span> (</div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">5</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">div</span>&gt;Hello World&lt;/<span className="text-green-400">div</span>&gt;</div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">6</span> &nbsp;&nbsp;);</div>
            <div className="flex"><span className="text-slate-600 select-none mr-4">7</span> &#125;;</div>
        </div>
    </AppContainer>
);

// --- 20. EYE (SURVEILLANCE) ---
export const EyeApp = () => (
    <AppContainer>
        <div className="grid grid-cols-2 h-full bg-black gap-0.5 border-4 border-black">
            {[1,2,3,4].map(i => (
                <div key={i} className="relative overflow-hidden bg-slate-900">
                    <img src={`https://picsum.photos/400/300?random=${i+10}`} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">REC</div>
                    <div className="absolute bottom-2 left-2 text-white text-[10px] font-mono">CAM_0{i}</div>
                </div>
            ))}
        </div>
    </AppContainer>
);

// --- 21. TIC TAC TOE ---
export const TicTacToeApp = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    function handleClick(i: number) {
        if (winner || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares: any[]) {
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
        }
        return null;
    }

    return (
        <AppContainer className="items-center justify-center bg-slate-50 dark:bg-[#0f172a]">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">{winner ? `Vainqueur : ${winner}` : `Joueur : ${xIsNext ? 'X' : 'O'}`}</h2>
            <div className="grid grid-cols-3 gap-2 p-2 bg-slate-200 dark:bg-slate-800 rounded-xl">
                {board.map((val, i) => (
                    <button key={i} onClick={() => handleClick(i)} className="w-20 h-20 bg-white dark:bg-[#1e293b] rounded-lg text-4xl font-black text-slate-800 dark:text-white flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                        {val}
                    </button>
                ))}
            </div>
            <button onClick={() => setBoard(Array(9).fill(null))} className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition">Recommencer</button>
        </AppContainer>
    );
};

// --- 22. STOPWATCH ---
export const StopwatchApp = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval: any;
        if (running) {
            interval = setInterval(() => setTime(t => t + 10), 10);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <AppContainer className="items-center justify-center text-center">
            <div className="w-64 h-64 rounded-full border-8 border-slate-200 dark:border-slate-800 flex items-center justify-center mb-8 relative">
                <div className="text-5xl font-light tabular-nums tracking-wider text-slate-800 dark:text-white">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                    <span className="text-xl text-slate-400">.{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
            </div>
            <div className="flex gap-4">
                <button onClick={() => setRunning(!running)} className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition ${running ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                    {running ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1"/>}
                </button>
                <button onClick={() => { setTime(0); setRunning(false); }} className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-white flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition">
                    <RefreshCw size={20}/>
                </button>
            </div>
        </AppContainer>
    );
};

// --- 23. RADIO ---
export const RadioApp = () => {
    const [station, setStation] = useState(88.5);
    const [playing, setPlaying] = useState(false);

    return (
        <AppContainer>
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-t from-slate-100 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="text-6xl font-bold text-slate-800 dark:text-white mb-2">{station.toFixed(1)}</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-12">Fréquence FM</div>
                
                <div className="flex gap-1 h-16 items-center mb-12">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`w-1.5 bg-blue-500 rounded-full transition-all duration-300`} style={{ height: playing ? `${Math.random() * 100}%` : '4px' }}></div>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <button onClick={() => setStation(s => Math.max(87.5, s - 0.5))} className="p-4 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition"><ChevronDown className="rotate-90" /></button>
                    <button onClick={() => setPlaying(!playing)} className="w-20 h-20 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center shadow-xl shadow-blue-500/30">
                        {playing ? <Pause size={32} fill="currentColor"/> : <Play size={32} fill="currentColor" className="ml-1"/>}
                    </button>
                    <button onClick={() => setStation(s => Math.min(108.0, s + 0.5))} className="p-4 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition"><ChevronDown className="-rotate-90" /></button>
                </div>
            </div>
        </AppContainer>
    );
};

// --- 24. TRANSLATOR (BINARY) ---
export const TranslatorApp = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const toBinary = (str: string) => {
        return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    };

    return (
        <AppContainer className="p-6">
            <h2 className="text-lg font-bold mb-4">Texte vers Binaire</h2>
            <textarea 
                className="w-full h-32 bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-sm mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Saisissez votre texte ici..." 
                value={input} 
                onChange={(e) => { setInput(e.target.value); setOutput(toBinary(e.target.value)); }}
            />
            <div className="flex items-center gap-2 mb-2 text-slate-500 font-bold text-xs uppercase">Résultat</div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-xs text-blue-600 overflow-auto break-all border border-slate-200 dark:border-slate-800 select-all">
                {output || "Le résultat s'affichera ici..."}
            </div>
        </AppContainer>
    );
};

// --- 25. SYNTHESIZER ---
export const SynthApp = () => {
    const playNote = (freq: number) => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1);
    };

    return (
        <AppContainer className="items-center justify-center bg-slate-100 dark:bg-slate-900">
            <div className="flex gap-1 h-64 items-end bg-white dark:bg-black p-4 rounded-xl shadow-xl">
                {[261.6, 293.7, 329.6, 349.2, 392.0, 440.0, 493.9, 523.3].map((freq, i) => (
                    <button 
                        key={i} 
                        className="w-12 h-full bg-white border border-slate-300 rounded-b-md shadow-sm relative group hover:bg-slate-50 active:bg-slate-200 active:h-[95%]"
                        onMouseDown={() => playNote(freq)}
                    >
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-bold">{['C','D','E','F','G','A','B','C'][i]}</span>
                    </button>
                ))}
            </div>
        </AppContainer>
    );
};

// --- 26. CONVERTER ---
export const ConverterApp = () => {
    const [val, setVal] = useState<number>(0);
    return (
        <AppContainer className="p-8 text-center">
            <h2 className="text-xl font-bold mb-8 text-slate-800 dark:text-white">Convertisseur de Données</h2>
            <input type="number" value={val} onChange={e => setVal(Number(e.target.value))} className="w-full bg-slate-100 dark:bg-slate-800 p-4 text-center text-3xl font-light mb-8 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-2 gap-4 text-left font-medium text-sm">
                <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><div className="text-slate-400 text-xs mb-1 uppercase">Octets</div>{val * 1024 * 1024}</div>
                <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><div className="text-slate-400 text-xs mb-1 uppercase">Kilooctets</div>{val * 1024}</div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm"><div className="text-blue-500 text-xs font-bold mb-1 uppercase">Mégaoctets</div>{val}</div>
                <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><div className="text-slate-400 text-xs mb-1 uppercase">Gigaoctets</div>{(val / 1024).toFixed(4)}</div>
            </div>
        </AppContainer>
    );
};

// --- 27. MINESWEEPER ---
export const MinesweeperApp = () => {
    const [grid, setGrid] = useState(Array(64).fill(null).map(() => ({ bomb: Math.random() < 0.15, revealed: false })));
    const [lost, setLost] = useState(false);

    const handleClick = (idx: number) => {
        if(lost || grid[idx].revealed) return;
        const newGrid = [...grid];
        newGrid[idx].revealed = true;
        if(newGrid[idx].bomb) setLost(true);
        setGrid(newGrid);
    };

    return (
        <AppContainer className="items-center justify-center bg-slate-100 dark:bg-slate-900">
            <div className="mb-6 font-bold text-red-500 h-6">{lost ? "PERDU !" : "Démineur"}</div>
            <div className="grid grid-cols-8 gap-1 bg-slate-300 dark:bg-slate-700 p-2 rounded-lg shadow-inner">
                {grid.map((cell, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleClick(i)}
                        className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all ${
                            cell.revealed 
                            ? (cell.bomb ? 'bg-red-500 text-white' : 'bg-slate-200 dark:bg-slate-600') 
                            : 'bg-blue-500 hover:bg-blue-400 text-transparent shadow-sm'
                        }`}
                    >
                        {cell.revealed && cell.bomb && '💣'}
                    </button>
                ))}
            </div>
            <button onClick={() => { setLost(false); setGrid(grid.map(() => ({ bomb: Math.random() < 0.15, revealed: false }))) }} className="mt-6 px-6 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full font-bold shadow hover:shadow-lg transition">Recommencer</button>
        </AppContainer>
    );
};

// --- 28. HACKER TYPER ---
export const HackerTyperApp = () => {
    const [code, setCode] = useState('');
    const source = "struct group_info init_groups = { .usage = ATOMIC_INIT(2) }; export_kernel_struct(init_groups); void __init secure_boot_init(void) { ... injecting payload ... }";
    
    useEffect(() => {
        const handleType = () => {
            setCode(prev => source.substring(0, prev.length + 3));
        };
        window.addEventListener('keydown', handleType);
        return () => window.removeEventListener('keydown', handleType);
    }, []);

    return (
        <AppContainer className="p-6 font-mono text-green-500 bg-black text-xs overflow-hidden">
            {code}<span className="animate-pulse">_</span>
            <div className="absolute bottom-4 right-4 text-gray-500 text-[10px]">Appuyez sur n'importe quelle touche</div>
        </AppContainer>
    );
};

// --- 29. BREATHING ---
export const BreathingApp = () => (
    <AppContainer className="items-center justify-center bg-blue-50 dark:bg-slate-900">
        <div className="w-64 h-64 rounded-full bg-blue-200/50 dark:bg-blue-900/30 animate-[ping_4s_ease-in-out_infinite] flex items-center justify-center">
            <div className="w-32 h-32 bg-white dark:bg-blue-500 rounded-full shadow-xl flex items-center justify-center text-blue-500 dark:text-white font-bold tracking-widest">
                RESPIRER
            </div>
        </div>
    </AppContainer>
);

// --- 30. COLOR PICKER ---
export const ColorPickerApp = () => {
    const [r, setR] = useState(128);
    const [g, setG] = useState(0);
    const [b, setB] = useState(255);
    
    return (
        <AppContainer>
            <div className="h-40 w-full transition-colors shadow-inner" style={{ backgroundColor: `rgb(${r},${g},${b})` }}></div>
            <div className="p-6 space-y-6">
                <input type="range" min="0" max="255" value={r} onChange={e => setR(Number(e.target.value))} className="w-full accent-red-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"/>
                <input type="range" min="0" max="255" value={g} onChange={e => setG(Number(e.target.value))} className="w-full accent-green-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"/>
                <input type="range" min="0" max="255" value={b} onChange={e => setB(Number(e.target.value))} className="w-full accent-blue-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"/>
                <div className="text-center font-mono select-all p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">rgb({r}, {g}, {b})</div>
            </div>
        </AppContainer>
    );
};

// --- 31. WORLD CLOCK ---
export const WorldClockApp = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
    
    const getOffsetTime = (offset: number) => {
        const d = new Date(time);
        d.setHours(d.getHours() + offset);
        return d.toLocaleTimeString();
    };

    return (
        <AppContainer className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
                { c: 'Paris', t: time.toLocaleTimeString(), o: 'Local' },
                { c: 'New York', t: getOffsetTime(-6), o: '-6h' },
                { c: 'Tokyo', t: getOffsetTime(7), o: '+7h' },
                { c: 'Londres', t: getOffsetTime(-1), o: '-1h' },
            ].map((city, i) => (
                <div key={i} className="p-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div>
                        <div className="font-bold text-lg">{city.c}</div>
                        <div className="text-xs text-slate-400">{city.o}</div>
                    </div>
                    <div className="text-2xl font-light tabular-nums">{city.t}</div>
                </div>
            ))}
        </AppContainer>
    );
};

// --- 32. DRUM PAD ---
export const DrumPadApp = () => {
    const playSound = (freq: number, type: OscillatorType) => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    return (
        <AppContainer className="p-6 items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                    <button 
                        key={i} 
                        className="w-20 h-20 bg-slate-200 dark:bg-slate-800 active:bg-blue-500 active:scale-95 rounded-2xl shadow-sm transition-all" 
                        onMouseDown={() => playSound(100 + i*50, i%2===0 ? 'square' : 'triangle')}
                    ></button>
                ))}
            </div>
        </AppContainer>
    );
};

// --- 33. SECRETS ---
export const SecretsApp = () => (
    <AppContainer className="bg-slate-100 dark:bg-slate-900 p-4">
        <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow p-6 max-w-sm mx-auto mt-10 text-center">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={32}/>
            </div>
            <h2 className="text-lg font-bold mb-2">Accès Restreint</h2>
            <p className="text-slate-500 text-sm mb-6">Ce dossier est chiffré par BitLocker. Veuillez insérer votre clé de sécurité.</p>
            <input type="password" placeholder="Mot de passe" className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-red-500" />
            <button className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition">Déverrouiller</button>
        </div>
    </AppContainer>
);

// --- 34. SYSTEM GRAPH ---
export const SysGraphApp = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const data = Array(50).fill(50);
        let animationId: number;

        const draw = () => {
            data.push(Math.random() * 100);
            data.shift();
            
            // Background
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Grid
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i=0; i<canvas.width; i+=20) { ctx.moveTo(i,0); ctx.lineTo(i, canvas.height); }
            for(let i=0; i<canvas.height; i+=20) { ctx.moveTo(0,i); ctx.lineTo(canvas.width, i); }
            ctx.stroke();

            // Line
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            data.forEach((val, i) => {
                ctx.lineTo(i * (canvas.width / 50), canvas.height - val);
            });
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Fill
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.fill();
            
            animationId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <AppContainer>
            <div className="p-3 text-xs font-bold text-slate-500 uppercase tracking-widest bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700">CPU Usage</div>
            <canvas ref={canvasRef} className="w-full flex-1" width={300} height={150} />
        </AppContainer>
    );
};

// --- BROWSER APP ---
export const BrowserApp = () => {
    const [url, setUrl] = useState("https://hybrid-os.web");
    const [isLoading, setIsLoading] = useState(false);

    const handleRefresh = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 800);
    };

    return (
        <AppContainer>
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700">
                <button onClick={handleRefresh} className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition">
                    <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
                </button>
                <div className="flex-1 flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1.5">
                    <Globe size={14} className="text-slate-400 mr-2" />
                    <input 
                        type="text" 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 dark:text-slate-200"
                    />
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-[#f8fafc] dark:bg-[#0f172a] p-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Hybrid Search</h1>
                        <div className="relative max-w-lg mx-auto">
                            <input type="text" placeholder="Rechercher sur le web..." className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#1e293b] shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white" />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 dark:text-white">Actualités Tech</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Le nouveau processeur quantique bat tous les records de vitesse...</p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 dark:text-white">Météo</h3>
                            <div className="flex items-center gap-4 dark:text-white">
                                <span className="text-3xl font-light">24°C</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">Ensoleillé</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm md:col-span-2">
                            <h3 className="font-bold text-lg mb-2 dark:text-white">Bourse</h3>
                            <div className="flex justify-between text-sm">
                                <span className="text-green-500">NSDQ +1.2%</span>
                                <span className="text-red-500">CAC40 -0.4%</span>
                                <span className="text-green-500">BTC +5.0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
};

// --- TERMINAL APP (Updated) ---
// Note: Keeping Terminal somewhat "technical" but cleaning up the style
export const TerminalApp = ({ onClose, onOpenApp }: { onClose: () => void, onOpenApp: (id: string) => void }) => {
  const [history, setHistory] = useState<string[]>([
    "Microsoft Windows [version 10.0.19045.3693]",
    "(c) Microsoft Corporation. Tous droits réservés.",
    "",
    "C:\\Users\\Admin> help",
    "Commandes disponibles : dir, cd, cls, help, open <app>",
    ""
  ]);
  const [input, setInput] = useState("");
  
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `C:\\Users\\Admin> ${input}`];

    if (cmd === 'cls' || cmd === 'clear') {
        setHistory([]);
    } else if (cmd === 'help') {
        setHistory([...newHistory, "DIR, CD, CLS, HELP, OPEN, EXIT"]);
    } else if (cmd.startsWith('open ')) {
        const appName = cmd.split(' ')[1];
        onOpenApp(appName);
        setHistory([...newHistory, `Lancement de ${appName}...`]);
    } else {
        setHistory([...newHistory, `'${cmd}' n'est pas reconnu en tant que commande interne.`]);
    }
    
    setInput("");
  };

  return (
    <div className="h-full bg-[#0c0c0c] p-2 font-mono text-sm text-gray-300 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
      {history.map((line, i) => (
        <div key={i} className="break-all whitespace-pre-wrap leading-tight mb-1">{line}</div>
      ))}
      <form onSubmit={handleCommand} className="flex mt-1">
        <span className="whitespace-nowrap mr-2">C:\Users\Admin&gt;</span>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-gray-300 caret-white"
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
      </form>
      <div ref={endRef} />
    </div>
  );
};

// --- DATA PAD APP (Updated Style) ---
export const DataPadApp = () => {
    const [note, setNote] = useState(() => localStorage.getItem('cyber_datapad') || "Bienvenue dans le Bloc-notes.");
    
    return (
        <div className="h-full flex flex-col bg-white text-slate-800">
            <div className="flex items-center gap-1 p-1 border-b border-slate-200 text-sm">
                <button className="px-3 py-1 hover:bg-slate-100 rounded">Fichier</button>
                <button className="px-3 py-1 hover:bg-slate-100 rounded">Édition</button>
                <button className="px-3 py-1 hover:bg-slate-100 rounded">Format</button>
                <button className="px-3 py-1 hover:bg-slate-100 rounded">Affichage</button>
            </div>
            <textarea 
                className="flex-1 p-4 resize-none outline-none font-mono text-sm leading-relaxed"
                value={note}
                onChange={(e) => { setNote(e.target.value); localStorage.setItem('cyber_datapad', e.target.value); }}
                spellCheck={false}
            />
            <div className="bg-slate-100 px-3 py-1 text-xs text-slate-500 border-t border-slate-200 flex justify-end gap-4">
                <span>Ln 1, Col 1</span>
                <span>100%</span>
                <span>Windows (CRLF)</span>
                <span>UTF-8</span>
            </div>
        </div>
    )
}

// --- SETTINGS APP EXPANDED ---
interface SettingsProps {
    currentTheme: string;
    onThemeChange: (theme: string) => void;
    onWallpaperChange: (url: string) => void;
}

export const SettingsApp: React.FC<SettingsProps> = ({ currentTheme, onThemeChange, onWallpaperChange }) => {
    const [activeTab, setActiveTab] = useState('system');
    
    // Internal States
    const [wifiEnabled, setWifiEnabled] = useState(true);
    const [bluetoothEnabled, setBluetoothEnabled] = useState(false);

    const wallpapers = [
        "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
    ];

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onWallpaperChange(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const TabButton = ({ id, icon, label }: any) => (
        <button 
            onClick={() => setActiveTab(id)} 
            className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center gap-3 rounded-lg transition-colors ${activeTab === id ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    const renderContent = () => {
        switch(activeTab) {
            case 'system':
                return (
                    <div className="space-y-6 animate-in fade-in duration-300 p-6">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                                <Monitor size={40} className="text-slate-400"/>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Hybrid OS</h2>
                                <p className="text-slate-500">Version 24H2</p>
                                <button className="mt-2 text-sm text-blue-600 hover:underline">Renommer ce PC</button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <span>Processeur</span>
                                <span className="text-slate-500">Intel Core i9-14900K</span>
                            </div>
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <span>Mémoire RAM</span>
                                <span className="text-slate-500">32,0 Go</span>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <span>Type du système</span>
                                <span className="text-slate-500">Système d'exploitation 64 bits</span>
                            </div>
                        </div>
                    </div>
                );

            case 'display':
                return (
                    <div className="space-y-6 animate-in fade-in duration-300 p-6">
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Arrière-plan</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <label className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                                    <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                                    <Upload size={20} className="text-slate-400 mb-2"/>
                                    <span className="text-xs text-slate-500 font-medium">Parcourir</span>
                                </label>
                                {wallpapers.map((wp, i) => (
                                    <div key={i} className="aspect-video cursor-pointer rounded-lg overflow-hidden ring-2 ring-transparent hover:ring-blue-500 transition-all" onClick={() => onWallpaperChange(wp)}>
                                        <img src={wp} className="w-full h-full object-cover" alt="Wallpaper" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                );

            case 'network':
                return (
                    <div className="space-y-4 animate-in fade-in duration-300 p-6">
                        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg"><Wifi size={24}/></div>
                                <div>
                                    <div className="font-bold">Wi-Fi</div>
                                    <div className="text-xs text-slate-500">Connecté, sécurisé</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={wifiEnabled} onChange={(e) => setWifiEnabled(e.target.checked)} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"><Bluetooth size={24}/></div>
                                <div>
                                    <div className="font-bold">Bluetooth</div>
                                    <div className="text-xs text-slate-500">Découvrable en tant que "Desktop-X9"</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={bluetoothEnabled} onChange={(e) => setBluetoothEnabled(e.target.checked)} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                );

            default: return null;
        }
    }

    return (
        <div className="h-full bg-[#f3f4f6] dark:bg-[#0f172a] text-slate-900 dark:text-white flex overflow-hidden font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700 flex flex-col p-4">
                <div className="mb-6 px-4">
                    <h2 className="text-lg font-bold">Paramètres</h2>
                </div>
                
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input type="text" placeholder="Rechercher un paramètre" className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <nav className="flex-1 overflow-y-auto space-y-1">
                    <TabButton id="system" icon={<Cpu size={18}/>} label="Système" />
                    <TabButton id="display" icon={<Monitor size={18}/>} label="Personnalisation" />
                    <TabButton id="network" icon={<Wifi size={18}/>} label="Réseau et Internet" />
                    <TabButton id="sound" icon={<Volume2 size={18}/>} label="Son" />
                    <TabButton id="apps" icon={<Layers size={18}/>} label="Applications" />
                    <TabButton id="user" icon={<User size={18}/>} label="Comptes" />
                    <TabButton id="privacy" icon={<ShieldAlert size={18}/>} label="Confidentialité" />
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a]">
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center px-8 bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-sm">
                    <h1 className="text-xl font-semibold capitalize">{activeTab === 'display' ? 'Personnalisation' : activeTab === 'system' ? 'Système' : activeTab === 'network' ? 'Réseau et Internet' : activeTab}</h1>
                </header>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}