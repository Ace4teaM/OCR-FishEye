
// renvoie une fonction 'event' utilisable avec onKeyDown pour déclencher une action au clavier
/**
 * @param {function} func - La fonction métier à appeler
 * @param {object} event - L'objet passé par onKeyDown
 * @returns {function} - La fonction à passer à onKeyDown
 * @example
 * <button onKeyDown={handleKeyboardAction(() => alert("Button clicked!"))}>Click me</button>
 */
export const handleKeyboardAction = (func) => {
  return (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      func(event);
    }
  };
};