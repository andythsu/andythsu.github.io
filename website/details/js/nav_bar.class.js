function NavBar(current_page) {
  this.template = this.getTemplate();
  this.current_page = current_page;
  this.makeActive();
}

NavBar.prototype.makeActive = function () {
  var self = this;
  var all_pages = this.template.find('li.nav-item');
  var elem, elem_id;
  for (var i = 0; i < all_pages.length; i++) {
    elem = all_pages.eq(i);
    elem_id = elem.attr('id');
    if (elem_id !== undefined && elem_id == self.current_page) {
      elem.addClass('active');
      break;
    }
  }
};

NavBar.prototype.getTemplate = function () {
  return $(`
    <div class = "container-fluid">
      <nav class="hidden-xs-down bg-faded sidebar">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item" id = "index_page">
            <a class="" href="index.html">Languages </a>
          </li>
          <li class="nav-item" id = "hobbies_page">
            <a class ="" href="hobbies.html">Hobbies</a>
          </li>
          <li class = "nav-item" id = "github_page">
            <a class = "" href="https://github.com/andythsu" target="_blank">Visit my GitHub</a>
          </li>
          <li class="nav-item" id="experience_page">
            <a class = "" href = "">Experiences</a>
          </li>
          <li class = "nav-item nav-divider" ></li>
          <li class="nav-item">
            <a href="../../">Back to Home Page</a>
          </li>
        </ul>
      </nav>
    </div>
    `);
  };
