var userInfo = {
  username: "",
  password: "",
}

$(document).ready( function () {
  if(userInfo.username != "" && userInfo.password != "") {
    console.log("Username and Password loaded, don't show prompt");
    // hide prompt
  }
  getUsers();
});

$('#login_button').live("click", function () {
  console.log("clicked login button");
  
  userInfo.username = $('#login_username').val();
  userInfo.password = $('#login_password').val();
  
  login(userInfo.username,userInfo.password);
});

$('#register_button').live("click", function () {
  userInfo.username = $('#register_username').val();
  userInfo.password = $('#register_password').val();
  
  register(userInfo.username,userInfo.password);
});

function login (username, password) {
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8080/api-login",
    data: {
      username: username,
      password: password
    },
    success: function(data) {
      alert("successful attempt\n"+data);
    },
    error: function () {
      alert("error");
    }
  });
}

function register (username, password) {
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:8080/api-register",
    data: {
      username: username,
      password: password
    },
    success: function(data) {
      alert("successful attempt\n"+data);
    },
    error: function () {
      alert("error");
    }
  });
}

function getUsers () {
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8080/api-admin-getUsers",
    success: function(data) {
      alert("list: "+data);
    },
    error: function () {
      alert("error");
    }
  });
}
