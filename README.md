# Valentine Project

Valentine Project is a responsive web application designed to celebrate love throughout Valentine's week. It features themed pages for each day, interactive countdowns, smooth animations, and a hidden Valentine's special page that unlocks when you click the heart icon three times. The content is easily customizable via a JSON configuration file.

## Live Website

Check out the live site here: [Live Valentine Project](https://nouzen-shinei.github.io/Valentine-Week/)

## Features

- **Responsive Design:**  
  The website adapts seamlessly to all devices—from desktop computers to mobile phones.

- **Dynamic Content Customization:**  
  Change displayed names, titles, messages, and other texts easily by editing the `config.json` file without touching the HTML or JavaScript code.

- **Multiple Themed Pages:**  
  Each day (e.g., Chocolate Day, Propose Day, etc.) has its own special HTML page with unique graphics and interactive quotes.

- **Countdown Functionality:**  
  Each themed day includes a countdown timer that dynamically calculates and displays the time left until that day becomes active.

- **Hidden Valentine's Special Page:**  
  A special Valentine’s Day page is unlocked when you click the heart icon three times. This hidden page offers extra animations and personalized messages.

- **Interactive Music Controls:**  
  Background music is integrated into the project. Music plays or pauses automatically based on page navigation and user interactions.

- **Animated Graphics & Icons:**  
  The project uses animated icons from [Lordicon](https://lordicon.com/) and animations powered by Anime.js to create an engaging user experience.

## How It Works

1. **Landing & Navigation:**  
   - The landing page (`index.html`) features an audio element for background music and uses dynamic configuration from `config.json` to display custom titles and names.
   - Navigation links (found on pages like `main.html`) lead to themed day pages. Each themed page (such as `chocolate.html`) has its own interactive design.

2. **Countdown Functionality:**  
   - Each day-link is embedded with a `data-date` attribute.
   - A JavaScript function calculates the remaining time until that day becomes available.
   - The countdown timer is updated every second until it displays "This day is now available!" once time runs out.

3. **Hidden Valentine's Special Page:**  
   - On the valentine.html themed page, the heart icon can be clicked.
   - After three clicks on the heart icon, a message is sent to reveal a hidden Valentine’s special page (`valentine-special/index.html`).
   - This page contains additional animations and personalized messages.

4. **Audio Control:**  
   - Background music is controlled on the parent page using JavaScript.  
   - Child pages send "startMusic" or "stopMusic" messages via the `postMessage` API.  
   - This ensures smooth transitions between pages and automatically stops music when entering the special page.

## How to Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Valentine-Project.git
   cd Valentine-Project
   ```

2. **Open in Your Browser**  
   Open index.html in your browser. For the best development experience, use a local server (for example, with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code).

3. **Customize the Content**  
   Edit the config.json file with your preferred names, titles, messages, etc. No need to touch the HTML or JavaScript files.

## Technologies Used

- **HTML5 & CSS3:** To build and style the site.
- **JavaScript:** For dynamic content, countdown timers, interactive controls, and audio management.
- **Fetch API:** Used to load external configurations from the config.json file.
- **Anime.js & Lordicon:** For creating engaging animations and interactive icons.
- **Audio API & postMessage:** For controlling background music across different pages.

## Contributing, License & Acknowledgements

Feel free to contribute or suggest enhancements by raising an issue or submitting a pull request. This project is licensed under the MIT License.

Special thanks to [Lordicon](https://lordicon.com/), [Anime.js](https://animejs.com/), and all the creative minds behind interactive web experiences.

---

Enjoy celebrating love with this unique, interactive Valentine Project!
<!-- Sources -->
<!-- https://codepen.io/saranya-mohan/pen/JjXdobY -->
<!-- https://github.com/zxdhiru/valentine -->

