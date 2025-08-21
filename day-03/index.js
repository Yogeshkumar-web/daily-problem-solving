// CLOSURE MAGIC STARTS HERE!
// Yeh function ek closure create karega
function createPasswordManager() {
  // Private variables - Closures की मदद से ये बाहर से access नहीं होंगे
  let passwords = {}; // Object to store website:password pairs
  let masterKey = "mySecretKey123"; // Simple encryption key

  // Simple encryption function (for demo purposes)
  function encrypt(text) {
    return btoa(text + masterKey); // Base64 encoding with key
  }

  // Simple decryption function
  function decrypt(encryptedText) {
    return atob(encryptedText).replace(masterKey, "");
  }

  // Return object with methods that have access to private variables
  return {
    // Add password method
    addPassword: function (website, password) {
      if (!website || !password) {
        return "❌ Website name aur password dono required hain!";
      }

      // Encrypt kar ke store karo
      passwords[website.toLowerCase()] = encrypt(password);
      return `✅ Password successfully saved for ${website}!`;
    },

    // Get password method
    getPassword: function (website) {
      if (!website) {
        return "❌ Website name provide karo!";
      }

      const encryptedPassword = passwords[website.toLowerCase()];
      if (encryptedPassword) {
        const decryptedPassword = decrypt(encryptedPassword);
        return `🔑 Password for ${website}: ${decryptedPassword}`;
      } else {
        return `❌ No password found for ${website}. Pehle add karo!`;
      }
    },

    // Get all websites method
    getAllWebsites: function () {
      const websites = Object.keys(passwords);
      if (websites.length === 0) {
        return "📭 No passwords saved yet. Start adding some!";
      }

      return `📋 Saved websites (${websites.length}): ${websites.join(", ")}`;
    },

    // Clear all method
    clearAll: function () {
      passwords = {};
      return "🗑️ All passwords cleared!";
    },

    // Get total count
    getCount: function () {
      return Object.keys(passwords).length;
    },
  };
}

// Create password manager instance using closure
const passwordManager = createPasswordManager();

// UI Functions
function addPassword() {
  const website = document.getElementById("website").value;
  const password = document.getElementById("password").value;

  const result = passwordManager.addPassword(website, password);
  displayOutput(result);

  // Clear inputs
  document.getElementById("website").value = "";
  document.getElementById("password").value = "";
}

function getPassword() {
  const website = document.getElementById("website").value;
  const result = passwordManager.getPassword(website);
  displayOutput(result);
}

function getAllWebsites() {
  const result = passwordManager.getAllWebsites();
  displayOutput(result);
}

function clearAll() {
  const result = passwordManager.clearAll();
  displayOutput(result);
}

function displayOutput(message) {
  const outputDiv = document.getElementById("output");
  const timestamp = new Date().toLocaleTimeString();

  outputDiv.innerHTML =
    `
                <div class="password-item">
                    <strong>[${timestamp}]</strong><br>
                    ${message}
                </div>
            ` + outputDiv.innerHTML;
}

// Demo function to show closure concept
function demonstrateClosure() {
  console.log("=== CLOSURE DEMONSTRATION ===");

  // Outer function
  function createGreeting(name) {
    let greeting = `Hello, ${name}!`; // Private variable

    // Inner function (closure)
    return function (time) {
      return `${greeting} Good ${time}!`;
    };
  }

  // Create closures
  const greetRavi = createGreeting("Ravi");
  const greetPriya = createGreeting("Priya");

  // Use closures
  console.log(greetRavi("morning")); // Hello, Ravi! Good morning!
  console.log(greetPriya("evening")); // Hello, Priya! Good evening!

  // Har closure apna separate 'greeting' variable maintain karta hai
}

// Run demonstration
demonstrateClosure();
