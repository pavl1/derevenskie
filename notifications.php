<?php

    namespace IO\Notification;

    class Sms {
        private static $api_id = "F4EB8487-D24D-236C-F564-3A1AF05F77F4";
        private static $phone = "79086463072";

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
