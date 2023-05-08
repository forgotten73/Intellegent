(function() {

  function documentReady() {
    @@include('partials/utilites/mediaHandler.js');
    @@include('partials/utilites/ClassEvent.js');
    @@include('partials/utilites/defineSetter.js');
    @@include('partials/utilites/AnimationQueue.js');
    @@include('partials/utilites/onscrollAnimate.js');

    @@include('partials/popup.js');
    @@include('partials/ie-detect.js');
    @@include('partials/video.js');
    @@include('partials/header.js');
    @@include('partials/range-area.js');
    @@include('partials/range-price.js');
    @@include('partials/range-floor.js');
    @@include('partials/permutation.js');
    @@include('partials/select.js');
    @@include('partials/validation-bootstrap.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();