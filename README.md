# SchoolHawk2
SchoolHawk2 is a school learning program.

# Bootstrap Prompt
Because Electron does not prompts, I made one of my own.
Powered by Bootstrap, this is a responsive modal-type prompt.
Down here is a example of using it:
```
new prompt({
  title:"Give your folder a name...",
  placeholder:"folder name",
  inputType:"text",
  buttonTheme:"danger",
  buttonText:"Create Folder"
}, function(name) {
// name will return null if the prompt is closed without a value
  if(name && name.length > 0) {
    if (!fs.existsSync(baseFolder+"/"+filePath.join("/")+name)) {
      fs.mkdirSync(baseFolder+"/"+filePath.join("/")+name);
    }
  }
}).open();
```
