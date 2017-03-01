<?php

    namespace IO\Notification;

    class Sms {
        private static $api_id = "4723CC58-78F9-AC09-86D8-73886034300C";
        private static $phone = "79148995108";

        public static function send($text, $captcha) {

        	if ($captcha != '') return $text;

	        return file_get_contents(
	        	"https://sms.ru/sms/send?api_id=" . self::$api_id .
	        	"&from=" . self::$phone .
	        	"&to=" . self::$phone .
	        	"&text=" . urlencode($text)
	        );
        }
    }

?>
