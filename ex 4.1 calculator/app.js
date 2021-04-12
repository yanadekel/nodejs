const yargs = require ("yargs");

//customize yargs version
yargs.version('1.1.0')

//creat add command
yargs.command({
  command:"add",
  describ:'add two num for calculet sum',
  builder: {
    "a": {
        demandOption: true,  
        type: 'number'     
    },
    "b": {  
        demandOption: true,
        type: 'number'
    }
},
  handler: function (argv) {
    console.log(argv.a+argv.b)
  }
})



//creat sub command 
yargs.command({
  command:"sub",
  describ:"sub two numbers for calculet",
  builder: {
    "a": {
        demandOption: true,  
        type: 'number'     
    },
    "b": {  
        demandOption: true,
        type: 'number'
    }
},
handler: function (argv) {
  console.log(argv.a-argv.b)
}
})

//creat mult command

yargs.command({
  command:"mul",
  describ:"mul",
  builder: {
    "a": {
        demandOption: true,  
        type: 'number'     
    },
    "b": {  
        demandOption: true,
        type: 'number'
    }
},
handler: function (argv) {
  console.log(argv.a*argv.b)
}
})

//creat pow

yargs.command({
  command:"pow",
  describ:"pow",
  builder: {
    "a": {
        demandOption: true,  
        type: 'number'     
    },
   
},
handler: function (argv) {
  console.log(Math.pow(argv.a, 2))
}
})


yargs.parse();