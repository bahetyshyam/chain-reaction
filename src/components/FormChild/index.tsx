import { useId } from 'react';
import FormOption from '../FormOption';

function FormChild({ child }) {
  const uniqueIdForItem = useId();
  return (
    <div className={`child-item`}>
      <div>{child.title}</div>
      {child.options?.map((option) => {
        return (
          <FormOption
            option={option}
            type={child.type}
            parentId={uniqueIdForItem}
          />
        );
      })}
    </div>
  );
}

export default FormChild;
