# 🌄 Responsive Background Images
  Sometimes, we want to generate the background images on the fly based on the device width. For images we have the `<picture>` tag, but if we want something similar using background images we need access to the CSS. It's not ideal to generate CSS in the HTML (ex. caching), and media queries are not supported inline.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```
<cite>See: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" title="The Picture element">`<picture>`: The Picture element</a></cite>
  
# 📚 How to use
Load the script

```html
<script src="assets/js/libraries/responsive-background-images/responsive-background-images.js" ></script>
```
The markup should be as follow:
```html
<div class="bgr-responsive" style="background-image: url(https://via.placeholder.com/1280x720/000000/000000)">
    <bg-resource media="(min-width: 1025px) "
        srcset="https://via.placeholder.com/1280x720/000000/000000"></bg-resource>
    <bg-resource media="(min-width: 0) and (max-width: 639px)" size="cover"
        srcset="https://via.placeholder.com/1280x720/ff0000/ff0000"></bg-resource>
    <bg-resource 
        media="(min-width: 640px) and (max-width: 1024px)" 
        size="cover"
        srcset="https://via.placeholder.com/1024x576/ffff00/ffff00"></bg-resource>
</div>    
```

Call the function on the window `load` event

```javascript
window.onload = function () {
    Responsive_background_images();    
}
```

# 💬 HTML structure

## HTML container
This could be any block element that you choose to use. In this example, we're using the default `.brg-responsive` html class. 


```html
<div class="bgr-responsive" style="background-image: url(https://via.placeholder.com/1280x720/000000/000000)">
```

The CSS is up to you to define, there are no constraints.

## Container attributes
We are using a custom created element: `bg-resource`

```html
<bg-resource 
        media="(min-width: 640px) and (max-width: 1024px)" 
        size="cover"
        srcset="https://via.placeholder.com/1024x576/ffff00/ffff00"></bg-resource>
```
1. `srcset` - this attribute is the most important, as this is where the path to your image is stored.
2. `media` - the media query string, that you normaly use in you CSS. Any valid query can be used.
( <cite><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" title="Using media queries">Using media queries</a></cite> )

3. `size` - the CSS value for the background-image property. (Can be a unit, cover, contain...) See <cite><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" title="background-size">background-size</a></cite>.

## Javascript
Call the function in the load event of the window. 

```javascript
Responsive_background_images(); 
```
You can also specify the class of the containers.

```javascript
Responsive_background_images('custom-class'); 
```
