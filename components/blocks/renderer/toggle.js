import { renderBlock } from '../../../util';
import Text from './text';

const Toggle = ({ content, hasChildren }) => {
  return (
    <details className="py-5">
      <summary>
        <Text text={content.text} />
      </summary>
      <div className="ml-5">
        {hasChildren && content.children?.map((block) => renderBlock(block))}
      </div>
    </details>
  );
};

export default Toggle;
