function MdFormValidator(formSelector,SubmitSelector) {

  this.inValidData="inValidData";
  this.requireDataMissing="requireDataMissing"
  this.validData="validData";
  // Make MdFormValidator instances observable
  riot.observable(this)
}

MdFormValidator.prototype.ValidateField = function(data,isRequire,regexPattern){
  var regex=new RegExp(regexPattern);
  if(isRequire != undefined && isRequire === "true" && !$.trim(data).length)
  {
    return  this.requireDataMissing;
  }
  else if(regex!= undefined && regexPattern!="" && regexPattern != undefined && !regex.test(data))
  {
    return  this.inValidData;
  }
  else
  {
    return  this.validData;
  }
}
MdFormValidator.prototype.OnSubmitHandling = function(data,isRequire,regexPattern){
// Do your submit handling here
console.log("I am submitted");
}
MdFormValidator.prototype.IsFormValid = function(){
    
}
