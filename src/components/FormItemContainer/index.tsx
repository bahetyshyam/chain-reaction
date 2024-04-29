import FormChild from '../FormChild';

function FormItemContainer({ formItem, onChangeOfCheckboxItem }) {
  if (formItem.type === 'dropdown') {
    return (
      <div className="dropdown-item">
        <input
          id={formItem.value}
          type="checkbox"
          value={formItem.value}
          checked={formItem.checked}
          className=" bg-gray-100 border-gray-300 rounded"
          name="first-level-dropdown"
          onChange={(e) => onChangeOfCheckboxItem(e, formItem)}
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
  }
  if (formItem.type === 'radio' || formItem.type === 'select') {
    return <FormChild child={formItem} />;
  }
}

export default FormItemContainer;
