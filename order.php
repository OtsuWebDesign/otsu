<?php
	$firstnameErr = $emailErr  =$telnumErr  = $contactErr  = $policyErr  = "";
	$service = $firstname = $lastname = $email = $telnum = $description = $contact =  $policy = "";
	$msg = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		$ok = true;
		if (!empty($_POST["firstname"]))
		{
			$firstname = test_input($_POST["firstname"]);
			$msg = "Imię: ".$firstname."\n";
		}
		
		if (!empty($_POST["lastname"]))
		{
			$lastname = test_input($_POST["lastname"]);
			$msg .= "Nazwisko: ".$lastname."\n";
		}

		if (empty($_POST["email"]))
		{
			$emailErr = "Nie podałeś adresu E-mail";
			$ok = false;
		}
		else
		{
			$email = test_input($_POST["email"]);
			if (!filter_var($email, FILTER_VALIDATE_EMAIL))
			{
				$emailErr = "Nieprawidłowy format";
				$ok = false;
			}
			else
				$msg .= "Adres E-mail: ".$email."\n";
		}
		
		if (!empty($_POST["telnum"]))
		{
			$telnum = filter_var(test_input($_POST["telnum"]), FILTER_SANITIZE_NUMBER_INT);
			if (!(strlen($telnum) == 9 || strlen($telnum) == 12)) // xxx xxx xxx || +48 xxx xxx xxx
			{
				$telnumErr = "Nieprawidłowy format";
				$ok = false;
			}
			else
				$msg .= "Numer telefonu: ".$telnum."\n";
		}
		
		if (!empty($_POST["description"]))
		{
			$description = test_input($_POST["description"]);
			$msg .= "Opis: ".$description."\n";
		}
		if (!empty($_POST["contact"]))
		{
			$contact = test_input($_POST["contact"]);
			$msg .= "Preferowany kontakt: ";
			if ($contact=="email")
				$msg .= "E-mail";
			else
				$msg .= "Telefon";
		}
		if($contact=='phone' && empty($telnum))
		{
			$telnumErr = "Nie podałeś numeru";
			$ok = false;
		}
		if (empty($_POST["policy"]))
		{
			$policyErr = "Akceptacja wymagana";
			$ok = false;
		}
		if($ok)
		{
			if(mail("kontakt@otsu.pl","Zlecenie",wordwrap("=?utf-8?b?".base64_encode($msg)."?=", 70, "\r\n"),"From: <".$email.">\r\nContent-Type: text/plain;charset=utf-8\r\n"))
				header('Location: dziekujemy');
			else
				$policyErr = "Przepraszamy, coś poszło nie tak, spróbuj ponownie";
		}
	}

	function test_input($data) 
	{
		return htmlspecialchars(stripslashes(trim($data)));
	}
