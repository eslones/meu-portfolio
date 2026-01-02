<script setup>
import { ref } from 'vue';

// Estado para controlar o menu mobile
const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Estado do formulário
const form = ref({
    name: '',
    email: '',
    message: ''
});

// Dados dos projetos
const projects = [
    {
        title: "E-Commerce Full Stack",
        date: "Em breve",
        description: "Uma réplica funcional de plataforma de e-commerce inspirada na Shopee. Conta com dashboard administrativo, gestão de estoque e gateway de pagamentos integrado.",
        image: "/img/e-commerce.png", 
        tags: ["Laravel", "Vue.js", "MySQL"],
        githubLink: "https://github.com/eslones",
        previewLink: "#"
    },
    {
        title: "Space Invaders Retro",
        date: "Em breve",
        description: "Recriação interativa do clássico arcade. Desenvolvido para demonstrar lógica de colisão, renderização gráfica otimizada e manipulação de DOM em tempo real.",
        image: "/img/space.png",
        tags: ["JavaScript", "Canvas API", "HTML5"],
        githubLink: "https://github.com/eslones",
        previewLink: "#"
    },
    {
        title: "Sistema de Agendamento",
        date: "Dez - Jan 2026",
        description: "SaaS para barbearias com Chatbot inteligente. O bot consome uma API RESTful para verificar disponibilidade e realizar agendamentos automáticos via WhatsApp.",
        image: "/img/agendamento.png",
        tags: ["Vue 3", "TailwindCSS", "Vite", "Node.js", "AI Integration"],
        githubLink: "https://github.com/eslones",
        previewLink: "https://cortetesoura.vercel.app"
    },
    {
        title: "Portfólio Pessoal",
        date: "Out - Dez 2025",
        description: "Este site que você está vendo! Desenvolvido com foco em performance, SEO e design responsivo, utilizando as melhores práticas do ecossistema Vue e Tailwind.",
        image: "/img/portfolio.png",
        tags: ["Vue 3", "TailwindCSS", "Vite"],
        githubLink: "https://github.com/eslones",
        previewLink: "https://matheuscandido.vercel.app"
    }
];

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: { type: String, required: true },
    phpVersion: { type: String, required: true },
});

// --- Lógica de Cores / Tema ---
const corDeFundo = ref('bg-[#030712]');      // Fundo principal
const corDoTexto = ref('text-white');        // Texto principal (Títulos)
const corSubTexto = ref('text-gray-400');    // Texto secundário (Descrições)
const corCard = ref('bg-[#0a0a0a] border-white/10'); // Fundo dos cards de projeto
const corHeader = ref('bg-[#030712]/80');   // Fundo do Header

const trocarCor = () => {
  if (corDeFundo.value === 'bg-[#030712]') {
    // MODO CLARO (Light Mode)
    corDeFundo.value = 'bg-gray-50';
    corDoTexto.value = 'text-gray-900';
    corSubTexto.value = 'text-gray-600';
    corCard.value = 'bg-white border-gray-200 shadow-lg';
    corHeader.value = 'bg-white/90 shadow-sm';
  } else {
    // MODO ESCURO (Dark Mode - Padrão)
    corDeFundo.value = 'bg-[#030712]';
    corDoTexto.value = 'text-white';
    corSubTexto.value = 'text-gray-400';
    corCard.value = 'bg-[#0a0a0a] border-white/10';
    corHeader.value = 'bg-[#030712]/80';
  }
}; 
</script>

