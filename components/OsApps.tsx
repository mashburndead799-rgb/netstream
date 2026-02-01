import React, { useState, useEffect, useRef } from 'react';
import { Save, RefreshCw, Globe, ShieldAlert, Cpu, Palette, Type, Trash2, Wifi, Battery, HardDrive, User, Lock, Monitor, Volume2, Command, Search, Radio, Bluetooth, Mic, Bell, Info, Layers, Download, Power, Database, Terminal as TerminalIcon, Camera, Music, Image, Map, Calculator, Calendar, Mail, MessageSquare, DollarSign, Activity, Crosshair, Box, Grid, AlertTriangle, Eye, Hexagon, Play, Pause, Square, Watch, Music4, Binary, Shuffle, FileWarning, TrendingUp, Move, Maximize, Circle, ChevronDown, Upload, Archive, Scissors, Key, BarChart, PenTool, Feather, Disc, FileText, ChevronLeft, ChevronRight, Star, MoreVertical, Plus, File, Sun, Video, FolderOpen, Film } from 'lucide-react';

// --- SHARED UTILS ---
const AppContainer = ({ children, className = "" }: any) => (
    <div className={`h-full w-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 overflow-hidden flex flex-col ${className}`}>
        {children}
    </div>
);

const Toolbar = ({ title, children }: any) => (
    <div className="bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700 p-3 flex items-center justify-between shrink-0 shadow-sm select-none">
        <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{title}</span>
        <div className="flex gap-2 items-center">{children}</div>
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
    const [size, setSize] = useState(5);
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
        ctx.arc(e.clientX - rect.left, e.clientY - rect.top, size, 0, Math.PI * 2);
        ctx.fill();
    };

    return (
        <AppContainer>
            <Toolbar title="Studio">
                <input type="range" min="1" max="50" value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-24 accent-blue-500" title="Taille du pinceau" />
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-8 w-8 bg-transparent border-none cursor-pointer rounded overflow-hidden" title="Couleur" />
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full" onClick={() => {
                    const ctx = canvasRef.current?.getContext('2d');
                    if(ctx) {
                        ctx.fillStyle = '#ffffff';
                        ctx.fillRect(0,0,2000,2000);
                    }
                }} title="Tout effacer"><Trash2 size={18} className="text-red-500"/></button>
            </Toolbar>
            <canvas 
                ref={canvasRef} 
                className="flex-1 cursor-crosshair w-full h-full block bg-white touch-none"
                onMouseDown={() => setIsDrawing(true)}
                onMouseUp={() => setIsDrawing(false)}
                onMouseLeave={() => setIsDrawing(false)}
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
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const moveSnake = () => {
            if (gameOver || paused) return;
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

        const interval = setInterval(moveSnake, 150);
        return () => clearInterval(interval);
    }, [snake, dir, food, gameOver, paused]);

    const handleKey = (e: React.KeyboardEvent) => {
        switch(e.key) {
            case 'ArrowUp': if (dir[1] !== 1) setDir([0, -1]); break;
            case 'ArrowDown': if (dir[1] !== -1) setDir([0, 1]); break;
            case 'ArrowLeft': if (dir[0] !== 1) setDir([-1, 0]); break;
            case 'ArrowRight': if (dir[0] !== -1) setDir([1, 0]); break;
            case ' ': setPaused(!paused); break;
        }
    };

    return (
        <AppContainer className="items-center justify-center bg-slate-900" >
            <div className="outline-none p-4 rounded-xl bg-slate-800 shadow-2xl" tabIndex={0} onKeyDown={handleKey} autoFocus>
                <div className="mb-4 flex justify-between text-white font-bold px-2">
                    <span>SCORE: {score}</span>
                    <div className="flex gap-4">
                        <button onClick={() => setPaused(!paused)} className="text-xs text-yellow-400">{paused ? "REPRENDRE" : "PAUSE"}</button>
                        {gameOver && <button onClick={() => { setSnake([[5,5]]); setGameOver(false); setScore(0); setDir([0,1]); }} className="text-xs text-blue-400 hover:underline">REJOUER</button>}
                    </div>
                </div>
                <div className="grid grid-cols-20 grid-rows-20 w-80 h-80 bg-slate-950 rounded-lg border border-slate-700 overflow-hidden relative" style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)' }}>
                    {Array.from({ length: 400 }).map((_, i) => {
                        const x = i % 20;
                        const y = Math.floor(i / 20);
                        const isSnake = snake.some(s => s[0] === x && s[1] === y);
                        const isFood = food[0] === x && food[1] === y;
                        return <div key={i} className={`${isSnake ? 'bg-green-500 rounded-sm' : isFood ? 'bg-red-500 rounded-full scale-75' : ''}`} />;
                    })}
                    {gameOver && <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-red-500 font-bold text-2xl">GAME OVER</div>}
                </div>
                <div className="text-center text-slate-500 text-xs mt-4">Utilisez les flèches • Espace pour pause</div>
            </div>
        </AppContainer>
    );
};

