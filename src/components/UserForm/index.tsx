import { useId, useState } from 'react';
import { formData } from '../../formData';

function FormChild({ child }) {
  const uniqueIdForChild = useId();
  return (
    <div className={`child-item ${child.title ? 'ml-5' : ''}`}>
      <div>{child.title}</div>
      {(child.type === 'select' || child.type === 'radio') &&
        child.options?.map((option) => {
          return (
            <FormOption
              option={option}
              type={child.type}
              childId={uniqueIdForChild}
            />
          );
        })}
    </div>
  );
}

function FormOption({ option, type, childId }) {
  const id = useId();
  return (
    <div className="ml-5 option-item">
      {type === 'select' && (
        <div>
          <input
            id={id}
            type="checkbox"
            value={option.value}
            name={childId}
            className=" bg-gray-100 border-gray-300 rounded"
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
            name={childId}
            className=" bg-gray-100 border-gray-300 rounded"
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

function UserForm() {
  const [formDataState, setFormDataState] = useState<typeof formData>(formData);
  function onChangeOfDropdownCheckbox(e, formItem) {
    formItem.checked = e.target.checked;
    setFormDataState([...formDataState]);
  }
  return (
    <div>
      <div className="form-container text-xl mt-3">
        {formDataState.map((formItem) => {
          return (
            <div className="dropdown-item">
              <input
                id={formItem.value}
                type="checkbox"
                value={formItem.value}
                checked={formItem.checked}
                className=" bg-gray-100 border-gray-300 rounded"
                name="first-level-dropdown"
                onChange={(e) => onChangeOfDropdownCheckbox(e, formItem)}
              />
              <label htmlFor={formItem.value} className="ms-2">
                {formItem.value}
              </label>
              {formItem.checked &&
                formItem.children?.map((child) => {
                  return (
                    <div className="ml-4">
                      <FormChild child={child} />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-6"
      >
        Show Chains
      </button>
    </div>
  );
}

export default UserForm;
