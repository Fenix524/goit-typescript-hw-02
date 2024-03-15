/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
	key: K
	value: V
}

const test: KeyValuePair<string, number> = {
	key: 'name',
	value: 30,
}
const test2: KeyValuePair<number, null> = {
	key: 0,
	value: null,
}

export {}
