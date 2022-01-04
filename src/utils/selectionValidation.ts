export const validateSelection = (
  constantArray: any[],
  inputValue: any
): boolean => {
  if (inputValue === constantArray[0].id) {
    return false;
  }
  return true;
};
