<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://mountainvue.app/" rel="noopener noreferrer" target="_blank">
    <img src="./media/mv-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MountainVue</h3>

  <p align="center">
    A developer tool to traverse your Vue component tree
    <br />
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">About MountainVue</a>
     ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Built With </a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Getting Started</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">RoadMap</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About MountainVue</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About MountainVue

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->


MountainVue is a VS Code Extension that automatically scans your open workspace for Vue-based components and props to render component tree on extension initialization. 

Features:
* Ability to parse through multi-layer Vue component structure as reusable data.
* Parsing of Vue-based project directories to render a component tree in VS Code sidebar panel (via custom application icon).
* Visualization of state and props utilized through Vuex (Vue’s Flux architecture; e.g. React-Redux).
* Ability to export component tree as shareable visualizations (PDFs) for collaborative environments.

MountainVue's goal is to extend reach to larger user base that specializes in Vue, bridging gap between communities among UI frameworks/libraries.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Vue.js](https://vuejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Javascript](https://www.javascript.com/)
* [HTML](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<br/>
1. After installing VS Code Extension, Click the MountainVue Icon on the sidebar tab. 
<br/>
<br/>
2. Click upload button to select an entry point with a .vue file.
<br/>
<br/>
<img src="./media/gifs/Upload.gif" alt="Logo" >


<br/>
3. The sidebar will now display a component tree.
<br/>
<img src="./media/gifs/Tree.gif" alt="Logo" >




<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://github.com/oslabs-beta/MountainVue)_

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [x] Extension Sidebar listening for 
- [x] Complete Abstract Syntax Tree rendering logic for sidebar
- [ ] Ability to parse through .vue Templates 
- [ ] Add logic to allow user to directly open a component file in the VS extension workspace from the AST 
- [ ] Multi-language Support
    - [ ] Chinese


See the [open issues](https://github.com/oslabs-beta/MountainVue/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- CONTACT -->
## Creators

Sean Lee - [@seanswlee](https://github.com/seanswlee) 

Matt Huang - [@matthewhuang24](https://github.com/matthewhuang24)

Ryan Lim - [@ryanlim1](https://github.com/ryanlim1) 

Sohee Lee - [@sohee419](https://github.com/sohee419) 

Andy Tsou - [@andytsou19](https://github.com/andytsou19) 

Website: [MountainVue.app](https://mountainvue.app/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Parsing Strategy 1](https://observablehq.com/@ehouais/automatic-vue-js-single-file-components-hierarchy-graph-ge)
* [Parsing Strategy 2](https://www.npmjs.com/package/vue-parser)
* [Vue Component Tree Display](https://www.digitalocean.com/community/tutorials/vuejs-recursive-components)
* [Vue Compiler](https://www.npmjs.com/package/vue-template-compiler)
* [VS Code Extension](https://code.visualstudio.com/api)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/oslabs-beta/MountainVue?style=for-the-badge
[contributors-url]: https://github.com/oslabs-beta/MountainVue/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/oslabs-beta/MountainVue?style=for-the-badge
[forks-url]: https://github.com/oslabs-beta/MountainVue/network/members
[stars-shield]: https://img.shields.io/github/stars/oslabs-beta/MountainVue?style=for-the-badge
[stars-url]: https://github.com/oslabs-beta/MountainVue/stargazers
[issues-shield]: https://img.shields.io/github/issues/oslabs-beta/MountainVue?style=for-the-badge
[issues-url]: https://github.com/oslabs-beta/MountainVue/issues
<!-- [license-shield]: https://img.shields.io/github/license/oslabs-beta/MountainVue?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/mountainvue/
<!-- [product-screenshot]: images/screenshot.png -->
