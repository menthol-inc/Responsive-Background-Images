# Responsive Background Images
  Sometimes, we want to generate the images on the fly based on the device width. For images we have the `<figure>` tag, but if we want something similar using background images we need access to the CSS. It's not ideal to generate CSS in the HTML (ex. caching), and media queries are not supported inline.
  
# 📚 How to use
```html
<div class="header bgr-responsive" style="background-image: url(https://via.placeholder.com/1280x720/000000/000000)">
    <bg-resource media="(min-width: 1025px) "
        srcset="https://via.placeholder.com/1280x720/000000/000000"></bg-resource>
    <bg-resource media="(min-width: 0) and (max-width: 639px)" size="cover"
        srcset="https://via.placeholder.com/1280x720/ff0000/ff0000"></bg-resource>
    <bg-resource media="(min-width: 640px) and (max-width: 1024px)" size="cover"
        srcset="https://via.placeholder.com/1024x576/ffff00/ffff00"></bg-resource>
</div>    
```
