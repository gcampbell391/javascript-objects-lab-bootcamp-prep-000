function updateObjectWithKeyAndValue(object, key, value){
  var obj2 = {}
  obj2 = Object.assign({}, object)
  object[key] = value
  return object
}
