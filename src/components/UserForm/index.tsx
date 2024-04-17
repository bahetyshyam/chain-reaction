import { useId, useState } from 'react';
import {
  victimProtocol,
  victimPreCondition,
  victimPostCondition,
  attackerKnowledge,
  attackerHardware,
  attackerPostCondition,
} from '../../formData';
import { getChains } from '../../api/service';
import { ChainObject } from '../../types';

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

type UserFormProps = {
  updateChainsArray(chains: ChainObject[]): void;
};
function UserForm({ updateChainsArray }: UserFormProps) {
  const [formDataState, setFormDataState] =
    useState<typeof victimProtocol>(victimProtocol);
  function onChangeOfCheckboxItem(e, formItem) {
    formItem.checked = e.target.checked;
    setFormDataState([...formDataState]);
  }
  async function onClickShowChains() {
    const response = await getChains();
    updateChainsArray(response);
  }
  return (
    <div>
      <section id="victim-information" className="form-container text-xl mt-3">
        <h2 className="text-3xl font-semibold text-blue-500">
          Victim Information
        </h2>
        <div id="victim-protocol">
          <h3 className="text-2xl font-semibold mt-3">Protocol</h3>
          <div className="form-container text-xl">
            {victimProtocol.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
        <div id="victim-precondition">
          <h3 className="text-2xl font-semibold mt-3">Preconditions</h3>
          <div className="form-container text-xl">
            {victimPreCondition.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
        <div id="victim-post-condition">
          <h3 className="text-2xl font-semibold mt-3">Post Condition</h3>
          <div className="form-container text-xl">
            {victimPostCondition.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="attacker-information"
        className="form-container text-xl mt-3"
      >
        <h2 className="text-3xl font-semibold text-blue-500">
          Attacker Information
        </h2>
        <div id="attacker-knowledge">
          <h3 className="text-2xl font-semibold mt-3">Attacker Knowledge</h3>
          <div className="form-container text-xl">
            {attackerKnowledge.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
        <div id="attacker-hardware">
          <h3 className="text-2xl font-semibold mt-3">Attacker Hardware</h3>
          <div className="form-container text-xl">
            {attackerHardware.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
        <div id="attacker-post-condition">
          <h3 className="text-2xl font-semibold mt-3">Post Condition</h3>
          <div className="form-container text-xl">
            {attackerPostCondition.map((formItem) => {
              return (
                <FormItemContainer
                  formItem={formItem}
                  onChangeOfCheckboxItem={onChangeOfCheckboxItem}
                />
              );
            })}
          </div>
        </div>
      </section>

      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-6"
        onClick={onClickShowChains}
      >
        Show Chains
      </button>
    </div>
  );
}

export default UserForm;
