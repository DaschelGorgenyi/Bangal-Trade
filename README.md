Overview

This document explains how to edit the existing Bengal Trade website codebase using an AI-assisted landing-page editor.
The site was built as a hard-coded HTML/CSS/JS structure, so edits will be made by importing the exported files into a compatible AI builder that supports code upload or section reconstruction.

1. Files Provided

/index.html – main page structure

/styles/ – global and section CSS

/scripts/ – light JavaScript for forms or animations

/assets/ – images, icons, and fonts

These files represent a static version of the live Bengal Trade site.

2. How to Import

Open the AI landing-page editor of your choice.

Create a blank project.

Upload the exported .zip or paste in the HTML structure manually.

If direct HTML import isn’t supported, rebuild each section (Hero, About, Products, Quote) using the editor’s visual blocks and copy the content from the codebase.

Upload all images and assets into the editor’s media manager.

3. Recommended Version

Use the static HTML5 version (no frameworks, no build tools).
Keep the CSS and JS minimal—this ensures full compatibility with the editor’s visual styling system.

4. Section Reference
Section	File Reference	Purpose
Hero	<header> block	Brand headline, CTA button
About	<section id="about">	Company overview
Products	<section id="products">	Showcases export and manufacturing capability
Quote / Contact	<section id="contact">	Lead form with email webhook
5. Editing Workflow

In the editor, recreate each section visually using blocks that match the layout.

Paste or rewrite the text content using the AI prompt field.

Example prompt: “Rewrite this paragraph for clarity, same tone, 2 sentences max.”

Keep the original brand colors, fonts, and image ratios.

Adjust spacing and alignment visually; no need to touch raw CSS unless required.

6. Style Guide

Primary Color: #0A0A0A

Accent Color: #F4C23B

Background: #FFFFFF

Font: Sans-serif system or Inter (weight 400–700)

Image Size: ≤ 200 KB per hero or banner

7. Form and Integrations

Rebuild the form using the editor’s native form component.

Connect it to the Bengal Trade lead capture email or CRM webhook.

Test a full submission flow before publishing.

8. SEO and Metadata

Page title: “Factory-Vetted Apparel from Bangladesh | Bengal Trade Co.”

Meta description: “Factory-vetted apparel with clear timelines and documented checks. Request a quote today.”

Update Open Graph image and favicon through the editor’s settings.

9. Publishing Checklist

 Mobile and desktop layouts verified

 All links functional

 Forms tested

 Analytics / pixel added

 File names generic (no internal references)

 Final site exported or published to the assigned domain

10. Maintenance Notes

Keep a local backup of the original HTML/CSS files.

When regenerating copy or layouts, preserve structure and accessibility tags (<h1>–<h3>, <alt>).

Document any AI-generated changes in a short changelog for internal tracking.
