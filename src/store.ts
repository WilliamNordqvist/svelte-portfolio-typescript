import { writable,Writable } from 'svelte/store';
import { getCases, worksProps } from './services/casesService';



export const pageHeight: Writable<number> = writable(0);
export const isMobile: Writable<Boolean> = writable(false);
export const isError: Writable<Boolean> = writable(false);
export const isLoading: Writable<Boolean> = writable(false);
export const storeData:Writable <worksProps[]> = writable(undefined);

export const fetchData = async ()  => {
  isLoading.set(true)
  try {
    const response  = await getCases()
    storeData.set(response)
  } catch (error) {
    console.log("FAILING FETCHING DATA FROM https://www.wnordqvist.com/data/db.json")
    isError.set(true)
  }
  isLoading.set(false)
}

