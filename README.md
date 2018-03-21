# dobrywebdev v2

This is the second version of my portfolio page, where I share all of my projects.
Built with:
- HTML5,
- CSS3 (Flexbox),
- [Siema.js](https://github.com/pawelgrzybek/siema),
- [PHPmailer](https://github.com/PHPMailer/PHPMailer),
- [Fontello](https://github.com/fontello/fontello) and [Devicons](https://github.com/vorillaz/devicons) font icons.

Cool features:
- You can change the theme using a toggle switch to **dark** or **light** and the theme settings are saved in your localStorage,
- Language changes via AJAX and JSON files with specific texts,
- Form validation made using **RegExp** in vanilla JS without any external library,
- Based on a time of day you get a different welcome text and loading overlay background color,

### Changelog:

These are some of the bigger changes, you can check the rest in the commits tab.

v5.0.0
- A very big update: I've completly removed jQuery and rewrote all of the scripts to vanilla ES6 and switched OwlCarousel for Siema.js. Here is the performance data gathered by me using most popular browsers:
![Performance and page size data from Firefox, Chrome, Opera and Edge](https://i.imgur.com/iHlKtkE.png "Performance and page size data from Firefox, Chrome, Opera and Edge")

It is a little lighter and a little faster, so that's a major success.

But, to answer the big questions: was it worth it? Probably not. Would I do it again? Maybe. Have I learned something? I think so. And finally - is it faster? Not really.

v4.7.0
- Added a different font for headings, changed the navigation, improved responsiveness, modified form, added triggering slides on arrow keys.

v4.5.0
- Added a custom 404 page.

v4.4.0
- Changed menu button for switching themes to toggle switch.

v4.2.0
- Added tags to projects (desktop only)

v4.0.0
- Fixed the projects dots, added info on how to see more projects visible only on mobile, fixed iOS Safari placeholders issue.

v3.6.0
- Finally managed to do mobile and desktop nav in one element, added some cool animations, and as always some small fixes

v3.5.0
- Changed prijects nav, removed dupliacte titles form sections, removed 2 garbage projects, some other small fixes

v3.2.0
- Finally it's possible to link directly to any section - I've removed owl carousel from container and positioned sections next to each other. Also some small refactoring of JS and tweaks of CSS.

v3.1.0
- Added body-border, changed texts in "about" section, changed hover effect on nav links, updated link to interiorideas, added function to show current year in the footer and my age in "about" section.

v3.0.0: 
- Turned this website to PWA and now it is even faster than before - pretty cool if you ask me.

v1.8.0 
- Improved themes, improved scripts, added overlay with animation that
show before content is loaded

#### Live: https://dobrywebdev.pl