// const consultar = require('./js/consultarCorridas');

var last_command = '';
var oficinas = {
  APAT: 'Apatzingán',
  ARTE: 'Arteaga',
  BUEN: 'Buenavista',
  COAL: 'Coalcomán',
  CCAM: 'Cuatro caminos',
  IXTA: 'Ixtapa option',
  LCAR: 'Lázaro Cárdenas',
  MORE: 'Morelia',
  TEPA: 'Tepalcatepec',
  URUA: 'Uruapan',
  ZIHU: 'Zihuatanejo',
};

function bot(accion, text, parametros) {
  $('button').prop('disabled', true);
  // console.log(accion);
  var respuesta = null;
  var debeRecargar = false;
  var mostrarEstaEscribiendo;
  var retraso = 0; // le puse un temporizador para que parezca un sistema más complejo de lo que realmente es
  if (text == undefined) {
    mostrarEstaEscribiendo = false;
  } else {
    mostrarEstaEscribiendo = true;
    appendUsrMsg(text);
  }
  switch (accion) {
    case 'btn_inicio':
      respuesta = [
        {
          tipo: 'text',
          text: 'Seleccione un botón de la parte inferior.',
        },
        {
          tipo: 'btn',
          text: '🕐 Horarios',
          accion: 'btn_horarios',
        },
        {
          tipo: 'btn',
          text: '🌍 Destinos',
          accion: 'btn_destinos',
        },
        {
          tipo: 'btn',
          text: '🧾 Facturación',
          accion: 'btn_facturacion',
        },
        {
          tipo: 'btn',
          text: '📞 Contacto',
          accion: 'btn_contacto',
        },
        {
          tipo: 'btn',
          text: '📦 Paquetería',
          accion: 'btn_paqueteria',
        },
        {
          tipo: 'btn',
          text: '🚌 Renta de autobuses',
          accion: 'btn_turismo',
        },
        {
          tipo: 'btn',
          text: '👷‍♂️👷‍♀️ Vacantes',
          accion: 'btn_vacantes',
        },
        {
          tipo: 'btn',
          text: '📑 Clases de Servicios',
          accion: 'btn_servicios',
        },
      ];
      debeRecargar = true;
      break;
    case 'btn_destinos':
      respuesta = [
        {
          tipo: 'text',
          text:
            '🌍 En Parhíkuni contamos con 11 destinos dentro de los estados de Michoacán y Guerrero<br><br>✔ Apatzingán<br>✔ Arteaga<br>✔ Buenavista<br>✔ Coalcomán<br>✔ Cuatro Caminos<br>✔ Ixtapa<br>✔ Lázaro Cárdenas<br>✔ Morelia<br>✔ Tepalcatepec<br>✔ Uruapan<br>✔ Zihuatanejo',
        },
      ];
      // mostrarEstaEscribiendo=true;
      break;
    case 'btn_facturacion':
      /*
		folio boleto
		RFC
		EMAIL
		*/
      respuesta = [
        /*{
					"tipo":"btn",
					"text":"Requisitos",
					"accion":"btn_reqFac"
				},*/
        {
          tipo: 'text',
          text:
            'Los requisitos para facturar son <ul><li>Su RFC</li><li>Una dirección de correo electrónico</li><li>El número de operación del boleto</li><li>Un domicilio</li><li>Razón social</li></ul>',
        },
        {
          tipo: 'link',
          text: 'Factura ahora',
          accion: '',
          url:
            'https://ventas.parhikuni.com.mx/FacturacionElectronica/IndexFacturaElec.html',
        },
      ];
      debeRecargar = true;
      // mostrarEstaEscribiendo=false;
      break;
    case 'btn_reqFac':
      respuesta = [
        {
          tipo: 'text',
          text:
            'Los requisitos para facturar son <ul><li>Su RFC</li><li>Una dirección de correo electrónico</li><li>El número de operación del boleto</li><li>Un domicilio</li><li>Razón social</li></ul>',
        },
      ];
      // mostrarEstaEscribiendo=true;
      break;
    case 'btn_servicios':
      respuesta = [
        {
          tipo: 'text',
          // "text":"Servicios<br>⬛	Premium Class<br>🟥	Express<br>🟪	Ultra (Business)<br>🟦	Platinum<br>🟧	Turismo",
          text:
            'Conozca nuestras clases de servicio utilizando los botones de la parte inferior.',
        },
        {
          tipo: 'btn',
          text: colorServicio('PL') + ' Platinum', //azul
          accion: 'btn_detallesPL',
        },
        {
          tipo: 'btn',
          text: colorServicio('PC') + ' Premium', //negro
          accion: 'btn_detallesPC',
        },
        {
          tipo: 'btn',
          text: colorServicio('UL') + ' Ultra', //morado
          accion: 'btn_detallesUL',
        },
        {
          tipo: 'btn',
          text: colorServicio('BC') + ' Business', //amarillo
          accion: 'btn_detallesBC',
        },
        {
          tipo: 'btn',
          text: colorServicio('EX') + ' Express', // rojo
          accion: 'btn_detallesEX',
        },
      ];
      debeRecargar = true;
      break;
    case 'btn_detallesPL':
      respuesta = [
        {
          tipo: 'text',
          // "text":"Servicios<br>⬛	Premium Class<br>🟥	Express<br>🟪	Ultra (Business)<br>🟦	Platinum<br>🟧	Turismo",
          text:
            '🟦	Platinum Class<br>' +
            '<br>💺 24 asientos tipo cama' +
            '<br>🍸	Venta a bordo' +
            '<br>🚺 Baño dama' +
            '<br>🚹 Baño caballero' +
            '<br>🌐	Internet wifi' +
            '<br>🌡	Aire acondicionado' +
            '<br>📺	Pantalla Táctil' +
            '<br>🎧	Audífonos',
        },
      ];
      break;
    case 'btn_detallesPC':
      respuesta = [
        {
          tipo: 'text',
          // "text":"Servicios<br>⬛	Premium Class<br>🟥	Express<br>🟪	Ultra (Business)<br>🟦	Platinum<br>🟧	Turismo",
          text:
            '⬛	Premium Class<br>' +
            '<br>💺 24 asientos tipo cama' +
            '<br>🚺 Baño dama' +
            '<br>🚹 Baño caballero' +
            '<br>🌐 Internet wifi' +
            '<br>🌡 Aire acondicionado' +
            '<br>📺 Pantalla Táctil' +
            '<br>🎧 Audífonos',
        },
      ];
      break;
    case 'btn_detallesUL':
      respuesta = [
        {
          tipo: 'text',
          // "text":"Servicios<br>⬛	Premium Class<br>🟥	Express<br>🟪	Ultra (Business)<br>🟦	Platinum<br>🟧	Turismo",
          text:
            '🟪 Ultra<br>' +
            '<br>💺 32 asientos tipo cama' +
            '<br>🚺 Baño dama' +
            '<br>🚹 Baño caballero' +
            '<br>🌐 Internet wifi' +
            '<br>🌡 Aire acondicionado' +
            '<br>📺 Pantalla Táctil' +
            '<br>🎧 Audífonos',
        },
      ];
      break;
    case 'btn_detallesBC':
      respuesta = [
        {
          tipo: 'text',
          // "text":"Servicios<br>⬛	Premium Class<br>🟥	Express<br>🟪	Ultra (Business)<br>🟦	Platinum<br>🟧	Turismo",
          text:
            '🟨	Business Class<br>' +
            '<br>💺	40 asientos tipo cama' +
            '<br>🚺 Baño dama' +
            '<br>🚹 Baño caballero' +
            '<br>🌐 Internet wifi' +
            '<br>🌡	Aire acondicionado' +
            '<br>📺	Televisión' +
            '<br>🎧 Audífonos',
        },
      ];
      break;
    case 'btn_detallesEX':
      respuesta = [
        {
          tipo: 'text',
          text:
            '🟥	Express<br>' +
            '<br>💺	40 asientos tipo cama' +
            '<br>🚻	Baño' +
            '<br>🌡	Aire acondicionado' +
            '<br>📺	Televisión',
        },
      ];
      break;

    case 'btn_horarios':
      respuesta = [
        {
          tipo: 'text',
          text: 'Seleccione su origen',
        },
        {
          tipo: 'btn',
          text: 'Apatzingán',
          accion: 'btn_horario_Origen',
          params: 'APAT',
        },
        {
          tipo: 'btn',
          text: 'Arteaga',
          accion: 'btn_horario_Origen',
          params: 'ARTE',
        },
        {
          tipo: 'btn',
          text: 'Buenavista',
          accion: 'btn_horario_Origen',
          params: 'BUEN',
        },
        {
          tipo: 'btn',
          text: 'Coalcomán',
          accion: 'btn_horario_Origen',
          params: 'COAL',
        },
        {
          tipo: 'btn',
          text: 'Cuatro Caminos',
          accion: 'btn_horario_Origen',
          params: 'CCAM',
        },
        {
          tipo: 'btn',
          text: 'Ixtapa',
          accion: 'btn_horario_Origen',
          params: 'IXTA',
        },
        {
          tipo: 'btn',
          text: 'Lázaro Cárdenas',
          accion: 'btn_horario_Origen',
          params: 'LCAR',
        },
        {
          tipo: 'btn',
          text: 'Morelia',
          accion: 'btn_horario_Origen',
          params: 'MORE',
        },
        {
          tipo: 'btn',
          text: 'Tepalcatepec',
          accion: 'btn_horario_Origen',
          params: 'TEPA',
        },
        {
          tipo: 'btn',
          text: 'Uruapan',
          accion: 'btn_horario_Origen',
          params: 'URUA',
        },
        {
          tipo: 'btn',
          text: 'Zihuatanejo',
          accion: 'btn_horario_Origen',
          params: 'ZIHU',
        },
      ];
      debeRecargar = true;
      break;
    case 'btn_horario_Origen':
      aux = parametros.split('|');

      respuesta = [
        {
          tipo: 'text',
          text: 'Seleccione su destino',
        },
      ];
      var posiblesDestinos = destinos(aux[0]);

      for (var key in posiblesDestinos) {
        respuesta.push({
          tipo: 'btn',
          text: posiblesDestinos[key],
          accion: 'btn_horario_OrigenDestino',
          params: aux + '|' + key,
        });
      }
      debeRecargar = true;
      break;
    case 'btn_horario_OrigenDestino':
      var auxParam = parametros.split('|');
      // console.log(auxParam);
      respuesta = [
        {
          tipo: 'text',
          text: 'Seleccione la fecha',
        },
        {
          tipo: 'inputDate',
          text: $('#fechaSalida').val(),
          minDate: formatDate(new Date()),
          maxDate: formatDate(new Date().addDays(40)),
          id: 'fechaSalida',

          accion: 'btn_horario_OrigenDestinoFecha',
          params: auxParam[0] + '|' + auxParam[1],
        },
      ];
      debeRecargar = true;
      break;
    case 'btn_horario_OrigenDestinoFecha':
      async function btn_horario_OrigenDestinoFecha(parametros) {
        var auxParam = parametros.split('|');
        var f = $('#fechaSalida').val().split('-');
        //origen,destino,fecha
        var corridas = await consultarCorridas(
          auxParam[0],
          auxParam[1],
          f[2] + '' + f[1] + '' + f[0],
        );
      }

      btn_horario_OrigenDestinoFecha(parametros);
      break;
    case 'btn_contacto':
      respuesta = [
        {
          tipo: 'text',
          text:
            '<p>Nuestros horarios de atención telefónica son:' +
            '<br>🕖 Lunes a viernes 7am - 9pm' +
            '<br>🕗 Sábados 8am - 4pm' +
            '<br>🕛 Domingo 9am - 2pm</p>' +
            "<br><a href='tel:+4433275104' class='chat-btn btn-enRespuesta'>Llamar al 4433275104</a>",
        },
      ];
      break;
    case 'btn_turismo':
      respuesta = [
        {
          tipo: 'text',
          text:
            '<p>-Nosotros te llevamos-<br>Contamos con varios modelos de autobuses para su viaje</p>' +
            "<img class='img-enRespuesta' src='./p/parhikuni-chatbot/autobus.jpg'>" +
            // "<br><p>Así como camionetas sprinter</p>"+
            // "<br><img class='img-enRespuesta' href='https://www.dparhikuni.com/botPHP/imagenes/Sprinters.jpg'>"+
            '<p><br>Así como camionetas sprinter</p>' +
            "<img class='img-enRespuesta' src='./p/parhikuni-chatbot/autobus.jpg'>" +
            "<br><a href='tel:+4433275104' class='chat-btn btn-enRespuesta'>Llamar a una asesora 4433275104</a>",
        },
      ];
      break;
    case 'btn_vacantes':
      respuesta = [
        {
          tipo: 'text',
          text:
            'Buscamos a los mejores para ser parte de nuestro equipo de trabajo. Conozca nuestras vacantes en la página de Facebook:<br>' +
            '<center>Atracción de Talento Parhikuni</center>' +
            "<a target='_blank' href='https://www.facebook.com/Atracci%C3%B3n-de-Talento-Parhikuni-197275957674062' class='chat-btn btn-enRespuesta'>Ir a la página</a>",
        },
      ];
      break;
    case 'btn_paqueteria':
      respuesta = [
        {
          tipo: 'text',
          text:
            'Parhíkuni le ofrece el mejor servicio de paquetería y mensajería express para nuestros 11 destinos.<br>' +
            '<br>Contamos con servicio de recolección y entrega a domicilio, sin costo adicional en Morelia, Uruapan y Lázaro Cárdenas' +
            // "<br><a target='_blank' href='https:74062' class='chat-btn btn-enRespuesta'>Conocer lista de artículos no permitidos</a>"
            "<br><a target='_blank' href='http://parhikuni.com/img/prohibidos/articulos_prohibidos.pdf' class='chat-btn btn-enRespuesta'>Conocer lista de artículos no permitidos</a>",
        },
      ];
      break;
    //DEFAULT
    //DEFAULT
    //DEFAULT
    //DEFAULT
    default:
      // return {
      // 		tipo:"text",
      // 		"text":"Opción inválida"
      // 	}
      alert('Opción inválida');
      break;
  }

  if (mostrarEstaEscribiendo == true) {
    retraso = Math.random()*4;
    $('.typing').fadeIn(99);
  }
  setTimeout(function () {
    if (respuesta != undefined) {
      //si una funcion es asincrona no devolver respuesta
      if (debeRecargar) {
        $('#bot .cont-bot').empty();
        $('.cont-bot').animate({ scrollLeft: 0 }); // IR AL INICIO
        $('#bot .cont-bot').append(crearBtn('🏠 Inicio', 'btn_inicio'));
      }
      for (i = 0; i < respuesta.length; i++) {
        switch (respuesta[i]['tipo']) {
          case 'btn':
            if (respuesta[i]['params'] != undefined) {
              prmts = respuesta[i]['params'];
            } else {
              prmts = '';
            }
            $('#bot .cont-bot').append(
              crearBtn(respuesta[i]['text'], respuesta[i]['accion'], prmts),
            );
            break;
          case 'text':
            $('#mCSB_4').append(crearMsg(unescape(respuesta[i]['text'])));
            setTimeout(function () {
              // $("#mCSB_4").animate({ scrollTop: $('#mCSB_4')[0].scrollHeight });// IR AL FIN
              $('#mCSB_4').animate({
                scrollTop:
                  $('#mCSB_4')[0].scrollHeight -
                  $('#mCSB_4').children().last().height() -
                  20,
              });
            }, 200);
            break;
          case 'link':
            $('#bot .cont-bot').append(
              crearBtnLink(respuesta[i]['text'], respuesta[i]['url']),
            );
            break;
          case 'inputDate':
            /*
								"tipo":"inputDate",
								"text":"Elija la fecha de salida",
								"minDate":formatDate(new Date),
								"maxDate":formatDate(new Date().addDays(1))
								"accion":"btn_horario_OrigenDestinoFecha",
								"params":auxParam[0]+"|"+auxParam[1]
								(text,accion,params,minDate,maxDate)
								btn_horario_OrigenDestino
							*/
            $('#bot .cont-bot').append(
              crearinputDate(
                respuesta[i]['text'],
                respuesta[i]['accion'],
                respuesta[i]['id'],
                respuesta[i]['params'],
                respuesta[i]['minDate'],
                respuesta[i]['maxDate'],
              ),
            );
            break;
        }
      }
      if (accion == 'btn_inicio') {
        $('#bot .cont-bot').append(
          "<button class='chat-btn' onclick='habilitarChat(true);'><span>💻 Chat</span></button>",
        );
      }
      $('.typing').fadeOut(99);
      $('button').prop('disabled', false);
    }
  }, retraso * 1000);
}

