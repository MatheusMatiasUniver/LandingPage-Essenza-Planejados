// ========================================
// ESSENZA PLANEJADOS — Dados Centralizados
// ========================================
// Este arquivo contém TODOS os textos, números e dados editáveis da landing page.
// Para alterar qualquer conteúdo do site, edite apenas este arquivo.

export const company = {
  name: 'Essenza Planejados',
  tagline: 'Móveis Planejados de Alto Padrão',
  phone: '(11) 99999-9999', // Substituir pelo número real
  whatsapp: '5511999999999', // Substituir pelo número real (apenas números)
  email: 'contato@essenzaplanejados.com.br',
  address: 'São Paulo, SP', // Substituir pelo endereço real
  instagram: 'https://instagram.com/essenzaplanejados',
  facebook: 'https://facebook.com/essenzaplanejados',
  pinterest: 'https://pinterest.com/essenzaplanejados',
};

export const seo = {
  title: 'Essenza Planejados — Móveis Planejados de Alto Padrão',
  description:
    'Há mais de 9 anos transformando ambientes com móveis planejados sofisticados, funcionais e personalizados. Cozinhas, dormitórios, closets, home office e ambientes corporativos.',
  ogImage: '/og-image.jpg', // Substituir pela imagem real
};

export const nav = {
  links: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Processo', href: '#processo' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],
  cta: {
    label: 'Solicitar Orçamento',
    href: '#contato',
  },
};

export const hero = {
  headline: 'Ambientes que refletem quem você é',
  subheadline:
    'Há mais de 9 anos projetando e executando móveis planejados com sofisticação, funcionalidade e atenção a cada detalhe.',
  ctaPrimary: {
    label: 'Solicitar Orçamento Gratuito',
    href: '#contato',
  },
  ctaSecondary: {
    label: 'Conheça Nossos Projetos',
    href: '#portfolio',
  },
  badges: [
    '+9 anos de experiência',
    '+450 projetos entregues',
    'Atendimento consultivo',
  ],
};

export const stats = [
  {
    number: '+9',
    label: 'Anos de Mercado',
    description: 'Experiência consolidada',
  },
  {
    number: '+450',
    label: 'Projetos Entregues',
    description: 'Residenciais, comerciais e corporativos',
  },
  {
    number: '3',
    label: 'Segmentos Atendidos',
    description: 'Residencial, comercial e corporativo',
  },
  {
    number: '100%',
    label: 'Personalizado',
    description: 'Cada projeto é único',
  },
];

export const about = {
  sectionLabel: 'Nossa História',
  title: 'Uma trajetória construída com confiança e qualidade',
  paragraphs: [
    'A Essenza Planejados nasceu de uma paixão genuína por transformar ambientes. O que começou como uma operação próxima e artesanal, com atenção obsessiva a cada detalhe, rapidamente se tornou referência em móveis planejados de alto padrão.',
    'Ao longo de mais de 9 anos, crescemos de forma orgânica — impulsionados por indicações de clientes satisfeitos e pela reputação construída projeto a projeto. Cada ambiente entregue carrega o compromisso com a excelência que nos define desde o primeiro dia.',
    'Hoje, somos uma empresa estruturada, com equipe especializada, processos definidos e capacidade de atender múltiplos projetos simultaneamente — sem jamais abrir mão do atendimento próximo e personalizado que nos trouxe até aqui.',
  ],
  highlights: [
    {
      title: 'Origem',
      description: 'Nascemos do cuidado artesanal e da atenção aos detalhes',
    },
    {
      title: 'Crescimento',
      description: 'Evoluímos por meio de indicações e confiança dos clientes',
    },
    {
      title: 'Hoje',
      description: 'Equipe estruturada com processos maduros e alto padrão',
    },
  ],
};