?>
<!doctype html>
<html lang="pl">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Potrzebujesz strony dla swojej firmy? Możemy ci w tym pomóc! Otsu to profesjonalne tworzenie stron internetowych." />
		<meta name="keywords" content="otsu, webmaster, strona, tworzenie, design, webdesign" />
		<link rel="manifest" href="site.webmanifest">
		<title>Otsu Webdesign - Tworzenie stron i wizytówek internetowych</title>
		<link rel="canonical" href="https://otsu.pl/zamow"/>
		<link rel="apple-touch-icon" href="icon.png">
        <link rel="stylesheet" href="css/main.css" type="text/css">
		<link rel="stylesheet" href="css/style.css"  type="text/css"/>
		<link rel="stylesheet" href="css/nav.css"  type="text/css"/>
		<link rel="stylesheet" href="css/order.css"  type="text/css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Roboto&amp;subset=latin-ext" type="text/css">
		<script src='https://www.google.com/recaptcha/api.js'></script>
	</head>
	<body>
	
		<!-- Nawigacja -->
		<nav>
			<div id="nav">
				<a href='/'><div id="logo"></div></a>
				<div id="outerburger">
					<div id="hamburger" class="menu icon"></div>
				</div>
				<div id="menu">
					<ul>
						<li><a href='/'>Główna</a></li>
						<li><a href='o-nas'>O nas</a></li>
						<li><a href='cennik'>Cennik</a></li>
						<li><a href='kontakt'>Kontakt</a></li>
						<li><a href='FAQ'>FAQ</a></li>
					</ul>
				</div>
				<noscript>
					<div id="nojs-menu">
						<ul>
							<li><a href='/'>Główna</a></li>
							<li><a href='o-nas'>O nas</a></li>
							<li><a href='cennik'>Cennik</a></li>
							<li><a href='kontakt'>Kontakt</a></li>
							<li><a href='FAQ'>FAQ</a></li>
						</ul>
					</div>
				</noscript>
			</div>
		</nav>
		<!-- Content -->
		<div id='formcontainer'>
			<h1>ZŁóż zamównienie (formularz w trakcie prac)</h1>
			<form method="post" action="https://otsu.pl/zamow">
				<div id='upper'>
					<div id="part1">
						<h3>Typ usługi, jaka Cię interesuje:</h3>
						<select name="service">
							<option value="vcard" <?php if ($service=="vcard") echo "selected";?>>Wizytówka internetowa</option>
							<option value="wwwpage" <?php if ($service=="wwwpage") echo "selected";?>>Strona internetowa</option>
							<option value="onlinestore" <?php if ($service=="onlinestore") echo "selected";?>>Sklep internetowy</option>
							<option value="rebuild" <?php if ($service=="rebuild") echo "selected";?>>Przebudowa witryny</option>
							<option value="rebuildour" <?php if ($service=="rebuildour") echo "selected";?>>Przebudowa witryny naszego autorstwa</option>
						</select>
						<h3>Podaj dane do kontaktu, użyjemy ich tylko do skontaktowania się z Tobą:</h3>
						<input type='text' name="firstname" placeholder="Imię" value="<?=$firstname?>">
						<input type='text' name="lastname" placeholder="Nazwisko" value="<?=$lastname?>">
						<div id='email'>
							<input type='email' name="email" placeholder="adres@email.com" value="<?=$email?>" class='<?php if(!empty($emailErr)) echo 'input-error' ?>'>
							<span class="error"><?=$emailErr?></span>
						</div>
						<div id='telnum'>
							<input type='tel' name="telnum" placeholder="Numer telefonu" value="<?=$telnum?>" class='<?php if(!empty($telnumErr)) echo 'input-error' ?>'>
							<span class="error"><?=$telnumErr?></span>
						</div>
					</div>
					<div id="part2">
						<h3>Opisz krótko potrzebną Ci usługę, przekaż dodatkowe informacje:</h3>
						<textarea name="description" placeholder="Krótki opis tego, czego potrzebujesz :)"><?=$description?></textarea>
						<h3 id="prefhdr">Preferowany sposób kontaktu:</h3>
						<div id='radiochoice'>
							<input type="radio" id="email-contact" name="contact" value="email" <?php if ($contact!="phone") echo "checked";?>>
							<label for="email-contact">E-mailowy</label>
							</br>
							<input type="radio" id="phone-contact" name="contact" value="phone" <?php if ($contact=="phone") echo "checked";?>>
							<label for="phone-contact">Telefoniczny</label>
						</div>
						<div id='policy'>
							<input type='checkbox' id='policy-checkbox' name='policy' value='Akceptuję politykę prywatności'>
							<label for="policy-checkbox">Akceptuję <a href='polityka-prywatnosci'>politykę prywatności</a></label>
							<span class="error"><?=$policyErr?></span>
						</div>
					</div>
				</div>
				<div id='captcha'>
					<div class="g-recaptcha" data-sitekey="6LcfKWEUAAAAAGML5zsdvLXCyk-_INvqHXQFoAlH"></div>
				</div>
				<input type='submit' value='Złóż zamówienie'>
			</form>
		</div>

		<footer>
			<div id="footer">Otsu&trade; Webdesign Maciej Witkowski i Radosław Kamiński - Wszelkie prawa zastrzeżone &copy;</div>
		</footer>
		<!-- Skrypty -->
		<script src="js/nav.js"></script>
        <script src="js/plugins.js"></script>
        <script>
		
			window.onload = function()
			{
				activeNav();
			}
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
        </script>
		<script src="https://www.google-analytics.com/analytics.js" async defer></script>
	</body>
</html>