function appendUsrMsg(msg) {
  if (msg != 'undefined') {
    var html =
      "<div class='conversacion_us msg_cliente'><div class='nombres_pers'><p class='nombres_res'>Yo</p></div><div class='divContainerUp'>" +
      msg +
      '</div></div>';
    $('#mCSB_4').append(unescape(html));
    // $("#mCSB_4").animate({ scrollTop: $('#mCSB_4')[0].scrollHeight });// IR AL FIN
    $('#mCSB_4').animate({
      scrollTop:
        $('#mCSB_4')[0].scrollHeight -
        $('#mCSB_4').children().last().height() -
        20,
    });
    // $( "button" ).prop( "disabled", false );
  }
}
//añadir mapa
//añadir llamar
//corregir sesion/disponibilidad

function crearBtn(text, accion, params) {
  return (
    "<button class='chat-btn' onclick='bot(\"" +
    accion +
    '","' +
    escape(text) +
    '","' +
    params +
    '")\'><span>' +
    text +
    '</span></button>'
  );
}

function crearBtnLink(text, link) {
  return (
    "<button class='chat-btn' onclick='window.open(\"" +
    link +
    '");\'><span>' +
    text +
    '</span></button>'
  );
}

function crearMsg(text) {
  return (
    '<div class="conversacion_us"><div class="nombres_pers1">Irma</div><div class="divContainerUp" onclick="">' +
    text +
    '</div></div>'
  );
}
function crearinputDate(text, accion, id, params, minDate, maxDate) {
  //style="padding: 0px;margin: 0px;height: 28px;display: table;top: 0px;"
  return (
    '<input id="' +
    id +
    '" type="date" class="selectDate" value="' +
    minDate +
    '" min="' +
    minDate +
    '" max="' +
    maxDate +
    '">' +
    "<button class='chat-btn' onclick='bot(\"" +
    accion +
    '","' +
    escape(text) +
    '","' +
    params +
    '")\'>' +
    '<span>Aceptar</span></button>'
  );
}

