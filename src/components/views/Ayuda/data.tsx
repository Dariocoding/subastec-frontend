import * as React from 'react';
import { Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import { formatter } from '../../utils';

const data = [
	{
		titulo: 'General',
		data: [
			{
				titulo: '¿Qué es Subatec?',
				descripcion: (
					<Fragment>
						'SUBASTEC' es una experiencia de subasta exclusiva
						que ofrece a sus miembros una amplia variedad de
						artículos de electrónica, entretenimiento, placer,
						viajes, vehículos e inmuebles entre otros. Los
						miembros podrán adquirir artículos nuevos,
						exclusivos, de edición limitada, de electrónica de
						gama alta a precios rebajados hasta el 95% del valor
						en el mercado. Todos los artículos en el sitio son
						nuevos y originales, proveniente de las marcas más
						destacadas mundialmente. <br /> <br /> 'SUBASTEC' es
						diferente a las subastas tradicionales ya que las
						pujas o 'BIDS' son compradas de antemano o durante
						la subasta. Cada subasta va subiendo a la medida que
						un miembro presione el botón ¨PUJAR AHORA¨.
						‘SUBASTEC’ permite a los miembros participar en una
						experiencia entretenida y popular donde podrán
						divertirse.
					</Fragment>
				),
			},

			{
				titulo: '¿Por qué utilizar Subastec?',
				descripcion: (
					<Fragment>
						Las subastas en 'SUBASTEC' son una manera divertida
						y accesible de disfrutar la compra de tus marcas o
						productos favoritos. <br />
						<br /> Cada semana, nuevos artículos están
						disponibles a subastar, por los cuales nos
						enorgullecemos en ofrecer los artículos de lujo más
						anhelados y/o exclusivas de marcas renombrados
						mundialmente.
						<br />
						<br />
						Estamos aquí para traerles los artículos que más
						desean a solamente una fracción del precio de
						mercado. ‘SUBASTEC' cree en la total transparencia y
						en la rectitud de las subastas, de esta manera
						logramos proveer un ambiente justo para todos los
						participantes de las subastas. <br />
						<br /> Para lograr esto, nuestro sitio es examinado
						rutinariamente por un auditor independiente
						internacional el cual provee seguridad razonable que
						todos los BIDS son administrados a través de
						usuarios reales y que no se manipula el proceso de
						pujar para afectar quién se convierte en el ganador.
						Estamos abiertos a cualquier pregunta, inquietud o
						problema que tenga, nos puede contactar al correo
						info@subastec.com.
						<br />
						<br />
						<b>NOS GUSTARÍA ACLARAR LO SIGUIENTE:</b> SUBASTEC
						NO es una lotería o NINGUNA forma de juego. <br />
						<br /> Las subastas de SUBASTEC no contienen ningún
						elemento de azar ya que el resultado de cada subasta
						depende de cuantas pujas el usuario está dispuesto a
						hacer. Es posible para un usuario ganar cualquier
						subasta, siempre y cuando el usuario esté preparado
						para pujar suficientes veces, por ende, no hay
						elemento de suerte. <br />
						<br /> Los usuarios deben asegurarse del número de
						pujas o BIDS que están poniendo y tener precaución
						de no utilizar sus BIDS de manera frívola. Si el
						usuario pone la última puja, queda obligado a
						comprar el producto en el precio final al que haya
						llegado la subasta. <br />
						<br /> Los Bids comprados, no podrán ser elegibles
						para una devolución de dinero.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Información De Los Productos',
		data: [
			{
				titulo: '¿Cómo Pueden Vender Marcas De Lujo A Precios Tan Bajos?',
				descripcion: (
					<Fragment>
						El sistema prepagado de nuestras subastas nos
						permite ofrecer marcas de lujo a precios
						extremadamente bajos. Las pujas o BIDS introducidas
						por los usuarios durante una subasta financian el
						costo del producto, permitiéndonos de esta manera
						vender el producto al subastado final a un precio
						muy bajo.
					</Fragment>
				),
			},

			{
				titulo: '¿Cómo Puedo Saber Que Los Productos Que Venden Son Auténticos?',
				descripcion: (
					<Fragment>
						Garantizamos que el 100% de nuestros productos son
						genuinos y auténticos, los cuales cuentan con
						etiquetas y empaques originales. Nosotros solamente
						contactamos a proveedores y distribuidores oficiales
						de las marcas que ofrecemos.
					</Fragment>
				),
			},

			{
				titulo: '¿Los Productos Son Nuevos?',
				descripcion: (
					<Fragment>
						Todos nuestros productos son nuevos, sin usar y
						vienen en su empaque original. Excepto los bienes
						inmuebles que no tienen por que ser nuevos
						exclusivamente.
					</Fragment>
				),
			},

			{
				titulo: '¿Por qué El Costo De Mercado De Producto A Veces Varía En Otros Países?',
				descripcion: (
					<Fragment>
						A veces, los productos en nuestro sitio web están
						marcados con un precio de mercado diferente al
						precio que encuentran en una tienda local o país.
						Esto se debe a que nosotros conseguimos nuestros
						productos de diferentes fuentes en diferentes partes
						del mundo en donde aduana, impuestos, envío, y
						manejo son diferentes creando un precio de mercado
						competitivo.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Participando En Las Subastas',
		data: [
			{
				titulo: '¿Necesito Crear Una Cuenta Para Participar En Las Subastas?',
				descripcion: (
					<Fragment>
						Si. Regístrate gratis y disfruta de los siguientes
						beneficios:
						<ul
							style={{
								listStyle: 'initial',
								marginLeft: '20px',
							}}
						>
							<li>
								Recibe 5 Bids gratis y puja en las
								subastas.
							</li>
							<li>
								Recibe notificaciones cuando
								agregamos nuevos productos.
							</li>

							<li>
								Maneja los detalles de tu cuenta,
								historial de órdenes, historial de
								Bids en las subastas y preferencias
								de correo electrónico.
							</li>
							<li>
								Rastrea tus órdenes y revisa tus
								Bids colocados.
							</li>
							<li>
								Guarda tus detalles de contacto y
								dirección para un procesamiento más
								rápido y eficiente.
							</li>
						</ul>
					</Fragment>
				),
			},

			{
				titulo: '¿Cómo Pujo En Una Subasta?',
				descripcion: (
					<Fragment>
						Pujear en 'SUBASTEC' es fácil y divertido. <br />
						<br />
						Una vez hayas encontrado el producto en el que
						deseas participar, haz clic en el botón ‘PUJAR
						AHORA' justo debajo del producto para poner tu puja.
						Antes de pujar necesitas comprar de antemano un
						paquete de ‘BIDS'. Para hacer esto haz clic donde
						dice ‘COMPRAR BIDS’ y seleccione el paquete que más
						te atraiga.
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Son Los BIDS?',
				descripcion: (
					<Fragment>
						Los BIDS son nuestra moneda virtual la cual los
						miembros utilizan en SUBASTEC para colocar pujas en
						las diferentes subastas. Al registrarse se le
						regalan 5 BIDS para que pueda comenzar a participar.
					</Fragment>
				),
			},

			{
				titulo: '¿Cómo Consigo BIDS?',
				descripcion: (
					<Fragment>
						Cuando te registras por primera vez recibirás 5 BIDS
						gratis para comenzar a participar en las subastas.
						Para conseguir BIDS adicionales puedes hacer lo
						siguiente: <br />
						<br /> - Obtén BIDS gratis invitando a amigos.
						Puedes obtener 20 Bids cuando un amigo que hayas
						invitado compre un paquete de Bids. <br />
						<br /> - Compra BIDS adicionales haciendo clic en el
						botón ‘COMPRAR BIDS' y siga las instrucciones. El
						botón ‘COMPRAR BIDS' está localizado en la parte
						superior del sitio web y te lleva a los diferentes
						paquetes de BIDS disponibles. Puede pagar con
						seguridad a través del proveedor del portal de pago
						utilizando tarjetas de crédito o débito Visa o
						MasterCard.
					</Fragment>
				),
			},

			{
				titulo: '¿Cuáles Son Los Paquetes de BIDS Están Disponibles Y Cuánto Cuesta Cada Uno?',
				descripcion: (
					<Fragment>
						Para aumentar tu balance de BIDS puedes seleccionar
						entre 7 paquetes diferentes. El término ‘paquete de
						bids' se refiere simplemente a un conjunto de cierto
						número de bids. Debajo encontrarás una tabla
						mostrando los diferentes paquetes que pueden elegir:
						<TableContainer
							component={Paper}
							style={{ marginTop: '15px' }}
						>
							<Table sx={{ minWidth: 650 }}>
								<TableHead>
									<TableRow>
										<TableCell>
											30 Bids
										</TableCell>
										<TableCell>
											50 Bids
										</TableCell>
										<TableCell>
											100 Bids
										</TableCell>
										<TableCell>
											200 Bids
										</TableCell>
										<TableCell>
											400 Bids
										</TableCell>
										<TableCell>
											500 Bids
										</TableCell>

										<TableCell>
											800 Bids
										</TableCell>

										<TableCell>
											2000 Bids
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{
											'&:last-child td, &:last-child th':
												{
													border: 0,
												},
										}}
									>
										<TableCell
											component="th"
											scope="row"
										>
											{formatter.format(
												25
											)}{' '}
											USD
										</TableCell>
										<TableCell>
											{formatter.format(
												45
											)}{' '}
											USD
										</TableCell>
										<TableCell>
											{formatter.format(
												75
											)}{' '}
											USD
										</TableCell>
										<TableCell>
											{formatter.format(
												150
											)}{' '}
											USD
										</TableCell>

										<TableCell>
											{formatter.format(
												250
											)}{' '}
											USD
										</TableCell>

										<TableCell>
											{formatter.format(
												320
											)}{' '}
											USD
										</TableCell>
										<TableCell>
											{formatter.format(
												500
											)}{' '}
											USD
										</TableCell>

										<TableCell>
											{formatter.format(
												999
											)}{' '}
											USD
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Fragment>
				),
			},

			{
				titulo: '¿Cómo Funcionan Las Pujas/BIDS?',
				descripcion: (
					<Fragment>
						Para comenzar a pujar diríjase a nuestra página de
						‘Subastas en vivo', localice la subasta que le
						interese y comience a pujar. Cuando cliquea en el
						botón ‘PUJAR AHORA' usted incrementa el precio de la
						subasta por el incremento fijo. Por cada BID que
						utilice, el precio sube 1 centavo. Es importante
						notar que, utilizado un BID, el mismo es deducido de
						su cuenta. Los BIDS sólo serán devueltos si el
						producto NO llega al precio mínimo de venta.{' '}
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Es El Precio Mínimo De Venta Para Un Producto?',
				descripcion: (
					<Fragment>
						Cada producto en subasta tiene un precio mínimo de
						venta. Esto quiere decir que es el precio más bajo
						en el cual la subasta puede culminar. Todos los
						precios mínimos estarán claramente listados en los
						detalles de cada subasta. El precio mínimo es
						usualmente del 1% al 5% del precio regular de venta
						al público del producto.
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Pasa Si El Precio Mínimo de Venta No Es Alcanzado?',
				descripcion: (
					<Fragment>
						Si el precio mínimo no es alcanzado en una subasta,
						el producto no se vende y todos los BIDS que fueron
						colocados serán devueltos a los miembros
						participantes más un 1 BID adicional gratis por cada
						BID devuelto en esa subasta.
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Significa BIDx1, BIDx2, BIDx3, BIDx4, BIDx5, Etc.?',
				descripcion: (
					<Fragment>
						Para algunas subastas, la puja o Bid varía de 1, 2,
						3, 4, 5… hasta 10 BIDS. Esto se muestra claramente
						en el producto mismo, lo cual informa cuántos BIDS
						serán deducidos de su cuenta cada vez que puje en la
						subasta (por ejemplo, BIDx3 quiere decir que por una
						Puja se gastarán 3 BIDS, o sea que 3 BIDS serán
						deducidos de su cuenta cuando puje y al mismo tiempo
						el precio de la subasta aumentará 3 centavos). Como
						esto varía por favor asegurarse de la cantidad de
						BIDS indicada en el producto deseado antes de
						participar en una subasta.
					</Fragment>
				),
			},

			{
				titulo: '¿Cuándo Termina Una Subasta?',
				descripcion: (
					<Fragment>
						Las subastas están usualmente programadas con un
						periodo de cuenta regresiva con un número de días,
						horas, minutos y segundos. En los últimos 10
						segundos de la cuenta regresiva, cada BID o puja que
						un usuario coloque, regresa la cuenta regresiva a 10
						segundos. El tiempo sigue corriendo mientras haya
						alguien pujando lo cual regresa el tiempo a 10
						segundos. El tiempo se acaba cuando pasan los 10
						segundos sin que ningún usuario puje, el
						temporizador mostrará ‘A la Una, A las dos, A las
						Tres, ¡Vendido!’. O sea que la última persona en
						pujar es la ganadora de la subasta (última persona
						en juego). Usuarios interesados en las subastas
						tienen la opción de utilizar 'El Auto Pujador' para
						programar su colocación de Bids, especialmente
						cuando están lejos de sus computadoras o teléfonos.
					</Fragment>
				),
			},

			{
				titulo: '¿Por qué Si Compre Un Paquete de BIDS Todavía No Me Lo Han Acreditado A Mi Cuenta?',
				descripcion: (
					<Fragment>
						Ocasionalmente pueden ocurrir problemas de conexión
						en los portales de pago, causado por terceros fuera
						de nuestro control. Si esto ocurre por favor
						escríbenos a info@subastec.com con una copia del
						recibo y acreditaremos los créditos correspondientes
						lo antes posible.  
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Pasa Después De Ganar Una Subasta?',
				descripcion: (
					<Fragment>
						Recibirás un correo electrónico confirmando que has
						ganado la subasta con tu puja ganadora. El correo
						incluirá un enlace a 'MI CUENTA’. De ahí es dirigido
						a llenar sus datos para pagar la mercancía al precio
						que cerró la subasta y proveer su dirección de
						envío.
					</Fragment>
				),
			},

			{
				titulo: '¿Cuando expiran los Bids?',
				descripcion: (
					<Fragment>
						Todos los BIDS expiran 365 días después de la fecha
						de compra.
					</Fragment>
				),
			},

			{
				titulo: '¿Contra Quién Estoy Pujando En Las Subastas?',
				descripcion: (
					<Fragment>
						Todas nuestras subastas son abiertas. Estarás
						pujando contra alguien de tu mismo país
					</Fragment>
				),
			},

			{
				titulo: '¿Me Reembolsan Los BIDS Usados En Las Subastas?',
				descripcion: (
					<Fragment>
						Cuando uno puja en una subasta, cada puja o BID
						contribuye al costo del producto el cual nos permite
						proveer el producto a un precio final altamente
						descontado del precio de venta al público al que
						ponga la última puja o BID. Esto explica porque no
						son reembolsados los BIDS a los usuarios al menos
						que el producto no llegue al precio mínimo.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Justicia En Las Subastas',
		data: [
			{
				titulo: '¿Qué Es La Justicia En Las Subastas?',
				descripcion: (
					<Fragment>
						La integridad y justicia de nuestro proceso de
						subastas es central a la viabilidad de nuestro sitio
						web. Nosotros declaramos explícitamente que
						'SUBASTEC' no utiliza ningún sistema O robots que
						automáticamente participa en nuestras subastas.
						También garantizamos que ningún empleado de
						'SUBASTEC' está permitido a participar en las
						subastas.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Auto Pujador',
		data: [
			{
				titulo: '¿Cómo Funciona Nuestro Auto Pujador?',
				descripcion: (
					<Fragment>
						Usted puede utilizar el auto pujador para participar
						en las subastas de acuerdo con los parámetros que
						desee para poder estar a la delantera aun cuando no
						pueda estar frente al computador, teléfono o tablet.
						El auto pujador monitorea tus Bids cuando no puedes
						estar en línea, o cuando quieres que se coloquen
						BIDS automáticamente por ti. El usuario decide
						cuantos BIDS son colocados cuando el tiempo alcanza
						los 10 segundos. El auto pujador colocará su puja,
						al azar, en cualquier momento dentro de los 10
						segundos, esto asegurará que ni usted ni ninguno de
						los usuarios manuales son favorecidos en ninguna
						manera. El auto pujador tendrá un número máximo de
						BIDS a colocar por subasta. Una vez se coloquen
						todos los BIDS del auto pujador se le notificará
						para que así si desea puede seguir pujando
						manualmente en la subasta o vuelva a configurar el
						auto pujador. Esto garantiza igualdad de
						oportunidades para todos los usuarios.
					</Fragment>
				),
			},
			{
				titulo: '¿Cómo Programo el Auto pujador?',
				descripcion: (
					<Fragment>
						Escoge la subasta en la cual deseas pujar. Puede
						encontrar el auto pujador en la sección inferior
						derecha de la subasta. Escoja el número de BIDS que
						desea que el auto pujador tenga acceso, seleccione
						'Iniciar Auto Pujador'. El auto pujador, pujara por
						usted hasta que sea el último en pujar o hasta que
						se le consuman los BIDS, lo que ocurra primero.
					</Fragment>
				),
			},

			{
				titulo: '¿Qué Pasa Si Hay Múltiples Auto Pujadores En Una Sola Subasta?',
				descripcion: (
					<Fragment>
						Todos los auto pujadores toman turnos al azar
						colocando Bids hasta que se les acaben los BIDS.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Envíos y Entrega',
		data: [
			{
				titulo: '¿A Qué Países Envía Subastec?',
				descripcion: (
					<Fragment>
						'SUBASTEC' envía sólo a Ecuador, por el momento.
						Pero estamos trabajando en expandir nuestros
						destinos de envío a más países.
					</Fragment>
				),
			},
			{
				titulo: '¿Subastec Envía A Apartados Postales O A Direcciones De Agentes De Carga?',
				descripcion: (
					<Fragment>
						No podemos enviar a apartados postales. No enviamos
						a direcciones de transporte de carga, por seguridad.
						Solo enviamos directo a los ganadores registrados a
						sus direcciones personales.
					</Fragment>
				),
			},
			{
				titulo: '¿Cuántos Impuestos Me Toca Pagar?',
				descripcion: (
					<Fragment>
						Actualmente 'SUBASTEC' paga los costos de envío a
						nivel nacional.
					</Fragment>
				),
			},
			{
				titulo: '¿Mi Producto Estará Asegurado?',
				descripcion: (
					<Fragment>
						'SUBASTEC' asegurará que cada producto ganado, esté
						asegurado en tiempo de tránsito hasta que llegue a
						la dirección de envío especificada. Se requerirá una
						firma para cualquier producto entregado, en dicho
						momento la responsabilidad del producto comprado
						pasa a manos del recipiente. En caso de que haya
						especificado a un tercero para recibir el producto,
						su firma será aceptada por usted como evidencia de
						entrega y cumplimiento de 'SUBASTEC'. Una vez el
						producto ha sido entregado a la dirección señalada y
						haya sido firmado el recibo, ya el mismo no está
						cubierto por el seguro. Si la caja está dañada en el
						momento de recibirla, recomendamos que niegue
						aceptar el producto o escriba una nota cuando firma
						que aclare que ha recibido una caja dañada.
					</Fragment>
				),
			},
			{
				titulo: '¿Qué Tan Rápido Tendré Mi Orden Y Cuanto Me Va A Costar?',
				descripcion: (
					<Fragment>
						Tratamos de despachar todas nuestras órdenes entre 3
						a 15 días hábiles luego de recibir el pago del
						precio del producto final de cada subasta. Los
						tiempos de entrega son estimados y para ser
						utilizados como una guía. Nos esforzamos para que
						reciba el producto dentro de 30 días desde la fecha
						de despacho. Sin embargo, problemas de envío o
						imprevistos de embarque puede ocasionalmente
						resultar en retrasos. Si ocurre un retraso en el
						envío de su orden, lo contactaremos lo más pronto
						posible para comunicarle la razón del retraso. No
						nos hacemos responsables por ningún retraso que sea
						considerado fuera de nuestro control. Por lo tanto,
						'SUBASTEC' no es responsable por ningún retraso
						causado por motivos ajenos a nosotros. Todas las
						ordenes de envío serán enviadas por método terrestre
						con numero de guía y rastreo y necesitarán firma de
						recibido. Por favor asegurarse que nos ha
						suministrado una dirección adecuada para los días y
						horas especificados ya que una vez despachado el
						producto no podemos redirigir la orden.
					</Fragment>
				),
			},
			{
				titulo: '¿En qué empaque vendrá mi orden?',
				descripcion: (
					<Fragment>
						Su orden le llegará en el empaque original de
						diseñador dentro de una caja de 'SUBASTEC'.
					</Fragment>
				),
			},
			{
				titulo: '¿Necesito Firmar Por Mi Orden?',
				descripcion: (
					<Fragment>
						Debido al alto valor de los productos que vendemos,
						requerimos prueba de recibido para todas las
						órdenes. Esto quiere decir que no es posible
						autorizar un despacho al cliente sin una firma.
					</Fragment>
				),
			},
			{
				titulo: '¿Es Posible Cambiar Mi Dirección De Envío Luego Que La Orden Fue Despachada?',
				descripcion: (
					<Fragment>
						No, no es posible redireccionar órdenes a otra
						dirección después que la misma haya sido despachada.
						Por lo tanto, por favor asegúrese proveernos con una
						dirección de envío apropiada para los días y horas
						de envío especificados.
					</Fragment>
				),
			},
		],
	},
	{
		titulo: 'Devoluciones Y Cambios',
		data: [
			{
				titulo: '¿Cuáles Devoluciones Y Cambios Son Aceptados?',
				descripcion: (
					<Fragment>
						Devoluciones son aceptadas solamente si el producto
						llega de manera defectuosa. Debe informar a Subastec
						de dicho defecto hasta dos días después del recibo
						del producto. Subastec se reserva el derecho de
						negar cualquier devolución si Subastec no es
						notificado dentro del periodo de dos días de
						preaviso. Defectos del producto causados por el
						cliente no son responsabilidad de 'SUBASTEC'. Para
						preguntas relacionadas con devoluciones, por favor
						contactarnos a info@subastec.com. En caso de que una
						devolución sea válida, el producto debe ser
						devuelto, sin usar, con todas las etiquetas de
						diseñador aún puestas y en su empaque original.
						Productos dañados o manchados que sean devueltos por
						negligencia no serán aceptados y serán devueltos al
						dueño. Con respecto a cambios, no ofrecemos ningún
						tipo de cambio por productos vendidos.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Pagos',
		data: [
			{
				titulo: '¿Qué Métodos De Pago Acepta Subastec?',
				descripcion: (
					<Fragment>
						Puede pagar con tarjetas de crédito o débito Visa o
						MasterCard. El pago será debitado y despejado de su
						cuenta al momento de compra de un paquete de BIDS o
						cuando haya comprado el producto que gano en una
						subasta.
					</Fragment>
				),
			},
		],
	},
	{
		titulo: 'Seguridad',
		data: [
			{
				titulo: 'Seguridad',
				descripcion: (
					<Fragment>
						Su seguridad personal en línea es importante para
						nosotros por eso utilizamos la última tecnología de
						encriptación SSL para guardar y transmitir de manera
						segura su información personal y de tarjeta de
						crédito o débito. La información de las tarjetas de
						crédito no es guardada en nuestro sistema. La misma
						es manejada por nuestro proveedor del portal de
						pago. Todas las órdenes son procesadas a través de
						un sistema de pago seguro a través del proveedor del
						portal de pago.
					</Fragment>
				),
			},
		],
	},

	{
		titulo: 'Problemas Técnicos',
		data: [
			{
				titulo: '¿Por qué Mi Bid No Se Registro?',
				descripcion: (
					<Fragment>
						A veces el internet tiene un leve retraso el cual
						puede hacer que sus Bids demoren en llegar a los
						servidores de 'SUBASTEC'. Esto puede ser causado por
						un sin fin de cosas, pero es usualmente debido al
						alto tráfico en algún lugar entre su computador y
						nuestros servidores. Hay varias maneras de reducir
						el chance que esto ocurra: <br /> <br />
						<ul
							style={{
								listStyle: 'initial',
								marginLeft: '20px',
							}}
						>
							<li>
								No esperes hasta el último segundo
								para pujar.
							</li>
							<li>
								{' '}
								Usar el auto pujador para que
								clioque sus Bids.
							</li>
							<li>
								No descargues o envíes archivos
								grandes mientras usas 'SUBASTEC'.
							</li>
						</ul>
					</Fragment>
				),
			},
			{
				titulo: '¿Por qué Mi Botón De Pujar ahora Se Puso Transparente Y No Lo Puedo Oprimir?',
				descripcion: (
					<Fragment>
						Cuando pierdes conexión a internet, te
						deshabilitamos el botón de PUJAR AHORA para
						prevenirte de colocar Bids que nos llegarán cuando
						te conectes.
					</Fragment>
				),
			},
			{
				titulo: '¿Conexión De Internet Recomendada?',
				descripcion: <Fragment>Conexión De 5MB o mejor.</Fragment>,
			},
			{
				titulo: '¿Por Qué El Temporizador Puede Que Llegue A 00:00:00 Antes Que Termine La Subasta?',
				descripcion: (
					<Fragment>
						Puede ser posible que el temporizador en las
						subastas llegue a 00:00:00 antes que la subasta haya
						acabado como resultado de lo siguiente:
						<ul
							style={{
								listStyle: 'initial',
								marginLeft: '20px',
							}}
						>
							<li>
								Ha perdido conexión entre su
								computador y los servidores de
								‘SUBASTEC'. Si perdió la conexión,
								el temporizador en su computador va
								a seguir la cuenta regresiva, ya que
								no ha recibido la señal de los
								servidores de 'SUBASTEC' de
								reajustar el tiempo.
							</li>
							<li>
								El navegador que está utilizando ha
								agotado sus recursos disponibles. La
								página 'SUBASTEC' está en constante
								comunicación con los servidores para
								recibir Bids y administrar los
								temporizadores de las subastas,
								mientras sitios más comunes solo
								requieren bajar la información una
								sola vez. Por esto recomendamos
								utilizar la última versión del
								navegador de Internet que prefiera.
								Debido al tiempo que demora para que
								los Bids lleguen a los servidores de
								'SUBASTEC', y para permitirle a
								todos los usuarios la misma
								oportunidad sin importar su
								ubicación, los servidores de
								‘SUBASTEC' esperan 5 segundos
								adicionales para que les llegue
								cualquier Bid adicional a los
								servidores de 'SUBASTEC' antes de
								cerrar la subasta, esto es
								demostrado a través del último
								conteo ‘A la una, a las dos, a las
								tres'.
							</li>
						</ul>
					</Fragment>
				),
			},
			{
				titulo: '¿Qué Hago Si Mi Temporizador Se Para Constantemente Y Tengo Problemas Colocando Bids?',
				descripcion: (
					<Fragment>
						Debido a la constante conexión entre los servidores
						de 'SUBASTEC’ para administrar los temporizadores y
						Bids, algunas comunicaciones inalámbricas o de
						satélite no son suficientemente estables para
						proveer un uso aceptable del sitio de subastas
						'SUBASTEC'. Por favor intente reiniciando su módem
						inalámbrico para aumentar la calidad de la conexión.
						Recomendamos utilizar el auto pujador cuando la
						calidad de la conexión es baja.
					</Fragment>
				),
			},
			{
				titulo: '¿Qué Le Pasa A Las Subastas Cuando El Sistema Está Inactivo?',
				descripcion: (
					<Fragment>
						Cuando hay inactividad en el sistema o un corte de
						conexión, crea un problema ocasional e impredecible
						con el Internet, lo cual quiere decir que no se
						pueden colocar Bids dentro de este corto período de
						tiempo mientras estamos desconectados. Si ocurre
						inactividad en el sistema, automáticamente
						aumentaremos el tiempo de la subasta para que
						nuestros participantes no queden en desventaja. Es
						imposible colocar Bids mientras el sistema está
						experimentando inactividad, cualquier Bid que se
						intente colocar en este periodo no será aceptada ni
						debitada de su cuenta. Si esto llegase a ocurrir, le
						recomendamos que actualice su pantalla regularmente,
						ya sea pulsando F5 u oprimiendo el botón de
						actualizar en su navegador. En caso de que una
						subasta acabe prematuramente debido a un corto en el
						sistema o una alteración imprevista en el servicio,
						la subasta terminada será revisada y analizada caso
						por caso. 'SUBASTEC' se reserva el derecho de
						determinar cualquier subasta ganada, durante un
						corto en el sistema, como nula e inválida. <br />{' '}
						<br />
						Para cualquier duda o consulta no descrita
						anteriormente, puede escribirnos al correo
						info@subastec.com.
					</Fragment>
				),
			},
		],
	},
];

export default data;