<template>   
    <div :class="[corDeFundo, corDoTexto, 'min-h-screen font-sans antialiased selection:bg-violet-500 selection:text-white relative z-10 transition-colors duration-500']">
        
        <img id="background" class="fixed -left-20 top-0 max-w-[877px] pointer-events-none z-0 opacity-50 mix-blend-screen" />
        
        <header :class="[corHeader, 'fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5 transition-all duration-500']">
            <div class="max-w-7xl mx-auto px-6">
                <nav class="flex justify-between items-center h-20">
                    
                    <div class="flex-shrink-0">
                        <a href="/" :class="[corDoTexto, 'text-2xl font-bold font-mono hover:text-violet-500 transition']">
                            Matheus<span class="text-violet-500">.Dev</span>
                        </a>
                    </div>

                    <ul :class="[corDoTexto, 'hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest font-mono']">
                        <li><a href="#" class="hover:text-violet-500 transition">Inicio</a></li>
                        <li><a href="#sobre" class="hover:text-violet-500 transition">Sobre</a></li>
                        <li><a href="#projetos" class="hover:text-violet-500 transition">Projetos</a></li>
                        <li><a href="#contato" class="hover:text-violet-500 transition">Contato</a></li>
                    </ul>

                    <div class="flex items-center gap-4">
                        <div :class="[corDoTexto, 'hidden md:flex items-center gap-4']">
                            <button @click="trocarCor" class="hover:text-violet-500 transition transform active:scale-95">
                                <svg v-if="corDeFundo === 'bg-[#030712]'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                            </button>
                        </div>
                        
                        <button @click="toggleMenu" :class="[corDoTexto, 'md:hidden hover:opacity-80 transition focus:outline-none p-2']">
                            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </nav>

                <div v-show="isMobileMenuOpen" :class="[corDeFundo, 'md:hidden absolute top-20 left-0 w-full border-b border-white/10 shadow-2xl animate-fade-in pb-6']">
                    <ul class="flex flex-col p-6 text-center space-y-4 font-mono">
                        <li><a href="#" @click="isMobileMenuOpen = false" :class="[corDoTexto, 'block py-3 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition font-extrabold uppercase tracking-widest']">Inicio</a></li>
                        <li><a href="#sobre" @click="isMobileMenuOpen = false" :class="[corDoTexto, 'block py-3 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition font-extrabold uppercase tracking-widest']">Sobre</a></li>
                        <li><a href="#projetos" @click="isMobileMenuOpen = false" :class="[corDoTexto, 'block py-3 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition font-bold uppercase tracking-widest']">Projetos</a></li>
                        <li><a href="#contato" @click="isMobileMenuOpen = false" :class="[corDoTexto, 'block py-3 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition font-bold uppercase tracking-widest']">Contato</a></li>
                        
                        <li class="w-full h-px bg-white/10 my-2"></li>

                        <li class="flex items-center justify-center gap-8 pt-2">
                            <button @click="trocarCor" :class="[corDoTexto, 'hover:text-violet-500 transition']">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>
                            </button>
                        </li>
                    </ul>
                </div>                  
            </div>
        </header>

        <main class="pt-24 lg:pt-32">
            
            <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6 mb-20">
                <div class="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                    <span class="text-sm font-bold tracking-[0.2em] mb-1 text-gray-400 uppercase">
                        Matheus Candido
                    </span>
                    
                    <h1 :class="[corDoTexto, 'text-4xl lg:text-6xl font-extrabold mb-6 leading-tight uppercase transition-colors duration-500']">
                        Desenvolvedor <br />
                        <span class="text-violet-500">Full-Stack</span>
                    </h1>
                    
                    <p :class="[corSubTexto, 'max-w-lg text-sm lg:text-base leading-relaxed mb-10 font-medium font-sans transition-colors duration-500']">
                        Especialista em criar aplicações web completas, escaláveis e de alto impacto, unindo frontend moderno a backend robusto.
                    </p>
                    
                    <div class="flex flex-wrap justify-center lg:justify-start items-center gap-4">
                        <a href="#contato" class="px-8 py-3 rounded-full border-2 border-violet-500 text-violet-500 font-bold hover:bg-violet-500 hover:text-white transition duration-300">
                            CONTATO
                        </a>
                        <a href="/doc/cv.pdf" download class="flex items-center gap-2 px-8 py-3 rounded-full bg-violet-500 text-white font-bold hover:bg-violet-600 transition duration-300 shadow-lg shadow-violet-500/25">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                            BAIXAR CURRÍCULO
                        </a>
                    </div>
                </div>

                <div class="relative flex-shrink-0">
                    <div class="w-64 h-64 lg:w-[450px] lg:h-[450px] rounded-full border-[6px] border-violet-500 overflow-hidden shadow-2xl shadow-violet-500/20 bg-gray-900/50 relative z-10">
                        <img src="/img/ee.png" alt="Foto de Matheus Candido" class="object-cover w-full h-full"/>
                    </div>
                    <div class="absolute inset-0 bg-violet-500 blur-[100px] opacity-30 rounded-full -z-10"></div>
                </div>
            </div>

            <div :class="[corDeFundo === 'bg-[#030712]' ? 'bg-black/30' : 'bg-gray-200/50', 'w-full py-10 border-y border-gray-800/20 relative overflow-hidden transition-colors duration-500']">
                <div class="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-current to-transparent" :class="corDeFundo === 'bg-[#030712]' ? 'text-[#030712]' : 'text-gray-50'"></div>
                <div class="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-current to-transparent" :class="corDeFundo === 'bg-[#030712]' ? 'text-[#030712]' : 'text-gray-50'"></div>

                <div class="animate-infinite-scroll flex gap-16 pl-16 w-max">
                    <div :class="[corSubTexto, 'flex gap-16 items-center font-bold text-lg uppercase tracking-wider font-mono transition-colors duration-500']">
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" class="w-8 h-8" alt="Laravel">Laravel</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-8 h-8" alt="Vue.js">Vue.js</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="w-8 h-8" alt="PHP">PHP</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-8 h-8 rounded" alt="JS">JavaScript</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" class="w-8 h-8" alt="Tailwind">Tailwind</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="w-8 h-8" alt="MySQL">MySQL</div>
                        <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="w-8 h-8" alt="Docker">Docker</div>
                    </div>
                    <div :class="[corSubTexto, 'flex gap-16 items-center font-bold text-lg uppercase tracking-wider font-mono transition-colors duration-500']" aria-hidden="true">
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" class="w-8 h-8" alt="Laravel">Laravel</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-8 h-8" alt="Vue.js">Vue.js</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="w-8 h-8" alt="PHP">PHP</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-8 h-8 rounded" alt="JS">JavaScript</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" class="w-8 h-8" alt="Tailwind">Tailwind</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="w-8 h-8" alt="MySQL">MySQL</div>
                         <div class="flex items-center gap-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="w-8 h-8" alt="Docker">Docker</div>
                    </div>
                </div>
            </div>

            <section id="sobre" :class="[corDeFundo, 'py-50 px-6 transition-colors duration-500']">
                <div class="max-w-4xl mx-auto flex flex-col items-center text-center ">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-[#6d28d9] p-1 mb-10 relative">
                            <img src="/public/img/minhafoto.jpg" alt="Matheus Candido" class="flex w-full h-full object-cover rounded-full"/>
                        </div>
                        <h2 class="font-mono text-[#4ade80] text-lg md:text-xl font-bold mb-5 tracking-wide">Sobre Mim</h2>
                        
                        <h3 :class="[corDoTexto, 'font-mono text-lg md:text-xl font-bold max-w-3xl mb-8 leading-relaxed transition-colors duration-500']">
                            Desenvolvedor Full Stack Especializado em Soluções Web Modernas
                        </h3>
                        
                        <p :class="[corSubTexto, 'text-sm md:text-base leading-relaxed max-w-3xl mb-8 font-medium font-sans transition-colors duration-500']">
                            Sou um desenvolvedor de software experiente, com foco em desenvolvimento Full Stack e soluções web modernas. Domino tecnologias atuais e possuo sólida experiência na construção de aplicações robustas, escaláveis e de alta performance.
                            Comprometido com o aprendizado contínuo, priorizo a entrega de código limpo, eficiente e bem estruturado. Estou totalmente disponível para relocação e pronto para contribuir em projetos desafiadores ao lado de equipes de tecnologia inovadoras.
                        </p>

                        <div :class="[corDoTexto, 'flex items-center gap-6']">
                            <a href="https://github.com/eslones" target="_blank" class="hover:text-violet-500 hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-12 h-12"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/matheus-candido0/" target="_blank" class="hover:text-violet-500 hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="mailto:matheuscandidocurriculo@gmail.com" class="hover:text-violet-500 hover:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-12 h-12"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            </a>
                        </div>
                </div>
            </section>

            <section id="projetos" :class="[corDeFundo, 'py-10 px-6 relative overflow-hidden transition-colors duration-500']">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div class="max-w-6xl mx-auto relative z-10">
                    <div class="flex justify-center mb-16">
                        <div class="border-2 border-dashed border-gray-700 px-8 py-3 rounded-lg relative">
                            <div class="absolute -top-1 -left-1 w-3 h-3 bg-violet-500 rounded-full"></div>
                            <div class="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full"></div>
                            <div class="absolute -bottom-1 -left-1 w-3 h-3 bg-violet-500 rounded-full"></div>
                            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-violet-500 rounded-full"></div>
                            <h2 class="font-mono text-[#4ade80] text-2xl font-bold tracking-widest uppercase">Projetos</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div v-for="(project, index) in projects" :key="index" 
                            :class="[corCard, 'group border rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] flex flex-col']">
                            
                            <div class="relative h-56 overflow-hidden border-b border-gray-800/10">
                                <div class="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                                <img :src="project.image" :alt="project.title" class="w-full h-full aspect-ratio transform group-hover:scale-105 transition duration-700"/>
                                <div class="absolute bottom-3 right-3 z-20 flex gap-2">
                                    <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 text-[10px] font-mono font-bold uppercase bg-black/80 text-violet-400 border border-violet-500/30 rounded backdrop-blur-md">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{{ project.date }}</span>
                                    <div class="h-px flex-grow mx-4 bg-gradient-to-r from-gray-800/30 to-transparent"></div>
                                </div>
                                <h3 :class="[corDoTexto, 'text-xl font-bold mb-3 group-hover:text-violet-400 transition']">{{ project.title }}</h3>
                                <p :class="[corSubTexto, 'text-sm leading-relaxed mb-6 flex-grow font-sans']">
                                    {{ project.description }}
                                </p>
                                <div class="flex gap-3 mt-auto">
                                    <a :href="project.githubLink" target="_blank" :class="[corDoTexto === 'text-white' ? 'text-white bg-white/5' : 'text-gray-800 bg-gray-200', 'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg hover:bg-violet-500 hover:text-white text-xs font-bold uppercase tracking-wide transition border border-transparent']">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                                        Código
                                    </a>
                                    <a :href="project.previewLink" target="_blank" class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold uppercase tracking-wide transition shadow-lg shadow-violet-900/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <a href="https://github.com/eslones?tab=repositories" target="_blank" class="group relative px-8 py-3 bg-violet-500/10 hover:bg-violet-500 text-violet-400 hover:text-white rounded-full font-bold transition-all duration-300 border border-violet-500/50 hover:border-violet-500 flex items-center gap-3">
                            <span class="uppercase tracking-wider text-sm">Ver todos projetos</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="contato" :class="[corDeFundo, 'py-24 px-6 transition-colors duration-500']">
                <div :class="[corCard, 'max-w-5xl mx-auto border rounded-3xl overflow-hidden p-8 lg:p-12 shadow-2xl relative transition-colors duration-500']">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div class="grid lg:grid-cols-2 gap-12 relative z-10">
                        <div class="flex flex-col justify-center">
                            <div class="flex items-center gap-6 mb-8">
                                <div class="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center p-1 shadow-xl shadow-violet-600/20">
                                   <img src="/public/img/contact.png" alt="Avatar" class="w-full h-full object-cover rounded-full border-2 border-white/10"/>
                                </div>
                            </div>
                            
                            <h3 class="font-mono text-[#4ade80] text-xl font-bold tracking-wide mb-3">Contato</h3>
                            <h2 :class="[corDoTexto, 'text-3xl font-bold mb-4 leading-tight']">Gostou do meu trabalho? Vamos trabalhar juntos!</h2>
                            
                            <p :class="[corSubTexto, 'text-sm leading-relaxed mb-8']">
                                Estou sempre aberto a um bate-papo. Mande um e-mail para 
                                <a href="mailto:matheuscandidocurriculo@gmail.com" class="text-violet-400 hover:underline">matheuscandidocurriculo@gmail.com</a>
                                ou me chame nas redes sociais.
                            </p>

                            <div :class="[corDoTexto, 'flex gap-6']">
                                <a href="https://github.com/eslones" target="_blank" class="hover:text-violet-500 hover:scale-110 transition duration-300">
                                    <svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/matheus-candido0/" target="_blank" class="hover:text-violet-500 hover:scale-110 transition duration-300">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="mailto:matheuscandidocurriculo@gmail.com" class="hover:text-violet-500 hover:scale-110 transition duration-300">
                                    <svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                </a>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center">
                            <form @submit.prevent class="space-y-4">
                                <div>
                                    <label for="name" class="sr-only">Nome</label>
                                    <input type="text" id="name" v-model="form.name" placeholder="Nome" :class="[corDeFundo === 'bg-[#030712]' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-900 border border-gray-300', 'w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-500 font-medium']">
                                </div>
                                <div>
                                    <label for="email" class="sr-only">E-mail</label>
                                    <input type="email" id="email" v-model="form.email" placeholder="E-mail" :class="[corDeFundo === 'bg-[#030712]' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-900 border border-gray-300', 'w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-500 font-medium']">
                                </div>
                                <div>
                                    <label for="message" class="sr-only">Mensagem</label>
                                    <textarea id="message" rows="5" v-model="form.message" placeholder="Sua mensagem aqui" :class="[corDeFundo === 'bg-[#030712]' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-900 border border-gray-300', 'w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-500 font-medium resize-none']"></textarea>
                                </div>
                                <div class="flex justify-end">
                                    <button type="submit" class="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-600/30">
                                        Enviar mensagem 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        
        <footer :class="[corDeFundo, 'border-t border-white/10 pt-10 pb-10 transition-colors duration-500']">
            <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div class="text-gray-400 text-sm">
                    Matheus Candido 2025 <span class="text-violet-500">💜</span>.
                </div>

                <div :class="[corSubTexto, 'flex items-center gap-8']">
                    <a href="https://github.com/eslones" target="_blank" class="hover:text-violet-500 transition text-sm">GitHub</a>
                    <a href="https://www.linkedin.com/in/matheus-candido0/" target="_blank" class="hover:text-violet-500 transition text-sm">LinkedIn</a>
                    <a href="mailto:matheuscandidocurriculo@gmail.com" class="hover:text-violet-500 transition text-sm">email</a>
                    
                    <button @click="scrollToTop" class="p-2 rounded-lg border border-gray-500/30 hover:border-violet-500 hover:text-violet-500 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>

    </div>
<<<<<<< HEAD
</template>
=======
</template>
>>>>>>> 2f192f16c5511475a5cde18d5ee2e91ea7d670e4