function bienvenida(online) {
  if (online == true) {
    var emails = $('#emails').val();
    var clave_usuario = $('#claves').val();
    var nombre_cliente = espacios($('#nombres').val());
    var nombre = $('#nombres').val();
    var saludoDelBot =
      'Bienvenido al sistema de atención a cliente de Parhíkuni.';
  } else {
    var emails = '';
    var clave_usuario = '001';
    var nombre_cliente = 'estimado usuario';
    var nombre = 'estimado usuario';
    var saludoDelBot =
      'Bienvenido al sistema de atención a cliente de Parhíkuni.<br>' +
      'Lamentamos no estar disponibles para responderle en este momento pero aún podemos ayudarlo.';
  }

  var html =
    '' +
    "<div id='" +
    clave_usuario +
    '_' +
    nombre_cliente +
    "' class='usuconectad .bienvenida'>" +
    "<div id='content_" +
    clave_usuario +
    "' class='content mCustomScrollbar _mCS_4'>" +
    "<div class='mCustomScrollBox mCS-light' id='mCSB_4' style='height: 100%;max-width:100%;'>" +
    "<div class='mCSB_container mCS_no_scrollbar' style='position:relative; top:0;'>" +
    "<div class='conversacion_us'>" +
    "<div class='nombres_pers1'>Irma</div>" +
    "<div class='divContainerUp'>" +
    saludoDelBot +
    '</div>' +
    '</div>' +
    '</div>' +
    "<div class='mCSB_scrollTools' style='position: absolute; display: none;'>" +
    "<div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position: absolute; top: 0px;' oncontextmenu='return false;'>" +
    "<div class='mCSB_dragger_bar' style='position:relative;'></div>" +
    '</div>' +
    "<div class='mCSB_draggerRail'>" +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    "<div class='typing'><img src='imagenes/three-dots.svg' style='height: inherit;'></div>";
  $('#areachats').html(html);
  bot('btn_inicio');
}
function destinos($origen = '') {
  switch ($origen) {
    case 'APAT':
      return {
        MORE: 'Morelia',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
      };
    case 'CCAM':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        URUA: 'Uruapan',
        ARTE: 'Arteaga',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
        LCAR: 'Lázaro Cárdenas',
        ZIHU: 'Zihuatanejo',
        IXTA: 'Ixtapa',
      };
    case 'URUA':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        ARTE: 'Arteaga',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
        LCAR: 'Lázaro Cárdenas',
        ZIHU: 'Zihuatanejo',
        IXTA: 'Ixtapa',
      };
    case 'ARTE':
      return {
        MORE: 'Morelia',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
      };
    case 'COAL':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        ARTE: 'Arteaga',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
        LCAR: 'Lázaro Cárdenas',
        ZIHU: 'Zihuatanejo',
        IXTA: 'Ixtapa',
      };
    case 'TEPA':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
      };
    case 'BUEN':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
      };
    case 'LCAR':
      return {
        MORE: 'Morelia',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
      };
    case 'ZIHU':
      return {
        MORE: 'Morelia',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        IXTA: 'Ixtapa',
      };
    case 'IXTA':
      return {
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        ZIHU: 'Zihuatanejo',
        MORE: 'Morelia',
      };
    case 'MORE':
      return {
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        ARTE: 'Arteaga',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
        LCAR: 'Lázaro Cárdenas',
        ZIHU: 'Zihuatanejo',
        IXTA: 'Ixtapa',
      };
    case '':
      return {
        MORE: 'Morelia',
        APAT: 'Apatzingán',
        CCAM: 'Cuatro Caminos',
        URUA: 'Uruapan',
        ARTE: 'Arteaga',
        COAL: 'Coalcoman',
        TEPA: 'Tepalcatepec',
        BUEN: 'Buenavista',
        LCAR: 'Lázaro Cárdenas',
        ZIHU: 'Zihuatanejo',
        IXTA: 'Ixtapa',
      };
  }
}

