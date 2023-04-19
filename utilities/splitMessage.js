import { DEFAULT_MESSAGE_LENGTH } from "../constants.js";

export const splitMessage = (message, fragmentSize = DEFAULT_MESSAGE_LENGTH) => {
  let messagesArray = [];
  let tempMessage = "";

  const trimMessage = message.trim();

  if (trimMessage.length <= fragmentSize) return { error: null, messagesArray: [trimMessage] };

  let totalFragmentsCount = 1;
  let overcase = false;

  do {
    messagesArray = [];
    let currentFragmentCount = 1;

    for (let word of trimMessage.split(" ")) {
      const newMessage = tempMessage.length ? `${tempMessage} ${word}` : word;
      const suffix = `${currentFragmentCount}/${totalFragmentsCount}`;
      const newMessageWithSuffix = `${newMessage} ${suffix}`;

      if (newMessageWithSuffix.length > fragmentSize) {
        messagesArray = [...messagesArray, tempMessage];
        tempMessage = word;

        if (currentFragmentCount === totalFragmentsCount) totalFragmentsCount++;

        const smsWithNewSuffix = `${word} ${currentFragmentCount + 1}/${totalFragmentsCount}`;
        if (smsWithNewSuffix.length > fragmentSize)
          return {
            error: new Error("Invalid message!Message length exceeded\n\r"),
            messagesArray: [],
          };

        if (totalFragmentsCount.toString().length > currentFragmentCount.toString().length) {
          overcase = messagesArray.some((message, idx) => `${message} ${idx}/${totalFragmentsCount}`.length > fragmentSize);
          if (overcase) {
            tempMessage = "";
            break;
          }
        }
        currentFragmentCount++;
      } else {
        tempMessage = newMessage;
      }
    }
  } while (overcase);
  messagesArray = [...messagesArray, tempMessage];

  messagesArray = messagesArray.map((message, index) => `${message} ${index + 1}/${totalFragmentsCount}`);

  return { error: null, messagesArray };
};
