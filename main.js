/**
 * Creo un objeto de tipo Date, o sea, de tipo fecha con la fecha de nacimiento
 *      para guardarlo en la variable FECHA_NACIMIENTO y poder calcular la edad mas adelante
 * Poder carlcular la edad con codigo permite que se actualice sola cuando entramos a
 *      la pagina web y no tenemos que corregir el codigo cada vez que cumplimos años
 * El nombre de la variable la puse en mayusculas ya que las variables que se usan
 *      como constantes se las suele nombrar con mayusculas. Es una "Buena practica"
 */
var FECHA_NACIMIENTO = new Date(1996, 5, 25); // 25 de Junio de 1996 (Enero es el mes 0)
// En la variable "edad" capturo el elemento "p" del html con el id "mi-edad"
var edad = document.getElementById('mi-edad');
/**
 * Calculo la edad y la seteo en el texto interno del elemento "p" que capturamos antes
 * En el html ahora se va a mostrar lo que devuelva la funcion calcularEdad
 */ 
edad.innerText = carlcularEdad(FECHA_NACIMIENTO);

/**
 * La funcion calcularEdad va a recibir un parametro de entrada. Cuando llamamos a
 *      a la funcion arriba le pasamos como paramentro la variable FECHA_NACIMIENTO.
 *      Sin embargo, aca vemos que se llama fecha_nacimiento (en minuscula). Esto se
 *      debe a que el parametro fecha_nacimiento va a ser la representacion de
 *      FECHA_NACIMIENTO dentro de la funcion. Siempre que se use fecha_nacimiento
 *      dentro de la funcion, en realidad se trata de la variable FECHA_NACIMIENTO
 */
function carlcularEdad(fecha_nacimiento) {
    /**
     * Date.now() es igual a la cantidad de milisegundos que pasaron desde 1 enero de 1970
     *      hasta el dia de hoy. Por que desde esa fecha? Es una bella pregunta
     * Despues se le resta a esa cantidad de milisegundos la cantidad de milisegundos que
     *      pasaron desde 1 enero de 1970 hasta el dia de tu cumpleaños.
     * La diferencia de milisegundos que haya van a ser la cantidad de milisegundos que
     *      tenes de vida.
     */
    var diferencia_milisegundos = Date.now() - fecha_nacimiento.getTime();
    /**
     * Aca lo que hago es transformar en una fecha esa cantidad de milisegundos
     *      obtenida arriba. Te va a dar la fecha que se obtiene de sumarle esos
     *      milisegundos al 1 de enero de 1970. En tu caso te deberia dar una fecha
     *      del año 1994 ya que le suma 24 años (en milisegundos) al año 1970
     * En la variable "fecha" vamos a guardar esa fecha que por ahora no tiene ningun
     *      sentido ni utilidad
     */
    var fecha = new Date(diferencia_milisegundos);
    /**
     * Con fecha.getUTCFullYear() conseguimos el año de la fecha conseguida arriba. En 
     *      tu caso el año conseguido va a ser 1994.
     * Despues le restamos 1970 a esa fecha. De esta forma conseguimos la diferencia entre
     *      las dos fechas. 
     * Por ultimo, la funcion calcularEdad usa la palabra "return" para devolver el
     *      resultado final. De esta forma, el numero 24 se va a setear en el texto del
     *      elemento "p" del html con el id "mi-edad"
     */
    return fecha.getUTCFullYear() - 1970;
}