function fecha(sumarDias) {
  var date = new Date();
  date = date.addDays(sumarDias);

  var dia = (date.getDate() + '').padStart(2, '0');
  var mes = (date.getMonth() + 1 + '').padStart(2, '0');
  return dia + mes + date.getFullYear();
}

const currencyMXN = { style: 'currency', currency: 'MXN' };
const formatMXN = new Intl.NumberFormat('es-MX', currencyMXN);
async function consultarCorridas(origen, destino, fecha) {
  // console.log("mandamos a consultar...");
  var html = 'Estas son las salidas que encontramos:<br>';
  try {
    /*
      var respuesta = await fetch('/bot/consultarCorridas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        //make sure to serialize your JSON body
        body: JSON.stringify({
          origen: origen,
          destino: destino,
          fecha: fecha,
        }),
      });
    */
    var respuesta=null;
    await $.ajax({
      url:`http://destinosparhikuni.no-ip.org:8086/kuniticket/php/index.php?metodo=ConsultaCorridas&origen=${origen}&destino=${destino}&fechaSalida=${fecha}`,
        success:function(response){
          respuesta=JSON.parse(response).Record;
          console.log(respuesta);
          // respuesta=JSON.parse(response.Record);
        },
        error:function(error){
          console.log(error);
          // $(".mCustomScrollBox").append('<div class="conversacion_us"><div class="nombres_pers1">Irma</div><div class="divContainerUp" onclick="">Estas son las salidas que encontramos:<br>🚌 Uruapan ➡ Morelia<br>📅 24/03/20<br><br>🕧12:50<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕑14:00<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕑14:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕒15:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕓16:00<br><div class="serbisio "></div> <span class="tarifa">$252.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$280.00*</span> Ultra<br><br>🕓16:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕔17:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕕18:00<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕕18:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕖19:00<br><div class="serbisio "></div> <span class="tarifa">$252.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$280.00*</span> Ultra<br><br>🕖19:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕗20:25<br><div class="serbisio "></div> <span class="tarifa">$252.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$280.00*</span> Ultra<br><br>🕘21:10<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕘21:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕙22:10<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br>🕚23:30<br><div class="serbisio bg-EX"></div> <span class="tarifa">$234.00</span>&nbsp;&nbsp;<span class="tachadoDescuento">$260.00*</span> Express<br><br><a href="https://www.parhikuni.com/botPHP/compra_fb2.php?origen=URUA&amp;destino=MORE" class="chat-btn btn-enRespuesta" target="_blank">Comprar en línea</a><br>*Descuento de 10% por compra en internet<br>**Precios y horarios sujetos a cambio sin previo aviso.</div></div>');
        }
    });

  
    // respuesta = (await respuesta.json()).Record;
    html +=
      '🚌 ' +
      destNom(origen) +
      ' ➡ ' +
      destNom(destino) +
      '<br>📅 ' +
      fecha.substr(0, 2) +
      '/' +
      fecha.substr(2, 2) +
      '/' +
      fecha.substr(4, 2) +
      '<br>';
    // if (respuesta[0]['Error_Numero'] == 0) {
    if (respuesta.length>0) {
      respuesta.forEach(function (item) {
        /*console.log(item.Destino_final.substr(0,4));
				console.log(item.Hora_Corrida);
				console.log(item.Tarifa);
				console.log(item.Servicio);*/
        var h = item.Hora_Corrida.split(':');

        html += '<br>' + emojiTime(h[0], h[1]) + item.Hora_Corrida;
        html +=
          '<br>' +
          colorServicio(item.Servicio) +
          " <span class='tarifa'>" +
          formatMXN.format((90 / 100) * item.Tarifa) +
          '</span>' +
          "&nbsp;&nbsp;<span class='tachadoDescuento'>" +
          formatMXN.format(item.Tarifa) +
          '*</span> ' +
          claseServicio(item.Servicio) +
          '<br>';
      });
      html +=
        "<br><a href='https://www.parhikuni.com/botPHP/compra_fb2.php?origen=" +
        origen +
        '&destino=' +
        destino +
        "' class='chat-btn btn-enRespuesta' target='_blank'" +
        '>Comprar en línea</a>';
      html +=
        '<br>*Descuento de 10% por compra en internet<br>**Precios y horarios sujetos a cambio sin previo aviso.';
      $('#mCSB_4').append(crearMsg(html));
      $('.typing').fadeOut(99);
      //Ir a último mensaje
      $('#mCSB_4').animate({
        scrollTop:
          $('#mCSB_4')[0].scrollHeight -
          $('#mCSB_4').children().last().height() -
          20,
      });
      $('button').prop('disabled', false); //habilitar botones
    }
  } catch (e) {
     console.error(e);
    $('#mCSB_4').append(
      crearMsg('Hubo un error al consultar las salidas L714'),
    );
    $('.typing').fadeOut(99);
    //Ir a último mensaje
    $('#mCSB_4').animate({
      scrollTop:
        $('#mCSB_4')[0].scrollHeight -
        $('#mCSB_4').children().last().height() -
        20,
    });
    $('button').prop('disabled', false); //habilitar botones
  }
}

