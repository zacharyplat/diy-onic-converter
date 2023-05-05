/**
 * Implement your converter function here.
 */
const boldPrefixAsHtml = (text) => {
  const prefix = text.slice(0, 3);
  const rest = text.slice(3);
  return `<strong>${prefix}</strong>${rest}`;
};
const convertTags = (element) => {
  const textArray = element.innerText.split(" ");
  const htmlWrappedText = textArray.map((text) => boldPrefixAsHtml(text));
  const newElement = element.cloneNode(true);
  newElement.innerHTML = htmlWrappedText.join(" ");
  return newElement;
};

const convertAllTags = (element) => {
  newElement = convertTags(element);
  if (element.childElementCount > 0) {
    const elementsMapable = [...element.children];
    elementsMapable.forEach((child) => {
      const convertedChild = convertTags(child);
      newElement.innerHTML = newElement.innerHTML.replace(
        convertedChild.innerHTML,
        convertedChild.outerHTML
      );
    });
  }
  return newElement;
};
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  const elementsMapable = [...container.children];
  const convertedElements = elementsMapable.map((element) =>
    convertAllTags(element)
  );
  convertedElements.forEach((element) => container.appendChild(element));
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
diyOnicConverter("body");
