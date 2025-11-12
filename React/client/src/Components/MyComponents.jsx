import React from 'react'

function MyComponents(Obj) {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <h1 >Hello Everyone</h1> <br /><hr />
      <h1>My Name is {Obj.name}</h1>
      <h2>My Email-Id is {Obj.email}</h2> <br /><hr />
      <form>
        <lable>UserName</lable>
        <input type="text" name="username" /><br />
        <lable>Password</lable>
        <input type="password" /><br /><hr />
      </form>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus ex nisi magni consequatur
        \ commodi eaque quos autem similique. Ut distinctio a, beatae sequi soluta officiis iusto ipsum illo maiores.
        Excepturi quasi nemo earum corporis iste sit impedit sequi ad iure. Fuga possimus consequuntur cumque sunt.
        Ipsum culpa quae tempora quibusdam suscipit odit quas ipsa laudantium, illum illo, incidunt nesciunt.
        Ex dolorum perspiciatis eum incidunt! Quos, rerum assumenda. Vero, quo cumque aperiam porro impedit
        laboriosam quaerat officia et explicabo fugit. Quidem quibusdam exercitationem consequatur sequi, temporibus odit
        expedita cupiditate quas eius vitae laboriosam voluptatem corporis perspiciatis, modi dicta accusamus et.</p>
    </div>
  )
}

export default MyComponents
