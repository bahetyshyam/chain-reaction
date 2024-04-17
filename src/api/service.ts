import { ChainObject } from '../types';
import { axiosInstance } from './axios';

type GetChainsResponseType = {
  chains: ChainObject[];
  status: boolean;
};

export async function getChains(): Promise<ChainObject[]> {
  try {
    const response = await axiosInstance.post<GetChainsResponseType>('chains', {
      initState: { paramA1: 'xA', paramA2: 'yA' },
    });
    return response.data.chains;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
