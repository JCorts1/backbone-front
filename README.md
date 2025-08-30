# Backbone.js Blog Frontend

A simple blog application built with Backbone.js that connects to a backend API to display and manage blog posts.

## Project Structure

```
blog-frontend/
├── index.html      # Main HTML file with templates
├── app.js          # Backbone.js application code (empty, ready for implementation)
├── styles.css      # CSS styling for the blog
└── README.md       # This file
```

## How It Works

### HTML Templates (`index.html`)

The `index.html` file contains:

1. **Main Container**: A div with id `app` that holds the entire application
2. **Signposts**: Empty divs that Backbone will populate:
   - `#posts-container` - Where the list of all blog posts will appear
   - `#post-detail-container` - Where individual post details will show

3. **JavaScript Templates**: Script blocks with `type="text/template"` that define how data should be displayed:
   ```html
   <script type="text/template" id="post-list-item-template">
       <div class="post-item">
           <h2><%= title %></h2>
       </div>
   </script>
   ```

#### Why `type="text/template"`?
- The browser **ignores** these script blocks because it doesn't recognize "text/template" as executable JavaScript
- Your Backbone app can still **access** the HTML content using `document.getElementById()` or jQuery
- It's a clever way to store HTML templates in your HTML file without them rendering immediately
- Later, your JavaScript will grab these templates and use them to generate real HTML with actual data

#### Template Syntax (`<%= title %>`)
- Uses **Underscore.js template syntax** (same as Ruby ERB, but processed by JavaScript)
- `<%= title %>` gets replaced with actual data when the template is rendered
- Example: If your API returns `{title: "My First Post"}`, `<%= title %>` becomes "My First Post"

### Library Dependencies

The libraries are loaded in this specific order:

```html
<script src="jquery-3.6.0.min.js"></script>
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="app.js"></script>
```

#### Why This Order Matters:

1. **jQuery** - Backbone uses jQuery for DOM manipulation and AJAX requests
2. **Underscore.js** - Backbone depends on Underscore for:
   - Template rendering (`_.template()`)
   - Utility functions like `_.extend()`, `_.bind()`, etc.
3. **Backbone.js** - The main framework that depends on both jQuery and Underscore
4. **app.js** - Your application code that uses all the above libraries

**Important**: If you load these in the wrong order, you'll get errors because each library depends on the previous ones being available.

### CSS Styling (`styles.css`)

Provides styling for:
- Dark background with white content container
- Post item styling with hover effects
- Post detail view styling
- Responsive design with max-width container

## Current Status

- ✅ HTML structure and templates are set up
- ✅ CSS styling is complete
- ✅ Library dependencies are included
- ⏳ `app.js` is empty and ready for Backbone implementation

## Next Steps for Implementation

To make this blog functional, you'll need to implement in `app.js`:

1. **Backbone Model** - Define what a blog post looks like
2. **Backbone Collection** - Manage multiple blog posts and API communication
3. **Backbone Views** - Handle rendering templates and user interactions
4. **Backbone Router** - Handle navigation between list and detail views

## API Integration

This frontend is designed to connect to a backend API that should provide:
- `GET /posts` - Return list of all blog posts
- `GET /posts/:id` - Return details for a specific post

The Backbone Collection will handle fetching data from your API and the Views will render it using the templates defined in `index.html`.# backbone-front
