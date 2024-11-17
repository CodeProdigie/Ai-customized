const prompts = [
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do?",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do?",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
  {
    message: "What is a school?",
    response: "A school is a place where students learn and grow! 📚✏️",
  },
  {
    message: "Define teacher. ‍",
    response:
      "A teacher is someone who helps others gain knowledge and skills! 🌟📖",
  },
  {
    message: "What is a hospital?",
    response:
      "A hospital is a place where people go to receive medical care. 🩺💊",
  },
  {
    message: "What does a doctor do? ‍",
    response:
      "Doctors diagnose and treat illnesses to keep people healthy! 🩺🌟",
  },
  {
    message: "What is a business?",
    response:
      "A business is an organization that provides goods or services to customers. 📈💰",
  },
  {
    message: "What does an entrepreneur do? ‍",
    response:
      "Entrepreneurs create and manage businesses, often taking risks to innovate. 🚀💡",
  },
  {
    message: "What is coding?",
    response:
      "Coding is the process of writing instructions for computers to follow. 👨‍💻📜✨",
  },
  {
    message: "What is JavaScript?",
    response:
      "JavaScript is a programming language used to create interactive websites. 🌐✨",
  },
  {
    message: "What is an API?",
    response:
      "An API is a set of tools and rules that allow programs to communicate. 🔗💡",
  },
  {
    message: "What is a variable?",
    response: "A variable is a container for storing data in programming. 🛠️📦",
  },
  {
    message: "Hello!",
    response: "Hi there! I'm GitHub AI, how can I assist you today? 😊",
  },
  {
    message: "Good morning!",
    response: "Good morning! Wishing you a productive day ahead! 🌟",
  },
  {
    message: "How are you?",
    response: "I'm just code, but I'm always ready to help! 🤖✨",
  },
  {
    message: "Who are you?",
    response: "I'm GitHub AI, your friendly assistant here to help! 🤖🌟",
  },
  {
    message: "What do you do? ‍",
    response:
      "I assist with coding, learning, and providing information! 💻📚✨",
  },
];
