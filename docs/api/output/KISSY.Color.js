Ext.data.JsonP.KISSY_Color({"tagname":"class","name":"KISSY.Color","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-KISSY.Color","members":{"cfg":[{"name":"a","tagname":"cfg","owner":"KISSY.Color","meta":{},"id":"cfg-a"},{"name":"b","tagname":"cfg","owner":"KISSY.Color","meta":{},"id":"cfg-b"},{"name":"g","tagname":"cfg","owner":"KISSY.Color","meta":{},"id":"cfg-g"},{"name":"r","tagname":"cfg","owner":"KISSY.Color","meta":{},"id":"cfg-r"}],"property":[{"name":"a","tagname":"property","owner":"KISSY.Color","meta":{},"id":"property-a"},{"name":"b","tagname":"property","owner":"KISSY.Color","meta":{},"id":"property-b"},{"name":"g","tagname":"property","owner":"KISSY.Color","meta":{},"id":"property-g"},{"name":"r","tagname":"property","owner":"KISSY.Color","meta":{},"id":"property-r"}],"method":[{"name":"getHSL","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-getHSL"},{"name":"getHSV","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-getHSV"},{"name":"setHSL","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-setHSL"},{"name":"setHSV","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-setHSV"},{"name":"toHSL","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toHSL"},{"name":"toHSLA","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toHSLA"},{"name":"toHex","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toHex"},{"name":"toRGB","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toRGB"},{"name":"toRGBA","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toRGBA"},{"name":"toString","tagname":"method","owner":"KISSY.Color","meta":{},"id":"method-toString"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":11,"files":[{"filename":"color.js","href":"color.html#KISSY-Color"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"fromHSL","tagname":"method","owner":"KISSY.Color","meta":{"static":true},"id":"static-method-fromHSL"},{"name":"fromHSV","tagname":"method","owner":"KISSY.Color","meta":{"static":true},"id":"static-method-fromHSV"},{"name":"parse","tagname":"method","owner":"KISSY.Color","meta":{"static":true},"id":"static-method-parse"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/color.html#KISSY-Color' target='_blank'>color.js</a></div></pre><div class='doc-contents'><p>Color for KISSY to normalize HSL, HSV, RGB and HEX.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-a' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-cfg-a' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-cfg-a' class='name expandable'>a</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Alpha. ...</div><div class='long'><p>Alpha.\nDefaults to: 1</p>\n</div></div></div><div id='cfg-b' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-cfg-b' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-cfg-b' class='name not-expandable'>b</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Blue.</p>\n</div><div class='long'><p>Blue.</p>\n</div></div></div><div id='cfg-g' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-cfg-g' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-cfg-g' class='name not-expandable'>g</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Green.</p>\n</div><div class='long'><p>Green.</p>\n</div></div></div><div id='cfg-r' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-cfg-r' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-cfg-r' class='name not-expandable'>r</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Red.</p>\n</div><div class='long'><p>Red.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-a' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-property-a' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-property-a' class='name not-expandable'>a</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Alpha.</p>\n</div><div class='long'><p>Alpha.</p>\n</div></div></div><div id='property-b' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-property-b' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-property-b' class='name not-expandable'>b</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Blue.</p>\n</div><div class='long'><p>Blue.</p>\n</div></div></div><div id='property-g' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-property-g' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-property-g' class='name not-expandable'>g</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Green.</p>\n</div><div class='long'><p>Green.</p>\n</div></div></div><div id='property-r' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-property-r' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-property-r' class='name not-expandable'>r</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Red.</p>\n</div><div class='long'><p>Red.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-getHSL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-getHSL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-getHSL' class='name expandable'>getHSL</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Return the color in the hsl format. ...</div><div class='long'><p>Return the color in the hsl format.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHSV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-getHSV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-getHSV' class='name expandable'>getHSV</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Return the color in the hsv format. ...</div><div class='long'><p>Return the color in the hsv format.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHSL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-setHSL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-setHSL' class='name expandable'>setHSL</a>( <span class='pre'>cfg</span> )</div><div class='description'><div class='short'>Set value by hsl ...</div><div class='long'><p>Set value by hsl</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n<ul><li><span class='pre'>h</span> : <div class='sub-desc'></div></li><li><span class='pre'>s</span> : <div class='sub-desc'></div></li><li><span class='pre'>l</span> : <div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-setHSV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-setHSV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-setHSV' class='name expandable'>setHSV</a>( <span class='pre'>cfg</span> )</div><div class='description'><div class='short'>Set value by hsv ...</div><div class='long'><p>Set value by hsv</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n<ul><li><span class='pre'>h</span> : <div class='sub-desc'></div></li><li><span class='pre'>s</span> : <div class='sub-desc'></div></li><li><span class='pre'>v</span> : <div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-toHSL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toHSL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toHSL' class='name expandable'>toHSL</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>To hsl string format ...</div><div class='long'><p>To hsl string format</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toHSLA' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toHSLA' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toHSLA' class='name expandable'>toHSLA</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>To hsla string format ...</div><div class='long'><p>To hsla string format</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toHex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toHex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toHex' class='name expandable'>toHex</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>To hex string format ...</div><div class='long'><p>To hex string format</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toRGB' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toRGB' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toRGB' class='name expandable'>toRGB</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>To rgb string format ...</div><div class='long'><p>To rgb string format</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toRGBA' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toRGBA' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toRGBA' class='name expandable'>toRGBA</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>To rgba string format ...</div><div class='long'><p>To rgba string format</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Return the color in the rgba format. ...</div><div class='long'><p>Return the color in the rgba format.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-fromHSL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-static-method-fromHSL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-static-method-fromHSL' class='name expandable'>fromHSL</a>( <span class='pre'>cfg</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Construct color object from hsl. ...</div><div class='long'><p>Construct color object from hsl.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n<ul><li><span class='pre'>h</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Hue</p>\n</div></li><li><span class='pre'>s</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Saturation</p>\n</div></li><li><span class='pre'>l</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>lightness</p>\n</div></li><li><span class='pre'>a</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>alpha</p>\n</div></li></ul></div></li></ul></div></div></div><div id='static-method-fromHSV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-static-method-fromHSV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-static-method-fromHSV' class='name expandable'>fromHSV</a>( <span class='pre'>cfg</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Construct color object from hsv. ...</div><div class='long'><p>Construct color object from hsv.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n<ul><li><span class='pre'>h</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Hue</p>\n</div></li><li><span class='pre'>s</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Saturation</p>\n</div></li><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>value</p>\n</div></li><li><span class='pre'>a</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>alpha</p>\n</div></li></ul></div></li></ul></div></div></div><div id='static-method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Color'>KISSY.Color</span><br/><a href='source/color.html#KISSY-Color-static-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Color-static-method-parse' class='name expandable'>parse</a>( <span class='pre'>str</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Construct color object from String. ...</div><div class='long'><p>Construct color object from String.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>string format color( '#rrggbb'  '#rgb' or 'rgb(r,g,b)'  'rgba(r,g,b,a)' )</p>\n</div></li></ul></div></div></div></div></div></div></div>"});