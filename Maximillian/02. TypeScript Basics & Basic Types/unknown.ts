let val: unknown;

if(typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function') {
  val.log()
}

// note: difference between "any" & "unknown" is any mutate typescript feature and turn the code into vanilla js and "unknown" does not know what kind of data will be the variable, but it will force you check the value before using it.
 