module.exports = function(propertyName){
  return function(val){
    if (val !== undefined) {
      this.set(propertyName, val)
    }
    return this.get(propertyName)
  };
}
