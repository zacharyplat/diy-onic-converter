/**
 * Implement your converter function here.
 */
const boldPrefixAsHtml = (text) => {
  const prefix = text.slice(0, 3);
  const rest = text.slice(3);
  return `<strong>${prefix}</strong>${rest}`;
};
const convertPTags = (element) => {
  const textArray = element.innerText.split(" ");
  const htmlWrappedText = textArray.map((text) => boldPrefixAsHtml(text));
  element.innerHTML = htmlWrappedText.join(" ");
  return element;
};
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  const elementsMapable = [...container.children];
  elementsMapable.map((element) =>
    element.tagName === "P" ? convertPTags(element) : element
  );
  elementsMapable.forEach((element) => container.appendChild(element));
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