export const structure = {
  sectionLabel: 'Estrutura',
  title: 'Uma empresa preparada para o seu projeto',
  subtitle:
    'Combinamos atendimento consultivo com capacidade técnica para entregar projetos complexos com organização e excelência.',
  items: [
    {
      icon: 'clipboard',
      title: 'Atendimento Consultivo',
      description:
        'Ouvimos suas necessidades, entendemos seu estilo de vida e traduzimos isso em um projeto que faz sentido para você.',
    },
    {
      icon: 'ruler',
      title: 'Planejamento Técnico',
      description:
        'Cada centímetro é pensado. Utilizamos ferramentas profissionais para garantir precisão e aproveitamento máximo do espaço.',
    },
    {
      icon: 'settings',
      title: 'Execução Organizada',
      description:
        'Processos definidos, cronograma respeitado e comunicação transparente em todas as etapas do projeto.',
    },
    {
      icon: 'shield',
      title: 'Acompanhamento Completo',
      description:
        'Do primeiro contato à instalação final, você tem um ponto de contato dedicado que acompanha cada detalhe.',
    },
  ],
};

export const solutions = {
  sectionLabel: 'Soluções',
  title: 'Ambientes que transformamos',
  subtitle:
    'Projetamos e executamos móveis planejados para todos os ambientes da sua casa ou empresa.',
  items: [
    {
      title: 'Cozinhas Planejadas',
      description:
        'Funcionalidade e sofisticação para o coração da sua casa. Projetos que otimizam espaço e elevam a experiência de cozinhar.',
      // image: substituir pela imagem real
    },
    {
      title: 'Dormitórios',
      description:
        'Ambientes de descanso projetados com conforto e elegância. Cada detalhe pensado para o seu bem-estar.',
    },
    {
      title: 'Closets e Armários',
      description:
        'Organização inteligente e design sofisticado. Espaços que facilitam sua rotina e valorizam seu guarda-roupa.',
    },
    {
      title: 'Salas e Painéis',
      description:
        'Painéis, estantes e móveis que transformam a sala no ambiente mais acolhedor da casa.',
    },
    {
      title: 'Home Office',
      description:
        'Espaços de trabalho funcionais e inspiradores. Produtividade com conforto e estilo.',
    },
    {
      title: 'Ambientes Corporativos',
      description:
        'Recepções, salas de reunião e escritórios que comunicam profissionalismo e identidade de marca.',
    },
    {
      title: 'Espaços Comerciais',
      description:
        'Lojas, clínicas e consultórios projetados para encantar clientes e otimizar a operação.',
    },
  ],
};

export const differentials = {
  sectionLabel: 'Diferenciais',
  title: 'Por que a Essenza?',
  subtitle:
    'O que nos diferencia vai além do produto. É a forma como conduzimos cada projeto.',
  items: [
    {
      icon: 'palette',
      title: 'Projeto 100% Personalizado',
      description:
        'Nada de catálogo. Cada projeto é criado do zero, pensado exclusivamente para o seu espaço e estilo de vida.',
    },
    {
      icon: 'maximize',
      title: 'Aproveitamento Inteligente',
      description:
        'Extraímos o máximo de cada centímetro. Espaços que pareciam inutilizáveis ganham função e beleza.',
    },
    {
      icon: 'heart',
      title: 'Atendimento Próximo',
      description:
        'Você fala diretamente com quem cuida do seu projeto. Sem intermediários, sem ruídos.',
    },
    {
      icon: 'award',
      title: 'Acabamento de Alto Padrão',
      description:
        'Materiais selecionados, ferragens de qualidade e acabamento impecável em cada detalhe.',
    },
    {
      icon: 'check-circle',
      title: 'Processo Estruturado',
      description:
        'Do briefing à instalação, cada etapa é planejada e executada com método e organização.',
    },
    {
      icon: 'briefcase',
      title: 'Experiência Diversificada',
      description:
        'Residencial, comercial e corporativo. Nossa experiência em diferentes segmentos enriquece cada novo projeto.',
    },
  ],
};

