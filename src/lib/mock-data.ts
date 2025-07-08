// @/lib/mock-data.ts

// This file centralizes all mock data for the application, acting as a pseudo-database.

// =================================================================
// MANUFACTURERS DATA
// =================================================================
export const allManufacturers = [
  { slug: 'alpha-dynamics', logoUrl: 'https://placehold.co/128x128/1A237E/FFFFFF.png', coverUrl: 'https://placehold.co/1200x300/1A237E/FFFFFF.png', name: 'Alpha Dynamics', description: 'Líder em automação industrial e robótica avançada.', productCount: 125, mainCategory: 'Robótica', email: 'contato@alphadynamics.com', phone: '+55 (11) 98765-4321', website: 'https://alphadynamics.com', status: 'Ativo', joinDate: '15/01/2023' },
  { slug: 'beta-systems', logoUrl: 'https://placehold.co/128x128/FF9800/FFFFFF.png', coverUrl: 'https://placehold.co/1200x300/FF9800/FFFFFF.png', name: 'Beta Systems', description: 'Especialista em sensores de alta precisão e sistemas de controle.', productCount: 340, mainCategory: 'Sensores', email: 'vendas@betasystems.ind', phone: '+55 (21) 91234-5678', website: 'https://betasystems.ind', status: 'Ativo', joinDate: '20/02/2023' },
  { slug: 'gamma-tech', logoUrl: 'https://placehold.co/128x128/4CAF50/FFFFFF.png', coverUrl: 'https://placehold.co/1200x300/4CAF50/FFFFFF.png', name: 'Gamma Tech', description: 'Inovação em componentes pneumáticos e hidráulicos.', productCount: 210, mainCategory: 'Pneumática', email: 'comercial@gammatech.com.br', phone: '+55 (31) 98888-7777', website: 'https://gammatech.com.br', status: 'Ativo', joinDate: '05/03/2023' },
  { slug: 'delta-solutions', logoUrl: 'https://placehold.co/128x128/F44336/FFFFFF.png', coverUrl: 'https://placehold.co/1200x300/F44336/FFFFFF.png', name: 'Delta Solutions', description: 'Soluções completas em motores elétricos e drives.', productCount: 180, mainCategory: 'Motores', email: 'info@deltasolutions.com', phone: '+55 (41) 99999-0000', website: 'https://deltasolutions.com', status: 'Pendente', joinDate: '10/04/2023' },
  { slug: 'omega-industries', logoUrl: 'https://placehold.co/128x128/9C27B0/FFFFFF.png', coverUrl: 'https://placehold.co/1200x300/9C27B0/FFFFFF.png', name: 'Omega Industries', description: 'Fabricante global de conectores e cabos industriais.', productCount: 450, mainCategory: 'Conectores', email: 'suporte@omegabr.com', phone: '+55 (51) 98765-1111', website: 'https://omegabr.com', status: 'Inativo', joinDate: '12/05/2023' },
  { slug: 'zeta-robotics', logoUrl: 'https://placehold.co/128x128/00BCD4/FFFFFF.png', name: 'Zeta Robotics', description: 'Sistemas de visão computacional para controle de qualidade.', productCount: 80, mainCategory: 'Visão', status: 'Ativo', joinDate: '22/06/2023' },
  { slug: 'eta-power', logoUrl: 'https://placehold.co/128x128/E91E63/FFFFFF.png', name: 'Eta Power', description: 'Fontes de alimentação e soluções de energia para a indústria.', productCount: 150, mainCategory: 'Energia', status: 'Ativo', joinDate: '30/07/2023' },
  { slug: 'theta-fluidics', logoUrl: 'https://placehold.co/128x128/8BC34A/FFFFFF.png', name: 'Theta Fluidics', description: 'Bombas e sistemas de gerenciamento de fluidos.', productCount: 110, mainCategory: 'Bombas', status: 'Ativo', joinDate: '11/08/2023' },
];

export const featuredManufacturers = allManufacturers.slice(0, 4);

export const manufacturersData: { [key: string]: any } = allManufacturers.reduce((acc, m) => {
    acc[m.slug] = {
        ...m,
        stats: { // generating random stats for detail pages
            products: m.productCount,
            quoteRequests: Math.floor(Math.random() * 200),
            totalViews: Math.floor(Math.random() * 25000),
        },
    };
    return acc;
}, {} as { [key: string]: any });

