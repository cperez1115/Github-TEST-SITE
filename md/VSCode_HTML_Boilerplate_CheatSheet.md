# 🛠️ Custom HTML Boilerplate Snippet Cheat Sheet for VS Code

> Create your own full HTML5 boilerplate with Open Graph, Twitter card meta, header, footer, and linked CSS/JS — and trigger it instantly with a simple keyword!

---

## ✅ Step-by-Step Guide

### 1. Open VS Code Snippets File
Go to the global snippets folder:

- **Mac**:  
  `Code > Preferences > User Snippets`
- **Windows**:  
  `File > Preferences > User Snippets`

Then **create a new snippet file** called something like:

```
Custom Full HTML Boilerplate.code-snippets
```

---

### 2. Paste This JSON Snippet

```json
{
  "Custom Full HTML Boilerplate": {
    "prefix": "myboiler",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"en\">",
      "<head>",
      "  <meta charset=\"UTF-8\" />",
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
      "",
      "  <!-- SEO -->",
      "  <meta name=\"description\" content=\"Brief description of your webpage here.\" />",
      "  <meta name=\"author\" content=\"Your Name\" />",
      "",
      "  <!-- Open Graph -->",
      "  <meta property=\"og:title\" content=\"Page Title for Social Media\" />",
      "  <meta property=\"og:description\" content=\"Description that shows up when this page is shared.\" />",
      "  <meta property=\"og:type\" content=\"website\" />",
      "  <meta property=\"og:url\" content=\"https://yourwebsite.com/page-url\" />",
      "  <meta property=\"og:image\" content=\"https://yourwebsite.com/preview-image.jpg\" />",
      "",
      "  <!-- Twitter Card -->",
      "  <meta name=\"twitter:card\" content=\"summary_large_image\" />",
      "  <meta name=\"twitter:title\" content=\"Page Title for Twitter\" />",
      "  <meta name=\"twitter:description\" content=\"Short tweet-length description.\" />",
      "  <meta name=\"twitter:image\" content=\"https://yourwebsite.com/twitter-image.jpg\" />",
      "",
      "  <title>Your Page Title</title>",
      "  <link rel=\"stylesheet\" href=\"style.css\" />",
      "</head>",
      "<body>",
      "",
      "  <header>",
      "    <nav>",
      "      <ul>",
      "        <li><a href=\"#\">Home</a></li>",
      "        <li><a href=\"#\">About</a></li>",
      "        <li><a href=\"#\">Services</a></li>",
      "        <li><a href=\"#\">Contact</a></li>",
      "      </ul>",
      "    </nav>",
      "  </header>",
      "",
      "  <main>",
      "    <h1>Hello, world!</h1>",
      "  </main>",
      "",
      "  <footer>",
      "    <p>&copy; 2025 Your Name. All rights reserved.</p>",
      "  </footer>",
      "",
      "  <script src=\"script.js\"></script>",
      "</body>",
      "</html>"
    ],
    "description": "My reusable full HTML5 boilerplate with SEO, OG, Twitter meta, and semantic layout"
  }
}
```

---

### 3. Use Your Snippet

- Open any `.html` file  
- Type: `myboiler`  
- Press `Tab`  
✅ Your full boilerplate appears like magic!

---

### 🎯 Tip: Add Tab Stops for Editing

Want tab-through editing? Replace content with:

```html
<title>${1:Your Page Title}</title>
<h1>${2:Hello, world!}</h1>
```

---

Happy coding! 🧑‍💻  
*Generated: 2025-07-25*
