import BulletedList from '../components/blocks/renderer/bulleted-list';
import HeadingOne from '../components/blocks/renderer/heading-one';
import HeadingThree from '../components/blocks/renderer/heading-three';
import HeadingTwo from '../components/blocks/renderer/heading-two';
import NumberedList from '../components/blocks/renderer/numbered-list';
import Paragraph from '../components/blocks/renderer/paragraph';
import Toggle from '../components/blocks/renderer/toggle';

const components = {
  bulleted_list_item: BulletedList,
  heading_1: HeadingOne,
  heading_2: HeadingTwo,
  heading_3: HeadingThree,
  numbered_list_item: NumberedList,
  paragraph: Paragraph,
  toggle: Toggle,
};

export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};

export const getColor = (color) => {
  const colors = {
    default: 'text-gray-900',
    gray: 'text-gray-600',
    brown: 'text-yellow-800',
    orange: 'text-yellow-600',
    yellow: 'text-yellow-400',
    green: 'text-green-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    red: 'text-red-600',
    gray_background: 'bg-gray-200',
    brown_background: 'bg-amber-200',
    orange_background: 'bg-orange-200',
    yellow_background: 'bg-yellow-200',
    green_background: 'bg-green-200',
    blue_background: 'bg-blue-200',
    purple_background: 'bg-purple-200',
    pink_background: 'bg-pink-200',
    red_background: 'bg-red-200',
  };
  return colors[color];
};

export const renderBlock = (block) => {
  const { has_children, id, type } = block;
  const Component = components[type];
  return Component ? (
    <Component key={id} content={block[type]} hasChildren={has_children} />
  ) : (
    <div className="bg-gray-100 mt-3 p-5 rounded">
      <p className="text-sm">
        Unsupported block component type: <strong>{type}</strong>
      </p>
    </div>
  );
};