function claseServicio(clase) {
  var r = '';
  switch (clase) {
    case 'EX':
      r = 'Express';
      break;
    case 'CP':
      r = 'Ultra';
      break;
    case 'PL':
      r = 'Platinum';
      break;
    case 'PC':
      r = 'Premium';
      break;
    case 'BC':
      r = 'Business';
      break;
    default:
      r = 'NA';
      break;
  }
  return r;
}
function colorServicio(servicio) {
  /*
		"text":colorServicio("PL")+" Platinum", //azul
		"text":colorServicio("PC")+" Premium", //negro
		"text":colorServicio("UL")+" Ultra",//morado
		"text":colorServicio("BC")+" Business", //amarillo
		"text":colorServicio("EX")+" Express", // rojo
	*/
  switch (servicio) {
    case 'EX':
      return '<div class="serbisio bg-EX"></div>';
      break;
    case 'PC':
      return '<div class="serbisio bg-PC"></div>';
      break;
    case 'PL':
      return '<div class="serbisio bg-PL"></div>';
      break;
    case 'BC':
      return '<div class="serbisio bg-BC"></div>';
      break;
    case 'UL':
      return '<div class="serbisio bg-UL"></div>';
      break;
    default:
      return '<div class="serbisio "></div>';
      break;
  }
}

