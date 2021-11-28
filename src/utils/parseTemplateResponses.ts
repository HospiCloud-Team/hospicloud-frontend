export function parseTemplateArray(
  templateArray: { question: string; value: string }[]
) {
  // Takes the array of template responses returned by the add template form and returns a string of the question:value pair
  const object = templateArray.reduce(
    (obj, item) => ({ ...obj, [item.question]: item.value }),
    {}
  );

  return JSON.stringify(object);
}
