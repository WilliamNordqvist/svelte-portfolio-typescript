import { writable,Writable } from 'svelte/store';

export type dataProps = undefined | {
  description:string,
  github:string,
  id:number,
  img:string,
  link:string,
  name:string
}

export const isMobile: Writable<Boolean> = writable(false);
export const isError: Writable<Boolean> = writable(false);
export const isLoading: Writable<Boolean> = writable(false);
export const storeData:Writable <dataProps[]> = writable(undefined);

export const fetchData = async ()  => {
  isLoading.set(true)
  try {
    const response = await fetch("http://wnordqvist.com/data/db.json");
    if (response.ok) {
      let responseData = await response.json()	
      storeData.set(responseData)
    }
  } catch (error) {
    console.log("FAILING FETCHING DATA FROM http://wnordqvist.com/data/db.json")
    isError.set(true)
  }
  isLoading.set(false)
}