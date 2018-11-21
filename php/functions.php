<?php
include("config.php");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    die();
}

function checkIfLoggedIn(){
	global $conn;
	if(isset($_SERVER['HTTP_TOKEN'])){
		$token = $_SERVER['HTTP_TOKEN'];
		$result = $conn->prepare("SELECT * FROM korisnici WHERE token=?");
		$result->bind_param("s",$token);
		$result->execute();
		$result->store_result();
		$num_rows = $result->num_rows;
		if($num_rows > 0)
		{
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

function login($username, $password){
	global $conn;
	$rarray = array();
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE username=?");
		$result2->bind_param("ss",$id,$username);
		$result2->execute();
		$rarray['token'] = $id;
	} else{
		header('HTTP/1.1 401 Unauthorized');
		$rarray['error'] = "Pogrešan username ili password.";
	}
	return json_encode($rarray);
}

function checkLogin($username, $password){
	global $conn;
	$password = md5($password);
	$result = $conn->prepare("SELECT * FROM korisnici WHERE username=? AND password=?");
	$result->bind_param("ss",$username,$password);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}

function checkLoginAdmin($username, $password){
    global $conn;
    $password = md5($password);
    $result = $conn->prepare("SELECT * FROM admin WHERE username=? AND password=?");
    $result->bind_param("ss",$username,$password);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

function loginAdmin($username, $password){
    global $conn;
    $rarray = array();
    if(checkLoginAdmin($username,$password)){
    $id = sha1(uniqid());
    $result = $conn->prepare("UPDATE admin SET tokenadmin=? WHERE username=?");
    $result->bind_param("ss",$id,$username);
    $result->execute();
    $rarray['tokenadmin'] = $id;
    } else{
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
        return json_encode($rarray);
}


function register($username, $email, $password){
	global $conn;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Username već postoji\r\n";
	}
	if(strlen($username) < 1){
		$errors .= "Username must have at least 5 characters\r\n";
	}
    if(strlen($email) < 2){
		$errors .= "First name must have at least 3 characters\r\n";
	}
	if(strlen($password) < 1){
		$errors .= "Password must have at least 5 characters\r\n";
	}
	if($errors == ""){
		$stmt = $conn->prepare("INSERT INTO korisnici (username, email, password) VALUES (?, ?, ?)");
		$pass =md5($password);
		$stmt->bind_param("sss", $username, $email, $pass);
		if($stmt->execute()){
			$id = sha1(uniqid());
			$result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE username=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();
			$rarray['token'] = $id;
		}else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = "Database connection error";
		}
	} else{
		header('HTTP/1.1 400 Bad request');
		$rarray['error'] = json_encode($errors);
	}

	return json_encode($rarray);
}

function checkIfUserExists($username){
	global $conn;
	$result = $conn->prepare("SELECT * FROM korisnici WHERE username=?");
	$result->bind_param("s",$username);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}

function getPevac(){
	global $conn;
	$pevac = "SELECT * FROM pevac";
	if($stmt = $conn->prepare($pevac)){
    	$stmt->execute();
		if(!$stmt->execute()){ 
        	echo $stmt->error.' in query: '.$pevac; 
		} else {
        	$parameters = array();
        	$result = $stmt->get_result();
        	while ($row = $result->fetch_assoc()) {
          		array_push($parameters,$row);
        	}
        	$stmt->close(); 
        	return $parameters;
    	}
    	$stmt->close();
  	}
}

function obrisiPevaca($id){
    global $conn;
    $rarray = array();

        $result = $conn->prepare("DELETE FROM pevac WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "ok";
    return json_encode($rarray);
}

function getProducent(){
	global $conn;
	$producent = "SELECT * FROM producent";
	if($stmt = $conn->prepare($producent)){
    	$stmt->execute();
		if(!$stmt->execute()){ 
        	echo $stmt->error.' in query: '.$producent; 
		} else {
        	$parameters = array();
        	$result = $stmt->get_result();
        	while ($row = $result->fetch_assoc()) {
          		array_push($parameters,$row);
        	}
        	$stmt->close(); 
        	return $parameters;
    	}
    	$stmt->close();
  	}
}

function obrisiProducenta($id){
    global $conn;
    $rarray = array();

        $result = $conn->prepare("DELETE FROM producent WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "ok";
    return json_encode($rarray);
}

function getJedanPevac($id){
    global $conn;
    $rarray = array();
        $pevac = array();
        $result2 = $conn->query("SELECT * FROM pevac WHERE id=".$id);
        while($row = $result2->fetch_assoc()) {
            $pevac['id'] = $row['id'];
            $pevac['ime'] = $row['ime'];
            $pevac['brojAlbuma'] = $row['brojAlbuma'];
            $pevac['brojSpotova'] = $row['brojSpotova'];
        }
        $rarray['data'] = $pevac;
        return json_encode($rarray);

}

function azurirajPevaca($id, $ime, $brojAlbuma,$brojSpotova){
    global $conn;
    $rarray = array();

		$stmt = $conn->prepare("UPDATE pevac SET ime=?, brojAlbuma=?, brojSpotova=? WHERE id=?");
		$stmt->bind_param("siii",$ime, $brojAlbuma,$brojSpotova,$id);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    return json_encode($rarray);
}


function getJedanProducent($id){
    global $conn;
    $rarray = array();
        $producent = array();
        $result2 = $conn->query("SELECT * FROM producent WHERE id=".$id);
        while($row = $result2->fetch_assoc()) {
            $producent['id'] = $row['id'];
            $producent['ime'] = $row['ime'];
            $producent['prezime'] = $row['prezime'];
            $producent['brojPesama'] = $row['brojPesama'];
        }
        $rarray['data'] = $producent;
        return json_encode($rarray);

}

function azurirajProducenta($id, $ime, $prezime,$brojPesama){
    global $conn;
    $rarray = array();

		$stmt = $conn->prepare("UPDATE producent SET ime=?, prezime=?, brojPesama=? WHERE id=?");
		$stmt->bind_param("ssii",$ime, $prezime,$brojPesama,$id);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    return json_encode($rarray);
}

?>
