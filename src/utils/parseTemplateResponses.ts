export function parseTemplateArray(
  templateArray: { question: string; value: string }[]
) {
  // Takes the array of template responses returned by the add template form and returns a string of the question:value pair required by the api
  const object = templateArray.reduce(
    (obj, item) => ({ ...obj, [item.question]: item.value }),
    {}
  );

  return JSON.stringify(object);
}

export function parseStringToTemplateArray(
  templateString: string
): { question: string; value: string }[] {
  // Takes the template string responses and returns by the array of template required by react-hook-forms
  const templateObj = JSON.parse(templateString);

  const templateArray = Object.entries(templateObj).map(([question, value]) => {
    return { question, value: value as string };
  });

  return templateArray;
}
