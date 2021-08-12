/*
  Using the IntersectionObserver
  Observers are objects that spots something in real-time.
  And there are different observers, which spots different things,
  like the MutationObserver, where you can look for changes in the DOM,
  for example. And we need in this case the IntersectionObserver.
*/
const animatedScrollObserver = new IntersectionObserver(
    (entries) => {
        /*
          Looping through all entries, which are observed.
        */
        entries.forEach((entry) => {
            /*
              With this condition, we check whether the element is in the current viewport,
              respectively if the entry intersects with the viewport.
              If true, then we add the enter class and call the unobserve function.
              Because we don’t have to observe it anymore.
            */
            if (entry.isIntersecting) {
                const id = entry.target.dataset.nav;
                const navElement = document.getElementById(id)
                navElement.classList.add('color-nice')
            }
                else {
                const id = entry.target.dataset.nav;
                const navElement = document.getElementById(id)
                navElement.classList.remove('color-nice')
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -65% 0px',
        threshold: 0.2
    }
);

/*
  The object for our vue directive.
  Vue.js provides several hook functions you can use for a directive.
  We need only one of them, the bind function,
  which is called only once when the directive is bound to the element.
  This is where you can do some setup work, for example.
  In this case we add a new CSS class to the element and observe it.
*/
export default {
    beforeMount(el) {
        animatedScrollObserver.observe(el);
    }
}
