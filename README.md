This is a copy of **Ableton's about page** using only HTML, CSS and vanilla JS (to hide/show the navigation with buttons).
Page loading ~isn't blazing fast cause i'm not using different filesizes for images. I'm counting on frameworks (NextJS or Gatsby) to do this job when i'll add this project to my portfolio~ is good, I'm using `image-set` for `background-image` in CSS, `srcset` for `<img>` element in HTML and `<picture>` element.

# Main reason to copy this page:
- Solidify my CSS Grid knowledge
- Build a complex page using WCAG recommendations
- I like the design and I wanted to recreate it

## What was done:
- Create responsive dropdown navigation using no scripts/libraries
- use accessibility recommendations (aria-expanded on menu button, alt text, different hover and focus state on links, contrast requirements on placeholders, input labels)

## My personal touch and some fixes of the original page:
- Fix heading hierarchy of the original page where every section has a H1(what?!) 
- Skip to content button (10+ tabs before you skip the navigation links) 
- hover state on links (doesn't exist on original page)
- alt text
- bumped up the outline on focus
