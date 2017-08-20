function NavBar(current_page) {
  this.template = this.getTemplate();
  this.current_page = current_page;
  this.makeActive();
}

NavBar.prototype.makeActive = function () {
  this.template.find('#'+this.current_page).addClass('active');
};

NavBar.prototype.getTemplate = function () {
  return $(`
    <div class = "container-fluid">
      <nav class="hidden-xs-down bg-faded sidebar">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item" id = "index_page">
            <a class="" href="index.html">Languages </a>
          </li>
          <li class="nav-item" id="experiences_page">
            <a class = "" href="experiences.html">Experiences</a>
          </li>
          <li class="nav-item" id = "insterests_page">
            <a class ="" href="interests.html">Insterests</a>
          </li>
          <li class = "nav-item" id = "github_page">
            <a class = "" href="https://github.com/andythsu" target="_blank">Visit my GitHub</a>
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
