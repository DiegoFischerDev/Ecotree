const ListaDeMateriais = [
  {
    id: 1,
    nome: "Areia",
    unid: "m³",
    valor: 800,
    descriçao: "A areia é um material granular amplamente utilizado na construção civil para fazer argamassa, concreto e outros elementos estruturais. Ela é essencial na maioria das obras, sendo usada como material de base e preenchimento.",
  },
  {
    id: 2,
    nome: "Cimento",
    unid: "sacos",
    valor: 300,
    descriçao: "O cimento é um dos principais componentes do concreto e é utilizado para unir materiais de construção. Ele endurece e adquire resistência após a mistura com água, tornando-se uma das bases fundamentais da construção civil.",
  },
  {
    id: 3,
    nome: "Varão de Ferro",
    unid: "varão",
    valor: 1200,
    descriçao: "Varão de Ferro, também conhecido como barra de aço, é utilizado para reforçar estruturas de concreto, como vigas e pilares. Sua alta resistência à tração contribui para aumentar a capacidade de suporte das estruturas.",
  },
  {
    id: 4,
    nome: "Sapatas",
    unid: "Tonelada",
    valor: 3500,
    descriçao: "As sapatas são elementos estruturais usados como base de fundação em construções. Elas distribuem o peso e as cargas da construção no solo, garantindo a estabilidade e segurança da edificação.",
  },
  {
    id: 5,
    nome: "Tijolos",
    unid: "unidade",
    valor: 2.5,
    descriçao: "Os tijolos são blocos de argila cozida amplamente usados na construção de paredes e estruturas. Eles são fundamentais para a criação de alvenarias e contribuem para a resistência e durabilidade das construções.",
  },
  {
    id: 6,
    nome: "Telhas",
    unid: "unidade",
    valor: 5,
    descriçao: "Telhas são elementos utilizados na cobertura de edificações, protegendo-as das intempéries. Existem diversos tipos de telhas, como cerâmicas, de concreto e metálicas, cada uma com suas características e aplicações específicas.",
  },
  {
    id: 7,
    nome: "Argamassa",
    unid: "sacos",
    valor: 25,
    descriçao: "A argamassa é uma mistura de cimento, areia e água, utilizada para fixar tijolos, blocos e revestimentos em construções. Ela é essencial para a união de diversos materiais de alvenaria.",
  },
  {
    id: 8,
    nome: "Pintura (Tinta)",
    unid: "galão",
    valor: 80,
    descriçao: "A pintura é o acabamento final das construções, sendo usada para decorar e proteger as superfícies internas e externas dos edifícios. As tintas estão disponíveis em várias cores e tipos para atender diferentes necessidades.",
  },
  {
    id: 9,
    nome: "Concreto Usinado",
    unid: "m³",
    valor: 500,
    descriçao: "O concreto usinado é uma mistura pré-fabricada de cimento, areia, pedra britada e água, produzida em centrais de concreto. É utilizado em diversas etapas da construção, como lajes, pilares, vigas e fundações.",
  },
  {
    id: 10,
    nome: "Portas",
    unid: "unidade",
    valor: 350,
    descriçao: "As portas são elementos fundamentais em qualquer construção, permitindo o acesso a diferentes ambientes e garantindo privacidade e segurança. Elas estão disponíveis em diversos materiais, tamanhos e estilos.",
  },
  {
    id: 11,
    nome: "Janelas",
    unid: "unidade",
    valor: 250,
    descriçao: "As janelas são aberturas nas paredes das construções que permitem a entrada de luz natural e a ventilação dos ambientes internos. Elas estão disponíveis em diversos formatos e tamanhos.",
  },
  {
    id: 12,
    nome: "Madeira",
    unid: "m³",
    valor: 1000,
    descriçao: "A madeira é um material amplamente utilizado na construção, tanto na estrutura quanto nos acabamentos. É uma opção sustentável e versátil, oferecendo beleza e resistência às construções.",
  },
  {
    id: 13,
    nome: "Gesso",
    unid: "sacos",
    valor: 50,
    descriçao: "O gesso é utilizado para fazer revestimentos internos de paredes e tetos, proporcionando uma superfície lisa e pronta para pintura. Também é usado na produção de elementos decorativos e sancas.",
  },
  {
    id: 14,
    nome: "Lajes Pré-Fabricadas",
    unid: "m²",
    valor: 1200,
    descriçao: "As lajes pré-fabricadas são elementos estruturais produzidos em fábrica e transportados prontos para a montagem. São usadas para compor os pisos e tetos de edifícios, agilizando o processo construtivo.",
  },
  {
    id: 15,
    nome: "Tubos de PVC",
    unid: "metro",
    valor: 10,
    descriçao: "Os tubos de PVC são utilizados em sistemas de água e esgoto, além de aplicações em drenagem e irrigação. São leves, resistentes à corrosão e fáceis de instalar.",
  },
  {
    id: 16,
    nome: "Ferro de Construção",
    unid: "barra",
    valor: 15,
    descriçao: "O ferro de construção é utilizado para fazer armações em concreto armado, reforçando vigas, colunas e lajes. É um material essencial para a construção de estruturas resistentes.",
  },
  {
    id: 17,
    nome: "Cerâmica Decorativa",
    unid: "m²",
    valor: 65,
    descriçao: "A cerâmica decorativa é utilizada para revestir paredes e pisos, proporcionando um acabamento estético e personalizado aos ambientes. Possui diversas cores, padrões e texturas para escolher.",
  },
  {
    id: 18,
    nome: "Drywall Fita",
    unid: "rolo",
    valor: 20,
    descriçao: "A fita para drywall é utilizada para reforçar as juntas entre as placas de gesso acartonado. Contribui para um acabamento uniforme e resistente na montagem de paredes e tetos.",
  },
  {
    id: 19,
    nome: "Manta Térmica",
    unid: "rolo",
    valor: 110,
    descriçao: "A manta térmica é aplicada sobre telhados e lajes para isolamento térmico, refletindo parte do calor solar e proporcionando maior conforto térmico nos ambientes internos.",
  },
  {
    id: 20,
    nome: "Perfil U em PVC",
    unid: "metro",
    valor: 8,
    descriçao: "O perfil U em PVC é usado para acabamentos em bordas e cantos de chapas de gesso acartonado, proporcionando proteção e acabamento estético.",
  },
  {
    id: 21,
    nome: "Tubo de PVC Esgoto",
    unid: "metro",
    valor: 12,
    descriçao: "Os tubos de PVC para esgoto são utilizados na condução de águas servidas e esgoto sanitário em sistemas prediais. São resistentes a agentes químicos e de fácil instalação.",
  },
  {
    id: 22,
    nome: "Ferro de Construção Galvanizado",
    unid: "barra",
    valor: 18,
    descriçao: "O ferro de construção galvanizado possui uma camada de zinco que o protege da corrosão. É utilizado em estruturas metálicas e locais com alta umidade.",
  },
  {
    id: 23,
    nome: "Torneira Monocomando",
    unid: "unidade",
    valor: 130,
    descriçao: "As torneiras monocomando possuem um único comando para controlar a temperatura e o fluxo de água. São modernas, práticas e com design elegante, sendo ideais para banheiros e cozinhas.",
  },
  {
    id: 24,
    nome: "Adesivo para Azulejos",
    unid: "sacos",
    valor: 25,
    descriçao: "O adesivo para azulejos é utilizado para fixar azulejos e pastilhas em paredes. Proporciona alta aderência e evita o descolamento das peças.",
  },
  {
    id: 25,
    nome: "Fita de LED",
    unid: "metro",
    valor: 30,
    descriçao: "A fita de LED é utilizada para iluminação decorativa, sendo aplicada em sancas, nichos, móveis e outros elementos. É versátil e pode ser encontrada em diversas cores e intensidades luminosas.",
  },
  {
    id: 26,
    nome: "Caixa d'água de Polietileno",
    unid: "unidade",
    valor: 400,
    descriçao: "As caixas d'água de polietileno são leves, resistentes e atóxicas. São utilizadas para armazenar água potável em residências, comércios e indústrias.",
  },
  {
    id: 27,
    nome: "Tela de Sombreamento",
    unid: "rolo",
    valor: 60,
    descriçao: "A tela de sombreamento é utilizada para proteger plantas e hortas do excesso de sol, proporcionando sombreamento e controle da luminosidade.",
  },
  {
    id: 28,
    nome: "Papel de Parede",
    unid: "rolo",
    valor: 100,
    descriçao: "O papel de parede é uma opção de revestimento para paredes que oferece variedade de estampas e texturas, permitindo personalizar a decoração dos ambientes.",
  },
  {
    id: 29,
    nome: "Forro de PVC",
    unid: "m²",
    valor: 35,
    descriçao: "O forro de PVC é utilizado para acabamentos em tetos, proporcionando um ambiente mais limpo e resistente a umidade. É uma opção econômica e fácil de instalar.",
  },
  {
    id: 30,
    nome: "Serra Mármore",
    unid: "unidade",
    valor: 200,
    descriçao: "A serra mármore é uma ferramenta utilizada para cortar pisos cerâmicos, mármores e granitos. Proporciona cortes precisos e é essencial para trabalhos com esses materiais.",
  },
  {
    id: 31,
    nome: "Esquadro de Carpinteiro",
    unid: "unidade",
    valor: 15,
    descriçao: "O esquadro de carpinteiro é utilizado para medir e marcar ângulos retos em trabalhos de marcenaria e construção. É uma ferramenta básica para garantir precisão nas medidas.",
  },
  {
    id: 32,
    nome: "Massa Acrílica",
    unid: "galão",
    valor: 50,
    descriçao: "A massa acrílica é utilizada para corrigir imperfeições em paredes e tetos antes da pintura. Ela proporciona um acabamento liso e uniforme às superfícies.",
  },
  {
    id: 33,
    nome: "Silicone Vedante",
    unid: "cartucho",
    valor: 12,
    descriçao: "O silicone vedante é usado para selar juntas e evitar infiltrações de água em áreas molhadas, como banheiros e cozinhas. É resistente a fungos e bactérias.",
  },
  {
    id: 34,
    nome: "Disjuntor Residencial",
    unid: "unidade",
    valor: 40,
    descriçao: "O disjuntor é um dispositivo de proteção elétrica utilizado para interromper o fluxo de corrente elétrica em caso de sobrecarga ou curto-circuito, evitando danos à instalação elétrica.",
  },
  {
    id: 35,
    nome: "Tinta Ecológica",
    unid: "galão",
    valor: 90,
    descriçao: "A tinta ecológica é produzida com ingredientes naturais e menos produtos químicos, sendo menos prejudicial ao meio ambiente. É uma opção sustentável para pintura de ambientes internos.",
  },
  {
    id: 36,
    nome: "Resina Epóxi",
    unid: "kit",
    valor: 150,
    descriçao: "A resina epóxi é utilizada como revestimento de pisos para criar um acabamento brilhante e resistente. É comumente usada em pisos industriais, comerciais e residenciais.",
  },
]

export default ListaDeMateriais;