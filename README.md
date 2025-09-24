### **Description**

This project is a professional, multi-section for "Zigrock Developers." It is built using **Bootstrap 5** for responsiveness and layout, **jQuery** for dynamic effects, and extensive **CSS** for custom styling and animations. The design is modern, with a strong emphasis on interactive elements, smooth scrolling, and a vibrant color scheme featuring teal/cyan and gold/orange accents.

---

### **Key Features**

#### **1. Core Structure and Frameworks**
* **Single-Page Layout (`index.html`):** The entire site is built as a single, long-scrolling page with distinct, named sections (`#Home`, `#about`, `#Team`, `#services`, etc.).
* **Bootstrap 5:** Used for the responsive grid, fixed navigation bar, mobile-friendly toggle, and general structural layout.
* **External Libraries:** Integrates several popular jQuery plugins:
    * **Owl Carousel:** Used for the **Team members** (`#team-members`), **Testimonials** (`#Testmonials`), and **Client logos** (`#client`) sections to create responsive sliders.
    * **Waypoints:** Triggers the **progress bar animation** when the skills section scrolls into view.
    * **Isotope:** Used in the **Portfolio/Work** section to enable interactive **filtering** of projects (All, Laptop, Desktop, Mobile, Logo).
    * **Magnific Popup:** Creates a **lightbox gallery** for the portfolio images.
    * **Counter-Up:** Animates the numbers in the **Fun Facts/Stats** section.
    * **Responsive Tabs:** Used in the **Services** section to switch content panels.

#### **2. Visual & Interactive Design (CSS/JS)**
* **Animated Home Hero:**
    * Features a **full-screen video background** (`#home-bg`) with a semi-transparent black overlay (`#overlay`).
    * The main heading uses a **CSS gradient** (`linear-gradient`) applied as a **text-clip** (`-webkit-background-clip: text`) for a distinctive, multi-color effect on the word "Zigrock."
* **Sticky Navigation (`nav-bar` logic):** The JavaScript (`index.js`) uses a scroll event listener to dynamically add the **`.nav-top-white` class** to the fixed navigation bar, changing its background and link colors when the user scrolls down past 50 pixels.
* **Smooth Scrolling:** The `smooth-scroll` class is applied to all internal links to provide a fluid scrolling experience when navigating between sections.
* **Skills/Progress Bars:** The progress bars are initially hidden (`width: 0%`) and use a Waypoints trigger to **animate their width** to the target percentage (`aria-valuenow`) once the user scrolls to them.
* **Parallax Backgrounds:** Sections like **Statement** and **Stats** use a `background-attachment: fixed` style to create a classic **parallax effect** when scrolling.

#### **3. Key Content Sections**
* **Services:** Divided into a list of services (`#services-01`) and a detailed, tabbed section (`#services-02`) for Design, Development, Creativity, and Strategy.
* **Team:** Uses an Owl Carousel to display team members with an **overlay hover effect** revealing their role and social media links.
* **Portfolio/Work:** Uses **Isotope filtering** and a **Magnific Popup** gallery view to showcase various projects categorized by type (Web, Desktop, Mobile, etc.).
* **Contact:** Includes a vertical contact information section with social media icons and a **working contact form** that uses the Fetch API (JavaScript) to submit data to a local server endpoint (`http://127.0.0.1:5000/contact`).
