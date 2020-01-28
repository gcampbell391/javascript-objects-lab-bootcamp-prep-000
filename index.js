function updateObjectWithKeyAndValue(object, key, value){
  var obj2 = {}
  obj2 = Object.assign({}, object)
  obj2[key] = value
  return obj2
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}