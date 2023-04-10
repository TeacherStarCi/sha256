import {sha256} from '@cosmjs/crypto'
import {toUtf8} from '@cosmjs/encoding' 

//declare
const data = 'Hello World'
const rightData = 'Hello World'
const wrongData = 'Bye World'

//encode
const encodedData: Uint8Array = toUtf8(data)
const encodedRightData: Uint8Array = toUtf8(rightData)
const encodedWrongData: Uint8Array = toUtf8(wrongData)

//hashed
const hashedData: Uint8Array = sha256(encodedData)
const hashedRightData: Uint8Array = sha256(encodedRightData)
const hashedWrongData: Uint8Array = sha256(encodedWrongData)

//compare function
const compareUtf8
= (actual: Uint8Array, expected: Uint8Array): boolean => {
  if (actual.length != expected.length) return false
  if (actual.length == 0) return true
  for (let i = 0; i < actual.length; i ++){
    if (actual[i] != expected[i]) return false
  }
  return true
}

// output
console.log(compareUtf8(hashedData, hashedRightData))
console.log(compareUtf8(hashedData, hashedWrongData))