// =================================================================
// PRODUCTS DATA
// =================================================================
export const allProducts = [
  {
    id: '1',
    name: 'Sensor de Proximidade Indutivo',
    manufacturer: 'Alpha Dynamics',
    manufacturerSlug: 'alpha-dynamics',
    price: 150.00,
    has3d: true,
    sku: 'AD-SN-IND-001',
    category: 'Sensores',
    status: 'Publicado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Um sensor de proximidade indutivo de alta performance, projetado para detectar objetos metálicos sem contato físico. Ideal para aplicações de automação industrial, contagem de peças e controle de posição em ambientes hostis.',
    images: [
      { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista frontal do sensor' },
      { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Vista lateral do sensor' },
      { id: 3, url: 'https://placehold.co/600x600.png', alt: 'Diagrama de conexão' },
    ],
    specifications: [
      { key: 'Tipo de Detecção', value: 'Indutivo' },
      { key: 'Distância de Detecção', value: '8mm' },
      { key: 'Tensão de Operação', value: '10-30 VDC' },
      { key: 'Tipo de Saída', value: 'NPN, Normalmente Aberto (NO)' },
      { key: 'Grau de Proteção', value: 'IP67' },
    ],
  },
  {
    id: '2',
    name: 'Atuador Linear Elétrico',
    manufacturer: 'Beta Systems',
    manufacturerSlug: 'beta-systems',
    price: 850.50,
    has3d: false,
    sku: 'BS-AT-LIN-001',
    category: 'Atuadores',
    status: 'Rascunho',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Atuador linear elétrico robusto para cargas médias. Oferece controle de posição preciso e é uma alternativa limpa e eficiente para sistemas pneumáticos e hidráulicos.',
    images: [
      { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista do atuador linear' },
      { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Atuador em aplicação' },
    ],
    specifications: [
      { key: 'Força Máxima', value: '2000N' },
      { key: 'Velocidade Máxima', value: '50 mm/s' },
      { key: 'Curso Disponível', value: '100mm, 200mm, 300mm' },
      { key: 'Tensão de Operação', value: '24 VDC' },
      { key: 'Grau de Proteção', value: 'IP54' },
    ],
  },
  {
    id: '3',
    name: 'Controlador Lógico Programável',
    manufacturer: 'Gamma Tech',
    manufacturerSlug: 'gamma-tech',
    price: 1200.00,
    has3d: true,
    sku: 'GT-CLP-COMP-01',
    category: 'Controladores',
    status: 'Publicado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'CLP compacto e poderoso com múltiplas entradas e saídas. Suporta programação em Ladder e Structured Text, ideal para automação de pequenas e médias máquinas.',
    images: [
      { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista frontal do CLP' },
      { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Terminais de conexão' },
      { id: 3, url: 'https://placehold.co/600x600.png', alt: 'CLP montado em trilho DIN' },
    ],
    specifications: [
      { key: 'Entradas Digitais', value: '14' },
      { key: 'Saídas a Relé', value: '10' },
      { key: 'Porta de Comunicação', value: 'Ethernet, RS-485' },
      { key: 'Memória de Programa', value: '64k steps' },
      { key: 'Alimentação', value: '24 VDC' },
    ],
  },
  {
    id: '4',
    name: 'Motor de Passo NEMA 23',
    manufacturer: 'Delta Solutions',
    manufacturerSlug: 'delta-solutions',
    price: 320.75,
    has3d: true,
    sku: 'DS-MOT-STP-23',
    category: 'Motores',
    status: 'Publicado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Motor de passo de alto torque NEMA 23, oferecendo precisão e repetibilidade excepcionais para aplicações de CNC, impressão 3D e automação de máquinas. Construção robusta para longa vida útil.',
    images: [
      { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista frontal do motor' },
      { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Vista traseira com conectores' },
    ],
    specifications: [
        { key: 'Tamanho do Flange', value: 'NEMA 23 (57mm x 57mm)' },
        { key: 'Ângulo do Passo', value: '1.8°' },
        { key: 'Torque de Retenção', value: '1.9 Nm' },
        { key: 'Número de Fios', value: '4' },
        { key: 'Corrente por Fase', value: '2.8A' },
    ],
  },
  {
    id: '5',
    name: 'Válvula Solenoide 5/2 Vias',
    manufacturer: 'Omega Industries',
    manufacturerSlug: 'omega-industries',
    price: 95.00,
    has3d: false,
    sku: 'OI-VAL-SOL-52',
    category: 'Válvulas',
    status: 'Arquivado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Válvula solenoide de 5 portas e 2 posições, acionada por simples solenoide com retorno por mola. Confiável para controle de cilindros pneumáticos de dupla ação.',
    images: [
        { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Válvula solenoide' },
    ],
    specifications: [
        { key: 'Tipo de Válvula', value: '5/2 Vias, Simples Solenoide' },
        { key: 'Fluido', value: 'Ar comprimido filtrado' },
        { key: 'Pressão de Trabalho', value: '1.5 a 8 bar' },
        { key: 'Tensão da Bobina', value: '24VDC / 110VAC / 220VAC' },
        { key: 'Conexão', value: 'G1/4"' },
    ],
  },
  {
    id: '6',
    name: 'Sensor Fotoelétrico Difuso',
    manufacturer: 'Alpha Dynamics',
    manufacturerSlug: 'alpha-dynamics',
    price: 210.00,
    has3d: true,
    sku: 'AD-SN-FOTO-002',
    category: 'Sensores',
    status: 'Rascunho',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Sensor fotoelétrico de modo difuso com supressão de fundo. Detecção confiável de objetos de diferentes cores e superfícies, ignorando objetos ao fundo.',
    images: [
        { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista do sensor fotoelétrico' },
        { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Diagrama de funcionamento' },
    ],
    specifications: [
        { key: 'Modo de Detecção', value: 'Difuso com Supressão de Fundo' },
        { key: 'Distância Sensora', value: '5 a 300 mm' },
        { key: 'Fonte de Luz', value: 'LED Vermelho' },
        { key: 'Tipo de Saída', value: 'PNP, Normalmente Aberto (NO)' },
        { key: 'Tempo de Resposta', value: '< 1 ms' },
    ],
  },
  {
    id: '7',
    name: 'Conversor de Frequência',
    manufacturer: 'Delta Solutions',
    manufacturerSlug: 'delta-solutions',
    price: 990.00,
    has3d: false,
    sku: 'DS-INV-CFW300',
    category: 'Controladores',
    status: 'Publicado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Conversor de frequência vetorial para motores de indução trifásicos. Permite controle preciso de velocidade e torque, resultando em economia de energia e maior vida útil do motor.',
    images: [
        { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Vista frontal do conversor de frequência' },
        { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Painel de controle do conversor' },
    ],
    specifications: [
        { key: 'Potência', value: '1.5 kW / 2 cv' },
        { key: 'Tensão de Alimentação', value: '220V Monofásico/Trifásico' },
        { key: 'Controle', value: 'V/f e Vetorial Sensorless' },
        { key: 'Frequência de Saída', value: '0 a 400 Hz' },
        { key: 'IHM Remota', value: 'Opcional' },
    ],
  },
  {
    id: '8',
    name: 'Cilindro Pneumático ISO 15552',
    manufacturer: 'Gamma Tech',
    manufacturerSlug: 'gamma-tech',
    price: 450.00,
    has3d: true,
    sku: 'GT-CIL-ISO-50-100',
    category: 'Atuadores',
    status: 'Arquivado',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Cilindro pneumático de dupla ação conforme a norma ISO 15552. Possui êmbolo magnético e amortecimento de final de curso ajustável para um funcionamento suave e preciso.',
    images: [
        { id: 1, url: 'https://placehold.co/600x600.png', alt: 'Cilindro pneumático' },
        { id: 2, url: 'https://placehold.co/600x600.png', alt: 'Detalhe do amortecimento' },
    ],
    specifications: [
        { key: 'Norma', value: 'ISO 15552' },
        { key: 'Diâmetro do Êmbolo', value: '50 mm' },
        { key: 'Curso', value: '100 mm' },
        { key: 'Ação', value: 'Dupla Ação' },
        { key: 'Amortecimento', value: 'Ajustável em ambos os lados' },
    ],
  },
];

export const productsData: { [key: string]: any } = allProducts.reduce((acc, p) => {
    acc[p.id] = {
        ...p,
        stats: { // generating random stats for detail pages
            views: Math.floor(Math.random() * 5000) + 500,
            quotes: Math.floor(Math.random() * 150) + 10,
            conversion: Math.random() * 5,
        },
        recentQuotes: [
            { id: `Q-00${Math.floor(Math.random() * 900) + 100}`, company: 'Indústrias Acme', date: `${Math.floor(Math.random() * 5) + 1} dias atrás` },
        ]
    };
    return acc;
}, {} as { [key: string]: any });

// =================================================================
// USER / GENERIC DATA
// =================================================================

export const faqs = [
    { question: "Como faço para solicitar um orçamento?", answer: "Você pode adicionar produtos ao seu pedido de orçamento clicando no botão 'Adicionar ao Orçamento' em cada produto. Depois, acesse a página de orçamento pelo ícone do carrinho no cabeçalho e preencha o formulário." },
    { question: "Vocês trabalham com modelos 3D customizados?", answer: "Sim, muitos de nossos fabricantes parceiros oferecem serviços de customização. Entre em contato conosco com os detalhes do seu projeto para que possamos avaliar a viabilidade." },
    { question: "Qual é o prazo de entrega?", answer: "O prazo de entrega varia dependendo do produto e do fabricante. Após a solicitação de orçamento, nossa equipe informará os prazos estimados para cada item." },
    { question: "É possível se tornar um fabricante parceiro?", answer: "Com certeza! Estamos sempre em busca de novos parceiros de qualidade. Por favor, preencha o formulário de contato nesta página com o assunto 'Parceria' e entraremos em contato." },
];

export const benefits = [
  { iconName: 'Package', title: 'Catálogo Extenso', description: 'Milhares de produtos de centenas de fabricantes, tudo em um só lugar.' },
  { iconName: 'Factory', title: 'Qualidade Garantida', description: 'Trabalhamos apenas com fabricantes verificados e de alta reputação no mercado.' },
  { iconName: 'Users', title: 'Suporte Especializado', description: 'Nossa equipe está pronta para ajudar a encontrar a solução perfeita para seu projeto.' },
];

export const teamMembers = [
    { name: "João Silva", role: "CEO & Fundador", imageUrl: "https://placehold.co/400x400.png" },
    { name: "Maria Oliveira", role: "CTO & Co-fundadora", imageUrl: "https://placehold.co/400x400.png" },
    { name: "Carlos Pereira", role: "Diretor de Operações", imageUrl: "https://placehold.co/400x400.png" },
    { name: "Ana Costa", role: "Head de Parcerias", imageUrl: "https://placehold.co/400x400.png" },
];

export const timelineEvents = [
    { year: "2021", event: "A ideia do MetaCraft Hub nasce da necessidade de centralizar o mercado de componentes industriais." },
    { year: "2022", event: "Lançamento da plataforma beta com os 10 primeiros fabricantes parceiros." },
    { year: "2023", event: "Atingimos a marca de 100 fabricantes e 5.000 produtos no catálogo." },
    { year: "2024", event: "Introdução de novas ferramentas de IA para otimizar a busca e a geração de conteúdo." },
];


export const allUsers = [
    { id: 'usr_1', name: 'João Silva', email: 'joao.silva@example.com', role: 'Cliente', lastActivity: '2 horas atrás', company: 'Indústrias Acme', createdAt: '15/05/2024', avatar: 'https://placehold.co/100x100.png' },
    { id: 'usr_2', name: 'Maria Oliveira', email: 'maria.o@example.com', role: 'Cliente', lastActivity: '1 dia atrás', company: 'Soluções Técnicas Z', createdAt: '16/05/2024', avatar: 'https://placehold.co/100x100.png' },
    { id: 'usr_3', name: 'Carlos Pereira', email: 'carlos.p@alphadynamics.com', role: 'Fabricante', lastActivity: '5 minutos atrás', company: 'Alpha Dynamics', createdAt: '20/02/2023', avatar: 'https://placehold.co/100x100.png' },
    { id: 'usr_4', name: 'Ana Costa', email: 'ana.costa@admin.com', role: 'Admin', lastActivity: 'Agora mesmo', company: 'MetaCraft Hub', createdAt: '01/01/2023', avatar: 'https://placehold.co/100x100.png' },
    { id: 'usr_5', name: 'Pedro Martins', email: 'pedro.m@example.com', role: 'Cliente', lastActivity: '3 dias atrás', company: 'Construtora Forte', createdAt: '18/06/2024', avatar: 'https://placehold.co/100x100.png' },
];

export const getUserById = (id: string) => allUsers.find(u => u.id === id);


// =================================================================
// MOCK DATA FOR SPECIFIC PAGES
// =================================================================

// For /orcamento page
export const quoteItems = [
    { id: '1', imageUrl: 'https://placehold.co/400x400.png', name: 'Sensor de Proximidade Indutivo', manufacturer: 'Alpha Dynamics', quantity: 2 },
    { id: '4', imageUrl: 'https://placehold.co/400x400.png', name: 'Motor de Passo NEMA 23', manufacturer: 'Delta Solutions', quantity: 4 },
    { id: '8', imageUrl: 'https://placehold.co/400x400.png', name: 'Cilindro Pneumático ISO 15552', manufacturer: 'Gamma Tech', quantity: 1 },
];

// For admin/backup page
export const backupHistory = [
    { id: 'backup-20240726-0300.zip', date: '26/07/2024 03:00', size: '256 MB', status: 'Completo' },
    { id: 'backup-20240725-0300.zip', date: '25/07/2024 03:00', size: '254 MB', status: 'Completo' },
    { id: 'backup-20240724-0300.zip', date: '24/07/2024 03:00', size: '251 MB', status: 'Falhou' },
];

// For admin/logs page
export const mockLogs: { level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG', message: string, timestamp: Date }[] = [
    { level: 'ERROR', message: 'Falha ao conectar ao banco de dados: timeout', timestamp: new Date(Date.now() - 1000 * 60 * 2) },
    { level: 'WARN', message: 'O serviço de email está com latência elevada.', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { level: 'INFO', message: 'Usuário "Ana Costa" fez login.', timestamp: new Date(Date.now() - 1000 * 60 * 10) },
    { level: 'INFO', message: 'Novo fabricante "Zeta Robotics" adicionado.', timestamp: new Date(Date.now() - 1000 * 60 * 15) },
    { level: 'DEBUG', message: 'Payload da API de produtos recebido com sucesso.', timestamp: new Date(Date.now() - 1000 * 60 * 20) },
    { level: 'INFO', message: 'Backup do sistema concluído com sucesso.', timestamp: new Date(Date.now() - 1000 * 60 * 30) },
];

// For admin/reports page
export const quoteActivity = [
    { id: 'Q-00124', company: 'Indústrias Acme', manufacturer: 'Alpha Dynamics', status: 'Aguardando Resposta' },
    { id: 'Q-00123', company: 'Soluções Técnicas Z', manufacturer: 'Beta Systems', status: 'Respondido' },
    { id: 'Q-00122', company: 'Engenharia Alfa', manufacturer: 'Gamma Tech', status: 'Em Negociação' },
    { id: 'Q-00121', company: 'Construtora Forte', manufacturer: 'Alpha Dynamics', status: 'Concluído' },
];

// For fabricante/orcamentos/[id] page
export const quoteDetailData = {
    id: 'Q-00124',
    date: '20 de Julho de 2024',
    status: 'Aguardando Resposta',
    customer: {
        name: 'Carlos Mendes',
        company: 'Indústrias Acme',
        email: 'carlos.mendes@acme.com',
        phone: '+55 (11) 91234-5678'
    },
    items: [
        { id: '1', imageUrl: 'https://placehold.co/400x400.png', name: 'Sensor de Proximidade Indutivo', sku: 'AD-SN-IND-001', quantity: 5 },
        { id: '6', imageUrl: 'https://placehold.co/400x400.png', name: 'Sensor Fotoelétrico Difuso', sku: 'AD-SN-FOTO-002', quantity: 10 },
    ],
    notes: 'Preciso destes itens com urgência para um novo projeto de automação de linha de montagem. Favor informar o prazo de entrega.'
};

// For fabricante/orcamentos page
export const recentQuotes = [
    { id: 'Q-00124', company: 'Indústrias Acme', date: '20/07/2024', status: 'Aguardando Resposta' },
    { id: 'Q-00123', company: 'Soluções Técnicas Z', date: '19/07/2024', status: 'Respondido' },
    { id: 'Q-00121', company: 'Construtora Forte', date: '18/07/2024', status: 'Respondido' },
];