export const process = {
  sectionLabel: 'Como Funciona',
  title: 'Do sonho ao ambiente pronto',
  subtitle:
    'Um processo transparente e organizado, para que você acompanhe cada etapa com tranquilidade.',
  steps: [
    {
      number: '01',
      title: 'Primeiro Contato',
      description:
        'Você nos conta o que precisa. Entendemos o escopo, o prazo e suas expectativas para alinhar o projeto desde o início.',
    },
    {
      number: '02',
      title: 'Briefing e Levantamento',
      description:
        'Visitamos o local, realizamos medições precisas e aprofundamos o entendimento sobre seu estilo, necessidades e orçamento.',
    },
    {
      number: '03',
      title: 'Desenvolvimento do Projeto',
      description:
        'Criamos o projeto detalhado com renders e especificações técnicas. Você visualiza o resultado antes da produção.',
    },
    {
      number: '04',
      title: 'Ajustes e Aprovação',
      description:
        'Refinamos cada detalhe até que o projeto esteja exatamente como você imaginou. Só avançamos com sua aprovação total.',
    },
    {
      number: '05',
      title: 'Produção',
      description:
        'Seu projeto entra em produção com materiais de primeira qualidade. Cada peça é fabricada com precisão e cuidado.',
    },
    {
      number: '06',
      title: 'Entrega e Instalação',
      description:
        'Nossa equipe realiza a instalação completa, com atenção a cada detalhe. Você recebe o ambiente pronto para viver.',
    },
  ],
};

export const portfolio = {
  sectionLabel: 'Portfólio',
  title: 'Projetos que contam histórias',
  subtitle:
    'Cada projeto é único. Conheça alguns dos ambientes que transformamos.',
  categories: ['Todos', 'Cozinhas', 'Dormitórios', 'Closets', 'Salas', 'Corporativo'],
  // Os projetos usarão imagens placeholder — substituir pelas imagens reais
  projects: [
    {
      title: 'Cozinha Integrada — Residencial Alphaville',
      category: 'Cozinhas',
      // image: substituir pela imagem real
    },
    {
      title: 'Suíte Master — Condomínio Jardins',
      category: 'Dormitórios',
    },
    {
      title: 'Closet Planejado — Casa Alto de Pinheiros',
      category: 'Closets',
    },
    {
      title: 'Living Contemporâneo — Apartamento Itaim',
      category: 'Salas',
    },
    {
      title: 'Escritório Executivo — Faria Lima',
      category: 'Corporativo',
    },
    {
      title: 'Cozinha Gourmet — Casa Morumbi',
      category: 'Cozinhas',
    },
  ],
};

export const behindScenes = {
  sectionLabel: 'Bastidores',
  title: 'Por trás de cada entrega',
  subtitle:
    'Conheça o cuidado e a dedicação que colocamos em cada etapa do processo.',
  items: [
    {
      title: 'Planejamento detalhado',
      description: 'Cada projeto começa com estudo minucioso do espaço e das necessidades do cliente.',
    },
    {
      title: 'Equipe especializada',
      description: 'Profissionais experientes e dedicados em cada função — do projeto à instalação.',
    },
    {
      title: 'Materiais selecionados',
      description: 'Trabalhamos apenas com fornecedores de confiança e materiais de qualidade comprovada.',
    },
    {
      title: 'Controle de qualidade',
      description: 'Cada peça passa por inspeção rigorosa antes de chegar ao seu ambiente.',
    },
  ],
};

