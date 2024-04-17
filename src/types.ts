export type InitEndStateType = {
  [key: string]: string;
};

export type ChainObject = {
  [key: string]: ChainInsideObject;
};

export type ChainInsideObject = {
  endState: InitEndStateType;
  id: number;
  info_gained: string[];
  info_required: string[];
  initState: InitEndStateType;
  name: string;
};

export type ListOfChainsToShow = ChainInsideObject[][];
