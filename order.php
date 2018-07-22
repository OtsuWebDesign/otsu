<?php
	$firstnameErr = $emailErr  =$telnumErr  = $contactErr  = $policyErr  = "";
	$service = $firstname = $lastname = $email = $telnum = $description = $contact =  $policy = "";
	$captchaErr = false;
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
		if($_POST["g-recaptcha-response"] == '')
		{
			$captchaErr = true;
			$ok = false;
		}
		if($ok)
		{
			if(mail("kontakt@otsu.pl","Zlecenie",wordwrap($msg, 70, "\r\n"),"From: <".$email.">\r\nContent-Type: text/plain;charset=utf-8\r\n"))
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
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122305723-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-122305723-1');
		</script>
		<meta charset="utf-8" />
		
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1c1c1c">
		<meta name="apple-mobile-web-app-title" content="Otsu">
		<meta name="application-name" content="Otsu">
		<meta name="msapplication-TileColor" content="#00a300">
		<meta name="msapplication-TileImage" content="/mstile-144x144.png">
		<meta name="theme-color" content="#fff"/>
		
		<link rel="manifest" href="manifest.json">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Potrzebujesz strony dla swojej firmy? Możemy ci w tym pomóc! Otsu to profesjonalne tworzenie stron internetowych." />
		<meta name="keywords" content="otsu, webmaster, strona, tworzenie, design, webdesign" />
		<title>Otsu.pl - Formularz kontaktowy</title>
		<link rel="canonical" href="https://otsu.pl/zamow"/>
		<style>
			@font-face{font-display:swap;font-family:'Lato';font-style:italic;font-weight:400;src:local('Lato Italic'),local('Lato-Italic'),url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAUi-qJCY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-display:swap;font-family:'Lato';font-style:italic;font-weight:400;src:local('Lato Italic'),local('Lato-Italic'),url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-q.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:300;src:local('Lato Light'),local('Lato-Light'),url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:300;src:local('Lato Light'),local('Lato-Light'),url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:400;src:local('Lato Regular'),local('Lato-Regular'),url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:400;src:local('Lato Regular'),local('Lato-Regular'),url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:700;src:local('Lato Bold'),local('Lato-Bold'),url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-display:swap;font-family:'Lato';font-style:normal;font-weight:700;src:local('Lato Bold'),local('Lato-Bold'),url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-display:swap;font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-display:swap;font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}*:before,*:after{content:" ";display:table}html,body{width:100%!important;max-width:100%!important;height:100%!important;font-family:'Lato',sans-serif}html{font-size:1em;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}footer,nav{display:block}a{background-color:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}input,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}select{text-transform:none}[type="submit"],[type="submit"]::-moz-focus-inner{-webkit-appearance:button;padding:0}[type="checkbox"],[type="radio"]{padding:0}footer{height:50px}#footer{width:100%;height:20px;color:whitesmoke;background-color:black;opacity:0.9;position:fixed;bottom:0;text-align:center;font-size:9px;line-height:20px;letter-spacing:0.5px;z-index:10}#nav{width:100%;height:50px;z-index:10;background-color:white;position:fixed;top:0;text-align:center}#nav #logo{height:40px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;position:absolute;z-index:11}#outerburger{display:block;position:absolute;top:0;right:0;z-index:11;margin:10px;height:30px;width:30px;color:black}.menu.icon{position:absolute;margin-top:13px;width:30px;height:4px;background-color:currentColor}.menu.icon:before{position:absolute;top:-12px;left:0;width:30px;height:4px;background-color:currentColor}.menu.icon:after{position:absolute;top:12px;left:0;width:30px;height:4px;background-color:currentColor}#menu{position:fixed;top:49px;z-index:10;width:100%;height:100%;font-weight:bold;font-size:18px;text-align:center;background-color:white;opacity:0;filter:alpha(opacity=0);visibility:hidden;text-shadow:1px 1px 5px rgba(150,150,150,1)}#menu>ul{height:100%;width:100%;list-style-type:none;margin:0;padding:0}#menu>ul>li{height:calc(20% - 14px);padding:0;margin:0 -2px 0 -2px}#nav ul>li>a{position:relative;color:black;background-color:transparent;height:100%;width:100%;display:flex;align-items:center;justify-content:center;text-align:center}#nojs-menu{position:fixed;top:49px;z-index:11;width:100%;font-weight:bold;font-size:18px;text-align:center;background-color:white}#nojs-menu>ul{height:150px;width:100%;list-style-type:none;margin:0;padding:0}#nojs-menu>ul>li{display:block;height:20%;padding:0;margin:0}@media only screen and (min-width:992px){#nav{height:80px;background-color:transparent}#nav #logo{height:50px;left:20px;top:50%;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%)}#menu{visibility:visible;opacity:1;position:relative;top:0;height:80px;width:100%;background:none}#menu>ul>li{display:inline-block;height:100%;width:140px}#menu>ul>li>a{padding:0 15px}#hamburger{display:none!important}#nojs-menu{display:none}}body{text-align:center;padding-top:70px;color:black;font-family:'Roboto',sans-serif}h1{margin-bottom:calc(5px + 0.5vw)}body,h3{font-size:calc(15px + 1.5vw);line-height:1.3}select,input[type='text'],textarea,input[type='tel'],input[type='email']{color:gray;border-radius:calc(10px + 1.5vw);border:calc(2px + 0.07vw) solid gray;background-color:white;width:100%;padding:calc(10px + 1.5vw)}select,input[type='text'],#email,#telnum{margin:10px 0 10px 0;width:95%;display:inline-block}textarea{resize:none;height:100px}input[type='radio']{margin:calc(8px + 0.2vw)}label{display:inline-block}input[type='submit']{width:100%;padding:calc(20px + 1.5vw);border-radius:calc(20px + 1.5vw);margin:15px 0 30px 0;font-size:1.2em;background:#5FC023;border:0;outline:0;color:white;font-family:'Roboto',sans-serif}.error{position:absolute;bottom:0;left:50%;font-size:calc(13px + 0.4vw);transform:translate(-50%,100%);color:red;width:100%}#email,#telnum{position:relative}#policy,#radiochoice{font-family:'Roboto',sans-serif;width:100%;display:inline-block;margin-bottom:calc(15px + 1vw);position:relative}#policy>label>a{display:inline-block}#formcontainer{width:90%;margin-left:auto;margin-right:auto}#captcha{position:relative;display:inline-block;max-width:100%}.g-recaptcha,#captcha>div{transform:scale(0.68);-webkit-transform:scale(0.68);transform-origin:0 0;-webkit-transform-origin:0 0}#captcha{height:54px;width:211px}@media only screen and (min-width:280px){.g-recaptcha,#captcha>div{transform:scale(0.8);-webkit-transform:scale(0.8)}#captcha{height:63px;width:248px}}@media only screen and (min-width:350px){.g-recaptcha,#captcha>div{transform:scale(1);-webkit-transform:scale(1)}#captcha{height:78px;width:310px}}@media only screen and (min-width:640px){#email,#telnum,input[type='submit'],textarea,select{width:80%}input[type='text']{width:40%}}@media only screen and (min-width:800px){body,h3{font-size:calc(10px + 1vw);line-height:calc(12px + 1.2vw)}select,input[type='text'],textarea{width:80%;padding:calc(10px + 1.5vw);border-radius:calc(10px + 1.5vw)}input[type='text']{width:40%}#email{width:50%}#telnum{width:30%}textarea{height:150px}#prefhdr{width:40%;display:inline-block;line-height:2;position:relative;top:50%;transform:translate(0,-50%)}#radiochoice{width:20%;margin:0}input[type="submit"]{width:calc(80% - 310px);line-height:78px;padding:0}}@media only screen and (min-width:992px){#part1{width:60%;float:left}#part2{width:38%;float:left}#upper::after{clear:both}select,input[type='text'],textarea{width:90%}select,input[type='text'],input[type='tel'],input[type='email'],textarea{padding:calc(8px + 1vw);border-radius:calc(8px + 1vw)}input[type='text']{width:45%}#email{width:55%}#telnum{width:35%}#part2>h3{margin:calc(5px + 0.5vw) 0}textarea{height:calc(100px + 6.5vw)}#prefhdr{width:100%;display:inline-block;line-height:1;margin:calc(5px + 0.5vw) 0}#radiochoice{width:100%}input[type="submit"]{width:calc(95% - 400px);font-size:25px;line-height:78px;padding:0}}
		</style>
	</head>
	<body>
	
		<!-- Nawigacja -->
		<nav>
			<div id="nav">
				<a href='/'><img id="logo" src="img/logo/70px/full-transp-black.png" alt="logo firmy Otsu, link do strony głównej"></a>
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
			<h1>Zamów wycenę</h1>
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
						<h3>Podaj swoje dane, użyjemy ich tylko do skontaktowania się z Tobą:</h3>
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
					<?php 
						if($captchaErr)
						{
							echo "<div style='position:absolute;bottom:5px;left:10px;color:red;font-size:14px'>Potwierdź, że nie jesteś robotem</div>";
						}
					?>
				</div>
				<input type='submit' value='Złóż zamówienie'>
			</form>
		</div>

		<footer>
			<div id="footer">Otsu.pl&trade; Maciej Witkowski i Radosław Kamiński - Wszelkie prawa zastrzeżone &copy;</div>
		</footer>
        <link rel="stylesheet" href="css/main.css" type="text/css">
		<link rel="stylesheet" href="css/nav.css"  type="text/css"/>
		<link rel="stylesheet" href="css/order.css"  type="text/css"/>
		<!-- Skrypty -->
		<script src="js/nav.js"></script>
        <script src="js/plugins.js"></script>
        <script>
			window.onload = function()
			{
				activeNav();
			}
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-122305723-1','auto');ga('send','pageview')
        </script>
		<script async defer src="js/analytics.js"></script>
		<script src='https://www.google.com/recaptcha/api.js' async defer></script>
	</body>
</html>