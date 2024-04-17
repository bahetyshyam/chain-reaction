import {
  ChainInsideObject,
  ChainObject,
  ListOfChainsToShow,
} from '../../types';

export function transformChainObjectArray(chains: ChainObject[]) {
  const arrayToReturn: ListOfChainsToShow = [];
  chains.forEach((chainObject) => {
    const arrayOfChainsToBePushed: ChainInsideObject[] = [];
    Object.keys(chainObject).forEach((keyOfInsideObject) => {
      arrayOfChainsToBePushed.push(
        chainObject[keyOfInsideObject] as ChainInsideObject,
      );
    });
    arrayToReturn.push(arrayOfChainsToBePushed);
  });
  return arrayToReturn;
}
