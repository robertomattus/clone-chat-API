[X] Manejar usuarios 
[X] Esos usarios puedan inicar sesion 
[X] Crear conversaciones 
[X] Leer las conversaciones de las cuales son miembros 
[X] Crear grupos de conversaciones 
[X] Enviar mensajes 
[X] Eliminar mensajes

- Confirmacion de lectura del mensaje
- Manejar fotos de perfil
- Reenviar un mensaje
- Crear links para invitar gente a un grupo
- Manejar un historial de mensajes para unicamente mostrar desde que te agregaron a un grupo
- Database Diagram

![Database Diagram](https://i.imgur.com/IHhtWv2.png)

! Ejemplo de respuestas exitosas:

{
    error: false,
    status: 201,
    message: 'User created Succesfully',
    data: {
        id: 5,
        firstName: 'Sahid',
        ...
    }
}

! Autenticacion

Log In
Sign In
Recovery Password id userId used true
Verify Account
Cuando hacemos un login recibimos lo siguiente - Email - Password

- POST 
Validar si el usuario existe - Vamos a buscar el usuario al que le pertenezca el correo electronico que recibimos

Validar si la contraseña es correcta - Validando la contraseña que recibimos con la contraseña que esta en mi base de datos

Generar una respuesta con el token

Autenticacion por tokens
Recibimos el token

Ese token lo desencriptamos

Una vez el token desencriptado, tenemos que ver si pertenece a un usuario de mi app

Esto se logra haciendo una validacion buscando en mi db si existe x usuario con el id que viene en el token
Damos paso a la peticion si es que es un usuario real o generamos un error en caso de que no lo sea

Flujo para crear una conversaciones
V1 -> version con controladores simples

POST /api/v1/conversations

Crear mi conversacion
POST /api/v1/conversations/1/participants

Agregarme como participante
POST /api/v1/conversations/1/participants

Agregar a mi invitado como participante
V2 -> Version de 1 peticion pero controladores grandes

POST /api/v1/conversations
Recibir la informacion para crear la conversacion junto al usuario invitado
En la peticion se valida si el id del invitado existe
Se crea la conversacion
Se crea el participante owner
Se crea el participante guest