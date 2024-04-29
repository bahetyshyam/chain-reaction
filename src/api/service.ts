import { ChainObject } from '../types';
import { axiosInstance } from './axios';

type GetChainsResponseType = {
  chains: ChainObject[];
  status: boolean;
};

export async function getChains(): Promise<ChainObject[]> {
  try {
    const response = await axiosInstance.post<GetChainsResponseType>('chains', {
      initState: {
        'LTE (4G) Unauthenticated': 'LTE (4G) Unauthenticated',
        'LTE (4G) Authenticated': 'LTE (4G) Authenticated',
        'LTE (4G) Communicating using AES': 'LTE (4G) Communicating using AES',
        'LTE (4G) Communicating using ZUC': 'LTE (4G) Communicating using ZUC',
      },
      initial_knowledge: [''],
    });
    return response.data.chains;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
