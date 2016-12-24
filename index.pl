#!/usr/bin/perl

print "Content-type: text/html\n\n";
print "<html>\n"
print "<body bgcolor=\"#FF0000\">\n";
print "<center>HOLA TODOS</center>\n";
print "</body>\n";
print "</html>\n"; 

$codigo ="200812121";


$imagen = "https://intranet.cibertec.edu.pe/Programas/imagen/fotos/cibertec/0001".$codigo.".jpg\n";

print "<img href=".$imagen."/>";
