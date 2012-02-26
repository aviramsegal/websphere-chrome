// ==UserScript==
// @name       WebSphere Change Log Detail Levels Fixer
// @namespace  http://aviramsegal.com/websphere/log/fixer
// @version    0.1
// @description  Enabled +/- in the Change Log Detail Levels Page (by Aviram Segal)
// @include    https://*/loggingSettingsComponents.jsp
// @copyright  2011+, Aviram segal
// ==/UserScript==

var elements = document.getElementsByTagName('*');
for (var i = elements.length - 1; i >= 0; i--)
{
    var elm = elements[i];
    var name = elm.getAttribute('name');
    if (name)
    {
        elm.setAttribute('id', name);
    }
}
