import { ILocalApiResponse } from '@/interfaces';

const baseURL = '/api/counter';

export const getInitalCounter = async (): Promise<ILocalApiResponse> => {
  const res = await fetch(baseURL);
  const response: ILocalApiResponse = await res.json();

  console.log(response);

  return response;
};