// --- 4. CAMERA ---
export const CameraApp = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsStreaming(true);
                setError('');
            }
        } catch (err) {
            setError("Accès caméra refusé ou indisponible.");
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
            videoRef.current.srcObject = null;
            setIsStreaming(false);
        }
    };

    useEffect(() => {
        return () => stopCamera();
    }, []);

    return (
        <AppContainer className="bg-black relative">
            <div className="absolute top-4 left-4 z-10">
                {!isStreaming ? 
                    <button onClick={startCamera} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md transition">Activer la caméra</button> :
                    <button onClick={stopCamera} className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-full backdrop-blur-md transition">Désactiver</button>
                }
            </div>
            
            {error ? (
                <div className="flex flex-col items-center justify-center h-full text-red-500 gap-2">
                    <Video size={48}/>
                    <span>{error}</span>
                </div>
            ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                    {!isStreaming && <div className="text-slate-500">Caméra désactivée</div>}
                    <video ref={videoRef} autoPlay className={`w-full h-full object-cover transform scale-x-[-1] ${!isStreaming ? 'hidden' : ''}`} />
                </div>
            )}
            
            {isStreaming && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button className="w-16 h-16 bg-white rounded-full border-4 border-slate-300 active:scale-95 transition-transform hover:shadow-lg shadow-white/20" onClick={() => alert("Photo prise !")}></button>
                </div>
            )}
        </AppContainer>
    );
};

