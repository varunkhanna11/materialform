# Material Form based on Google MDL and Riot.js
This is simple reusable UI component thant can be used to generate dynamic material forms with all validation in one place.

## Code Example
```
<md-form>
    <md-form-item>
      <md-textbox id="fname" label="First Name" data-item="firstname" isrequired="true" errormsginvalid="Not a valid value" regex="^[\\s\t\r\n]*[A-Z,a-z -]+$" errormsgreq="First Name is mandatory" maxlength=40></mt-textbox>
    </md-form-item>
    <md-form-item>
      <md-textbox id="lname" label="Last Name" data-item="lastname" isrequired="true" errormsginvalid="Not a valid value" regex="^[\\s\t\r\n]*[A-Z,a-z -]+$" errormsgreq="Last Name is mandatory" maxlength=40></mt-textbox>
    </md-form-item>
    <md-form-item>
      <md-checkbox id="cbdAgree" label="I Agrees" checked="checked" errormsgreq="This field is required" isrequired="true"></md-checkbox>
    </md-form-item>
    <md-form-item>
<md-submit-button id="submit" label="Submit It"></md-submit-button>
    </md-form-item>
</md-form>
```

## Motivation

This simplfies the use of multiple HTML form in a sigle application, all your validtion logic is at one plcae. It also ecourages the code reusability and modularity by using concepts like riot observable.

## API Reference

Right now this form supports three material compnents -
1)Textbox
2)Checkbox
3) submit button

Taking example of textbox
```
      <md-textbox id="lname" label="Last Name" data-item="lastname" isrequired="true" errormsginvalid="Not a valid value" regex="^[\\s\t\r\n]*[A-Z,a-z -]+$" errormsgreq="Last Name is mandatory" maxlength=40></mt-textbox>
```
This generates a awesome looking material textbox with is-required validation, regex validation, length validation and label. As these fields are part of riot tag(which converts to html tag) it can be used eaisly with any application irrespective of backend technology stack.

It uses gulp to compile riot.js tags to js which is used on client side to render tags. 

## Required Libraries

It require following libraries 
1)  Jquery library 
2)  Riot js
3)  Google Material Design Library

# Reference
Check the test.html for demo
