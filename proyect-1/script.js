const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23a45c8a0bmshee344296ceeceb0p1d57dcjsn77495632cc49',
      'X-RapidAPI-Host': 'ip-geolocalization-api.p.rapidapi.com'
    }
};

//Creacion de metodo fetchIpInfo
const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocalization-api.p.rapidapi.com/ip?ip=${ip}`, OPTIONS)//le pasaremos la ip ´pr parámetros por eso irán los template string(alt + 96)
//el fetch devuelve una promesa
      .then(res => res.json()) //las respuestas irán a un json
      .catch(err => console.error(err)) //por si hay errores
    }

    const $ = selector => document.querySelector(selector)
    const $form = $('#form')
    const $input = $('#input')
    const $submit = $('#submit')
    const $results = $('#results')

$form.addEventListener('submit', async (event) => {

  event.preventDefault() //es necesario sino hace una accion post y se refresca la página
  const {value} = $input
  if (!value) return

  $submit.setAttribute('disabled', '') //le indicamos al usuario que está cargando y asi evitamos que haga más envios
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value) //también se puede usar un .then() - es una función asincrona asi que necesitamos un await
  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2) //recibe el valor, un replace(es decir algo del json que se puede cambiar y los espacios)
  }

  $submit.removeAttribute('disabled') //le indicamos al usuario que está cargando y asi evitamos que haga más envios
  $submit.removeAttribute('aria-busy')

})

//Es necesario estar subscrito a esta APIkey :)