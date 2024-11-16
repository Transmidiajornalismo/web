import { EDITORIAS } from '@/constants/editorias';
import { EditoriasLayout } from '@/components/interface/editorias';

const cardItems: any = [];

export default function Ubuntu() {
  const { title, description, color, textColor } = EDITORIAS.VITAL;

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
