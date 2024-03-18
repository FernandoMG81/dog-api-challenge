export const SaveOnLocalStorage = (key, element) => {
  try {
    let elementos = element;
    localStorage.setItem(key, JSON.stringify(elementos));

    return element;
  } catch (error) {
    console.error('Error al guardar en el almacenamiento local:', error);
    throw error;
  }
};
