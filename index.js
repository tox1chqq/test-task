import { splitMessage } from "./utilities/splitMessage.js";
import { errorMessage, hugeMessage, longMessage, shortMessage, shortMessages, simpleMessage } from "./mocks.js";

const handleSplitMessage = (message, caseName, fragmentSize) => {
  console.group("=====Message Test=====");
  const { error, messagesArray } = splitMessage(message, fragmentSize);

  if (error) {
    console.log(`Case name: ${caseName}`);
    console.log(`Result: Success!`);
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log(`Case name: ${caseName}`);
  console.log(`Result: Error!`);
  console.log(`Messages:`, messagesArray);

  console.groupEnd();
};

handleSplitMessage(simpleMessage, "simple message");
handleSplitMessage(shortMessage, "short message");
handleSplitMessage(longMessage, "long message");
handleSplitMessage(errorMessage, "Error message");
handleSplitMessage(hugeMessage, "huge message");
handleSplitMessage(shortMessages, "Set custom fragment size", 9);
