export type Species = 'cachorro' | 'gato' | 'coelho' | 'cavalo';
export type AgeGroup = 'filhote' | 'jovem' | 'adulto' | 'senior';
export type Size = 'pequeno' | 'medio' | 'grande';
export type PetStatus = 'disponivel' | 'reservado' | 'em_adocao' | 'adotado';
export type TimelineEventType =
  | 'resgate'
  | 'veterinario'
  | 'vacinacao'
  | 'castracao'
  | 'vermifugacao'
  | 'banho_tosa'
  | 'disponivel'
  | 'reservado'
  | 'em_adocao'
  | 'adotado';

export interface TimelineEvent {
  date: string;
  type: TimelineEventType;
  title: string;
  description?: string;
}

export interface Pet {
  id: number;
  name: string;
  species: Species;
  breed: string;
  age: string;
  ageGroup: AgeGroup;
  size: Size;
  temperament: string[];
  color: string;
  sex: 'macho' | 'femea';
  location: string;
  imageUrl: string;
  status: PetStatus;
  description: string;
  timeline: TimelineEvent[];
}

export const PETS_DATA: Pet[] = [
  {
    id: 1,
    name: 'Mel',
    species: 'cachorro',
    breed: 'Golden Retriever',
    age: '2 anos',
    ageGroup: 'adulto',
    size: 'grande',
    temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
    color: 'Caramelo',
    sex: 'femea',
    location: 'São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Mel é uma Golden adorável, ótima com crianças e outros animais. Adora passear e brincar no parque.',
    timeline: [
      { date: '2024-02-10', type: 'resgate', title: 'Resgate', description: 'Encontrada em situação de abandono no Parque Ibirapuera, desnutrida mas sem ferimentos graves.' },
      { date: '2024-02-12', type: 'veterinario', title: 'Avaliação veterinária inicial', description: 'Exame clínico completo. Estado geral bom, apresentava desnutrição leve. Iniciado plano alimentar de recuperação.' },
      { date: '2024-02-25', type: 'vacinacao', title: 'Vacinação V8', description: 'Primeira dose da vacina óctupla aplicada com sucesso. Sem reações adversas.' },
      { date: '2024-03-10', type: 'castracao', title: 'Castração', description: 'Procedimento cirúrgico realizado sem complicações. Recuperação pós-operatória excelente.' },
      { date: '2024-03-20', type: 'vermifugacao', title: 'Vermifugação', description: 'Tratamento antiparasitário completo realizado.' },
      { date: '2024-04-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Mel completou todo o protocolo de saúde e está pronta para encontrar sua família definitiva!' },
    ],
  },
  {
    id: 2,
    name: 'Thor',
    species: 'cachorro',
    breed: 'Labrador',
    age: '3 anos',
    ageGroup: 'adulto',
    size: 'grande',
    temperament: ['Ativo', 'Brincalhão', 'Carinhoso'],
    color: 'Preto',
    sex: 'macho',
    location: 'Belo Horizonte, MG',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Thor é um Labrador cheio de energia. Ama nadar e fazer trilhas com a família.',
    timeline: [
      { date: '2023-08-15', type: 'resgate', title: 'Entrada no abrigo', description: 'Entregue pelo tutor anterior que precisou mudar para outro país sem condições de levá-lo.' },
      { date: '2023-08-18', type: 'veterinario', title: 'Avaliação veterinária', description: 'Saúde geral excelente. Animado e sociável com equipe e outros animais do abrigo.' },
      { date: '2023-09-01', type: 'vacinacao', title: 'Reforço V10', description: 'Vacinação óctupla e antirrábica em dia. Vermifugação realizada no mesmo dia.' },
      { date: '2023-09-15', type: 'castracao', title: 'Castração', description: 'Procedimento realizado com sucesso. Recuperação sem intercorrências.' },
      { date: '2023-10-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Thor está saudável, vacinado e castrado, pronto para sua nova aventura ao lado de uma família ativa!' },
    ],
  },
  {
    id: 3,
    name: 'Bob',
    species: 'cachorro',
    breed: 'Beagle',
    age: '1 ano',
    ageGroup: 'jovem',
    size: 'medio',
    temperament: ['Brincalhão', 'Ativo', 'Carinhoso'],
    color: 'Caramelo',
    sex: 'macho',
    location: 'Florianópolis, SC',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop',
    status: 'reservado',
    description: 'Bob é um Beagle curioso e animado. Adora explorar e farejar tudo ao redor.',
    timeline: [
      { date: '2024-06-01', type: 'resgate', title: 'Resgate', description: 'Encontrado sozinho na beira da estrada, com sinais de ter se perdido há alguns dias.' },
      { date: '2024-06-03', type: 'veterinario', title: 'Avaliação veterinária', description: 'Pequenas escoriações nos pés tratadas. Hidratação e alimentação iniciadas imediatamente.' },
      { date: '2024-06-20', type: 'vacinacao', title: 'Vacinação V8', description: 'Protocolo vacinal iniciado. Primeira dose aplicada com sucesso.' },
      { date: '2024-07-10', type: 'castracao', title: 'Castração', description: 'Procedimento cirúrgico realizado. Recuperação rápida e sem complicações.' },
      { date: '2024-08-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Bob recebeu alta médica e foi liberado para adoção após protocolo completo de saúde.' },
      { date: '2024-08-20', type: 'reservado', title: 'Reservado', description: 'Uma família de Florianópolis demonstrou interesse e iniciou o processo. Aguardando visita domiciliar.' },
    ],
  },
  {
    id: 4,
    name: 'Bolt',
    species: 'cachorro',
    breed: 'Border Collie',
    age: '6 meses',
    ageGroup: 'filhote',
    size: 'medio',
    temperament: ['Ativo', 'Brincalhão', 'Independente'],
    color: 'Preto',
    sex: 'macho',
    location: 'Porto Alegre, RS',
    imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Bolt é um filhote inteligentíssimo. Aprende comandos rapidamente e adora agility.',
    timeline: [
      { date: '2026-01-10', type: 'resgate', title: 'Resgate', description: 'Encontrado com a mãe e outros filhotes em situação de rua. Filhotes encaminhados ao abrigo após desmame.' },
      { date: '2026-01-12', type: 'veterinario', title: 'Avaliação pediátrica', description: 'Exame completo do filhote. Desenvolvimento saudável, peso e reflexos adequados para a idade.' },
      { date: '2026-01-25', type: 'vacinacao', title: 'V8 — 1ª dose', description: 'Primeira dose da vacina óctupla aplicada. Próxima dose agendada para 30 dias.' },
      { date: '2026-02-25', type: 'vacinacao', title: 'V8 — 2ª dose', description: 'Segunda dose aplicada com sucesso. Protocolo vacinal em andamento.' },
      { date: '2026-03-15', type: 'disponivel', title: 'Disponível para adoção', description: 'Bolt completou as doses iniciais e está pronto para ser adotado. Aguarda castração na idade adequada.' },
    ],
  },
  {
    id: 5,
    name: 'Princesa',
    species: 'cachorro',
    breed: 'Poodle',
    age: '5 anos',
    ageGroup: 'adulto',
    size: 'pequeno',
    temperament: ['Tranquilo', 'Carinhoso', 'Dócil'],
    color: 'Branco',
    sex: 'femea',
    location: 'Recife, PE',
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Princesa é uma Poodle delicada e amorosa. Perfeita para apartamentos e famílias tranquilas.',
    timeline: [
      { date: '2021-06-10', type: 'resgate', title: 'Resgate — caso de maus-tratos', description: 'Apreendida pelo órgão de proteção animal após denúncia de maus-tratos. Chegou com pelagem em péssimo estado.' },
      { date: '2021-06-15', type: 'veterinario', title: 'Tratamento inicial', description: 'Avaliação completa. Iniciado tratamento de pele e acompanhamento nutricional intensivo.' },
      { date: '2021-07-01', type: 'veterinario', title: 'Retorno veterinário', description: 'Melhora significativa. Pelagem se recuperando e peso estabilizado dentro do ideal.' },
      { date: '2021-07-15', type: 'vacinacao', title: 'Vacinação V8 + Antirrábica', description: 'Protocolo vacinal completo aplicado após estabilização do quadro de saúde.' },
      { date: '2021-08-01', type: 'castracao', title: 'Castração', description: 'Cirurgia realizada com sucesso após liberação veterinária. Recuperação tranquila.' },
      { date: '2021-08-20', type: 'banho_tosa', title: 'Banho e tosa completo', description: 'Primeira tosa profissional após recuperação da pelagem. Ficou linda!' },
      { date: '2021-09-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Princesa se recuperou completamente e está pronta para uma vida cheia de amor e cuidado.' },
    ],
  },
  {
    id: 6,
    name: 'Luna',
    species: 'gato',
    breed: 'Siamês',
    age: '1 ano',
    ageGroup: 'jovem',
    size: 'pequeno',
    temperament: ['Independente', 'Carinhoso', 'Tranquilo'],
    color: 'Cinza',
    sex: 'femea',
    location: 'Rio de Janeiro, RJ',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Luna é elegante e misteriosa. Adora ficar no colo ao entardecer e observar o mundo pela janela.',
    timeline: [
      { date: '2025-07-05', type: 'resgate', title: 'Resgate', description: 'Filhote encontrada sozinha em um estacionamento, com aproximadamente 6 semanas de vida.' },
      { date: '2025-07-08', type: 'veterinario', title: 'Avaliação inicial', description: 'Saúde geral boa. Iniciada alimentação úmida específica para filhotes. Nenhuma doença detectada.' },
      { date: '2025-07-20', type: 'vacinacao', title: 'Tríplice Felina — 1ª dose', description: 'Primeira dose da vacina tríplice felina. Sem reações.' },
      { date: '2025-08-20', type: 'vacinacao', title: 'Tríplice Felina — 2ª dose + Antirrábica', description: 'Reforço da tríplice felina e aplicação da antirrábica. Protocolo vacinal completo.' },
      { date: '2025-09-15', type: 'castracao', title: 'Castração', description: 'Procedimento realizado com sucesso. Luna se recuperou rapidamente e voltou à rotina em 2 dias.' },
      { date: '2025-10-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Luna está saudável, vacinada e castrada. Pronta para iluminar o lar de uma família carinhosa!' },
    ],
  },
  {
    id: 7,
    name: 'Simba',
    species: 'gato',
    breed: 'Maine Coon',
    age: '2 anos',
    ageGroup: 'adulto',
    size: 'medio',
    temperament: ['Carinhoso', 'Dócil', 'Brincalhão'],
    color: 'Caramelo',
    sex: 'macho',
    location: 'Campinas, SP',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Simba é um gigante gentil. Adora assistir séries no colo do dono e ronronar no friozinho.',
    timeline: [
      { date: '2024-05-20', type: 'resgate', title: 'Entrada no abrigo', description: 'Doado pelo tutor que precisou viajar definitivamente para o exterior e não pôde levá-lo.' },
      { date: '2024-05-22', type: 'veterinario', title: 'Avaliação veterinária', description: 'Saúde excelente. Gato bem cuidado, sociável e acostumado com ambientes internos.' },
      { date: '2024-06-05', type: 'vacinacao', title: 'Reforço anual — Tríplice Felina', description: 'Reforço vacinal anual aplicado. Vermifugação realizada no mesmo dia.' },
      { date: '2024-07-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Simba está saudável, vacinado e castrado. Em busca de um colo quentinho para chamar de seu!' },
    ],
  },
  {
    id: 8,
    name: 'Bela',
    species: 'gato',
    breed: 'Persa',
    age: '4 anos',
    ageGroup: 'adulto',
    size: 'pequeno',
    temperament: ['Tranquilo', 'Independente', 'Dócil'],
    color: 'Branco',
    sex: 'femea',
    location: 'Porto Alegre, RS',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Bela é serena e elegante. Prefere ambientes tranquilos e adora ser escovada diariamente.',
    timeline: [
      { date: '2022-04-15', type: 'resgate', title: 'Resgate — maus-tratos', description: 'Resgatada de um ambiente de negligência grave. Pelagem seriamente comprometida e quadro de dermatite.' },
      { date: '2022-04-20', type: 'veterinario', title: 'Tratamento dermatológico', description: 'Iniciado tratamento intensivo de pele e pelagem. Medicação tópica e oral prescrita.' },
      { date: '2022-05-05', type: 'veterinario', title: 'Retorno — controle dermatológico', description: 'Melhora expressiva. Pelagem branca começando a se recuperar. Gastrointestinal estabilizado.' },
      { date: '2022-05-20', type: 'vacinacao', title: 'Tríplice Felina + Antirrábica', description: 'Vacinação completa realizada após liberação veterinária.' },
      { date: '2022-06-10', type: 'castracao', title: 'Castração', description: 'Cirurgia de sucesso. Recuperação tranquila, condizente com o temperamento sereno da Bela.' },
      { date: '2022-07-01', type: 'disponivel', title: 'Disponível para adoção', description: 'Bela está completamente recuperada e irrecconhecível — linda, saudável e pronta para um lar calmo.' },
    ],
  },
  {
    id: 9,
    name: 'Coco',
    species: 'gato',
    breed: 'Angorá',
    age: '8 meses',
    ageGroup: 'filhote',
    size: 'pequeno',
    temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
    color: 'Laranja',
    sex: 'macho',
    location: 'Belo Horizonte, MG',
    imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Coco é laranjinha e cheio de energia. Adora brincar com bolinhas, cordas e fazer travessuras.',
    timeline: [
      { date: '2025-11-01', type: 'resgate', title: 'Resgate', description: 'Encontrado em uma caixa abandonada na frente de uma padaria, com aproximadamente 4 semanas de vida.' },
      { date: '2025-11-03', type: 'veterinario', title: 'Avaliação pediátrica', description: 'Filhote saudável, ativo e curioso. Peso levemente abaixo do ideal — plano alimentar intensivo iniciado.' },
      { date: '2025-11-20', type: 'vacinacao', title: 'Tríplice Felina — 1ª dose', description: 'Primeira dose vacinal aplicada. Coco não gostou muito da agulha, mas se recuperou rápido!' },
      { date: '2025-12-20', type: 'vacinacao', title: 'Tríplice Felina — 2ª dose', description: 'Reforço aplicado. Desenvolvimento dentro do esperado para a raça. Peso ideal atingido.' },
      { date: '2026-01-15', type: 'disponivel', title: 'Disponível para adoção', description: 'Coco está saudável e animado, esperando a família corajosa que vai embarcar nas travessuras dele!' },
    ],
  },
  {
    id: 10,
    name: 'Pipa',
    species: 'coelho',
    breed: 'Mini Lop',
    age: '8 meses',
    ageGroup: 'jovem',
    size: 'pequeno',
    temperament: ['Dócil', 'Carinhoso', 'Tranquilo'],
    color: 'Cinza',
    sex: 'femea',
    location: 'Curitiba, PR',
    imageUrl: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Pipa é uma coelha adorável. Adora ficar no colo durante o home office e adora cenouras.',
    timeline: [
      { date: '2025-11-10', type: 'resgate', title: 'Resgate', description: 'Encontrada dentro de uma caixa abandonada no portão de uma clínica veterinária.' },
      { date: '2025-11-12', type: 'veterinario', title: 'Avaliação veterinária', description: 'Exame geral realizado. Coelha saudável, dentes e garras em bom estado, sem parasitas externos.' },
      { date: '2025-11-25', type: 'vermifugacao', title: 'Vermifugação', description: 'Tratamento antiparasitário específico para coelhos realizado.' },
      { date: '2025-12-10', type: 'vacinacao', title: 'Vacinação — Mixomatose e RHD', description: 'Vacina contra mixomatose e doença hemorrágica viral do coelho aplicada com sucesso.' },
      { date: '2026-01-05', type: 'disponivel', title: 'Disponível para adoção', description: 'Pipa está pronta! Adora atenção e será a companheira perfeita para quem trabalha em casa.' },
    ],
  },
  {
    id: 11,
    name: 'Pipoca',
    species: 'coelho',
    breed: 'Holandês',
    age: '1 ano',
    ageGroup: 'jovem',
    size: 'pequeno',
    temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
    color: 'Branco',
    sex: 'femea',
    location: 'Salvador, BA',
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Pipoca é branca e cheia de personalidade. Interage com todo mundo que chega em casa.',
    timeline: [
      { date: '2025-07-15', type: 'resgate', title: 'Entrada no abrigo', description: 'Doada por criador que encerrou as atividades. Chegou saudável e sociável.' },
      { date: '2025-07-18', type: 'veterinario', title: 'Avaliação veterinária', description: 'Saúde geral excelente. Bem alimentada e socialmente adaptada. Sem parasitas.' },
      { date: '2025-08-01', type: 'vacinacao', title: 'Vacinação completa', description: 'Vacinas contra mixomatose e RHD aplicadas. Vermifugação realizada.' },
      { date: '2025-08-20', type: 'disponivel', title: 'Disponível para adoção', description: 'Pipoca está saudável e pronta para alegrar o dia a dia de uma família animada!' },
    ],
  },
  {
    id: 12,
    name: 'Trovão',
    species: 'cavalo',
    breed: 'Quarto de Milha',
    age: '5 anos',
    ageGroup: 'adulto',
    size: 'grande',
    temperament: ['Dócil', 'Ativo', 'Tranquilo'],
    color: 'Marrom',
    sex: 'macho',
    location: 'Campinas, SP',
    imageUrl: 'https://images.unsplash.com/photo-1553284966-19b8815c7817?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Trovão é manso e bem treinado. Excelente para equoterapia, hipismo e passeios em família.',
    timeline: [
      { date: '2021-11-20', type: 'resgate', title: 'Resgate', description: 'Resgatado de haras em situação de abandono após denúncia ao CRMV. Chegou com subnutrição e cascos comprometidos.' },
      { date: '2021-12-01', type: 'veterinario', title: 'Avaliação completa', description: 'Exame clínico e podológico. Tratamento nutricional e ferrageamento corretivo iniciados.' },
      { date: '2022-01-10', type: 'vacinacao', title: 'Vacinação — Influenza + Tétano', description: 'Protocolo vacinal equino iniciado. Antiparasitário (ivermectina) aplicado.' },
      { date: '2022-06-15', type: 'veterinario', title: 'Tratamento odontológico', description: 'Procedimento de aplainamento dentário (egualização) realizado. Condição corporal excelente atingida.' },
      { date: '2022-08-01', type: 'disponivel', title: 'Disponível para adoção responsável', description: 'Trovão recuperou peso e saúde ideais. Busca um lar com espaço e cuidados adequados.' },
    ],
  },
  {
    id: 13,
    name: 'Aurora',
    species: 'cavalo',
    breed: 'Árabe',
    age: '4 anos',
    ageGroup: 'adulto',
    size: 'grande',
    temperament: ['Ativo', 'Tranquilo', 'Dócil'],
    color: 'Caramelo',
    sex: 'femea',
    location: 'Interior de SP',
    imageUrl: 'https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=400&h=300&fit=crop',
    status: 'disponivel',
    description: 'Aurora é uma égua elegante e ágil. Adora galopadas e é ótima para iniciantes no hipismo.',
    timeline: [
      { date: '2022-09-10', type: 'resgate', title: 'Entrada no abrigo', description: 'Doada por fazenda em processo de venda que não encontrou comprador. Chegou em boas condições gerais.' },
      { date: '2022-09-15', type: 'veterinario', title: 'Avaliação veterinária e podológica', description: 'Exame completo. Saúde geral boa. Cascos necessitando de ferrageamento preventivo.' },
      { date: '2022-10-01', type: 'vacinacao', title: 'Vacinação equina completa', description: 'Influenza equina, tétano e encefalomielite aplicadas. Antiparasitário realizado.' },
      { date: '2022-11-01', type: 'disponivel', title: 'Disponível para adoção responsável', description: 'Aurora está saudável e bem-disposta, pronta para uma nova família que possa oferecer o cuidado que ela merece.' },
    ],
  },
];
