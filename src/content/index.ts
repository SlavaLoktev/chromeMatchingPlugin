import api, { route } from "@forge/api";
import { runtime } from "webextension-polyfill";

console.log("[content] loaded")

type Listener = (event: MouseEvent) => void

let count = 0

function registerClickListener(listener: Listener) {
    window.addEventListener('click', listener)
}

function countClicks() {
    count++
    console.log('click(): ', count)

    return runtime.sendMessage({
        from: 'content',
        to: 'background',
        action: 'click'
    })
}

export function init() {
    registerClickListener(countClicks)
}

// const response = await api.asUser().requestJira(route`/rest/api/2/task/{taskId}`, {
//   headers: {
//     'Accept': 'application/json'
//   }
// });

// async function resp() {
//     const response = await api.asUser().requestJira(route`/rest/api/2/task/{taskId}`, {
//         headers: {
//           'Accept': 'application/json'
//         }
//       });
//     return response
// }
// console.log(resp())

// const response2 = async () => {
//     await api.asUser().requestJira(route`/rest/api/2/task/{taskId}`, {
//     headers: {
//       'Accept': 'application/json'
//     }
//   });
// }

//console.log(`Response: ${response2.arguments.status} ${response2.arguments.statusText}`);
//console.log(await response.json());

init()