import { EDITORIAS } from '@/constants/editorias';
import { EditoriasLayout } from '@/components/interface/editorias';

const cardItems: any = [];

export default function Marsha() {
  const { title, description, color, textColor } = EDITORIAS.NAVALHA;

  return (
    <EditoriasLayout
      title={title}
      description={description}
      color={color}
      textColor={textColor}
      posts={cardItems}
    />
  );
}