export const testimonials = {
  sectionLabel: 'Depoimentos',
  title: 'O que nossos clientes dizem',
  subtitle:
    'A confiança dos nossos clientes é nossa maior conquista.',
  items: [
    {
      name: 'Ana Carolina M.',
      role: 'Projeto residencial completo',
      text: 'A Essenza superou todas as expectativas. Desde o primeiro atendimento até a instalação, tudo foi conduzido com muita organização e profissionalismo. O resultado ficou ainda melhor do que imaginávamos.',
      rating: 5,
    },
    {
      name: 'Ricardo e Fernanda S.',
      role: 'Cozinha e área de serviço',
      text: 'Escolhemos a Essenza por indicação e não nos arrependemos. O projeto aproveitou cada centímetro da nossa cozinha e o acabamento é impecável. Recomendamos de olhos fechados.',
      rating: 5,
    },
    {
      name: 'Dr. Marcos Oliveira',
      role: 'Clínica odontológica',
      text: 'Precisávamos de um ambiente profissional e acolhedor para a clínica. A equipe entendeu perfeitamente o que queríamos e entregou no prazo combinado. Nossos pacientes elogiam o espaço constantemente.',
      rating: 5,
    },
    {
      name: 'Juliana P.',
      role: 'Apartamento na planta',
      text: 'Comprei meu primeiro apartamento e estava insegura com os planejados. A Essenza me acompanhou em tudo, explicou cada detalhe e o resultado ficou lindo. Me senti muito segura durante todo o processo.',
      rating: 5,
    },
  ],
};

export const faq = {
  sectionLabel: 'Dúvidas Frequentes',
  title: 'Perguntas que recebemos com frequência',
  items: [
    {
      question: 'Qual o prazo médio de um projeto de móveis planejados?',
      answer:
        'O prazo varia conforme a complexidade do projeto. Em geral, desde o primeiro contato até a instalação, o processo leva entre 45 e 90 dias. Projetos mais complexos podem levar mais tempo, e comunicamos isso de forma transparente desde o início.',
    },
    {
      question: 'Vocês atendem apartamentos na planta?',
      answer:
        'Sim! Atendemos muitos clientes que compram imóvel na planta. Podemos iniciar o projeto antes da entrega das chaves, otimizando o tempo e garantindo que tudo esteja pronto quando você se mudar.',
    },
    {
      question: 'Como funciona o orçamento?',
      answer:
        'O orçamento é gratuito e sem compromisso. Após entender suas necessidades e realizar o levantamento do espaço, apresentamos uma proposta detalhada com valores, materiais e prazos.',
    },
    {
      question: 'Vocês fazem projetos comerciais e corporativos?',
      answer:
        'Sim. Temos ampla experiência em projetos para escritórios, clínicas, consultórios, lojas e outros espaços comerciais. Entendemos as necessidades específicas de cada segmento.',
    },
    {
      question: 'Quais materiais vocês utilizam?',
      answer:
        'Trabalhamos com materiais de primeira qualidade — MDF de alta densidade, ferragens importadas, acabamentos em laca, vidro, espelho e madeira natural. Todos os materiais são selecionados com rigor.',
    },
    {
      question: 'Vocês oferecem garantia?',
      answer:
        'Sim. Todos os nossos projetos contam com garantia de fabricação e instalação. Os detalhes da garantia são formalizados em contrato, para sua total segurança.',
    },
    {
      question: 'Atendem em quais regiões?',
      answer:
        'Atendemos na Grande São Paulo e regiões próximas. Para projetos em outras localidades, entre em contato para avaliarmos a viabilidade.',
    },
  ],
};

export const finalCta = {
  title: 'Pronto para transformar seu ambiente?',
  subtitle:
    'Solicite um orçamento gratuito e descubra como podemos criar o ambiente perfeito para você.',
  ctaPrimary: {
    label: 'Solicitar Orçamento Gratuito',
    href: '#contato',
  },
  ctaWhatsApp: {
    label: 'Falar pelo WhatsApp',
    href: `https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para móveis planejados.')}`,
  },
  formFields: {
    name: 'Seu nome completo',
    email: 'Seu e-mail',
    phone: 'Seu telefone / WhatsApp',
    projectType: [
      'Residencial',
      'Comercial',
      'Corporativo',
    ],
    message: 'Conte um pouco sobre o que você precisa...',
    submit: 'Enviar Solicitação',
  },
};

export const footer = {
  description:
    'Transformando ambientes com sofisticação, funcionalidade e atenção a cada detalhe há mais de 9 anos.',
  quickLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ],
  legal: `© ${new Date().getFullYear()} Essenza Planejados. Todos os direitos reservados.`,
  institutional: 'Essenza Planejados — Transformando espaços em experiências.',
};
