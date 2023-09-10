document.querySelectorAll(".projects>li>a").forEach(function (element) {
  element.addEventListener("click", function (e) {
      e.preventDefault();
      var li = this.parentElement,
          li_height = li.clientHeight,
          details = li.querySelector(".details"),
          details_height = details.clientHeight,
          new_height = details_height + 40;

      li.classList.toggle("current");

      var liSiblings = Array.from(li.parentElement.children).filter(function (sibling) {
          return sibling !== li && sibling.classList.contains("current");
      });

      if (li.classList.contains("current")) {
          li.style.paddingBottom = new_height + 'px';
          details.style.display = 'block';
          
         
          var yOffset = li.getBoundingClientRect().top - 10;
          window.scrollTo({
              top: window.scrollY + yOffset,
              behavior: 'smooth'
          });
      } else {
          li.style.paddingBottom = '0';
          details.style.display = 'none';
      }

      liSiblings.forEach(function (sibling) {
          sibling.style.paddingBottom = '0';
          var siblingDetails = sibling.querySelector(".details");
          if (siblingDetails) {
              siblingDetails.style.display = 'none';
          }
          sibling.classList.remove("current");
      });
  });
});
