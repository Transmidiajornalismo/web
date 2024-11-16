import { EDITORIAS } from '@/constants/editorias';
import { EditoriasLayout } from '@/components/interface/editorias';

export default function Esquinas() {
  const { id, title, description, color, textColor } = EDITORIAS.ESQUINAS;

  return (
    <EditoriasLayout
      title={title}
      description={description}
      color={color}
      textColor={textColor}
      id={id}
    />
  );
}
