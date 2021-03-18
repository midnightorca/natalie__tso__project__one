1. Naming Convention: BEM (Block-Element-Modifier)
    BEM will be used for HTML, CSS, and SCSS:
    <! -- Example-->
    <div class=”gallery”>
        <h1 class=”gallery__title”>Gallery</h1>
        <img class=”gallery__image gallery__image--large”/>
        <img class=”gallery__image” />
        <img class=”gallery__image” />
    </div>

2. SASS (SCSS)
    style.scss
    _setup.scss
    _variables.scss
    _mixins.scss
    _header.scss
    _footer.scss
    _media.scss

3. Formatting
    - Single tab (4 spaces) for indentation
    - No ID selectors
    - Files, folders, and project repo follow consistent naming convention (kebab-case)
    - When selecting multiple elements, give eaech selector its own line
    - Double quotations

4. Commenting Style
    - Comments before each major section 

5. Colors

Hex code system will be used (in addition to any variable that may be assigned a hex code colour).

6. Media Queries

Use as needed.
