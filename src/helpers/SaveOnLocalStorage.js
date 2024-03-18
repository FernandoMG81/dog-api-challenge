export const SaveOnLocalStorage = (key, element) => {
  let elementos = JSON.parse(localStorage.getItem(key))

  if(Array.isArray(elementos))
  {
      elementos.push(element)
  }
  else
  {
     elementos = [element]
  }

  localStorage.setItem(key, JSON.stringify(elementos))

  return element
}