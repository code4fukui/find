# find

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of web applications that use open data from Japan to map the location of various public facilities.

## Applications

This repository contains several standalone HTML applications, each tailored to find a specific type of facility:

*   `findrefuge.html`: Locate nearby emergency shelters.
*   `findpolls.html`: Find polling stations.
*   `findposter.html`: Map the locations of election poster boards.
*   `findnewfood.html`: Discover new food businesses based on license data.
*   `findpoi-ikeda.html`: A guide to tourist spots in Ikeda, Fukui.
*   `findrefuge3d.html`: A 3D visualization of nearby emergency shelters using Three.js.

## Features

*   **Multiple Facility Types:** Dedicated maps for emergency shelters, polling stations, public toilets, AEDs, tourist spots, and more.
*   **Geolocation:** Automatically detects the user's current position to display the nearest facilities.
*   **Interactive Map:** Uses the Google Maps API to display facility locations with clickable markers.
*   **Simple Navigation:** Cycle through the nearest search results using on-screen buttons.
*   **3D View:** An experimental 3D view (`findrefuge3d.html`) renders facility locations in a 3D space.

## Usage

1.  Open one of the HTML files (e.g., `findrefuge.html`) directly in a modern web browser.
2.  Grant location permissions when prompted.
3.  The map will populate with nearby facilities based on your location.
4.  Use the navigation buttons to browse the closest locations.
5.  Click on a map marker to view its details.

## Data and Technology

*   **Data Source:** Queries the Japanese OpenData Portal (ODP) via its SPARQL endpoint: `http://sparql.odp.jig.jp/data/sparql`.
*   **Mapping:** Google Maps JavaScript API.
*   **3D Rendering:** Three.js (for `findrefuge3d.html`).
*   **Core:** Vanilla JavaScript, HTML, and CSS.

## License

Licensed under the CC BY license. (c) taisukef http://fukuno.jig.jp/