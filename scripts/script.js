// const container = document.querySelector(".container");
// const closechaticon = document.querySelector(".container .border-close i");

// closechaticon.onclick = () => {
//   container.classList.toggle("togglechat");
// };


// const sendbtn = document.querySelector(".promt-section i");
// const chatsection = document.querySelector(".chat-section");
// const promptinput = document.querySelector(".promt-section input");

// let alreadyshown = true;

// promptinput.addEventListener("input", (e) => {
//   if (alreadyshown) {
//     const enteredtext = e.target.value;
//     if (enteredtext.length > 0 && enteredtext.length < 2) {
//       const newlist = document.createElement("ul");
//       newlist.innerHTML = `
//             <li class="user">You: <span class="user-text">..... is typing</span> </li>
//                 <li class="chatbot">Chatbot: <span class="chatbot-text">..... is waiting</span></li>
//             `;
//       chatsection.appendChild(newlist);
//     }
//     alreadyshown = false;
//   }
// });

// let firstclick = true;
// let index = 0;
// let charIndex = 0;
// let typingInterval;

// const typeText = (text, element) => {
//   if (charIndex < text.length) {
//     element.innerText = text.substring(0, charIndex + 1);
//     charIndex++;
//     typingInterval = setTimeout(() => {
//       typeText(text, element);
//     }, 30); // Adjust typing speed
//   } else {
//     clearTimeout(typingInterval);
//   }
// };
// sendbtn.addEventListener("click", () => {
//   if (firstclick) {
//     chatsection.innerHTML = "";
//     prompts.map(({ message, response }) => {
//       if (promptinput.value.toLowerCase() === message.toLowerCase()) {
//         const newlist = document.createElement("ul");
//         newlist.innerHTML = `
//                 <li class="user">You: <span class="user-text">${message}</span> </li>
//                     <li class="chatbot">Chatbot: <span class="chatbot-text">${response}</span></li>
//                 `;

//         chatsection.appendChild(newlist);
//         promptinput.value = "";
//       }
//     });
//     firstclick = false;
//   } else {
//     prompts.map(({ message, response }) => {
//       if (promptinput.value.toLowerCase() === message.toLowerCase()) {
//         const newlist = document.createElement("ul");
//         newlist.innerHTML = `
//                 <li class="user">You: <span class="user-text">${message}</span> </li>
//                     <li class="chatbot">Chatbot: <span class="chatbot-text">${response}</span></li>
//                 `;
//                 const userText = newlist.querySelector(".user-text");
//                 const chatbotText = newlist.querySelector(".chatbot-text");
//         chatsection.appendChild(newlist);
//          // Type user message
//          charIndex = 0;
//          typeText(message, userText);
 
//          // Type chatbot response after user message is finished typing
//          setTimeout(() => {
//            charIndex = 0;
//            typeText(response, chatbotText);
//          }, message.length * 50 + 500); // Adjust delay after user message
//         promptinput.value = "";
//       }
//     });
//   }
// });






const container = document.querySelector(".container");
const closechaticon = document.querySelector(".container .border-close i");
const sendbtn = document.querySelector(".promt-section i");
const chatsection = document.querySelector(".chat-section");
const promptinput = document.querySelector(".promt-section input");

let typingInterval;
const typingIndicator = `<li class="chatbot typing-indicator">Chatbot: <span class="chatbot-text">...is typing</span></li>`;

// Load chat history from localStorage
const loadChatHistory = () => {
  const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  savedHistory.forEach(({ message, response }) => {
    addChat(message, response, false);
  });
};

// Save chat history to localStorage
const saveChatHistory = (message, response) => {
  const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  chatHistory.push({ message, response });
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
};

// Add chat to the UI
const addChat = (message, response, save = true) => {
  const newlist = document.createElement("ul");
  newlist.innerHTML = `
    <li class="user">You: <span class="user-text">${message}</span> </li>
    <li class="chatbot">Chatbot: <span class="chatbot-text">${response}</span></li>
  `;
  chatsection.appendChild(newlist);

  if (save) saveChatHistory(message, response);

  // Scroll to the bottom
  chatsection.scrollTop = chatsection.scrollHeight;
};

// Handle typing animation
const typeText = (text, element, callback) => {
  let charIndex = 0;
  const type = () => {
    if (charIndex < text.length) {
      element.innerText = text.substring(0, charIndex + 1);
      charIndex++;
      typingInterval = setTimeout(type, 30); // Adjust typing speed
    } else {
      clearTimeout(typingInterval);
      if (callback) callback();
    }
  };
  type();
};

// Handle send button click
const handleSend = () => {
  const userInput = promptinput.value.trim();

  if (!userInput) return; // Ignore empty input

  // Add typing indicator
  chatsection.innerHTML += typingIndicator;

  const matchedPrompt = prompts.find(
    ({ message }) => message.toLowerCase() === userInput.toLowerCase()
  );

  const response = matchedPrompt
    ? matchedPrompt.response
    : "I'm not sure about that. Could you rephrase or ask something else? 🤔";

  // Simulate typing
  setTimeout(() => {
    const typingElement = document.querySelector(".typing-indicator");
    if (typingElement) typingElement.remove(); // Remove typing indicator

    const newlist = document.createElement("ul");
    newlist.innerHTML = `
      <li class="user">You: <span class="user-text">${userInput}</span> </li>
      <li class="chatbot">Chatbot: <span class="chatbot-text"></span></li>
    `;
    chatsection.appendChild(newlist);

    const chatbotText = newlist.querySelector(".chatbot-text");
    typeText(response, chatbotText);

    // Save and clear input
    saveChatHistory(userInput, response);
    promptinput.value = "";
  }, 1000); // Adjust typing delay
};

// Load chat history on page load
loadChatHistory();

// Event Listeners
closechaticon.onclick = () => container.classList.toggle("togglechat");
sendbtn.addEventListener("click", handleSend);
promptinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});
