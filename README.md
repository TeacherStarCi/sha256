# INSTALLATION

Firstly, use can install all missing modules by using <br>
``` npm install ``` <br>
In this sample, I use <br>
 `@cosmjs/crypto` (provide hashing functions) <br>
 and <br>
 `@cosmjs/encoding` (provide encoding fucntions) <br>

# USAGE

We got 3 strings <br>
`'Hello World'`<br>
`'Hello World'`<br>
`'Bye World'`<br>
The main scope is to compare the hashed result of the first string and the others 
<br>
To get the compare results, just use
<br>
``` ts-node sha256.ts```
<br>
It'll return `true` for right comparison and `false` for wrong comparison


