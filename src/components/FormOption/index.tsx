import { useId } from 'react';
import FormChild from '../FormChild';

function FormOption({ option, type, parentId }) {
  const id = useId();
  return (
    <div className="option-item">
      {type === 'select' && (
        <div>
          <input
            id={id}
            type="checkbox"
            value={option.value}
            name={parentId}
            className="bg-gray-100 border-gray-300 rounded"
          />
          <label htmlFor={id} className="ms-2">
            {option.value}
          </label>
        </div>
      )}
      {type === 'radio' && (
        <div>
          <input
            id={id}
            type="radio"
            value={option.value}
            name={parentId}
            className="bg-gray-100 border-gray-300 rounded"
          />
          <label htmlFor={id} className="ms-2">
            {option.value}
          </label>
        </div>
      )}

      {option.children &&
        option.children.map((child) => <FormChild child={child} />)}
    </div>
  );
}

export default FormOption;
