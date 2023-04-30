/**
 * Permet de savoir si l'utilisateur peut conduire
 *
 * @param {number} age
 * @param {string} country Code pays sur 2 caracteres
 * @returns {boolean}
 */
function canDrive (age, country) {
    if (age >= 18) {
        return true
    } else if (country === 'US' && age >= 16) {
        return true
    }
    return false
}

function isMajeur(age) {
    return age >= 18
}

// /**
//  * @return {{id: number, title: string, body: string}}
//  */
// /**
//  * @return {Array<string>}
//  */
// /**
//  * @return {string[]}
//  */
// /**
//  * @return {{id: number, title: string, body: string}[]}
//  */
// /**
//  * @typedef {Object} Post
//  * @property {number} id
//  * @property {string} title Titre de l'article
//  * @property {string} body
//  */

/**
 * @typedef {((str: string, age: number) => Post)} Post
 * @property {number} id
 * @property {string} title Titre de l'article
 * @property {string} body
 */

// /**
//  * @return {Promise<Post[]>}
//  */
/**
 * @return {}
 */
// /**
//  * @return {Promise<{id: number, title: string, body: string}[]>}
//  */
// function fetchPosts () {
//
// }

// const a = canDrive(18, 'FR')
// const a = fetchPosts().then((posts) => {
//     const post = posts[0]
// })

async function fetchPosts () {

}

fetchPosts()('FR', 18)

/**
 * @property {string} firstname
 */
class A {

}
// const b = new A()

/** @type {string[]} */
const b = []