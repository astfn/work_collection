import { ref } from "vue";

export function useLocalStorage(name) {
  let localData = JSON.parse(localStorage.getItem(name));
  let state = ref(localData);

  const setState = (newState) => {
    state.value = newState;
    localStorage.setItem(name, JSON.stringify(newState));
  };

  return [state.value, setState];
}
