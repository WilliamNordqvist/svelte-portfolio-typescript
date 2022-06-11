import { writable,Writable } from 'svelte/store';

export type worksProps = undefined | {
  description:string,
  github:string,
  id:number,
  img:string,
  link:string,
  name:string
}

export const pageHeight: Writable<number> = writable(0);
export const isMobile: Writable<Boolean> = writable(false);
export const isError: Writable<Boolean> = writable(false);
export const isLoading: Writable<Boolean> = writable(false);
export const storeData:Writable <worksProps[]> = writable(undefined);

export const fetchData = async ()  => {
  isLoading.set(true)
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwh0yEShMGaSt1VLsyODuFvxE6ObiI4-b0uGJFDlKuXl55jObc2DEiAKL4Gk-9gHobZDw/exec");
    if (response.ok) {
      let responseData = await response.json()	
      storeData.set(responseData)
    }
  } catch (error) {
    console.log("FAILING FETCHING DATA FROM https://www.wnordqvist.com/data/db.json")
    isError.set(true)
  }
  isLoading.set(false)
}

