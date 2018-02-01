function Style(name, csso, vars) {
  this.name = name;
  this.vars = vars || {};
  this.csso = csso;
  this.generateCSS = style => {
    var selector, css = "", attr, a, v = this.vars;
    for (selector in style) {
      css+="\n"+selector+" {";
      for (attr in style[selector]) {
        a=style[selector][attr];
        if (typeof a == "string") {
          a=a.includes('$')?v[a.replace('$','')]:a;
          css+="\n\t"+attr+": "++";";
        }
      }
      css+="\n}"
    }
    return css+"\n";
  };
  this.addProperty = (
    selector,
    property,
    value ) => { this.csso[selector][property] = value; this.compile(); };

  this.deleteProperty = (
    selector,
    property ) => { delete csso[selector][property]; this.compile(); };

  this.changeProperty = this.addProperty;

  this.getProperty = (selector, property) => this.csso[selector][property];

  this.compile = () => {
    document.getElementById(
      this.name
    ).innerHTML = this.generateCSS(this.csso);
  };
  this.currentCSS = () => JSON.stringify(this.csso);
  //Init
  var style = document.createElement("style");
  style.setAttribute("id",name);
  document.head.appendChild(style);
  this.compile();
}
