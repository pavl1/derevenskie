<?php

    namespace IO\Sms;

    class Sms {
        static $api_id = "F4EB8487-D24D-236C-F564-3A1AF05F77F4&to=79086463072";

        public static function send($text) {
            echo self::api_id;
            // $body=file_get_contents("https://sms.ru/sms/send?api_id=" .  . "&text=".urlencode(iconv("windows-1251","utf-8","Привет!"))); # Если приходят крякозябры, то уберите iconv и оставьте только "Привет!"
        }
    }

?>