// --- 5. CRYPTO MARKET ---
export const CryptoApp = () => (
    <AppContainer>
        <Toolbar title="Marchés Financiers" />
        <div className="p-4 space-y-3">
            {[
                { n: 'Bitcoin', s: 'BTC', p: '98,420.00', c: 'text-green-500', ch: '+5.2%' },
                { n: 'Ethereum', s: 'ETH', p: '4,200.50', c: 'text-green-500', ch: '+2.1%' },
                { n: 'Cardano', s: 'ADA', p: '0.42', c: 'text-red-500', ch: '-1.4%' },
                { n: 'Solana', s: 'SOL', p: '145.00', c: 'text-green-500', ch: '+8.5%' },
                { n: 'NVIDIA Corp', s: 'NVDA', p: '1,140.00', c: 'text-green-500', ch: '+12.4%' },
                { n: 'Apple Inc.', s: 'AAPL', p: '192.50', c: 'text-green-500', ch: '+0.8%' },
            ].map(c => (
                <div key={c.s} className="flex justify-between items-center bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${c.s.length > 3 ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>{c.s.substring(0,2)}</div>
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
        <div className="bg-white dark:bg-[#1e293b] text-xs font-semibold p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between text-slate-500 uppercase tracking-wider">
            <span className="w-16">PID</span><span className="flex-1">Processus</span><span>CPU</span><span className="w-20 text-right">Mémoire</span>
        </div>
        <div className="flex-1 overflow-y-auto">
            {['System', 'Registry', 'Chrome', 'NetStream', 'Node.js', 'Explorer', 'Discord', 'Spotify', 'Docker', 'VLC'].map((name, i) => {
                const cpu = (Math.random() * 15).toFixed(1);
                const mem = (Math.random() * 800 + 50).toFixed(0);
                return (
                    <div key={i} className="flex justify-between p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 text-sm items-center transition-colors">
                        <span className="w-16 text-slate-400 font-mono text-xs">{1000 + i * 53}</span>
                        <span className="flex-1 font-medium flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${Number(cpu) > 10 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                            {name}.exe
                        </span>
                        <span className={`text-xs w-12 text-right ${Number(cpu) > 10 ? 'text-red-500 font-bold' : 'text-slate-500'}`}>{cpu}%</span>
                        <span className="w-20 text-right text-blue-500 font-mono text-xs">{mem} MB</span>
                    </div>
                );
            })}
        </div>
        <div className="bg-slate-100 dark:bg-[#111] p-2 text-xs text-right border-t border-slate-300 dark:border-slate-700">
            Processus: 42 • CPU: 12% • RAM: 34%
        </div>
    </AppContainer>
);

// --- 7. WEATHER ---
export const WeatherApp = () => (
    <AppContainer className="bg-gradient-to-br from-sky-400 to-blue-600 text-white">
        <div className="flex flex-col items-center justify-center h-full p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 animate-spin-slow opacity-20"><Sun size={120} /></div>
            <h1 className="text-3xl font-light mb-1 drop-shadow-md">Paris</h1>
            <p className="text-blue-100 mb-12 font-medium bg-white/10 px-3 py-1 rounded-full text-xs">France</p>
            <div className="flex flex-col items-center">
                <div className="text-8xl font-thin mb-4 drop-shadow-xl tracking-tighter">24°</div>
                <div className="text-xl font-medium mb-8 flex items-center gap-2"><Sun size={24}/> Ensoleillé</div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full max-w-md text-center bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20 shadow-lg">
                <div><div className="text-blue-100 text-[10px] uppercase font-bold mb-1">Humidité</div><div className="font-bold text-lg">45%</div></div>
                <div><div className="text-blue-100 text-[10px] uppercase font-bold mb-1">Index UV</div><div className="font-bold text-lg">5/10</div></div>
                <div><div className="text-blue-100 text-[10px] uppercase font-bold mb-1">Vent</div><div className="font-bold text-lg">12 km/h</div></div>
            </div>
        </div>
    </AppContainer>
);

// --- 8. NOTES ---
export const NotesApp = () => {
    const [text, setText] = useState(() => localStorage.getItem('quick_notes') || "Liste de courses :\n- Lait\n- Pain\n- Oeufs");
    
    useEffect(() => {
        localStorage.setItem('quick_notes', text);
    }, [text]);

    return (
        <AppContainer>
            <Toolbar title="Notes Rapides">
                <button onClick={() => setText('')} className="p-1 hover:bg-slate-200 rounded"><Trash2 size={16}/></button>
            </Toolbar>
            <textarea 
                className="w-full h-full bg-yellow-50 dark:bg-[#2d2b20] text-slate-800 dark:text-yellow-100 p-6 outline-none resize-none text-base leading-relaxed font-handwriting" 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder="Écrivez quelque chose..."
                spellCheck={false}
            />
        </AppContainer>
    );
};

// --- 9. MUSIC PLAYER ---
export const MusicApp = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        
        const updateProgress = () => setProgress((audio.currentTime / audio.duration) * 100);
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    return (
        <AppContainer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            
            <div className="flex-1 flex items-center justify-center p-8 relative">
                <div className={`w-56 h-56 rounded-full shadow-2xl bg-gradient-to-tr from-pink-500 to-violet-500 flex items-center justify-center animate-spin-slow ${!isPlaying ? 'paused' : ''}`}>
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-700">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
            
            <div className="p-8 bg-black/40 backdrop-blur-xl border-t border-white/10">
                <h3 className="text-xl font-bold mb-1 truncate">Synthwave Mix Vol. 1</h3>
                <p className="text-slate-400 mb-6 text-sm">Unknown Artist</p>
                
                <div className="h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden cursor-pointer">
                    <div className="h-full bg-pink-500 rounded-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
                </div>
                
                <div className="flex justify-between items-center px-4">
                    <button className="text-slate-400 hover:text-white transition"><Shuffle size={20}/></button>
                    <div className="flex items-center gap-6">
                        <button className="text-white hover:scale-110 transition active:scale-95"><Play size={24} className="rotate-180 fill-white"/></button>
                        <button onClick={togglePlay} className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition shadow-lg shadow-pink-500/20 active:scale-95">
                            {isPlaying ? <Pause size={28} fill="currentColor"/> : <Play size={28} fill="currentColor" className="ml-1"/>}
                        </button>
                        <button className="text-white hover:scale-110 transition active:scale-95"><Play size={24} className="fill-white"/></button>
                    </div>
                    <button className="text-slate-400 hover:text-white transition"><RefreshCw size={20}/></button>
                </div>
            </div>
        </AppContainer>
    );
};

// --- 10. MAPS ---
export const MapsApp = () => (
    <AppContainer>
        <div className="relative w-full h-full bg-[#e5e7eb] overflow-hidden group">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Simulated Map Elements */}
            <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-200/50 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-4 bg-slate-300 rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-xl animate-bounce z-10 cursor-pointer">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Vous êtes ici</div>
            </div>
            
            <div className="absolute top-4 left-4 right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20">
                <Search className="text-slate-400" size={20}/>
                <input type="text" placeholder="Rechercher une adresse..." className="flex-1 outline-none text-sm text-slate-700"/>
                <Mic className="text-blue-500 cursor-pointer hover:bg-blue-50 p-1 rounded-full w-7 h-7" />
            </div>

            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="bg-white p-2 rounded shadow hover:bg-slate-50"><Plus size={20}/></button>
                <button className="bg-white p-2 rounded shadow hover:bg-slate-50"><Minus size={20}/></button>
            </div>
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
        
        const data = Array(60).fill(50);
        let animationId: number;

        const draw = () => {
            data.push(Math.random() * 40 + 30 + (Math.random() > 0.9 ? 20 : 0)); // Spikes
            data.shift();
            
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Grid
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i=0; i<canvas.width; i+=40) { ctx.moveTo(i,0); ctx.lineTo(i, canvas.height); }
            for(let i=0; i<canvas.height; i+=40) { ctx.moveTo(0,i); ctx.lineTo(canvas.width, i); }
            ctx.stroke();

            // Line
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            data.forEach((val, i) => {
                const x = i * (canvas.width / 60);
                const y = canvas.height - (val / 100 * canvas.height);
                ctx.lineTo(x, y);
            });
            ctx.lineTo(canvas.width, canvas.height);
            ctx.closePath();
            
            // Gradient Fill
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Stroke
            ctx.beginPath();
            data.forEach((val, i) => {
                const x = i * (canvas.width / 60);
                const y = canvas.height - (val / 100 * canvas.height);
                if (i===0) ctx.moveTo(x,y);
                else ctx.lineTo(x,y);
            });
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            animationId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <AppContainer>
            <div className="p-3 text-xs font-bold text-slate-500 uppercase tracking-widest bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700 flex justify-between">
                <span>CPU Usage</span>
                <span className="text-blue-500">Live</span>
            </div>
            <canvas ref={canvasRef} className="w-full flex-1" width={600} height={300} />
        </AppContainer>
    );
};

