const OPTIONS = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '48e1cbb73bmshc4df6419296696dp1f9553jsn5fd566573251',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
};
const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205,
      ${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $result = $('#results')

$form.addEventListener('submit', async(event) => {
    event.preventDefault()
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $result.innerHTML = JSON.stringify(ipInfo, null, 2)

    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy')




})