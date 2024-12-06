import { EDITORIAS } from '@/constants/editorias';
import { EditoriasLayout } from '@/components/interface/editorias';

export default function Acue() {
  const { id, title, description, color, textColor } = EDITORIAS.COLUNAS;

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
