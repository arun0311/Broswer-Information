    /**
     * browserCompatibility
     * @method browserCompatibility
     * @return  {array}
     */
    public static browserCompatibility () {
      var userAgent = navigator.userAgent;
      var browserName  = navigator.appName;
      var fullVersion  = ''+parseFloat(navigator.appVersion); 
      var majorVersion = parseInt(navigator.appVersion,10);
      var nameOffset,verOffset,ix;
      
      // In Opera 15+, the true version is after "OPR/" 
      if ((verOffset=userAgent.indexOf("OPR/"))!=-1) {
       browserName = "Opera";
       fullVersion = userAgent.substring(verOffset+4);
      }
      // In older Opera, the true version is after "Opera" or after "Version"
      else if ((verOffset=userAgent.indexOf("Opera"))!=-1) {
       browserName = "Opera";
       fullVersion = userAgent.substring(verOffset+6);
       if ((verOffset=userAgent.indexOf("Version"))!=-1) 
         fullVersion = userAgent.substring(verOffset+8);
      }
      // In IE MSIE, the true version is after "MSIE" in userAgent 
      else if ((verOffset=userAgent.indexOf("MSIE"))!=-1) {
       browserName = "Microsoft Internet Explorer";
       fullVersion = userAgent.substring(verOffset+5);
      }
      // In IE Trident, the true version is after "Trident/" in userAgent      
      else if ((verOffset=userAgent.indexOf('Trident/'))!=-1) {
        verOffset = userAgent.indexOf('rv:')
        browserName = "Microsoft Internet Explorer";
        fullVersion = userAgent.substring(verOffset+3);
      }
      // In IE Edge, the true version is after "Edge/" in userAgent      
      else if ((verOffset=userAgent.indexOf('Edge/'))!=-1) {
        browserName = "Edge";
        fullVersion = userAgent.substring(verOffset+5);
      }
      // In Chrome, the true version is after "Chrome" 
      else if ((verOffset=userAgent.indexOf("Chrome"))!=-1) {
       browserName = "Chrome";
       fullVersion = userAgent.substring(verOffset+7);
      }
      // In Safari, the true version is after "Safari" or after "Version" 
      else if ((verOffset=userAgent.indexOf("Safari"))!=-1) {
       browserName = "Safari";
       fullVersion = userAgent.substring(verOffset+7);
       if ((verOffset=userAgent.indexOf("Version"))!=-1) 
         fullVersion = userAgent.substring(verOffset+8);
      }
      // In Firefox, the true version is after "Firefox" 
      else if ((verOffset=userAgent.indexOf("Firefox"))!=-1) {
       browserName = "Firefox";
       fullVersion = userAgent.substring(verOffset+8);
      }
      // In most other browsers, "name/version" is at the end of userAgent 
      else if ( (nameOffset=userAgent.lastIndexOf(' ')+1) < 
                (verOffset=userAgent.lastIndexOf('/')) ) 
      {
       browserName = userAgent.substring(nameOffset,verOffset);
       fullVersion = userAgent.substring(verOffset+1);
       if (browserName.toLowerCase()==browserName.toUpperCase()) {
        browserName = navigator.appName;
       }
      }
      // trim the fullVersion string at semicolon/space if present
      if ((ix=fullVersion.indexOf(";"))!=-1)
         fullVersion=fullVersion.substring(0,ix);
      if ((ix=fullVersion.indexOf(" "))!=-1)
         fullVersion=fullVersion.substring(0,ix);
      
      majorVersion = parseInt(''+fullVersion,10);
      if (isNaN(majorVersion)) {
       fullVersion  = ''+parseFloat(navigator.appVersion); 
       majorVersion = parseInt(navigator.appVersion,10);
      }
      fullVersion = fullVersion.replace(/[(),]/g, '');
      var browserInfo = browserName + '/' + majorVersion + '/' + fullVersion;
      return browserInfo;
    }
    
    /**
     * checks if IE is greater or eqaul to IE 11 or not
     * @method checkBrowserCompatibility
     * @return  {boolean}
     */
    checkBrowserCompatibility() {
      let isBrowserCompatibility = this.browserCompatibility();  
      if (isBrowserCompatibility != undefined && isBrowserCompatibility != null  ) {
        let browser = isBrowserCompatibility.split('/');        
          let broswerVersion = parseInt(browser[1]);
          if (broswerVersion >= 11 && browser[0] == 'Microsoft Internet Explorer')  {
            return false;
          } else {
            return true;
          }
      } else {
        return false;
      }
    }
