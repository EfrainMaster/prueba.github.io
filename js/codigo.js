$(document).ready(()=>{
  var datos = $("#datos");
  var formulario = $("#formulario");
 
  if(window.location.href.indexOf('index')>-1){
 
  }

  $.get("https://reqres.in/api/users", {page: 2}, function(response){
		response.data.forEach((element, index) => {
			datos.append("<p>"+element.first_name+ " " + element.last_name+"</p><br>" + element.email);
      console.log(element.first_name, element.last_name, element.email);
    });
	});	

  formulario.submit(function(e){
		e.preventDefault();

		var usuario = {
			name: $('input[name="name"]').val(),
      lname: $('input[name="lastname"]').val(),
			mail: $('input[name="mail"]').val()
		};
    console.log(usuario);

    // PETICIONES AJAX
	$.ajax({
			type: 'POST',
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando usuario...");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("A ocurrido un error");
			},
			timeout: 1000
		});

		return false;
	});

  // SCROLL ARRIBA DE LA WEB
   $('.subir').click((e)=>{
      e.preventDefault();
      $('html, body').animate({  
        scrollTop: 0
      },500);
      return false;
   });
  
    // LOGIN 
  
$('#login form').submit(()=>{
      var button = $("#olvidaq");
      button.append('cargando..');
      var for_email= $('#for_email').val();
      var for_pass= $('#for_pass').val();
      localStorage.setItem('for_email', for_email);
      localStorage.setItem('for_pass', for_pass);
 });

  for_email= localStorage.getItem('for_email');
  //Entra al indexfor.html
 if(for_email.trim().length != null && for_email.trim().length != 'undefined'){
      var about_p= $('#about h3');
      about_p.html('<br><strong>Bienvenido, ' + for_email + '</strong><br><br>');
      about_p.append('<a href="index.html" id="logout"><button> Cerrar Sesión </button></a>');
      $('#login form').hide(); // SALE A INDEX.HTML
      $('#logout').click(()=>{
        localStorage.clear();
        location.reload();
   });
  
    }
  
  
  });