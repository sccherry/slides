---
title: Web basics
---

<div class="flex gap">
  <div class="flex-1">

- HTML: structure
- CSS: styling
- JavaScript: functionality

</div>

<div class="flex-1">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Hello world!</title>

    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="/style.css" />

    <!-- add styles directly to the HTML -->
    <style>
      body {
        font-family: sans-serif;
      }
    </style>

    <!-- import the webpage's javascript file -->
    <script src="/script.js" defer></script>

    <!-- add javascript directly ot the HTML -->
    <script>
      console.log('Hello world!');
    </script>
  </head>
  <body>
    <!-- this is the start of content -->
    <h1>Hello world!</h1>
    <p>This is a paragraph of content.</p>
  </body>
</html>
```

</div>
</div>
