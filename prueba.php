<?php


//if(!empty($_GET)){	$num = empty($_GET ['num'])?null:$_GET ['num'];}else{	$num = 3; echo "no entro";}


/*
echo $cadena="no es necesaria la contraseña";

echo strlen(($cadena));

echo "-- ".strlen(sha1($cadena));
echo "-- ".strlen(md5($cadena));

echo "time(): ".time();
echo "time().strlen() :".strlen(time());


require_once 'mfResponse.php';
$request = new mfResponse();
$request->isEmpty()?print "vacio":"algo ";
$request->setAtribute("sesion", "cesar");
echo $request->getAtribute("sesion");


$_REQUEST['sesion']="luz";
$request = new mfResponse();
echo $request->getAtribute("sesion");



$request->isEmpty()?print "vacio":print "algo ";
*/

/*
$db = new SQLite3('mysqlitedb.db');
$db->exec('CREATE TABLE foo (bar STRING)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
var_dump($result->fetchArray());
*/



if ($db = sqlite_open('database1', 0666, $sqliteerror)) { 
    sqlite_query($db, 'CREATE TABLE foo (bar varchar(10))');
    sqlite_query($db, "INSERT INTO foo VALUES ('fnord')");
    $result = sqlite_query($db, 'select bar from foo');
    var_dump(sqlite_fetch_array($result)); 
} else {
    die($sqliteerror);
}





/*echo $num2;
$conexion = DBConexion::getConexion ();
$res = $conexion->query ( "insert into user values ($num2)" );
$rs = $conexion->query ( "select user from user" );
/*while ( $row = $rs->fetch_assoc() ) {
     print ( $row['user']."\t");
}

$c = 0;

echo "num: " . $rs->num_rows;

if (! $res) {
	echo "mal";
} else {
	echo "bien!";
}
$conexion->close ();*/




?>
		
		
