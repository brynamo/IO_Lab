declare namespace html = "http://www.w3.org/1999/xhtml";
declare namespace s = "http://www.ibiblio.org/xml/examples/shakespeare/";

<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
       <title>Plays</title>
   </head>
     <body>
         <div>
             {
             for $li in /html:ul/html:li
               let $href := fn:string($li/html:a/@href),
                   $base := fn:substring-before($href,'.xml'),
                   $play := doc(resolve-uri($href,base-uri(/)))
               return <p><a href="{$base}.xml">{$play/s:PLAY/s:TITLE}</a></p>
             }
         </div>
     </body>
</html>