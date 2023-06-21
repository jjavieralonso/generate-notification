//Recorda agregar al HTML:
//    <div id="notificationContainer"></div>
//    <script src="notification.js"></script> 
function createNotification() {
    //crear el div de la notificación
    var notificacion = document.createElement('div');
    notificacion.style.position = 'absolute';
    notificacion.style.bottom = '4px';
    notificacion.style.right = '4px';
    notificacion.style.width = 'max-content';
    notificacion.style.borderRadius = '6px';
    notificacion.style.backgroundColor = '#313e2c';
    notificacion.style.color = '#aaec8a';
    notificacion.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.1)';
    notificacion.style.transform = 'translateY(30px)';
    notificacion.style.opacity = '0';
    notificacion.style.visibility = 'hidden';
    notificacion.style.animation = 'fade-in 3s linear';

    //crear el div del body de notificación
    var notificacionBody = document.createElement('div');
    notificacionBody.style.display = 'flex';
    notificacionBody.style.flexDirection = 'row';
    notificacionBody.style.alignItems = 'center';
    notificacionBody.style.padding = '0px 10px';

    //crear mensaje de notificación
    var notificationText = document.createElement('p');
    notificationText.textContent = 'Mensaje de notificación' //Cambiar aca el Mensaje de la notificación.
    notificacion.style.fontFamily = "'Inter', sans-serif"

    //crear la barra de progreso
    var progressBar = document.createElement('div');
    progressBar.style.position = 'absolute';
    progressBar.style.left = '4px';
    progressBar.style.bottom = '4px';
    progressBar.style.width = 'calc(100% - 8px)';
    progressBar.style.height = '3px';
    progressBar.style.transform = 'scaleX(0)';
    progressBar.style.transformOrigin = 'left';
    progressBar.style.background = 'linear-gradient(to right, #313e2c, #aaec8a)';
    progressBar.style.borderRadius = 'inherit';
    progressBar.style.animation = 'progress 2.5s 0.3s linear';

    var styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
    var sheet = styleSheet.sheet;

    var newFont = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');`;
    sheet.insertRule(newFont, sheet.cssRules.length);
    // agregar animacion para la notifiacion
    var fadeKeyframes = `
    @keyframes fade-in {
      5% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      95% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
    sheet.insertRule(fadeKeyframes, sheet.cssRules.length);

    // agregar la animacion del progress bar
    var progressKeyframes = `
    @keyframes progress {
      to {
        transform: scaleX(1);
      }
    }
  `;
    sheet.insertRule(progressKeyframes, sheet.cssRules.length);

    notificacionBody.appendChild(notificationText);
    notificacion.appendChild(notificacionBody);
    notificacion.appendChild(progressBar);
    document.getElementById('notificationContainer').appendChild(notificacion); //Si se quiere cambiar el Container, cambiar el getElementById()
}
createNotification();