// --- BROWSER APP (CHROME REPLICA) ---
export const BrowserApp = () => {
    const [tabs, setTabs] = useState([{ id: 1, title: 'Google', url: 'https://www.google.com/webhp?igu=1', active: true }]);
    const [inputValue, setInputValue] = useState('https://google.com');
    const [iframeUrl, setIframeUrl] = useState('https://www.google.com/webhp?igu=1');

    const addTab = () => {
        const newId = Math.max(0, ...tabs.map(t => t.id)) + 1;
        setTabs(prev => prev.map(t => ({ ...t, active: false })).concat({ id: newId, title: 'Nouvel onglet', url: '', active: true }));
        setInputValue('');
        setIframeUrl('');
    };

    const closeTab = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        if (tabs.length === 1) return;
        const newTabs = tabs.filter(t => t.id !== id);
        if (tabs.find(t => t.id === id)?.active) {
            newTabs[newTabs.length - 1].active = true;
            setInputValue(newTabs[newTabs.length - 1].url);
            setIframeUrl(newTabs[newTabs.length - 1].url.includes('google') ? 'https://www.google.com/webhp?igu=1' : newTabs[newTabs.length - 1].url);
        }
        setTabs(newTabs);
    };

    const switchTab = (id: number) => {
        setTabs(prev => prev.map(t => ({ ...t, active: t.id === id })));
        const tab = tabs.find(t => t.id === id);
        if(tab) {
            setInputValue(tab.url);
            setIframeUrl(tab.url.startsWith('http') ? tab.url : (tab.url ? `https://www.google.com/search?q=${tab.url}&igu=1` : ''));
        }
    };

    const handleNavigate = (e: React.FormEvent) => {
        e.preventDefault();
        let url = inputValue;
        if (!url) return;
        
        let finalUrl = url;
        if (!url.startsWith('http') && url.includes('.')) {
            finalUrl = `https://${url}`;
        } else if (!url.startsWith('http')) {
            finalUrl = `https://www.google.com/search?q=${encodeURIComponent(url)}&igu=1`;
        }
        
        setIframeUrl(finalUrl);
        setTabs(prev => prev.map(t => t.active ? { ...t, url: inputValue, title: inputValue } : t));
    };

    return (
        <div className="h-full flex flex-col bg-[#dfe1e5] dark:bg-[#202124]">
            {/* Tabs Bar */}
            <div className="flex items-end px-2 pt-2 bg-[#dee1e6] dark:bg-[#202124] space-x-1 overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                    <div 
                        key={tab.id}
                        onClick={() => switchTab(tab.id)}
                        className={`group relative flex items-center min-w-[120px] max-w-[200px] h-9 px-3 rounded-t-lg text-xs cursor-pointer select-none transition-colors ${tab.active ? 'bg-white dark:bg-[#323639] text-slate-800 dark:text-white shadow-sm z-10' : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-[#292a2d]'}`}
                    >
                        <span className="flex-1 truncate mr-2">{tab.title || 'Nouvel onglet'}</span>
                        <button onClick={(e) => closeTab(e, tab.id)} className="p-0.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={10}/></button>
                    </div>
                ))}
                <button onClick={addTab} className="p-1.5 ml-1 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400"><Plus size={16}/></button>
            </div>

            {/* Navigation Bar */}
            <div className="bg-white dark:bg-[#323639] p-2 flex items-center gap-2 border-b border-slate-200 dark:border-[#323639] shadow-sm z-20">
                <div className="flex gap-1">
                    <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400 disabled:opacity-50"><ChevronLeft size={16}/></button>
                    <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400 disabled:opacity-50"><ChevronRight size={16}/></button>
                    <button onClick={() => setIframeUrl(iframeUrl)} className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400"><RefreshCw size={14}/></button>
                </div>
                <form onSubmit={handleNavigate} className="flex-1 flex items-center bg-[#f1f3f4] dark:bg-[#202124] rounded-full px-3 py-1.5 border border-transparent focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-[#202124] focus-within:shadow-md transition-all">
                    {inputValue.startsWith('http') ? <Lock size={12} className="text-green-600 mr-2"/> : <Globe size={12} className="text-slate-400 mr-2"/>}
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-sm text-slate-800 dark:text-white placeholder-slate-500"
                        onFocus={(e) => e.target.select()}
                        placeholder="Rechercher sur Google ou saisir une URL"
                    />
                </form>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white relative">
                {iframeUrl ? (
                    <iframe 
                        src={iframeUrl} 
                        className="w-full h-full border-none"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        title="Browser"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                        <Globe size={64} className="mb-4 opacity-20"/>
                        <p>Commencez à naviguer</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- EVERYTHING APP ---
export const EverythingApp = () => {
    const [search, setSearch] = useState('');
    // Mock Data Generator
    const [files] = useState(() => Array.from({length: 100}, (_, i) => ({
        id: i,
        name: i % 3 === 0 ? `Document_${i}.docx` : (i % 3 === 1 ? `Image_${i}.png` : `Script_${i}.js`),
        path: i % 2 === 0 ? `C:\\Users\\Admin\\Documents` : `C:\\Program Files\\App_${i}`,
        size: `${(Math.random() * 10).toFixed(2)} MB`,
        date: '2025-06-15 14:30'
    })));

    const filtered = files.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <AppContainer>
            <div className="p-2 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b]">
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 focus-within:border-blue-500 transition-colors">
                    <Search size={16} className="text-slate-500"/>
                    <input autoFocus type="text" placeholder="Rechercher un fichier..." className="w-full bg-transparent outline-none text-sm" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="flex-1 overflow-auto bg-white dark:bg-[#1e1e1e]">
                <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 dark:bg-[#2d2d2d] sticky top-0 shadow-sm">
                        <tr>
                            <th className="p-2 font-semibold border-r border-slate-200 dark:border-slate-700">Nom</th>
                            <th className="p-2 font-semibold border-r border-slate-200 dark:border-slate-700">Chemin</th>
                            <th className="p-2 font-semibold w-24 border-r border-slate-200 dark:border-slate-700">Taille</th>
                            <th className="p-2 font-semibold w-32">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {filtered.map(f => (
                            <tr key={f.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer">
                                <td className="p-2 truncate max-w-[200px] font-medium">{f.name}</td>
                                <td className="p-2 text-slate-500 truncate max-w-[200px]">{f.path}</td>
                                <td className="p-2 text-right">{f.size}</td>
                                <td className="p-2 text-slate-500">{f.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-2 text-xs text-slate-500 bg-slate-50 dark:bg-[#252525] border-t border-slate-200 dark:border-slate-700 sticky bottom-0">
                    {filtered.length} objets trouvés
                </div>
            </div>
        </AppContainer>
    )
}

// --- VLC APP ---
export const VLCApp = () => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setVideoSrc(url);
        }
    };

    return (
        <AppContainer className="bg-[#141414] text-slate-200">
            <div className="flex-1 flex items-center justify-center bg-black relative overflow-hidden group">
                {videoSrc ? (
                    <video src={videoSrc} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <Play size={64} className="text-orange-500 opacity-50 border-4 border-orange-500 rounded-full p-4 mb-4"/>
                        <div className="text-orange-500 font-bold text-xl drop-shadow-md">VLC Media Player</div>
                        <p className="text-gray-500 text-sm mt-2">Déposez un fichier ou cliquez pour ouvrir</p>
                        <button onClick={() => fileInputRef.current?.click()} className="mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold transition">Ouvrir un média</button>
                    </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="video/*,audio/*" />
            </div>
            
            {/* Control Bar Mockup if no native controls */}
            {!videoSrc && (
                <div className="bg-[#2b2b2b] p-2 select-none">
                    <div className="w-full h-1 bg-gray-600 mb-2 relative group cursor-pointer rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-0"></div>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex gap-4">
                            <button className="hover:text-white text-gray-400"><Play size={20} fill="currentColor" /></button>
                            <button className="hover:text-white text-gray-400"><Pause size={20} /></button>
                            <button className="hover:text-white text-gray-400"><Square size={16} fill="currentColor" /></button>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-xs font-mono text-gray-400">00:00 / 00:00</span>
                            <Volume2 size={18} className="text-gray-400" />
                            <div className="w-20 h-1 bg-gray-600 rounded"><div className="w-3/4 h-full bg-orange-500"></div></div>
                        </div>
                    </div>
                </div>
            )}
        </AppContainer>
    );
};

// --- HANDBRAKE ---
export const HandBrakeApp = () => {
    const [progress, setProgress] = useState(0);
    const [encoding, setEncoding] = useState(false);

    const startEncode = () => {
        setEncoding(true);
        setProgress(0);
        const t = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(t);
                    setEncoding(false);
                    return 100;
                }
                return p + 1;
            });
        }, 100);
    };

    return (
        <AppContainer className="bg-[#f0f0f0] dark:bg-[#2d2d2d]">
            <div className="p-2 border-b border-slate-300 dark:border-[#444] flex gap-2 bg-white dark:bg-[#383838]">
                <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#444] hover:bg-gray-200 dark:hover:bg-[#555] rounded text-sm flex items-center gap-2 transition-colors">
                    <File size={16}/> Ouvrir Source
                </button>
                <button 
                    onClick={startEncode}
                    disabled={encoding}
                    className={`px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 text-white transition-all ${encoding ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-md'}`}
                >
                    {encoding ? <RefreshCw size={16} className="animate-spin"/> : <Play size={16} fill="currentColor"/>} 
                    {encoding ? 'Encodage...' : 'Démarrer'}
                </button>
            </div>
            
            <div className="p-4 space-y-4">
                <div className="bg-white dark:bg-[#383838] p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-sm mb-2 flex items-center gap-2"><FileText size={16}/> Source: VID_20250615.mp4</h3>
                    <div className="flex gap-4 text-xs text-slate-500 bg-gray-50 dark:bg-[#222] p-2 rounded">
                        <span>1920x1080</span>
                        <span>30 FPS</span>
                        <span>H.264 (x264)</span>
                        <span>AAC Stereo</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-[#383838] p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold text-xs mb-3 uppercase text-gray-500 tracking-wider">Préglages</h4>
                        <select className="w-full border dark:border-gray-600 bg-transparent p-2 rounded text-sm outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Fast 1080p30</option>
                            <option>HQ 1080p30 Surround</option>
                            <option>Vimeo YouTube HQ 1080p60</option>
                            <option>Android 1080p30</option>
                        </select>
                    </div>
                    <div className="bg-white dark:bg-[#383838] p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold text-xs mb-3 uppercase text-gray-500 tracking-wider">Format de destination</h4>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#444] p-1 rounded px-2"><input type="radio" name="format" defaultChecked className="accent-blue-500"/> MP4</label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#444] p-1 rounded px-2"><input type="radio" name="format" className="accent-blue-500"/> MKV</label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#444] p-1 rounded px-2"><input type="radio" name="format" className="accent-blue-500"/> WebM</label>
                        </div>
                    </div>
                </div>

                {/* Progress Area */}
                {encoding && (
                    <div className="bg-white dark:bg-[#383838] p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between text-xs font-bold mb-1">
                            <span>Encodage en cours...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-black rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 transition-all duration-100" style={{width: `${progress}%`}}></div>
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1 font-mono">ETA: 00:00:{(100-progress)/10 | 0}</div>
                    </div>
                )}
            </div>
        </AppContainer>
    );
};

// --- 7-ZIP ---
export const SevenZipApp = () => {
    const [currentPath, setCurrentPath] = useState('C:\\Users\\Admin\\Downloads');
    const files = [
        { n: '..', s: '', t: 'Dossier', icon: <FolderOpen size={16} className="text-yellow-500"/> },
        { n: 'Photos_Vacances.zip', s: '1.2 GB', t: 'Archive ZIP', icon: <Archive size={16} className="text-yellow-600"/> },
        { n: 'Backup_Work.7z', s: '450 MB', t: 'Archive 7Z', icon: <Archive size={16} className="text-yellow-600"/> },
        { n: 'Project_Assets.tar.gz', s: '85 MB', t: 'Archive GZIP', icon: <Archive size={16} className="text-yellow-600"/> },
        { n: 'Setup.exe', s: '12 MB', t: 'Application', icon: <Box size={16} className="text-blue-500"/> },
        { n: 'Readme.txt', s: '1 KB', t: 'Texte', icon: <FileText size={16} className="text-gray-500"/> }
    ];

    return (
        <AppContainer>
            <div className="flex gap-1 p-1 bg-slate-100 dark:bg-[#333] border-b border-slate-300 dark:border-slate-600">
                <button className="flex flex-col items-center p-2 hover:bg-blue-100 dark:hover:bg-slate-600 rounded w-16 group"><Plus size={24} className="text-blue-600 dark:text-blue-400"/><span className="text-[10px]">Ajouter</span></button>
                <button className="flex flex-col items-center p-2 hover:bg-blue-100 dark:hover:bg-slate-600 rounded w-16 group"><Upload size={24} className="text-green-600 dark:text-green-400"/><span className="text-[10px]">Extraire</span></button>
                <button className="flex flex-col items-center p-2 hover:bg-blue-100 dark:hover:bg-slate-600 rounded w-16 group"><Eye size={24} className="text-slate-600 dark:text-slate-300"/><span className="text-[10px]">Test</span></button>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                <button className="flex flex-col items-center p-2 hover:bg-blue-100 dark:hover:bg-slate-600 rounded w-16 group"><Trash2 size={24} className="text-red-500"/><span className="text-[10px]">Supprimer</span></button>
            </div>
            
            <div className="p-1 bg-white dark:bg-[#1e1e1e] border-b border-slate-300 dark:border-slate-600 text-xs flex gap-2 items-center">
                <span className="text-gray-500">Adresse:</span>
                <input type="text" value={currentPath} readOnly className="flex-1 bg-transparent outline-none border border-gray-200 dark:border-gray-700 px-1"/>
            </div>

            <div className="flex-1 bg-white dark:bg-[#1e1e1e] overflow-auto">
                <table className="w-full text-left text-sm select-none">
                    <thead className="bg-slate-100 dark:bg-[#333]">
                        <tr>
                            <th className="p-1 border-r border-slate-300 dark:border-slate-600 w-1/2">Nom</th>
                            <th className="p-1 border-r border-slate-300 dark:border-slate-600 w-24 text-right">Taille</th>
                            <th className="p-1 w-32">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((f, i) => (
                            <tr key={i} className="hover:bg-blue-100 dark:hover:bg-blue-900/30 cursor-pointer even:bg-slate-50 dark:even:bg-[#252525]">
                                <td className="p-1 flex items-center gap-2 pl-2">
                                    {f.icon} {f.n}
                                </td>
                                <td className="p-1 text-right pr-2 font-mono text-xs">{f.s}</td>
                                <td className="p-1 pl-2 text-xs text-gray-500">{f.t}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-slate-100 dark:bg-[#333] border-t border-slate-300 dark:border-slate-600 p-1 text-xs text-right px-2">
                1 objet sélectionné 12.4 MB
            </div>
        </AppContainer>
    );
}

// --- TERMINAL APP ---
export const TerminalApp = ({ onClose, onOpenApp }: { onClose: () => void, onOpenApp: (id: string) => void }) => {
    const [history, setHistory] = useState(['Bienvenue dans NetStream OS v1.0.0', 'Tapez "help" pour voir les commandes.']);
    const [input, setInput] = useState('');
    const endRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        const newHistory = [...history, `> ${input}`];
        
        if (cmd === 'help') {
            newHistory.push('Commandes disponibles: help, clear, exit, date, open [app_id]');
        } else if (cmd === 'clear') {
            setHistory([]);
            setInput('');
            return;
        } else if (cmd === 'exit') {
            onClose();
        } else if (cmd === 'date') {
            newHistory.push(new Date().toString());
        } else if (cmd.startsWith('open ')) {
            const app = cmd.split(' ')[1];
            onOpenApp(app);
            newHistory.push(`Lancement de ${app}...`);
        } else {
            newHistory.push(`Commande inconnue: ${cmd}`);
        }
        
        setHistory(newHistory);
        setInput('');
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <AppContainer className="bg-black text-green-500 font-mono text-sm p-4">
            <div className="flex-1 overflow-y-auto">
                {history.map((line, i) => <div key={i}>{line}</div>)}
                <div ref={endRef} />
            </div>
            <form onSubmit={handleCommand} className="flex gap-2 mt-2">
                <span>$</span>
                <input 
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    className="flex-1 bg-transparent outline-none text-green-500"
                    autoFocus
                />
            </form>
        </AppContainer>
    );
};

// --- NOTEPAD APP (DataPad) ---
export const DataPadApp = () => {
    const [content, setContent] = useState('');
    return (
        <AppContainer>
            <Toolbar title="Bloc-notes">
                <button className="text-xs">Fichier</button>
                <button className="text-xs">Édition</button>
            </Toolbar>
            <textarea 
                className="flex-1 p-4 bg-white dark:bg-[#1e1e1e] outline-none resize-none font-mono text-sm text-slate-800 dark:text-slate-200" 
                value={content}
                onChange={e => setContent(e.target.value)}
                spellCheck={false}
            />
        </AppContainer>
    );
};

// --- SETTINGS APP ---
export const SettingsApp = ({ currentTheme, onThemeChange, onWallpaperChange }: any) => {
    return (
        <AppContainer>
            <div className="flex h-full">
                <div className="w-48 bg-slate-100 dark:bg-[#1e293b] p-4 border-r border-slate-200 dark:border-slate-700">
                    <h2 className="font-bold mb-4">Paramètres</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="text-blue-500 font-medium">Personnalisation</li>
                        <li className="text-slate-500">Système</li>
                        <li className="text-slate-500">Réseau</li>
                        <li className="text-slate-500">Comptes</li>
                    </ul>
                </div>
                <div className="flex-1 p-8 bg-white dark:bg-[#0f172a]">
                    <h3 className="text-xl font-bold mb-6">Personnalisation</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Thème</label>
                            <select 
                                value={currentTheme} 
                                onChange={e => onThemeChange(e.target.value)}
                                className="w-full max-w-xs p-2 rounded border dark:bg-[#1e293b] dark:border-slate-700 outline-none"
                            >
                                <option value="windows">Windows 11</option>
                                <option value="macos">macOS</option>
                                <option value="ubuntu">Ubuntu</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Fond d'écran</label>
                            <div className="grid grid-cols-3 gap-4 max-w-lg">
                                {[
                                    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2000',
                                    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
                                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000'
                                ].map((url, i) => (
                                    <div key={i} onClick={() => onWallpaperChange(url)} className="aspect-video bg-cover bg-center rounded cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all" style={{backgroundImage: `url(${url})`}}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
};

// --- GENERIC PLACEHOLDER ---
const PlaceholderApp = ({ title, icon }: { title: string, icon?: any }) => (
    <AppContainer className="items-center justify-center bg-slate-50 dark:bg-[#0f172a]">
        <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 text-slate-400">
                {icon || <Box size={48} />}
            </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-slate-500">Cette application est en cours de développement.</p>
        </div>
    </AppContainer>
);

// --- ALL OTHER APPS EXPORTS ---
export const CalendarApp = () => <PlaceholderApp title="Calendrier" icon={<Calendar size={48}/>} />;
export const MailApp = () => <PlaceholderApp title="Courrier" icon={<Mail size={48}/>} />;
export const ChatApp = () => <PlaceholderApp title="Messagerie" icon={<MessageSquare size={48}/>} />;
export const GalleryApp = () => <PlaceholderApp title="Galerie" icon={<Image size={48}/>} />;
export const AntivirusApp = () => <PlaceholderApp title="Sécurité" icon={<ShieldAlert size={48}/>} />;
export const ShopApp = () => <PlaceholderApp title="Boutique" icon={<Box size={48}/>} />;
export const NewsApp = () => <PlaceholderApp title="Actualités" icon={<Grid size={48}/>} />;
export const HelpApp = () => <PlaceholderApp title="Aide" icon={<Info size={48}/>} />;
export const CodeApp = () => <PlaceholderApp title="Code" icon={<Hexagon size={48}/>} />;
export const EyeApp = () => <PlaceholderApp title="Eye Tracking" icon={<Eye size={48}/>} />;
export const TicTacToeApp = () => <PlaceholderApp title="Morpion" icon={<Square size={48}/>} />;
export const StopwatchApp = () => <PlaceholderApp title="Chronomètre" icon={<Watch size={48}/>} />;
export const RadioApp = () => <PlaceholderApp title="Radio" icon={<Radio size={48}/>} />;
export const TranslatorApp = () => <PlaceholderApp title="Traducteur" icon={<Binary size={48}/>} />;
export const SynthApp = () => <PlaceholderApp title="Synthétiseur" icon={<Music4 size={48}/>} />;
export const ConverterApp = () => <PlaceholderApp title="Convertisseur" icon={<Shuffle size={48}/>} />;
export const MinesweeperApp = () => <PlaceholderApp title="Démineur" icon={<FileWarning size={48}/>} />;
export const HackerTyperApp = () => <PlaceholderApp title="Hacker Typer" icon={<TerminalIcon size={48}/>} />;
export const BreathingApp = () => <PlaceholderApp title="Respiration" icon={<Circle size={48}/>} />;
export const ColorPickerApp = () => <PlaceholderApp title="Pipette" icon={<Palette size={48}/>} />;
export const WorldClockApp = () => <PlaceholderApp title="Horloge Monde" icon={<Globe size={48}/>} />;
export const DrumPadApp = () => <PlaceholderApp title="Drum Pad" icon={<Grid size={48}/>} />;
export const SecretsApp = () => <PlaceholderApp title="Coffre-fort" icon={<Lock size={48}/>} />;
export const PowerToysApp = () => <PlaceholderApp title="PowerToys" icon={<Box size={48}/>} />;
export const WizTreeApp = () => <PlaceholderApp title="WizTree" icon={<HardDrive size={48}/>} />;
export const RevoApp = () => <PlaceholderApp title="Revo Uninstaller" icon={<Trash2 size={48}/>} />;
export const BleachBitApp = () => <PlaceholderApp title="BleachBit" icon={<Trash2 size={48}/>} />;
export const AudacityApp = () => <PlaceholderApp title="Audacity" icon={<Mic size={48}/>} />;
export const GimpApp = () => <PlaceholderApp title="GIMP" icon={<Palette size={48}/>} />;
export const DaVinciApp = () => <PlaceholderApp title="DaVinci Resolve" icon={<Film size={48}/>} />;
export const ObsidianApp = () => <PlaceholderApp title="Obsidian" icon={<Feather size={48}/>} />;
export const LibreOfficeApp = () => <PlaceholderApp title="LibreOffice" icon={<FileText size={48}/>} />;
export const FluxApp = () => <PlaceholderApp title="f.lux" icon={<Sun size={48}/>} />;
export const KeePassApp = () => <PlaceholderApp title="KeePassXC" icon={<Key size={48}/>} />;
export const GlassWireApp = () => <PlaceholderApp title="GlassWire" icon={<Activity size={48}/>} />;

// --- Placeholders for specific requests or existing aliases ---
export const Minus = ({size}: {size:number}) => <div style={{width: size, height: 2, background: 'currentColor'}}></div>;
export const TwitchApp = () => <BrowserApp />; 
export const SpotifyApp = () => <MusicApp />;
export const DiscordApp = () => <ChatApp />;
export const VSCodeApp = () => <CodeApp />;