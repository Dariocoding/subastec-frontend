### Frontend subastec [App]

## Documentación

Para la estructura de trabajo tenemos la carpeta config en donde colocamos configuración general
carpeta context para las variables globales de la aplicación
Los hooks para reutilizar funciones y de igual manera la carpeta utils

Dentro de la carpeta de css Assets, ya está colocado archivos de css con variables globales de colores
se utiliza bootstrap modificado para la libreria de css

en la carpeta dentro de components podrás ver a Layout y views, dentro de Layout pongo el core de la aplicación
como el diseño de interfaz y reutilización de components y dentro de la carpeta views tengo componentes locales que son de esa vista y también la configuración de esa vista

## En views tenemos

auth [Pagina de autenticaciones] <br/>
Ayuda [Pagina de ayuda donde el cliente como usar subastec] <br/>
Contacto [Pagina de Contacto] <br/>
Dashboard [Pagina donde el usuario puede recibir la información de las subastas que ha realizado] <br/>
Home [Inicio de la pagina donde ve todas las subastas] <br/>
Subastas [Página de subastas donde puede tener más información detallada de la subasta] <br/>
SubastasGanadas [Pagina donde se pueden visualizar todas las subastas ganadas] <br/>

Para el en vivo se utiliza el context de Socket para recibir información de un solo link

Dentro de las variables de entorno tenemos la siguientes variables:

REACT_APP_PUBLIC_URL [server backend imagenes assets]
REACT_APP_BACKEND_URL [server backend bases de datos]
REACT_APP_SOCKET_URL [websocket server]
REACT_APP_FRONTEND_URL [Pagina de la APP o sea subastec.com]
