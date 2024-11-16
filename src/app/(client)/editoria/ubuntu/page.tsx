import { EDITORIAS } from '@/constants/editorias';
import { EditoriasLayout } from '@/components/interface/editorias';

const cardItems = [
  {
    id: 1,
    title: 'TRANSBAILE:',
    subtitle: 'Primeira premiação trans do Brasil',
    slug: 'primeira-premiacao-trans-do-brasil',
    author: 'Nome Sobrenome',
    date: '05.06.2024',
  },
  {
    id: 2,
    title: 'SAÚDE TRANS:',
    subtitle: 'Avanços em terapias hormonais',
    slug: 'avancos-em-terapias-hormonais',
    author: 'Dr. Silva',
    date: '04.06.2024',
  },
  {
    id: 3,
    title: 'CULTURA LGBTQIA+:',
    subtitle: 'Festival de cinema anuncia programação',
    slug: 'festival-de-cinema-anuncia-programacao',
    author: 'Maria Santos',
    date: '03.06.2024',
  },
  {
    id: 4,
    title: 'POLÍTICA TRANS:',
    subtitle: 'Novo projeto de lei em discussão',
    slug: 'novo-projeto-de-lei-em-discussao',
    author: 'João Oliveira',
    date: '02.06.2024',
  },
  {
    id: 5,
    title: 'VISIBILIDADE:',
    subtitle: 'Representatividade trans na mídia cresce',
    slug: 'representatividate-trans-na-midia-cresce',
    author: 'Ana Rodrigues',
    date: '01.06.2024',
  },
];

export default function Ubuntu() {
  const { title, description, color, textColor } = EDITORIAS.UBUNTU;

  return (
    <EditoriasLayout
      title={title}
      description={description}
      color={color}
      textColor={textColor}
      items={cardItems}
    />
  );
}