function destNom(abr) {
  switch (abr) {
    case 'APAT':
      return 'Apatzingán';
      break;
    case 'ARTE':
      return 'Arteaga';
      break;
    case 'BUEN':
      return 'Buenavista';
      break;
    case 'COAL':
      return 'Coalcomán';
      break;
    case 'CCAM':
      return 'Cuatro Caminos';
      break;
    case 'IXTA':
      return 'Ixtapa';
      break;
    case 'LCAR':
      return 'Lázaro Cárdenas';
      break;
    case 'MORE':
      return 'Morelia';
      break;
    case 'TEPA':
      return 'Tepalcatepec';
      break;
    case 'URUA':
      return 'Uruapan';
      break;
    case 'ZIHU':
      return 'Zihuatanejo';
      break;
    default:
      '';
      break;
  }
}
/*
fetch('https://api.github.com/users/github')
	.then(res => res.json())
	.then(json => console.log(json));
*/
function emojiTime(hora, minutos) {
  hora = (hora + '').padStart(2, '0');
  minutos = (minutos + '').padStart(2, '0');
  if ((hora + '').match(/[0-9]{2}:[0-9]{2}/)) {
    temp = hora.split(':');
    hora = temp[0];
    minutos = temp[1];
  }

  if (hora == '01' || hora == '13') {
    if (minutos <= 30) {
      return '🕐';
    } else {
      return '🕜';
    }
  } else if (hora == '02' || hora == '14') {
    if (minutos <= 30) {
      return '🕑';
    } else {
      return '🕝';
    }
  } else if (hora == '03' || hora == '15') {
    if (minutos <= 30) {
      return '🕒';
    } else {
      return '🕞';
    }
  } else if (hora == '04' || hora == '16') {
    if (minutos <= 30) {
      return '🕓';
    } else {
      return '🕟';
    }
  } else if (hora == '05' || hora == '17') {
    if (minutos <= 30) {
      return '🕔';
    } else {
      return '🕠';
    }
  } else if (hora == '06' || hora == '18') {
    if (minutos <= 30) {
      return '🕕';
    } else {
      return '🕡';
    }
  } else if (hora == '07' || hora == '19') {
    if (minutos <= 30) {
      return '🕖';
    } else {
      return '🕢';
    }
  } else if (hora == '08' || hora == '20') {
    if (minutos <= 30) {
      return '🕗';
    } else {
      return '🕣';
    }
  } else if (hora == '09' || hora == '21') {
    if (minutos <= 30) {
      return '🕘';
    } else {
      return '🕤';
    }
  } else if (hora == '10' || hora == '22') {
    if (minutos <= 30) {
      return '🕙';
    } else {
      return '🕥';
    }
  } else if (hora == '11' || hora == '23') {
    if (minutos <= 30) {
      return '🕚';
    } else {
      return '🕦';
    }
  } else if (hora == '12' || hora == '24' || hora == '00') {
    if (minutos <= 30) {
      return '🕛';
    } else {
      return '🕧';
    }
  }
}
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
function habilitarChat(){
  alert("No disponible");
}
//
/*
contacto
++++
captcha



o - salidas origen destino nombre completo
o - Poner precio regular y precio por internet // text-decoration: line-through;
o - vacantes en otra pestaña
o - calendario salidas 45 dias de corridas

*/
