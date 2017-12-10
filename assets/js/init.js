//  Part of DSquared v0.0.1
//  TOC
//  0- use strict
//  1 BSM intialization
//


   // 0 use strict
   'use strict';
  // Why is this here?
  //
  //  When targeting MSIE 10 and MSIE the proper way to
  //  intialize BS4 and or BSM4 is to initialize  it
  //  in a document ready block and than initialize
  //  all non BS4/BSM4 js plugins outside this block
  // Yes, MSIE 10 and MSIE 11 are a pain
   $( document ).ready(function() {
     $('body').bootstrapMaterialDesign();
  });



  // stickyfill polyfill initialization will only initialize this way
  Stickyfill.add($('.sticky'));

  // tocbot initialization
  tocbot.init({
         // Where to render the table of contents.
          tocSelector: '.our-toc',
         // Where to grab the headings to build the table of contents.
          contentSelector: '.dsquared-content',
          // Which headings to grab inside of the contentSelector element.
         headingSelector: 'h1, h2, h3,h4,h5,h6',
         ignoreSelector: '.js-toc-ignore',

         collapseDepth: 6,
   });

   // jstree initialization
   $('#dsquared-files').jstree();
   $('#dsquared-files-two').jstree();
